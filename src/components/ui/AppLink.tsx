import type { AnchorHTMLAttributes } from "react";
import { scrollToDestination, stopScrollMomentum, targetForHash } from "../../lib/motion/smoothScroll";

export function navigate(path: string) {
  const url = new URL(path, window.location.origin);
  const changedPage = url.pathname !== window.location.pathname;
  stopScrollMomentum();
  if (window.location.href !== url.href) window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));

  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (window.location.href !== url.href) return;
    const target = targetForHash(url.hash);
    scrollToDestination(target ?? 0, changedPage || !target);
  }));
}

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function AppLink({ href, className, children, onClick, ...props }: AppLinkProps) {
  return (
    <a
      href={href}
      className={className}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        const isInternal = href.startsWith("/") || href.startsWith("#");
        const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
        const usesCurrentTab = !props.target || props.target === "_self";

        if (!event.defaultPrevented && isInternal && !hasModifier && event.button === 0 && usesCurrentTab && !props.download) {
          event.preventDefault();
          navigate(href);
        }
      }}
    >
      {children}
    </a>
  );
}
