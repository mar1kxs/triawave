import { SITE } from "../../config/site";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import MathGrid from "../../components/ui/MathGrid/MathGrid";
import { InnerPageCTA, InnerSectionLabel } from "../shared/InnerPageCTA";
import { DELIVERABLES, STRATEGY_AUDIENCES, STRATEGY_FAQ, STRATEGY_STEPS } from "./content";
import { useDeliverableMotion } from "./useDeliverableMotion";
import { StrategyFaqItem } from "./StrategyFaqItem";
import { StrategyCubes } from "./StrategyCubes";
import "./strategy-light.css";
import "./strategy-showcase.css";

export default function StrategyPage() {
  const deliverablesRef = useDeliverableMotion();
  return <Shell>
    <main className="inner-page strategy-page">
      <MathGrid className="strategy-hero">
        <div className="strategy-breadcrumb"><span><span className="strategy-breadcrumb-parent">Services</span> / Website Strategy</span><span>Triawave Studio</span></div>
        <h1>Good websites<br /><span>start with clarity</span></h1>
        <div className="strategy-hero-copy"><p>We help you decide what your website should achieve, which pages it needs and what each page should say — before design and development begin</p><AppLink className="button" href={`mailto:${SITE.email}`}>Discuss your website</AppLink></div>
        <div className="strategy-signature"><img src="/assets/strategy-signature.svg" alt="" width="90.1028" height="90.5542" /><span>Good thinking<br />Made tangible</span></div>
      </MathGrid>
      <section className="strategy-projects" aria-labelledby="strategy-projects-title">
        <div className="strategy-projects-heading">
          <span>01 / Selected work</span>
          <h2 id="strategy-projects-title">Projects</h2>
          <span>X:01 / Y:Work</span>
        </div>
        <div className="strategy-projects-grid" aria-hidden="true">
          {[0, 1, 2, 3].map((index) => <div className="strategy-project-placeholder" key={index} />)}
        </div>
      </section>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="02" title="The right start" axis="Audience" />
        <div className="strategy-start-copy">
          <h2>Know what you need <br />before you invest</h2>
          <p>Strategy is useful when the next step is unclear. We turn business goals and scattered ideas into a practical plan for the website</p>
        </div>
        <div className="strategy-audiences">{STRATEGY_AUDIENCES.map((item, index) => <article key={item.title}>
          <span className="strategy-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
        </article>)}</div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="03" title="What you get" axis="Deliverables" />
        <div className="strategy-deliverables-heading"><h2>A plan your team<br />can work from</h2><p className="strategy-scope">Strategy does not automatically include visual design, development, full copywriting or ongoing SEO. Scope and timing are agreed before work begins</p></div>
        <div className="strategy-deliverable-list" ref={deliverablesRef}>{DELIVERABLES.map((item, index) => <article className={`strategy-deliverable${index % 2 ? " strategy-deliverable-dark" : ""}`} key={item.title}>
          <span className="strategy-deliverable-label">Chapter 0{index + 1} / 04</span>
          <div className="strategy-deliverable-copy"><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span>{item.result}</p></div>
          <StrategyCubes variant={index} />
        </article>)}</div>
      </section>
      <section className="strategy-process">
        <InnerSectionLabel number="04" title="Working with us" axis="Process" />
        <div className="strategy-process-grid"><h2><span>A</span> conversation<br /><span>A</span> direction<br /><span>A</span> plan</h2><div className="strategy-step-grid">{STRATEGY_STEPS.map((step,index)=><article key={step.title}><span className="strategy-number">0{index+1}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div></div>
      </section>
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{STRATEGY_FAQ.map((item,index)=><StrategyFaqItem key={index} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <InnerPageCTA />
    </main>
    <Footer />
  </Shell>;
}
