import { Link } from "@remix-run/react";
import clsx from "clsx";
import { ChevronRightIcon } from "./Icons";

export function Card({
  as: Component = "div",
  className,
  children,
  id,
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <Component
      id={id}
      className={clsx(className, "group relative flex flex-col items-start")}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
}) {
  const external = to.startsWith("http");
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl cursor-pointer" />
      {external ? (
        <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{children}</span>
        </a>
      ) : (
        <Link to={to} {...props}>
          <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">{children}</span>
        </Link>
      )}
    </>
  );
};

Card.Title = function CardTitle({
  as: Component = "h2",
  to,
  children,
}: {
  as?: React.ElementType;
  to?: string;
  children: React.ReactNode;
}) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 cursor-pointer">
      {to ? <Card.Link to={to}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 cursor-pointer">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-600 dark:text-teal-400"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

Card.Eyebrow = function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  dateTime,
}: {
  as?: React.ElementType;
  decorate?: boolean;
  className?: string;
  children: React.ReactNode;
  dateTime?: string;
}) {
  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5",
      )}
      dateTime={dateTime}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};
