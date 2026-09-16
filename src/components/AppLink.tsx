import type { AnchorHTMLAttributes } from "react";

export function navigate(path: string) {
  const url = new URL(path, window.location.origin);
  if (window.location.href !== url.href) window.history.pushState({}, "", url);
  window.dispatchEvent(new PopStateEvent("popstate"));

  requestAnimationFrame(() => requestAnimationFrame(() => {
    const target = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
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

