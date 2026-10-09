export const DELIVERABLES = [
  { title: "Goals and priorities", copy: "We discuss your business, audience and competitors to define what the website needs to achieve. Together, we agree what matters most for launch and what can come later", result: "Agreed website goals, target audiences and launch priorities" },
  { title: "Structure and key journeys", copy: "We organise your pages and map the main routes through the website, helping visitors move from an initial question to an enquiry, booking or purchase", result: "A sitemap and key user journeys" },
  { title: "The role of each page", copy: "We define each key page’s purpose, main message and supporting content, including the questions it should answer and the action it should encourage", result: "Page-by-page content outlines and initial search-intent guidance" },
  { title: "A BRIEF TO BUILD ON", copy: "We bring the agreed goals, sitemap and content direction into one practical brief. Your design and development team can use it as a shared starting point — whether you work with us or someone else", result: "A consolidated website brief for design and development" },
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
  { question: "Do we need strategy before a small website?", answer: "Not every small website needs a separate strategy phase. If your goals, pages and content are already clear, a focused brief may be enough. Strategy is useful when those decisions still need to be made." },
  { question: "Can you review our existing website?", answer: "Yes. We can use your current website as a starting point to review its structure, messaging and main user journeys. Together, we decide what to keep, what to change and what needs closer attention." },
  { question: "Does this include design, SEO or advertising?", answer: "The core service covers website goals, structure and content direction, with initial guidance on search intent. Finished designs, full page copy, development, ongoing SEO and advertising are not included in the strategy scope." },
  { question: "How much does it cost, and how long does it take?", answer: "The fee and timeline depend on the website’s size, the material you already have and the decisions we need to work through. We confirm the scope, fee and schedule before you commit." },
  { question: "Can another team use the strategy?", answer: "Yes. The brief brings together the agreed goals, structure and content direction so another design or development team can use it as a starting point. You can also continue with Triawave." },
] as const;
