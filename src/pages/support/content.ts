export const DELIVERABLES = [
  { title: "Understand what needs fixing", copy: "We investigate the reported issues and review the relevant parts of your site. You get a clear explanation of our findings and recommended fixes, with any further investigation identified before additional work begins", result: "Findings and recommended fixes, prioritised by their impact on your site" },
  { title: "A plan you can approve", copy: "We turn the findings and your business priorities into a clear task list. Before work starts, we agree on what to change, the cost, timing and how each task will be checked", result: "An agreed work plan with priorities, estimates and completion criteria" },
  { title: "Fixes & practical improvements", copy: "We carry out the agreed fixes, content updates and improvements to usability or speed. We check affected features before and after release, and agree on backup or rollback arrangements for changes that carry risk", result: "Completed changes, check results and a record of what was updated" },
  { title: "See what changed", copy: "You receive a clear summary of completed work, check results and any instructions your team needs. For performance improvements, we compare relevant before-and-after measurements where reliable data is available", result: "A completed-work summary, check results and practical guidance for your team" },
] as const;

export const STRATEGY_AUDIENCES = [
  { title: "Fixing what isn’t working", copy: "Your forms fail, layouts break or integrations stop working. You need someone to investigate the cause, agree on a fix and check that it works" },
  { title: "Keeping your site up to date", copy: "Your team needs help updating content and maintaining the site. You want ongoing support with clear priorities, agreed response times and a record of completed work" },
  { title: "Finding what to improve", copy: "Visitors struggle to find information or complete key actions. You need a review of usability, speed and available analytics to prioritise changes worth making" },
] as const;

export const STRATEGY_STEPS = [
  { title: "Share your request", copy: "Tell us what needs fixing or improving. We review your request and confirm what we need to get started" },
  { title: "Agree & proceed", copy: "We agree on tasks, cost and timing, then get to work and keep you updated" },
  { title: "Review the result", copy: "We show you the completed changes, explain the check results and share any instructions needed" },
] as const;

export const STRATEGY_FAQ = [
  { question: "Can you support a website you didn’t build?", answer: "Yes. We review the platform, setup and available access to confirm how we can help. You don’t need to rebuild your website just to work with us" },
  { question: "Do we need ongoing support, or can we book a one-off task?", answer: "Both options are available. We can handle an individual fix or update, or arrange regular support for maintenance and improvements. We agree on the tasks, budget and reporting before starting" },
  { question: "How quickly can you help?", answer: "We confirm availability and expected timing after reviewing your request. For ongoing support, we agree on response times in advance. The time needed to resolve an issue depends on its complexity and any third-party involvement" },
  { question: "What if the issue is bigger than expected?", answer: "We explain what we’ve found and how it affects the work, cost or timing. Any additional work is agreed with you before we proceed, so you stay in control of the budget" },
  { question: "How will we know what has improved?", answer: "You receive a summary of completed changes and check results. Where reliable data is available, we compare relevant measures before and after the work. Traffic and sales also depend on factors beyond website support, so we don’t guarantee increases" },
] as const;
