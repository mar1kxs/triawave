export type WorkProject = {
  id: number;
  title: string;
  type: string;
  image: string;
  imageTitle: string;
  imageAlt: string;
  tags: readonly string[];
  description: string;
  services: string;
};

export type Audience = {
  number: string;
  title: string;
  copy: string;
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

export type ContentCard = {
  number: string;
  title: string;
  copy: string;
};

export type Testimonial = {
  title: string;
  quote: string;
  rating: 4 | 5;
  placeholder: true;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 1,
    title: "Kuberg in Motion",
    type: "Electric motorcycles",
    image: "/projects/kuberg-home.png",
    imageTitle: "Kuberg App",
    imageAlt: "Kuberg electric motorcycle app shown on a smartphone",
    tags: ["Electric Motorcycles", "UX/UI", "App Development"],
    description: "UI/UX design for the Kuberg app, translating the electric motorcycle brand’s bold character into a focused mobile experience",
    services: "UX/UI Design · UI Design",
  },
  {
    id: 2,
    title: "AI Developer Tools",
    type: "Panegrip. Your agents, anywhere",
    image: "/projects/work-project-01.png",
    imageTitle: "Panegrip.dev",
    imageAlt: "Panegrip AI coding agent website displayed on a desktop monitor",
    tags: ["AI Developer Tools", "UX/UI", "Web Development"],
    description: "A website for Panegrip, bringing mobile access to AI coding agents into focus through bold visuals, clear product storytelling and responsive development",
    services: "UI/UX Design · Web Development",
  },
  {
    id: 3,
    title: "Tuscany Photo Tours",
    type: "Photography & travel",
    image: "/projects/work-project-08.png",
    imageTitle: "Tuscany Photo Tours",
    imageAlt: "Tuscany photo tour website displayed on a laptop",
    tags: ["Travel Platform", "UX/UI", "Web Development"],
    description: "Website design and development for a photography tour company, pairing immersive imagery with clear tour information to help travellers find their next adventure",
    services: "UI/UX Design · Web Development · CRM Setup",
  },
  {
    id: 4,
    title: "Kyiv Energy",
    type: "Energy solutions",
    image: "/projects/work-project-03.png",
    imageTitle: "Kyiv Energy",
    imageAlt: "Kyiv Energy backup power and solar website displayed on a tablet",
    tags: ["Energy Solutions", "UX/UI", "App Development"],
    description: "Designed and built KyivEnergy’s website for backup power and solar solutions. Customers can browse equipment, review technical specifications, place orders, and request a quote for delivery and installation",
    services: "UI/UX Design · Web Development · CRM Setup · Ad Creatives · Marketing Support",
  },
];

export const AUDIENCES: Audience[] = [
  {
    number: "01",
    title: "Growing companies",
    copy: "For established businesses that have outgrown their current website and need a stronger digital presence",
    icon: "/assets/audience-growing.svg",
    iconWidth: 143,
    iconHeight: 71,
  },
  {
    number: "02",
    title: "Professional services",
    copy: "For law firms, consultants, recruiters and expert-led businesses that need to communicate clearly and earn trust",
    icon: "/assets/audience-services.svg",
    iconWidth: 133,
    iconHeight: 67,
  },
  {
    number: "03",
    title: "E-commerce brands",
    copy: "For brands that need a stronger digital identity and a smoother path from discovery to purchase",
    icon: "/assets/audience-ecommerce.svg",
    iconWidth: 142,
    iconHeight: 71,
  },
  {
    number: "04",
    title: "Startups",
    copy: "For new ventures that need to launch with clarity, credibility and room to grow",
    icon: "/assets/audience-startups.svg",
    iconWidth: 130,
    iconHeight: 65,
  },
];

export const OUTCOMES: ContentCard[] = [
  { number: "01", title: "Build trust", copy: "Present your business with the clarity and credibility your customers expect" },
  { number: "02", title: "Clarify your offer", copy: "Help visitors understand what you do, who it is for and why it matters — within seconds" },
  { number: "03", title: "Drive action", copy: "Guide the right visitors towards an enquiry, booking or purchase" },
  { number: "04", title: "Support growth", copy: "Give your team a flexible website that evolves with your services, content and audience" },
];

export const PROCESS_STEPS: ContentCard[] = [
  { number: "01", title: "Discover", copy: "We learn how your business works, who you serve and what the website needs to achieve" },
  { number: "02", title: "Define", copy: "We define the scope, website structure, content and technology before design begins" },
  { number: "03", title: "Design", copy: "We turn the strategy into a clear user experience and distinctive visual direction" },
  { number: "04", title: "Build", copy: "We develop the approved design for performance, accessibility and every screen" },
  { number: "05", title: "Launch", copy: "We test every detail, connect the essential tools and prepare the website to go live" },
  { number: "06", title: "Grow", copy: "We support, maintain and improve the website as your business evolves" },
];

const PLACEHOLDER_QUOTE = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James";

export const TESTIMONIALS: Testimonial[] = Array.from({ length: 10 }, (_, index) => ({
  title: index === 0 ? "Adidas UI/UX Design" : "Adidas UI&UX",
  quote: PLACEHOLDER_QUOTE,
  rating: index === 1 ? 4 : 5,
  placeholder: true,
}));

export const FAQS = [
  ["What do you need from us before starting?", "A clear point of contact, your business goals and any existing brand or website materials. We guide the rest."],
  ["How long does a website project take?", "Most projects take six to twelve weeks. Scope, content readiness and feedback speed affect the final schedule."],
  ["Can you help with content and structure?", "Yes. We shape the site architecture, page hierarchy and content direction before visual design begins."],
  ["Can we update the website ourselves?", "Yes. We build an editing experience around the content your team needs to manage after launch."],
  ["Do you work with clients outside Europe?", "Yes. Triawave works remotely with companies in Europe and worldwide."],
  ["How does payment work?", "Projects are split into agreed milestones. The schedule and payment terms are confirmed before work starts."],
  ["What happens after launch?", "We can provide handover, maintenance, design support and ongoing optimization based on your needs."],
  ["How do you choose the right approach for our website?", "We start with the business goal, audience, content and technical needs, then recommend the most appropriate platform and scope."],
] as const;

