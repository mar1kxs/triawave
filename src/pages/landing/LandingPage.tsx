import { SiteImage } from "../../components/ui/SiteImage";
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
import "./landing-hero.css";
import { LandingFlow } from "./LandingFlow";
import { ServiceProcessSection } from "../shared/ServiceProcessSection";

const LANDING_PROJECTS = [
  { image: "/projects/strategy-project-03.png", hoverImage: "/projects/strategy-hover-02.png", title: "COSMOVAR", alt: "Beauty and aesthetics website displayed on a laptop", tags: ["Beauty & Aesthetics", "UX/UI", "App Development"] },
  { image: "/projects/uiux-liva-beauty.png", hoverImage: "/projects/uiux-hover-liva-beauty.png", title: "LIVA-BEAUTY", alt: "Beauty and ritual website displayed on a laptop", tags: ["Beauty Salon", "UX/UI", "Web Development"] },
  { image: "/projects/uiux-schooltogo.png", hoverImage: "/projects/uiux-hover-schooltogo.png", title: "SCHOOLTOGO.ONLINE", alt: "Online school website displayed on a smartphone", tags: ["Online School", "UX/UI", "Web Development"] },
  { image: "/projects/strategy-project-04.png", hoverImage: "/projects/strategy-hover-01.png", title: "BML-LAB", alt: "Digital pathology website displayed on a desktop computer", tags: ["Digital Pathology", "UX/UI", "App Development"] },
] as const;

export default function LandingPage() {
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
    <main className="inner-page strategy-page landing-page" ref={pageRef}>
      <MathGrid className="service-hero service-hero-grid">
        <div className="strategy-breadcrumb"><span><span className="strategy-breadcrumb-parent">Services</span> / Landing Page Design &amp; Development</span><span>Triawave Studio</span></div>
        <div className="service-hero-layout">
          <div className="service-hero-text">
            <h1 id="landing-title">Built for<br /><span>One clear action</span></h1>
            <div className="service-hero-copy"><p>We design and build landing pages that explain your offer and guide visitors towards an enquiry, booking, registration or purchase. From page structure to launch, we create the design or work from your approved layouts</p><AppLink className="button" href={SITE.contactUrl}>Discuss your landing page</AppLink></div>
          </div>
          <LandingFlow />
        </div>
      </MathGrid>
      <section className="strategy-projects" aria-labelledby="strategy-projects-title">
        <div className="strategy-projects-heading">
          <span>01 / Selected work</span>
          <h2 id="strategy-projects-title">Projects</h2>
          <span>X:01 / Y:Work</span>
        </div>
        <div className="strategy-projects-grid">
          {LANDING_PROJECTS.map((project, index) => <div className="strategy-project-placeholder service-project-card" role="img" aria-label={`${project.title}. ${project.alt}`} key={project.title}>
            <SiteImage className="service-project-card-image" src={project.image} alt="" aria-hidden="true" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            <SiteImage className="service-project-card-hover-image" src={project.hoverImage} alt="" aria-hidden="true" fetchPriority="low" loading="lazy" decoding="async" />
            <span className="service-project-card-label" aria-hidden="true">{project.title}</span>
            <div className="service-project-card-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>)}
        </div>
      </section>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="02" title="Who it’s for" axis="Audience" />
        <div className="strategy-start-copy">
          <h2>One offer<br />a focused page</h2>
          <p></p>
        </div>
        <div className="strategy-audiences">{STRATEGY_AUDIENCES.map((item, index) => <article key={item.title}>
          <span className="strategy-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
        </article>)}</div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="03" title="What you get" axis="Landing page" />
        <div className="strategy-deliverables-heading"><h2>Designed with purpose<br />ready to launch</h2><p className="strategy-scope">You get a landing page that presents your offer clearly and gives visitors a straightforward way to respond—with responsive design, a working enquiry, booking or purchase flow, and guidance for everyday updates</p></div>
        <div className="strategy-deliverable-list" ref={deliverablesRef}>{DELIVERABLES.map((item, index) => <article className={`strategy-deliverable${index % 2 ? " strategy-deliverable-dark" : ""}`} key={item.title}>
          <span className="strategy-deliverable-label">Chapter 0{index + 1} / 04</span>
          <div className="strategy-deliverable-copy"><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span>{item.result}</p></div>
          <StrategyCubes variant={index} />
        </article>)}</div>
      </section>
      <ServiceProcessSection steps={STRATEGY_STEPS} headingNouns={["plan", "build", "launch"]} />
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{STRATEGY_FAQ.map((item,index)=><StrategyFaqItem key={index} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <InnerPageCTA description="What are you promoting, and what should visitors do next? Share your offer—we’ll help shape a focused page around it" buttonLabel="Discuss your landing page" />
    </main>
    <Footer />
  </Shell>;
}
