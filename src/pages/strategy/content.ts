export const DELIVERABLES = [
  { title: "A direction everyone understands", copy: "We define what your website needs to achieve, who it needs to reach and which goals matter most", result: "Website objectives & project priorities" },
  { title: "The right pages, in the right order", copy: "We organise your offer into a clear website structure and plan how visitors move from an initial question to the next step", result: "Sitemap & key user journeys" },
  { title: "A clear role for every page", copy: "We outline the purpose of each key page, the questions it needs to answer and the content that supports it, with initial guidance on search intent", result: "Page-by-page content outline & SEO recommendations" },
  { title: "A brief that’s ready for design", copy: "We bring the agreed goals, structure and content requirements into one brief, ready for design and development", result: "Agreed design & development brief" },
] as const;

export const STRATEGY_STEPS = [
  { title: "Understand", copy: "We learn about your business, your customers and what needs to change" },
  { title: "Plan", copy: "We turn that insight into a page structure, content direction and priorities" },
  { title: "Agree", copy: "We review the plan together and confirm the brief before design begins" },
] as const;

// The reference shows collapsed questions only. Answer copy follows the service scope above.
export const STRATEGY_FAQ = [
  { question: "Do we need strategy before a small website?", answer: "A clear plan helps even a small website. We focus on its goals, essential pages and the next step visitors should take, keeping the scope proportionate to the project." },
  { question: "Can you review our existing website?", answer: "Yes. We can use your existing website as the starting point to review its structure, content and user journeys, then define what needs to change." },
  { question: "Does this include design, SEO or advertising?", answer: "This service defines the website strategy and brief, including initial SEO recommendations. Design, development, full copywriting and ongoing SEO are quoted separately. Advertising is outside this scope." },
  { question: "How much does it cost, and how long does it take?", answer: "Scope, timeline and pricing are agreed before we begin. Tell us about your website and we can discuss the work required." },
  { question: "Do we need strategy before a small website?", answer: "The depth of the strategy depends on your website. The aim is a practical foundation: clear enough to move into design and detailed enough to keep everyone aligned." },
] as const;
