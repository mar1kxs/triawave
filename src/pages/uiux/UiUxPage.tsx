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
import { UiUxHeroCubes } from "./UiUxHeroCubes";
import { ServiceProcessSection } from "../shared/ServiceProcessSection";
import "./strategy-light.css";
import "./strategy-showcase.css";

const UIUX_PROJECTS = [
  { image: "/projects/strategy-project-02.png", hoverImage: "/projects/strategy-hover-03.png", title: "deftechcluster", alt: "Defense technology platform displayed on a smartphone", tags: ["Defense Tech", "UX/UI", "Web Development"] },
  { image: "/projects/strategy-project-01.png", hoverImage: "/projects/strategy-hover-04.png", title: "CAPYCASINO", alt: "Sweepstakes casino app displayed on a smartphone", tags: ["Sweepstakes Casino", "UX/UI", "Web Development"] },
  { image: "/projects/uiux-schooltogo.png", hoverImage: "/projects/uiux-hover-schooltogo.png", title: "SCHOOLTOGO.ONLINE", alt: "Online school website displayed on a smartphone", tags: ["Online School", "UX/UI", "Web Development"] },
  { image: "/projects/uiux-liva-beauty.png", hoverImage: "/projects/uiux-hover-liva-beauty.png", title: "LIVA-BEAUTY", alt: "Beauty and ritual website displayed on a laptop", tags: ["Beauty Salon", "UX/UI", "Web Development"] },
] as const;

export default function UiUxPage() {
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
        <div className="strategy-breadcrumb"><span><span className="strategy-breadcrumb-parent">Services</span> / UI/UX &amp; Web Design</span><span>Triawave Studio</span></div>
        <h1>EASY TO USE<br /><span>DISTINCTLY YOURS</span></h1>
        <div className="strategy-hero-copy"><p>We design websites and web interfaces that reflect your brand, explain your offer and make the next step clear. You get responsive designs ready for development by your team or ours</p><AppLink className="button" href={`mailto:${SITE.email}`}>Discuss your website</AppLink></div>
        <UiUxHeroCubes />
      </MathGrid>
      <section className="strategy-projects" aria-labelledby="strategy-projects-title">
        <div className="strategy-projects-heading">
          <span>01 / Selected work</span>
          <h2 id="strategy-projects-title">Projects</h2>
          <span>X:01 / Y:Work</span>
        </div>
        <div className="strategy-projects-grid">
          {UIUX_PROJECTS.map((project, index) => <div className="strategy-project-placeholder uiux-project-card" role="img" aria-label={`${project.title}. ${project.alt}`} key={project.title}>
            <SiteImage className="uiux-project-card-image" src={project.image} alt="" aria-hidden="true" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            <SiteImage className="uiux-project-card-hover-image" src={project.hoverImage} alt="" aria-hidden="true" fetchPriority="low" loading="lazy" decoding="async" />
            <span className="uiux-project-card-label" aria-hidden="true">{project.title}</span>
            <div className="uiux-project-card-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>)}
        </div>
      </section>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="02" title="WHO IT’S FOR" axis="Audience" />
        <div className="strategy-start-copy">
          <h2>DESIGN FOR YOUR<br />NEXT WEBSITE</h2>
        </div>
        <div className="strategy-audiences">{STRATEGY_AUDIENCES.map((item, index) => <article key={item.title}>
          <span className="strategy-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
        </article>)}</div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="03" title="What you get" axis="Deliverables" />
        <div className="strategy-deliverables-heading"><h2>THOUGHTFUL DESIGN<br />READY TO BUILD</h2><p className="strategy-scope">This service covers UX structure, visual design and developer handoff. Pages, responsive layouts, scope, fee and timeline are agreed before work begins. Development, copywriting and user testing are scoped separately</p></div>
        <div className="strategy-deliverable-list" ref={deliverablesRef}>{DELIVERABLES.map((item, index) => <article className={`strategy-deliverable${index % 2 ? " strategy-deliverable-dark" : ""}`} key={item.title}>
          <span className="strategy-deliverable-label">Chapter 0{index + 1} / 04</span>
          <div className="strategy-deliverable-copy"><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span>{item.result}</p></div>
          <StrategyCubes variant={index} />
        </article>)}</div>
      </section>
      <ServiceProcessSection steps={STRATEGY_STEPS} headingNouns={["brief", "design", "handover"]} />
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{STRATEGY_FAQ.map((item,index)=><StrategyFaqItem key={index} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <InnerPageCTA description="Planning a new website or rethinking your current one? Share your goals, references or brief. We’ll help define the design direction" buttonLabel="Discuss your design project" />
    </main>
    <Footer />
  </Shell>;
}
