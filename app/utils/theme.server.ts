import { createCookieSessionStorage } from "react-router";
import type { Theme } from "~/contexts/theme";
import { isTheme } from "~/contexts/theme";

const sessionSecret = process.env.SESSION_SECRET ?? "dev-session-secret";

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: "my_remix_theme",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => themeStorage.commitSession(session),
  };
}

export { getThemeSession };
