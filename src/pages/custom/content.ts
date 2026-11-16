export const DELIVERABLES = [
  { title: "Responsive pages & interfaces", copy: "We turn the approved design into working pages with layouts, navigation and interactions adapted for desktop, tablet and mobile. Reusable components keep the interface consistent and make future updates easier", result: "Responsive pages and reusable interface components" },
  { title: "Features that work together", copy: "We connect the features included in your project into a complete experience—from submitting a form to managing content or using a client account. We check how these parts work together, not just individually", result: "Connected features and integrations that support complete user journeys" },
  { title: "Code you can build on", copy: "You can keep developing the project with our team or your own developers. We provide the source code, setup instructions and dependency details so they have a clear starting point", result: "Source code and setup documentation for future development" },
  { title: "Tested, launched & handed over", copy: "You receive a live website or application with its key features tested. We launch after your approval, hand over access and documentation, and show your team how to handle everyday tasks", result: "A live website or application, launch check results and practical handover documentation" },
] as const;

export const STRATEGY_AUDIENCES = [
  { title: "Building a custom website", copy: "You need a website built around your design, content and features. Bring approved designs or work with us on both design and development" },
  { title: "Creating a web application", copy: "You need a client portal, internal tool or web application with user accounts, data and workflows tailored to your business" },
  { title: "Improving your website or app", copy: "You need new features, connected systems or a technical rebuild. We review your existing code and setup before recommending what to change" },
] as const;

export const STRATEGY_STEPS = [
  { title: "Plan & align", copy: "Together, we define what the project needs to achieve and agree on priorities, scope, budget and timeline before work begins" },
  { title: "Build & review", copy: "You see the work in stages and give feedback at agreed checkpoints. We discuss any changes to scope, cost or timing before moving ahead" },
  { title: "Launch & hand over", copy: "We walk you through the finished project for approval before launch, then guide your team through everyday use and answer their questions" },
] as const;

export const STRATEGY_FAQ = [
  { question: "Do we need custom development, or would Wix or Webflow work?", answer: "We help you choose based on your design, features, integrations and how you plan to manage the site. If Wix or Webflow fits the requirements, we’ll recommend it. Custom development makes sense when the project needs more control over functionality, data or implementation" },
  { question: "Do we need a finished brief or design?", answer: "No. Bring your idea, goals and any materials you already have. We can help define the requirements and create the design, or develop from approved layouts. If the project needs deeper discovery, we explain why and agree on that work with you first" },
  { question: "Can you work with our existing website or codebase?", answer: "Yes, subject to a technical review. We check the code, dependencies and connected services before recommending improvements, new features or a rebuild. You’ll know what can be retained and what needs attention before development begins" },
  { question: "Will we be able to update content ourselves?", answer: "Yes, when content editing is part of the project. We can provide a CMS or admin interface for the content your team needs to manage and show you how to use it. Changes to layouts, business logic or custom features may still need a developer" },
  { question: "Can another development team take over later?", answer: "Yes. We hand over the project source code, setup documentation and relevant access so another team can understand and continue the work. We also identify the third-party services, dependencies and licences the project relies on" },
  { question: "How much will it cost, and how long will it take?", answer: "We estimate the work based on the design, features, integrations and condition of any existing code. You receive a proposal with the scope, budget and schedule. Hosting, domains and paid services are identified separately, and additional work is estimated before it starts" },
  { question: "What happens after launch?", answer: "We complete the handover and explain how to operate the finished project. Your proposal sets out any included post-launch support and how defects are handled. You can continue with us for maintenance and new features, or arrange ongoing support with your own team" },
] as const;
