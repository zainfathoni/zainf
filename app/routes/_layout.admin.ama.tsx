import {
  data,
  Form,
  Link,
  useLoaderData,
  type HeadersFunction,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "react-router";
import { Button, ButtonLink } from "~/components/Button";
import { SimpleLayout } from "~/components/SimpleLayout";
import { amaAdminSession, amaPrivateHeaders } from "~/services/ama-auth.server";
import { readAmaInbox, type AmaInboxPage } from "~/services/ama.server";

export const meta: MetaFunction = () => [
  { title: "Question inbox - Zain Fathoni" },
  { name: "robots", content: "noindex, nofollow" },
];

export const headers: HeadersFunction = () => amaPrivateHeaders();

export async function loader({ request }: LoaderFunctionArgs) {
  const session = amaAdminSession(request);
  const url = new URL(request.url);
  let page: AmaInboxPage | null = null;
  if (session.signedIn) {
    page = await readAmaInbox(url.searchParams.get("cursor"));
  }
  return data(
    {
      ...session,
      page,
      older: url.searchParams.has("cursor"),
      loginFailed: url.searchParams.get("login") === "failed",
    },
    {
      status: !session.configured || (session.signedIn && !page) ? 503 : 200,
      headers: amaPrivateHeaders(),
    },
  );
}

const receivedAt = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Jakarta",
  dateStyle: "medium",
  timeStyle: "short",
});

export default function AmaInbox() {
  const { configured, signedIn, page, older, loginFailed } =
    useLoaderData<typeof loader>();
  return (
    <SimpleLayout
      title="Question inbox"
      intro={
        signedIn
          ? "Private questions from your AMA form. Only you can read this inbox."
          : "Sign in with your GitHub account to read private AMA questions."
      }
    >
      {!configured ? (
        <p role="alert" className="text-sm text-zinc-600 dark:text-zinc-400">
          Inbox login is not configured for this address yet. The public
          question form is still available.
        </p>
      ) : !signedIn ? (
        <div className="space-y-6">
          {loginFailed ? (
            <p role="alert" className="text-sm text-red-700 dark:text-red-400">
              We could not authorize this account. Use the owner's GitHub
              account and try again.
            </p>
          ) : null}
          <ButtonLink href="/auth/github">Sign in with GitHub</ButtonLink>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Access is restricted to the site owner. Questions are never
            published from this page.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-6 dark:border-zinc-700">
            <div>
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {older ? "Older questions" : "Newest questions"}
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Times shown in WIB
              </p>
            </div>
            <div className="flex items-center gap-3">
              <ButtonLink href="/admin/ama" variant="secondary">
                Refresh
              </ButtonLink>
              <Form method="post" action="/auth/logout">
                <Button variant="secondary" type="submit">
                  Sign out
                </Button>
              </Form>
            </div>
          </div>
          {!page ? (
            <p
              role="alert"
              className="py-10 text-sm text-red-700 dark:text-red-400"
            >
              Questions could not be loaded. Use Refresh to try again.
            </p>
          ) : page.questions.length === 0 ? (
            <div className="py-12">
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {older ? "No more questions" : "No questions yet"}
              </h2>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {older
                  ? "You have reached the end of the inbox."
                  : "New questions will appear here after someone sends your AMA form."}
              </p>
            </div>
          ) : (
            <ol className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {page.questions.map((question) => (
                <li key={question.id} className="py-8">
                  <time
                    dateTime={question.created_at}
                    className="text-sm text-zinc-500 dark:text-zinc-400"
                  >
                    {receivedAt.format(new Date(question.created_at))} WIB
                  </time>
                  <p className="mt-3 whitespace-pre-wrap text-base leading-7 text-zinc-800 [overflow-wrap:anywhere] dark:text-zinc-100">
                    {question.question}
                  </p>
                </li>
              ))}
            </ol>
          )}
          {older || page?.nextCursor ? (
            <nav
              aria-label="Inbox pages"
              className="flex flex-wrap justify-between gap-4 border-t border-zinc-200 pt-6 text-sm font-semibold text-teal-700 dark:border-zinc-700 dark:text-teal-400"
            >
              {older ? <Link to="/admin/ama">Back to newest</Link> : <span />}
              {page?.nextCursor ? (
                <Link to={`?cursor=${encodeURIComponent(page.nextCursor)}`}>
                  Older questions
                </Link>
              ) : null}
            </nav>
          ) : null}
        </>
      )}
      <p className="mt-12 text-sm text-zinc-600 dark:text-zinc-400">
        <Link to="/ama" className="underline underline-offset-4">
          Open the public question form
        </Link>
      </p>
    </SimpleLayout>
  );
}
