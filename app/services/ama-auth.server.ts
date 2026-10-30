import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from "node:crypto";
import { redirect } from "react-router";

const SESSION_SECONDS = 7 * 24 * 60 * 60;
const OAUTH_SECONDS = 10 * 60;
const INBOX = "/admin/ama";

export function amaPrivateHeaders() {
  return new Headers({
    "Cache-Control": "private, no-store",
    "X-Robots-Tag": "noindex, nofollow",
    "Referrer-Policy": "no-referrer",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
  });
}

function configuration() {
  // Preview deployments must not accept production login cookies or credentials.
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production")
    return null;
  const clientId = process.env.AMA_GITHUB_CLIENT_ID;
  const clientSecret = process.env.AMA_GITHUB_CLIENT_SECRET;
  const owner = process.env.AMA_GITHUB_OWNER_ID;
  const encodedKey = process.env.AMA_SESSION_KEY ?? "";
  const origin = process.env.AMA_ADMIN_ORIGIN ?? "https://www.zainfathoni.com";
  try {
    const url = new URL(origin);
    const local =
      process.env.NODE_ENV !== "production" &&
      url.protocol === "http:" &&
      ["localhost", "127.0.0.1"].includes(url.hostname);
    const key = Buffer.from(encodedKey, "base64url");
    if (
      !clientId ||
      !clientSecret ||
      !owner ||
      !/^[1-9]\d*$/.test(owner) ||
      !Number.isSafeInteger(Number(owner)) ||
      key.length !== 32 ||
      key.toString("base64url") !== encodedKey ||
      url.origin !== origin ||
      (url.protocol !== "https:" && !local)
    )
      return null;
    return {
      clientId,
      clientSecret,
      owner,
      key,
      origin,
      local,
      callback: `${origin}/auth/github/callback`,
    };
  } catch {
    return null;
  }
}

type Configuration = NonNullable<ReturnType<typeof configuration>>;

function cookieName(config: Configuration, purpose: "oauth" | "session") {
  return `${config.local ? "" : "__Host-"}zainf_ama_${purpose}`;
}

function cookie(
  config: Configuration,
  purpose: "oauth" | "session",
  value: string,
  seconds: number,
) {
  return `${cookieName(config, purpose)}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${seconds}${config.local ? "" : "; Secure"}`;
}

function seal(config: Configuration, purpose: string, value: object) {
  const nonce = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", config.key, nonce);
  cipher.setAAD(Buffer.from(`zainf-ama\0${config.origin}\0${purpose}`));
  const ciphertext = Buffer.concat([
    cipher.update(JSON.stringify(value)),
    cipher.final(),
  ]);
  return [nonce, ciphertext, cipher.getAuthTag()]
    .map((part) => part.toString("base64url"))
    .join(".");
}

