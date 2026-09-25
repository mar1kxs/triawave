import type { ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  // Page-level motion owns the reveal; SSR and reduced-motion content stay visible.
  return <div className={`reveal is-shown ${className}`}>{children}</div>;
}
