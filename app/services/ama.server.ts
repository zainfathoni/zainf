// Server-side AMA helpers. Submissions and private inbox reads use separate
// Worker credentials. The Worker verifies Turnstile for submissions only.

export const AMA_MAX_BODY_BYTES = 32 * 1024;

// Reads the body as a stream. Past the byte limit, the rest of the body is drained
// without buffering, and the function returns null. The stream is never canceled
// early: @remix-run/node-fetch-server closes the same stream when the Node request
// ends, and that second close throws and crashes the process.
export async function readAmaBody(request: Request): Promise<string | null> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let total = 0;
  let text = "";
  let oversized = false;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > AMA_MAX_BODY_BYTES) oversized = true;
    if (!oversized) text += decoder.decode(value, { stream: true });
  }
  return oversized ? null : text + decoder.decode();
}

// Returns the Worker's HTTP status. 200 and 201 mean the question is stored.
// Network failures and missing config return 503. The caller must not retry an
// uncertain insert automatically.
export async function postAmaQuestion(input: {
  id: string;
  question: string;
  turnstileToken: string;
}): Promise<number> {
  const url = process.env.AMA_WORKER_URL;
  const secret = process.env.AMA_SUBMISSION_SECRET;
  if (!url || !secret) return 503;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify(input),
      redirect: "error",
      signal: AbortSignal.timeout(10_000),
    });
    return response.status;
  } catch {
    return 503;
  }
}

export type AmaInboxPage = {
  questions: { id: string; question: string; created_at: string }[];
  nextCursor: string | null;
};

// The route must authorize the owner before calling this server-only helper.
export async function readAmaInbox(
  cursor: string | null,
): Promise<AmaInboxPage | null> {
  const workerUrl = process.env.AMA_WORKER_URL;
  const secret = process.env.AMA_READ_SECRET;
  if (!workerUrl || !secret) return null;
  try {
    const url = new URL(workerUrl);
    url.pathname = "/admin/questions";
    url.search = "";
    if (cursor) url.searchParams.set("cursor", cursor);
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${secret}` },
      redirect: "error",
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return null;
    return (await response.json()) as AmaInboxPage;
  } catch {
    return null;
  }
}
