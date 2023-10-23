import { cn } from "./lib/utils";

export function Container({ children, className }) {
  return <div className={cn("mx-auto max-w-6xl", className)}>{children}</div>;
}
