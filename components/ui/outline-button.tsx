import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type OutlineButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseClassName =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold tracking-[0.18em] uppercase text-foreground transition duration-200 hover:border-accent hover:text-accent focus-visible:outline-none";

export function OutlineButton({
  children,
  href,
  className,
  type = "button",
  ...props
}: OutlineButtonProps) {
  const combinedClassName = [baseClassName, className].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
