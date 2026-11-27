import { ServiceProjectCard } from "../shared/ServiceProjectCard";
import { projectsFor } from "../../data/projects";
import { useEffect, useRef } from "react";
import MathGrid from "../../components/ui/MathGrid/MathGrid";
import "../shared/service-hero-grid.css";
import { SITE } from "../../config/site";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import { InnerPageCTA, InnerSectionLabel } from "../shared/InnerPageCTA";
import { DELIVERABLES, STRATEGY_AUDIENCES, STRATEGY_FAQ, STRATEGY_STEPS } from "./content";
import { useDeliverableMotion } from "./useDeliverableMotion";
import { StrategyFaqItem } from "./StrategyFaqItem";
import { StrategyCubes } from "./StrategyCubes";
import "./custom-hero.css";
import { CustomEditor } from "./CustomEditor";
import { ServiceProcessSection } from "../shared/ServiceProcessSection";

const CUSTOM_PROJECTS = projectsFor("custom");

export default function CustomWebDevelopmentPage() {
  const deliverablesRef = useDeliverableMotion();
  const pageRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const page = pageRef.current;
    const header = document.querySelector<HTMLElement>(".site-header");
    const referral = document.querySelector<HTMLElement>(".referral-bar");
    if (!page || !header) return;
    const measure = () => {
      const height = header.offsetHeight + (referral?.isConnected ? referral.offsetHeight : 0);
      page.style.setProperty("--strategy-header-height", `${height}px`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    if (referral) observer.observe(referral);
    measure();
    return () => observer.disconnect();
  }, []);
  return <Shell showReferral={false}>
    <main className="inner-page strategy-page custom-page" ref={pageRef}>
      <MathGrid className="service-hero service-hero-grid">
        <div className="strategy-breadcrumb"><span><span className="strategy-breadcrumb-parent">Services</span> / Custom Web Development</span><span>Triawave Studio</span></div>
        <div className="service-hero-layout">
          <div className="service-hero-text">
            <h1 id="custom-title">Built around<br />how your<br /><span>Business works</span></h1>
            <div className="service-hero-copy"><p>We design and build custom websites and web applications—or work from your approved layouts. We develop the features and integrations your business needs, test and launch the project, then hand over the source code and documentation</p><AppLink className="button" href={SITE.contactUrl}>Discuss your project</AppLink></div>
          </div>
          <CustomEditor />
        </div>
      </MathGrid>
      <section className="strategy-projects" aria-labelledby="strategy-projects-title">
        <div className="strategy-projects-heading">
          <span>01 / Selected work</span>
          <h2 id="strategy-projects-title">Projects</h2>
          <span>X:01 / Y:Work</span>
        </div>
        <div className="strategy-projects-grid">
          {CUSTOM_PROJECTS.map((project, index) => <ServiceProjectCard project={project} context={"custom"} index={index} key={project.id} />)}
        </div>
      </section>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="02" title="Who it’s for" axis="Audience" />
        <div className="strategy-start-copy">
          <h2>When your project <br />needs a custom build</h2>
          <p></p>
        </div>
        <div className="strategy-audiences">{STRATEGY_AUDIENCES.map((item, index) => <article key={item.title}>
          <span className="strategy-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
        </article>)}</div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="03" title="What you get" axis="Deliverables" />
        <div className="strategy-deliverables-heading"><h2>Custom-built<br />ready to launch</h2><p className="strategy-scope">You get a website or web application built around your requirements, with tested features, source code and documentation to support everyday operation and future development</p></div>
        <div className="strategy-deliverable-list" ref={deliverablesRef}>{DELIVERABLES.map((item, index) => <article className={`strategy-deliverable${index % 2 ? " strategy-deliverable-dark" : ""}`} key={item.title}>
          <span className="strategy-deliverable-label">Chapter 0{index + 1} / 04</span>
          <div className="strategy-deliverable-copy"><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span>{item.result}</p></div>
          <StrategyCubes variant={index} />
        </article>)}</div>
      </section>
      <ServiceProcessSection steps={STRATEGY_STEPS} headingNouns={["define it", "build it", "hand it over"]} />
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{STRATEGY_FAQ.map((item,index)=><StrategyFaqItem key={index} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <InnerPageCTA description="Tell us what you want to build and how it needs to work. We’ll help clarify the features, technical approach and next steps" buttonLabel="Discuss your website" />
    </main>
    <Footer />
  </Shell>;
}
