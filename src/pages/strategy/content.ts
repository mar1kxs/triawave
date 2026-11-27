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
  { question: "Do we need a finished brief before we start?", answer: "No. We can help clarify your goals, pages and design requirements, or work from an existing brief and wireframes. A separate Website Strategy project is only needed if there are broader questions to resolve before design begins" },
  { question: "Can you redesign our existing website?", answer: "Yes. We review your current website and agree on what to keep and what to improve—from individual pages to a full redesign. We can work within your existing brand guidelines or develop a new visual direction for the website" },
  { question: "What will we receive?", answer: "You receive an editable Figma file with final page designs, responsive layouts, reusable components and a UI kit. We also provide a clickable prototype for key interactions and clear notes so your developers—or our team—can take the design into development" },
  { question: "How do feedback and revisions work?", answer: "You review the structure and visual direction before we develop the detailed layouts. We refine the designs with your feedback at agreed stages. The proposal sets out the feedback rounds, and any additional work is estimated before we proceed" },
  { question: "Do you also write content and test with users?", answer: "We plan how content is presented and work with your text and brand materials. Full copywriting, user research and testing with participants are separate activities. Before work begins, we confirm what your project needs and who will provide it" },
  { question: "Can you build the website too?", answer: "Yes. We can include design and development in one proposal or provide design as a standalone service. If we handle both, the approved designs become the basis for the build. You can also take the completed design to your own development team" },
  { question: "How much does it cost, and how long does it take?", answer: "This depends on the number of unique pages, the complexity of the layouts and interactions, and how much content is ready. After reviewing your requirements, we provide a quote and schedule covering the design work and feedback stages" },
] as const;
