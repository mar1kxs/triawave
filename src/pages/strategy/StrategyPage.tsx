import { SITE } from "../../config/site";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import MathGrid from "../../components/ui/MathGrid/MathGrid";
import { InnerPageCTA, InnerSectionLabel } from "../shared/InnerPageCTA";
import { DELIVERABLES, STRATEGY_FAQ, STRATEGY_STEPS } from "./content";

export default function StrategyPage() {
  return <Shell>
    <main className="inner-page strategy-page">
      <MathGrid className="strategy-hero">
        <div className="strategy-breadcrumb"><span>Services / Website Strategy</span><span>Triawave Studio</span></div>
        <h1>Good websites<br /><span>start with clarity</span></h1>
        <div className="strategy-hero-bottom">
          <div className="strategy-signature"><img src="/assets/about-approach-cubes.svg" alt="" width="96" height="96" /><span>Good thinking<br />Made tangible</span></div>
          <div className="strategy-hero-copy"><p>We help you decide which pages you need, what they should say and how visitors find their way to an enquiry or purchase</p><AppLink className="button" href={`mailto:${SITE.email}`}>Discuss your website</AppLink></div>
        </div>
        <div className="strategy-hero-meta"><span>Strategy / Design / Development</span><AppLink href="#strategy-start">Explore the service ↓</AppLink></div>
      </MathGrid>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="01" title="The right start" axis="Audience" />
        <div className="strategy-start-copy"><h2>Before you invest in a website, <br />know what you’re building. And why</h2><div className="strategy-useful"><p>Especially useful for</p><ul><li>Launching a new business</li><li>Planning a website redesign</li><li>Making a complex offer clear</li></ul></div></div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="02" title="What you get" axis="Deliverables" />
        <h2>A clear plan<br />for your website</h2><p className="strategy-section-intro">A practical foundation for your website. Clear enough to <br />move into design, detailed enough to keep everyone aligned</p>
        <div>{DELIVERABLES.map((item, index) => <article className="strategy-deliverable" key={item.title}><span className="strategy-number">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span> {item.result}</p></div></article>)}</div>
        <p className="strategy-scope">Scope, timeline and pricing are agreed before we begin. Design, development, full copywriting and ongoing SEO are quoted separately</p>
      </section>
      <section className="strategy-work">
        <div className="strategy-work-heading"><InnerSectionLabel number="03" title="Selected work" axis="Work" /><h2>Thinking, made visible</h2><p className="strategy-section-intro">Selected projects showing how we bring <br />structure, content and design together</p></div>
        <div className="strategy-project-strip" aria-label="Selected project image placeholders"><div aria-hidden="true" /><div><h3>Architecture & interiors</h3></div><div><h3>Beauty & e-commerce</h3></div></div>
      </section>
      <section className="strategy-process">
        <InnerSectionLabel number="04" title="Working with us" axis="Process" />
        <div className="strategy-process-grid"><h2><span>A</span> conversation<br /><span>A</span> direction<br /><span>A</span> plan</h2><div className="strategy-step-grid">{STRATEGY_STEPS.map((step,index)=><article key={step.title}><span className="strategy-number">0{index+1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div>
      </section>
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{STRATEGY_FAQ.map((item,index)=><details key={index}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div>
      </section>
      <InnerPageCTA />
    </main>
    <Footer />
  </Shell>;
}
