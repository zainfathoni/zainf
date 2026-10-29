import { useCallback, useEffect, useRef } from "react";
import {
  Form,
  data,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
  useSearchParams,
  type ActionFunctionArgs,
  type MetaFunction,
  type ShouldRevalidateFunctionArgs,
} from "react-router";
import { Button } from "app/components/Button";
import { SimpleLayout } from "app/components/SimpleLayout";
import {
  AMA_MAX_QUESTION_LENGTH,
  AMA_MIN_QUESTION_LENGTH,
  amaQuestionLength,
  isValidAmaId,
} from "app/models/ama";
import { metadata } from "app/models/metadata";
import { postAmaQuestion, readAmaBody } from "app/services/ama.server";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
    };
  }
}

export const meta: MetaFunction = () => [
  { title: `Ask me a question - ${metadata.title}` },
  { name: "description", content: "Send a question to Zain Fathoni." },
];

// A new ID is issued on every page load. The same ID is kept after a failed
// submission, so the Worker can recognise a repeat of the same question.
export function loader() {
  return data({
    id: crypto.randomUUID(),
    siteKey: process.env.TURNSTILE_SITE_KEY ?? "",
  });
}

// After a failure the page keeps its ID and the typed text. After success the
// redirect reloads the loader, which issues a new ID.
export function shouldRevalidate({
  actionResult,
  defaultShouldRevalidate,
}: ShouldRevalidateFunctionArgs) {
  return actionResult ? false : defaultShouldRevalidate;
}

const workerFailureMessages: Record<number, string> = {
  403: "The security check failed or expired. Your question is still here. If the check below asks you to do something, do it, then send your question again.",
  409: "This form no longer matches the stored question. Reload the page and try again.",
  429: "Too many questions were sent just now. Try again in a minute.",
};

const unavailableMessage =
  "We could not confirm that your question was saved. Try again. You may need to complete the security check again.";

export async function action({ request }: ActionFunctionArgs) {
  const fail = (status: number, message: string, id = "", question = "") =>
    data({ message, id, question }, { status });

  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return fail(
      403,
      "This form could not be verified. Reload the page and try again.",
    );
  }

  const mediaType = request.headers
    .get("content-type")
    ?.split(";")[0]
    .trim()
    .toLowerCase();
  if (mediaType !== "application/x-www-form-urlencoded") {
    return fail(415, "This form could not be read. Reload the page and try again.");
  }

  const body = await readAmaBody(request);
  if (body === null) {
    return fail(413, "That submission is too large. Shorten your question.");
  }

  const form = new URLSearchParams(body);

  // Bots fill this hidden field. Discard silently without storing anything.
  if (form.get("website")) return redirect("/ama?sent=1");

  const id = form.get("id") ?? "";
  const rawQuestion = form.get("question") ?? "";
  const question = rawQuestion.trim();
  const turnstileToken = form.get("cf-turnstile-response") ?? "";

  if (!isValidAmaId(id)) {
    return fail(400, "This form expired. Reload the page and try again.");
  }

  const length = amaQuestionLength(question);
  if (length < AMA_MIN_QUESTION_LENGTH || length > AMA_MAX_QUESTION_LENGTH) {
    return fail(
      400,
      `Enter a question of ${AMA_MIN_QUESTION_LENGTH} to ${AMA_MAX_QUESTION_LENGTH} characters.`,
      id,
      rawQuestion,
    );
  }

  if (!turnstileToken) {
    return fail(403, "Complete the security check and try again.", id, rawQuestion);
  }

  const status = await postAmaQuestion({ id, question, turnstileToken });
  if (status === 200 || status === 201) return redirect("/ama?sent=1");

  return fail(
    status === 403 || status === 409 || status === 429 ? status : 503,
    workerFailureMessages[status] ?? unavailableMessage,
    id,
    rawQuestion,
  );
}

export default function Ama() {
  const { id, siteKey } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const pending = navigation.state === "submitting";
  const sent = searchParams.get("sent") === "1";
  const errorMessage = actionData?.message;

  // Explicit rendering works on direct loads and client navigation. The api.js
  // auto-render does not reliably run for this route, so render once the script is ready.
  const scriptRef = useRef<HTMLScriptElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const renderWidget = useCallback(() => {
    if (!widgetRef.current || !window.turnstile || widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(widgetRef.current, {
      sitekey: siteKey,
      action: "ama",
    });
  }, [siteKey]);
  // Hydrated server-rendered scripts can miss React's onLoad handler. Listen on
  // the script itself, and also handle an API that loaded before hydration.
  useEffect(() => {
    const script = scriptRef.current;
    script?.addEventListener("load", renderWidget);
    renderWidget();
    return () => script?.removeEventListener("load", renderWidget);
  }, [renderWidget]);

  // A Turnstile token can be used only once. A new ID after success and every
  // failed attempt must obtain a fresh token before the next question is sent.
  useEffect(() => {
    if ((sent || errorMessage) && widgetIdRef.current) {
      window.turnstile?.reset(widgetIdRef.current);
    }
  }, [id, sent, errorMessage, actionData]);

  return (
    <SimpleLayout
      title="Ask me a question."
      intro="Send me a question and I’ll try to answer it publicly. This form asks only for your question."
    >
      <script
        ref={scriptRef}
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        async
        defer
      />
      <div className="max-w-xl">
        {sent && !errorMessage ? (
          <p
            role="status"
            className="mb-8 rounded-md bg-teal-50 p-4 text-sm font-medium text-teal-900 dark:bg-teal-900/30 dark:text-teal-100"
          >
            Thanks. Your question was saved privately.
          </p>
        ) : null}
        <Form method="post" className="space-y-6">
          <input type="hidden" name="id" value={id} />
          <div className="hidden" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div>
            <label
              htmlFor="question"
              className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100"
            >
              Your question
            </label>
            <p
              id="question-hint"
              className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"
            >
              Use {AMA_MIN_QUESTION_LENGTH} to {AMA_MAX_QUESTION_LENGTH}{" "}
              characters.
            </p>
            {/* Keyed by the submission ID: a successful send issues a new ID and clears the text. */}
            <textarea
              key={id}
              id="question"
              name="question"
              rows={6}
              required
              onChange={(event) => {
                const field = event.currentTarget;
                const length = amaQuestionLength(field.value.trim());
                field.setCustomValidity(
                  length < AMA_MIN_QUESTION_LENGTH ||
                    length > AMA_MAX_QUESTION_LENGTH
                    ? `Enter a question of ${AMA_MIN_QUESTION_LENGTH} to ${AMA_MAX_QUESTION_LENGTH} characters.`
                    : "",
                );
              }}
              defaultValue={actionData?.question}
              aria-invalid={errorMessage ? true : undefined}
              aria-describedby={
                errorMessage ? "question-hint ama-error" : "question-hint"
              }
              className="mt-2 w-full rounded-md border border-zinc-300 bg-white p-3 text-sm text-zinc-900 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100"
            />
          </div>
          {errorMessage ? (
            <p
              id="ama-error"
              role="alert"
              className="text-sm font-medium text-red-700 dark:text-red-400"
            >
              {errorMessage}
            </p>
          ) : null}
          <div ref={widgetRef} />
          <Button type="submit" disabled={pending || !siteKey} className="w-full">
            {pending ? "Sending…" : "Send question"}
          </Button>
        </Form>
        <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
          Your question is private when I receive it. If I answer it, I may
          publish an edited version of the question and my answer. Hosting and
          security providers can process connection data when you use this
          page.
        </p>
      </div>
    </SimpleLayout>
  );
}
