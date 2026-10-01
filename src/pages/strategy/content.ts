export const DELIVERABLES = [
  { title: "Goals and priorities", copy: "We talk through your business, audience and competitors, then agree what the website needs to achieve and which parts of the project matter most in the first version", result: "Agreed design & development brief" },
  { title: "Structure and key journeys", copy: "We define the pages you need and map how visitors move between them towards an enquiry, booking or purchase, so nothing important is buried", result: "A sitemap and key user journeys" },
  { title: "The role of each page", copy: "We outline each page’s purpose, main message and supporting content, noting what people are likely to be searching for when they arrive", result: "Page content outlines and initial search-intent guidance" },
  { title: "A clear handoff", copy: "We bring the decisions together in one practical document that a designer and developer can work from — whether that’s us or another team", result: "An agreed design and development brief" },
] as const;

export const STRATEGY_AUDIENCES = [
  { title: "Launching a business", copy: "You need to decide what the first version of your website should include — and what can wait" },
  { title: "Planning a redesign", copy: "Your business has changed, but your website structure and message have not kept up" },
  { title: "Making a complex offer clear", copy: "You have several services or audiences and need a simpler way to explain what you do" },
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
