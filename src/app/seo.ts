import { APP_ROUTES, normalizePath, routeForPath } from "../config/routes";
import { SITE } from "../config/site";

export const SITE_URL = SITE.url;
export const SITE_NAME = SITE.name;

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  indexable: boolean;
};

export const SEO_ROUTES: SeoRoute[] = APP_ROUTES.map((route) => ({
  path: route.path,
  title: route.seoTitle,
  description: route.seoDescription,
  indexable: route.indexable,
}));

const NOT_FOUND: SeoRoute = {
  path: "/404",
  title: "Page Not Found | Triawave",
  description: "The requested page could not be found.",
  indexable: false,
};

export function seoForPath(path: string): SeoRoute {
  const route = routeForPath(normalizePath(path));
  return route ? {
    path: route.path,
    title: route.seoTitle,
    description: route.seoDescription,
    indexable: route.indexable,
  } : NOT_FOUND;
}

export function canonicalForPath(path: string) {
  const route = seoForPath(path);
  return route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
}

export function robotsForRoute(route: SeoRoute) {
  return route.indexable
    ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    : route.path === "/404"
      ? "noindex,nofollow"
      : "noindex,follow";
}

export function structuredDataForPath(path: string): Record<string, unknown> | null {
  const route = seoForPath(path);
  if (!route.indexable) return null;

  const canonical = canonicalForPath(route.path);
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const page = {
    "@type": route.path === "/about" ? "AboutPage" : "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: SITE.language,
  };

  const graph: Record<string, unknown>[] = [page];
  if (route.path === "/") {
    graph.unshift(
      {
        "@type": "Organization",
        "@id": organizationId,
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        email: SITE.email,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/assets/logo.svg`,
        },
        description: route.description,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { "@id": organizationId },
        inLanguage: SITE.language,
      },
    );
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

export function applySeo(path: string) {
  const route = seoForPath(path);
  const canonical = canonicalForPath(path);

  document.documentElement.lang = SITE.language;
  document.title = route.title;
  setMeta("name", "description", route.description);
  setMeta("name", "robots", robotsForRoute(route));
  setMeta("property", "og:type", "website");
  setMeta("property", "og:site_name", SITE_NAME);
  setMeta("property", "og:locale", SITE.locale);
  setMeta("property", "og:title", route.title);
  setMeta("property", "og:description", route.description);
  setMeta("property", "og:url", canonical);
  setMeta("name", "twitter:card", "summary");
  setMeta("name", "twitter:title", route.title);
  setMeta("name", "twitter:description", route.description);

  let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    document.head.append(canonicalLink);
  }
  canonicalLink.href = canonical;

  document.getElementById("structured-data")?.remove();
  const structuredData = structuredDataForPath(path);
  if (structuredData) {
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData).replace(/</g, "\\u003c");
    document.head.append(script);
  }
}
