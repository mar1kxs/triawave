export const DELIVERABLES = [
  { title: "STRUCTURE BEFORE STYLE", copy: "We organise content and navigation around what visitors need to find and do. Wireframes define the key page layouts before visual design begins. If you already have a structure, we review and refine it", result: "Key visitor journeys and wireframes showing page structure and main actions" },
  { title: "DESIGN THAT REFLECTS YOUR BRAND", copy: "We shape typography, colours, imagery and page layouts around your brand and content. The chosen direction becomes detailed designs that present your offer clearly and give the website a consistent character", result: "An approved visual direction and detailed page designs in Figma" },
  { title: "ONE EXPERIENCE, EVERY SCREEN", copy: "We design layouts and navigation that adapt across screen sizes, keeping content readable and key actions easy to use. We also define the states your interface needs, including form errors and confirmation messages", result: "Responsive page designs and key interface states, with notes on how they adapt" },
  { title: "READY FOR DEVELOPMENT", copy: "We organise the final designs in Figma with reusable components, a UI kit and a prototype of key interactions. We walk your team—or ours—through the layouts and behaviour so development can start with a clear reference", result: "An editable Figma file, reusable components, a UI kit, a clickable prototype and handoff notes" },
] as const;

export const STRATEGY_AUDIENCES = [
  { title: "DESIGNING A NEW WEBSITE", copy: "You need a website that reflects your brand and makes it easy for visitors to understand your offer and take the next step" },
  { title: "RETHINKING YOUR CURRENT SITE", copy: "Your website feels dated or difficult to use. You need clearer navigation, more consistent layouts and a better mobile experience" },
  { title: "TURNING A BRIEF INTO DESIGN", copy: "You already have a brief, page structure or wireframes. You need a visual direction and detailed layouts your developers can build from" },
] as const;

export const STRATEGY_STEPS = [
  { title: "ALIGN", copy: "We review your goals, brand and content, then agree on the pages, design requirements and timeline" },
  { title: "DESIGN & REFINE", copy: "We create wireframes and a visual direction, then develop the page designs with your feedback along the way" },
  { title: "PRESENT & HAND OVER", copy: "We present the final designs and an organised Figma file with components, a prototype and development guidance" },
] as const;

// The reference shows collapsed questions only. Answer copy follows the service scope above.
export const STRATEGY_FAQ = [
  { question: "Do we need a finished brief before we start?", answer: "No. We can help clarify your goals, pages and design requirements, or work from an existing brief and wireframes. A separate Website Strategy project is only needed if there are broader questions to resolve before design begins" },
  { question: "Can you redesign our existing website?", answer: "Yes. We review your current website and agree on what to keep and what to improve—from individual pages to a full redesign. We can work within your existing brand guidelines or develop a new visual direction for the website" },
  { question: "What will we receive?", answer: "You receive an editable Figma file with final page designs, responsive layouts, reusable components and a UI kit. We also provide a clickable prototype of key interactions and clear notes so your developers—or our team—can take the design into development" },
  { question: "How do feedback and revisions work?", answer: "You review the structure and visual direction before we develop the detailed layouts. We refine the designs with your feedback at agreed stages. The proposal sets out the feedback rounds, and any additional work is estimated before we proceed" },
  { question: "Do you also write content and test with users?", answer: "We plan how content is presented and work with your text and brand materials. Full copywriting, user research and testing with participants are separate activities. Before work begins, we confirm what your project needs and who will provide it" },
  { question: "Can you build the website too?", answer: "Yes. We can include design and development in one proposal or provide design as a standalone service. If we handle both, the approved designs become the basis for the build. You can also take the completed design to your own development team" },
  { question: "How much does it cost, and how long does it take?", answer: "This depends on the number of unique pages, the complexity of the layouts and interactions, and how much content is ready. After reviewing your requirements, we provide a quote and schedule covering the design work and feedback stages" },
] as const;