function open(
  config: Configuration,
  purpose: "oauth" | "session",
  request: Request,
): Record<string, unknown> | null {
  const header = request.headers.get("cookie") ?? "";
  if (header.length > 16_384) return null;
  const prefix = `${cookieName(config, purpose)}=`;
  const cookies = header
    .split(";")
    .map((part) => part.trim())
    .filter((part) => part.startsWith(prefix));
  if (cookies.length !== 1 || cookies[0].length > 4096) return null;
  try {
    const parts = cookies[0].slice(prefix.length).split(".");
    if (parts.length !== 3) return null;
    const [nonce, ciphertext, tag] = parts.map((part) =>
      Buffer.from(part, "base64url"),
    );
    if (nonce.length !== 12 || tag.length !== 16) return null;
    const decipher = createDecipheriv("aes-256-gcm", config.key, nonce);
    decipher.setAAD(Buffer.from(`zainf-ama\0${config.origin}\0${purpose}`));
    decipher.setAuthTag(tag);
    const value: unknown = JSON.parse(
      Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString(),
    );
    return value !== null && typeof value === "object" && !Array.isArray(value)
      ? (value as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

export function amaAdminSession(request: Request) {
  const config = configuration();
  if (!config || new URL(request.url).origin !== config.origin) {
    return { configured: false, signedIn: false };
  }
  const session = open(config, "session", request);
  const now = Date.now();
  const signedIn =
    !!session &&
    session.owner === config.owner &&
    typeof session.issued === "number" &&
    typeof session.expires === "number" &&
    Number.isSafeInteger(session.issued) &&
    Number.isSafeInteger(session.expires) &&
    session.issued <= now &&
    session.expires > now &&
    session.expires - session.issued === SESSION_SECONDS * 1000;
  return { configured: true, signedIn };
}

function requireConfiguration(request: Request) {
  const config = configuration();
  if (!config || new URL(request.url).origin !== config.origin) {
    throw new Response(
      "Private inbox login is not configured for this address.",
      {
        status: 503,
        headers: amaPrivateHeaders(),
      },
    );
  }
  return config;
}

export function startAmaLogin(request: Request) {
  const config = requireConfiguration(request);
  const state = randomBytes(32).toString("base64url");
  const verifier = randomBytes(32).toString("base64url");
  const url = new URL("https://github.com/login/oauth/authorize");
  url.search = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.callback,
    state,
    code_challenge: createHash("sha256").update(verifier).digest("base64url"),
    code_challenge_method: "S256",
  }).toString();
  const headers = amaPrivateHeaders();
  headers.append(
    "Set-Cookie",
    cookie(
      config,
      "oauth",
      seal(config, "oauth", {
        state,
        verifier,
        expires: Date.now() + OAUTH_SECONDS * 1000,
      }),
      OAUTH_SECONDS,
    ),
  );
  return redirect(url.href, { headers });
}

export async function finishAmaLogin(request: Request) {
  const config = requireConfiguration(request);
  const params = new URL(request.url).searchParams;
  const oauth = open(config, "oauth", request);
  const headers = amaPrivateHeaders();
  headers.append("Set-Cookie", cookie(config, "oauth", "", 0));
  const failure = () =>
    redirect(`${INBOX}?login=failed`, { status: 303, headers });
  if (
    params.has("error") ||
    params.getAll("state").length !== 1 ||
    params.getAll("code").length !== 1 ||
    !oauth ||
    typeof oauth.state !== "string" ||
    oauth.state.length !== 43 ||
    typeof oauth.verifier !== "string" ||
    oauth.verifier.length !== 43 ||
    typeof oauth.expires !== "number" ||
    oauth.expires <= Date.now() ||
    params.get("state") !== oauth.state ||
    !params.get("code") ||
    params.get("code")!.length > 2048
  )
    return failure();

  try {
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        redirect: "error",
        signal: AbortSignal.timeout(10_000),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          client_id: config.clientId,
          client_secret: config.clientSecret,
          code: params.get("code")!,
          redirect_uri: config.callback,
          code_verifier: oauth.verifier,
        }),
      },
    );
    if (!tokenResponse.ok) return failure();
    const token = await tokenResponse.json();
    if (
      typeof token?.access_token !== "string" ||
      !token.access_token ||
      token.access_token.length > 2048 ||
      /\s/.test(token.access_token) ||
      token.token_type?.toLowerCase() !== "bearer"
    )
      return failure();
    const userResponse = await fetch("https://api.github.com/user", {
      redirect: "error",
      signal: AbortSignal.timeout(10_000),
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token.access_token}`,
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "zainf-ama-inbox",
      },
    });
    if (!userResponse.ok) return failure();
    const user = await userResponse.json();
    if (
      !Number.isSafeInteger(user?.id) ||
      user.id <= 0 ||
      String(user.id) !== config.owner
    )
      return failure();
    const issued = Date.now();
    headers.append(
      "Set-Cookie",
      cookie(
        config,
        "session",
        seal(config, "session", {
          owner: config.owner,
          issued,
          expires: issued + SESSION_SECONDS * 1000,
        }),
        SESSION_SECONDS,
      ),
    );
    return redirect(INBOX, { status: 303, headers });
  } catch {
    return failure();
  }
}

export function logoutAmaAdmin(request: Request) {
  const config = requireConfiguration(request);
  const origin = request.headers.get("origin");
  const site = request.headers.get("sec-fetch-site");
  if (
    request.method !== "POST" ||
    (site && site !== "same-origin") ||
    (origin !== config.origin && !(origin === "null" && site === "same-origin"))
  ) {
    throw new Response("This sign-out request could not be verified.", {
      status: 403,
      headers: amaPrivateHeaders(),
    });
  }
  const headers = amaPrivateHeaders();
  headers.append("Set-Cookie", cookie(config, "session", "", 0));
  headers.append("Set-Cookie", cookie(config, "oauth", "", 0));
  return redirect(INBOX, { status: 303, headers });
}
