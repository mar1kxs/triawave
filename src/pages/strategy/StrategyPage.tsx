import { SiteImage } from "../../components/ui/SiteImage";
import { useEffect, useRef } from "react";
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
import { ServiceProcessSection } from "../shared/ServiceProcessSection";
import "./strategy-light.css";
import "./strategy-showcase.css";

const STRATEGY_PROJECTS = [
  {
    title: "CAPYCASINO",
    image: "/projects/strategy-project-01.png",
    hoverImage: "/projects/strategy-hover-04.png",
    alt: "CAPYCASINO sweepstakes casino app displayed on a tablet",
    tags: ["Sweepstakes Casino", "UX/UI", "Web Development"],
  },
  {
    title: "deftechcluster",
    image: "/projects/strategy-project-02.png",
    hoverImage: "/projects/strategy-hover-03.png",
    alt: "deftechcluster innovation platform displayed on a smartphone",
    tags: ["Defense Tech", "UX/UI", "Web Development"],
  },
  {
    title: "COSMOVAR",
    image: "/projects/strategy-project-03.png",
    hoverImage: "/projects/strategy-hover-02.png",
    alt: "COSMOVAR beauty and aesthetics website displayed on a laptop",
    tags: ["Beauty & Aesthetics", "UX/UI", "Web Development"],
  },
  {
    title: "BML-LAB",
    image: "/projects/strategy-project-04.png",
    hoverImage: "/projects/strategy-hover-01.png",
    alt: "BML-LAB digital pathology website displayed on a desktop computer",
    tags: ["Digital Pathology", "UX/UI", "Web Development"],
  },
] as const;

export default function StrategyPage() {
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
  return <Shell>
    <main className="inner-page strategy-page" ref={pageRef}>
      <MathGrid className="strategy-hero">
        <div className="strategy-breadcrumb"><span><span className="strategy-breadcrumb-parent">Services</span> / Website Strategy</span><span>Triawave Studio</span></div>
        <h1>Good websites<br /><span>start with clarity</span></h1>
        <div className="strategy-hero-copy"><p>We turn your business goals into a clear website plan: what to build, what each page needs to communicate and what to prioritise. You leave with a practical brief your team can use to scope, design and develop the site</p><AppLink className="button" href={`mailto:${SITE.email}`}>Discuss your website</AppLink></div>
        <div className="strategy-signature"><SiteImage src="/assets/strategy-signature.svg" alt="" width="90.1028" height="90.5542" /><span>Good thinking<br />Made tangible</span></div>
      </MathGrid>
      <section className="strategy-projects" aria-labelledby="strategy-projects-title">
        <div className="strategy-projects-heading">
          <span>01 / Selected work</span>
          <h2 id="strategy-projects-title">Projects</h2>
          <span>X:01 / Y:Work</span>
        </div>
        <div className="strategy-projects-grid">
          {STRATEGY_PROJECTS.map((project, index) => <div className="strategy-project-placeholder strategy-project-card" role="img" aria-label={`${project.title}. ${project.alt}`} key={project.title}>
              <SiteImage className="strategy-project-card-image" src={project.image} alt="" aria-hidden="true" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              <SiteImage className="strategy-project-card-hover-image" src={project.hoverImage} alt="" aria-hidden="true" fetchPriority="low" loading="lazy" decoding="async" />
            <span className="strategy-project-card-label" aria-hidden="true">{project.title}</span>
            <div className="strategy-project-card-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>)}
        </div>
      </section>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="02" title="The right start" axis="Audience" />
        <div className="strategy-start-copy">
          <h2>Know what you need <br />before you invest</h2>
        </div>
        <div className="strategy-audiences">{STRATEGY_AUDIENCES.map((item, index) => <article key={item.title}>
          <span className="strategy-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
        </article>)}</div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="03" title="What you get" axis="Deliverables" />
        <div className="strategy-deliverables-heading"><h2>A plan your team<br />can work from</h2><p className="strategy-scope">You get a clear set of decisions about your website’s goals, pages, content and launch priorities—brought together in a brief your team can use to move the project forward</p></div>
        <div className="strategy-deliverable-list" ref={deliverablesRef}>{DELIVERABLES.map((item, index) => <article className={`strategy-deliverable${index % 2 ? " strategy-deliverable-dark" : ""}`} key={item.title}>
          <span className="strategy-deliverable-label">Chapter 0{index + 1} / 04</span>
          <div className="strategy-deliverable-copy"><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span>{item.result}</p></div>
          <StrategyCubes variant={index} />
        </article>)}</div>
      </section>
      <ServiceProcessSection steps={STRATEGY_STEPS} headingNouns={["review", "direction", "plan"]} />
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{STRATEGY_FAQ.map((item,index)=><StrategyFaqItem key={index} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <InnerPageCTA description="Not sure what your website needs? Tell us about your business and goals. We’ll help identify the priorities and a practical way forward" />
    </main>
    <Footer />
  </Shell>;
}
