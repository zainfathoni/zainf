import clsx from "clsx";
import type { PostLanguage } from "~/models/posts";

const languageLabels: Record<PostLanguage, string> = {
  en: "English",
  id: "Bahasa Indonesia",
};

export function PostLanguageBadge({
  lang,
  className,
}: {
  lang: PostLanguage;
  className?: string;
}) {
  return (
    <span
      title={languageLabels[lang]}
      className={clsx(
        "inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200",
        className,
      )}
    >
      <span aria-hidden="true">{lang.toUpperCase()}</span>
      <span className="sr-only">{languageLabels[lang]}</span>
    </span>
  );
}
