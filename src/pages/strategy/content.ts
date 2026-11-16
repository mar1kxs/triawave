export const DELIVERABLES = [
  { title: "Goals and priorities", copy: "We review your business goals, audience and existing materials to recommend what your website should focus on. You get clear priorities for launch, with future ideas separated from what you need now", result: "Website goals, priority audiences and a focused plan for the first release" },
  { title: "Structure and key journeys", copy: "We organise your pages and map the main routes through the website, helping visitors move from an initial question to an enquiry, booking or purchase", result: "A sitemap showing the pages you need and how visitors reach key actions" },
  { title: "The role of each page", copy: "We define what each key page needs to explain, which questions it should answer and what evidence will support your offer. Your copywriter and designer get a clear direction for turning the plan into content and layouts", result: "Page-by-page outlines covering key messages, supporting content and calls to action" },
  { title: "A BRIEF TO BUILD ON", copy: "We bring the goals, sitemap, content direction and key functional requirements into one practical brief. Use it to brief your team, compare project estimates and move into design and development—with us or another partner", result: "A website brief with clear priorities and requirements for design and development" },
] as const;

export const STRATEGY_AUDIENCES = [
  { title: "Planning a new website", copy: "You need to decide what the first version of your website should include — and what can wait" },
  { title: "Planning a redesign", copy: "Your business has changed, but your website’s structure and message have not kept up" },
  { title: "Making a complex offer clear", copy: "You have several services or audiences and need a simpler way to explain what you do" },
] as const;

export const STRATEGY_STEPS = [
  { title: "Understand", copy: "We review your business, audience and current website or ideas to define what the new site needs to achieve" },
  { title: "Plan", copy: "We turn those goals into a clear website structure, page-by-page content direction and priorities for launch" },
  { title: "Present & hand over", copy: "We explain the completed strategy and hand over a practical brief your team can use for design and development" },
] as const;

// The reference shows collapsed questions only. Answer copy follows the service scope above.
export const STRATEGY_FAQ = [
  { question: "Do we need strategy before a small website?", answer: "Not every small website needs a separate strategy phase. If your goals, pages and content are already clear, a focused brief may be enough. Strategy is useful when those decisions still need to be made" },
  { question: "Can you review our existing website?", answer: "Yes. We can use your current website as a starting point to review its structure, messaging and main user journeys. Together, we decide what to keep, what to change and what needs closer attention" },
  { question: "Does this include design, SEO or advertising?", answer: "The core service covers website goals, structure and content direction, with initial guidance on search intent. Finished designs, full page copy, development, ongoing SEO and advertising are not included in the strategy scope" },
  { question: "How much does it cost, and how long does it take?", answer: "The fee and timeline depend on the website’s size, the material you already have and the decisions we need to work through. We confirm the scope, fee and schedule before you commit" },
  { question: "Can another team use the strategy?", answer: "Yes. The brief brings together the agreed goals, structure and content direction so another design or development team can use it as a starting point. You can also continue with Triawave" },
] as const;
