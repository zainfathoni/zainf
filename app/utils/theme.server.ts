import type { Theme } from "~/contexts/theme";
import { isTheme } from "~/contexts/theme";

// For static site generation, we handle cookies manually
async function getThemeSession(request: Request) {
  // Parse cookie manually from request headers
  const cookieHeader = request.headers.get("Cookie");
  const cookies = cookieHeader?.split(";").reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split("=");
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>) || {};

  const theme = cookies["my_react_router_theme"];

  return {
    getTheme: () => {
      return isTheme(theme) ? theme : null;
    },
    setTheme: async (newTheme: Theme) => {
      // Return Set-Cookie header value
      return `my_react_router_theme=${newTheme}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax${
        process.env.NODE_ENV === "production" ? "; Secure" : ""
      }`;
    },
    commit: async () => {
      // Return current cookie value
      return `my_react_router_theme=${theme || ""}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax${
        process.env.NODE_ENV === "production" ? "; Secure" : ""
      }`;
    },
  };
}

export { getThemeSession };
