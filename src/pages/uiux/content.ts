export const DELIVERABLES = [
  { title: "Goals and priorities", copy: "We discuss your business, audience and competitors to define what the website needs to achieve. Together, we agree what matters most for launch and what can come later", result: "Agreed website goals, target audiences and launch priorities" },
  { title: "STRUCTURE BEFORE STYLE", copy: "We map how people move through your website and arrange content around their key tasks. Wireframes establish the layout before visual design begins — or refine the structure you already have", result: "Key user flows and wireframes for the agreed pages" },
  { title: "ONE EXPERIENCE, EVERY SCREEN", copy: "We adapt the design for desktop, tablet and mobile, defining how layouts and navigation respond. We also design the relevant interaction states, from loading and errors to successful actions", result: "Responsive layouts and key component states for the agreed scope" },
  { title: "READY FOR DEVELOPMENT", copy: "We organise the final designs in Figma with reusable components, a UI kit and a prototype of key interactions. Clear notes help your developers — or our team — understand what to build", result: "An organised Figma file, UI kit, interaction prototype and handoff notes" },
] as const;

export const STRATEGY_AUDIENCES = [
  { title: "STARTING SOMETHING NEW", copy: "You need a website that reflects your brand and makes it easy for visitors to understand your offer and take the next step" },
  { title: "RETHINKING YOUR CURRENT SITE", copy: "Your website feels dated or difficult to use. You need clearer navigation, more consistent layouts and a better mobile experience" },
  { title: "TURNING A BRIEF INTO DESIGN", copy: "You already have a brief, page structure or wireframes. You need a visual direction and detailed layouts your developers can build from" },
] as const;

export const STRATEGY_STEPS = [
  { title: "ALIGN", copy: "We review your goals and materials, then agree on the pages and design requirements" },
  { title: "DESIGN & REFINE", copy: "We create wireframes and visual designs, then refine them through agreed feedback rounds" },
  { title: "PREPARE & HAND OVER", copy: "We prepare your Figma files, components and prototype, then guide your team through the handoff" },
] as const;

// The reference shows collapsed questions only. Answer copy follows the service scope above.
export const STRATEGY_FAQ = [
  { question: "Do we need a finished brief before we start?", answer: "No. We can help clarify your requirements before design begins, or work from your existing brief and wireframes. A separate Website Strategy service is optional." },
  { question: "Can you redesign our existing website?", answer: "Yes. We review your current website and agree on what to keep and what to improve — from individual pages to a full redesign." },
  { question: "What will our developers receive?", answer: "An organised Figma file with agreed page layouts, responsive designs, reusable components and a UI kit. We also provide a prototype of key interactions and handoff notes." },
  { question: "Does this service include development?", answer: "Development is quoted separately. You can use your own developers or ask us to include design and development in one proposal." },
  { question: "How are pricing, timing and revisions agreed?", answer: "They depend on the pages, responsive layouts, interactions and materials needed. We agree on the scope, fee, schedule and feedback rounds before work begins." },
] as const;
