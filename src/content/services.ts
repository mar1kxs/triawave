export type Service = {
  number: string;
  title: string;
  description: string;
  path: string;
  group: "Design" | "Development" | "Support";
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Website Strategy",
    description: "Structure, positioning and a clear plan for your future website",
    path: "/services/website-strategy",
    group: "Design",
  },
  {
    number: "02",
    title: "UI/UX & Web Design",
    description: "Intuitive user experiences and distinctive interfaces for every screen",
    path: "/services/ui-ux-web-design",
    group: "Design",
  },
  {
    number: "03",
    title: "Wix & Wix Studio Development",
    description: "Flexible, responsive websites your team can update and scale with confidence",
    path: "/services/wix-studio-development",
    group: "Development",
  },
  {
    number: "04",
    title: "Webflow Development",
    description: "Scalable marketing websites built for content, performance and continuous growth",
    path: "/services/webflow-development",
    group: "Development",
  },
  {
    number: "05",
    title: "Custom Web Development",
    description: "Custom React and Next.js solutions for complex business requirements",
    path: "/services/custom-web-development",
    group: "Development",
  },
  {
    number: "06",
    title: "E-commerce Development",
    description: "Online stores designed around your products, customers and buying journey",
    path: "/services/e-commerce-development",
    group: "Development",
  },
  {
    number: "07",
    title: "Landing Page Design & Development",
    description: "Focused campaign pages that communicate one offer and turn traffic into action",
    path: "/services/landing-page-design-development",
    group: "Design",
  },
  {
    number: "08",
    title: "Website Support & Optimization",
    description: "Ongoing design, development and optimization after your website goes live",
    path: "/services/website-support-optimization",
    group: "Support",
  },
];

