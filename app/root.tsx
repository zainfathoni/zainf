import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@vercel/remix";
import clsx from "clsx";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import type { Theme } from "./contexts/theme";
import {
  NonFlashOfWrongTheme,
  ThemeProvider,
  useTheme,
} from "./contexts/theme";
import { metadata } from "./models/metadata";
import styles from "./tailwind.css";
import { getThemeSession } from "./utils/theme.server";

const { title, description, url, image, locale } = metadata;

export const meta: MetaFunction = () => [
  {
    title: title,
  },
  {
    name: "description",
    content: description,
  },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:url", content: url },
  { property: "og:type", content: "website" },
  { property: "og:site_name", content: title },
  { property: "og:image", content: image.src },
  { property: "og:image:alt", content: image.alt },
  { property: "og:image:width", content: `${image.width}` },
  { property: "og:image:height", content: `${image.height}` },
  { property: "og:locale", content: locale },
  {
    charset: "utf-8",
  },
  {
    name: "viewport",
    content: "width=device-width,initial-scale=1",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "canonical", href: url },
];

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

function App() {
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  return (
    <html className={clsx("h-full antialiased scroll-smooth", theme)} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongTheme ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
