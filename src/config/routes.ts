import { SERVICES } from "../content/services";

export type RouteConfig = {
  path: string;
  screenTitle: string;
  seoTitle: string;
  seoDescription: string;
  indexable: boolean;
};

const STATIC_ROUTES: RouteConfig[] = [
  {
    path: "/",
    screenTitle: "HOME",
    seoTitle: "Web Design & Development Studio | Triawave",
    seoDescription: "Triawave is an independent digital studio creating distinctive, high-performing websites through strategy, UI/UX design and development.",
    indexable: true,
  },
  {
    path: "/about",
    screenTitle: "ABOUT",
    seoTitle: "About Triawave | Web Design & Development Studio",
    seoDescription: "Meet Triawave, an independent digital studio combining strategy, design and development to create clear, effective websites.",
    indexable: true,
  },
  {
    path: "/work",
    screenTitle: "PORTFOLIO",
    seoTitle: "Selected Web Design Work | Triawave",
    seoDescription: "Selected work from Triawave, an independent studio focused on website strategy, design and development.",
    indexable: false,
  },
  {
    path: "/contact",
    screenTitle: "START A PROJECT\n(CONTACT PAGE)",
    seoTitle: "Start a Website Project | Triawave",
    seoDescription: "Start a conversation with Triawave about website strategy, UI/UX design, development or ongoing support.",
    indexable: false,
  },
  {
    path: "/privacy-policy",
    screenTitle: "/PRIVACY-POLICY",
    seoTitle: "Privacy Policy | Triawave",
    seoDescription: "The privacy policy page for the Triawave website.",
    indexable: false,
  },
  {
    path: "/terms",
    screenTitle: "/TERMS",
    seoTitle: "Terms | Triawave",
    seoDescription: "The terms page for the Triawave website.",
    indexable: false,
  },
  {
    path: "/cookie-policy",
    screenTitle: "/COOKIE-POLICY",
    seoTitle: "Cookie Policy | Triawave",
    seoDescription: "The cookie policy page for the Triawave website.",
    indexable: false,
  },
];

const SERVICE_ROUTES: RouteConfig[] = SERVICES.map((service) => ({
  path: service.path,
  screenTitle: service.title.toUpperCase(),
  seoTitle: `${service.title} | Triawave`,
  seoDescription: `${service.description}. Learn how Triawave approaches ${service.title.toLowerCase()}.`,
  indexable: false,
}));

export const APP_ROUTES: RouteConfig[] = [
  ...STATIC_ROUTES.slice(0, 4),
  ...SERVICE_ROUTES,
  ...STATIC_ROUTES.slice(4),
];

const routeMap = new Map(APP_ROUTES.map((route) => [route.path, route]));

export function normalizePath(path: string) {
  const pathname = path.split(/[?#]/, 1)[0] || "/";
  return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
}

export function routeForPath(path: string) {
  return routeMap.get(normalizePath(path));
}

export function screenTitleForPath(path: string) {
  return routeForPath(path)?.screenTitle ?? "PAGE NOT FOUND";
}

