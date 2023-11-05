import { Outlet } from "@remix-run/react";
import { Container } from "~/components/Container";

export default function ArticleLayout() {
  return (
    <>
      {/* <Head>
        <title>{`${meta.title} - Zain Fathoni`}</title>
        <meta name="description" content={meta.description} />
      </Head> */}
      <Container className="mt-16 sm:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <article>
              {/* <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {article.title}
                </h1>
                <time
                  dateTime={article.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(article.date)}</span>
                </time>
              </header> */}
              <Outlet />
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
