import type { ActionFunction, LoaderFunction } from "react-router";
import { data, redirect } from "react-router";
import { isTheme } from "~/contexts/theme";
import { getThemeSession } from "~/utils/theme.server";

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if (!isTheme(theme)) {
    return data({
      success: false,
      message: `theme value of ${theme} is not a valid theme`,
    });
  }

  themeSession.setTheme(theme);
  return data(
    { success: true },
    { headers: { "Set-Cookie": await themeSession.commit() } },
  );
};

export const loader: LoaderFunction = () => redirect("/", { status: 404 });
