import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  as?: "section" | "div";
};

export function Section({
  id,
  className = "",
  children,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
