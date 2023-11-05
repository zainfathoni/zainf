import clsx from "clsx";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={clsx(className, "prose dark:prose-invert")}>
      {children}
    </article>
  );
}
