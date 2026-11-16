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
import "./strategy-light.css";
import "./strategy-showcase.css";
import "./support-hero.css";
import { SupportDashboard } from "./SupportDashboard";
import { ServiceProcessSection } from "../shared/ServiceProcessSection";

const SUPPORT_PROJECTS = [
  { image: "/projects/ecommerce-kuberg.png", hoverImage: "/projects/ecommerce-kuberg-hover.png", title: "KUBERG APP", alt: "Electric motorcycle app displayed on a smartphone", tags: ["Electric Motorcycles", "UX/UI", "App Development"] },
  { image: "/projects/custom-tuscany-hover.png", hoverImage: "/projects/custom-tuscany.png", title: "Tuscany Photo Tours", alt: "Tuscany photo tours website displayed on a laptop", tags: ["Travel Platform", "UX/UI", "Web Development"] },
  { image: "/projects/wix-kyiv-energy.png", hoverImage: "/projects/wix-kyiv-energy-hover.png", title: "KYIV ENERGY", alt: "Kyiv Energy website displayed on a laptop", tags: ["Energy Solutions", "UX/UI", "App Development"] },
  { image: "/projects/uiux-schooltogo.png", hoverImage: "/projects/uiux-hover-schooltogo.png", title: "SCHOOLTOGO.ONLINE", alt: "Online school website displayed on a smartphone", tags: ["Online School", "UX/UI", "Web Development"] },
] as const;

export default function WebsiteSupportPage() {
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
    <main className="inner-page strategy-page support-page" ref={pageRef}>
      <MathGrid className="support-hero service-hero-grid">
        <div className="strategy-breadcrumb"><span><span className="strategy-breadcrumb-parent">Services</span> / Website Support &amp; Optimization</span><span>Triawave Studio</span></div>
        <div className="support-hero-layout">
          <div className="support-hero-text">
            <h1 id="support-title">Keep your website<br /><span>working and improving</span></h1>
            <div className="support-hero-copy"><p>We fix issues, update content and improve usability and performance on existing websites—including those built by other teams. We review your setup, agree on priorities and provide one-off help or ongoing support with clear reporting</p><AppLink className="button" href={`mailto:${SITE.email}`}>Discuss your website</AppLink></div>
          </div>
          <SupportDashboard />
        </div>
      </MathGrid>
      <section className="strategy-projects" aria-labelledby="strategy-projects-title">
        <div className="strategy-projects-heading">
          <span>01 / Selected work</span>
          <h2 id="strategy-projects-title">Projects</h2>
          <span>X:01 / Y:Work</span>
        </div>
        <div className="strategy-projects-grid">
          {SUPPORT_PROJECTS.map((project, index) => <div className="strategy-project-placeholder support-project-card" role="img" aria-label={`${project.title}. ${project.alt}`} key={project.title}>
            <SiteImage className="support-project-card-image" src={project.image} alt="" aria-hidden="true" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            <SiteImage className="support-project-card-hover-image" src={project.hoverImage} alt="" aria-hidden="true" fetchPriority="low" loading="lazy" decoding="async" />
            <span className="support-project-card-label" aria-hidden="true">{project.title}</span>
            <div className="support-project-card-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>)}
        </div>
      </section>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="02" title="Who it’s for" axis="Audience" />
        <div className="strategy-start-copy">
          <h2>When your site<br />needs attention</h2>
          <p></p>
        </div>
        <div className="strategy-audiences">{STRATEGY_AUDIENCES.map((item, index) => <article key={item.title}>
          <span className="strategy-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
        </article>)}</div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="03" title="What you get" axis="Site care" />
        <div className="strategy-deliverables-heading"><h2>Clear priorities<br />checked improvements</h2><p className="strategy-scope">Get practical help with your website, from individual fixes to ongoing improvements. You know what will change, what it will cost and how the completed work has been checked</p></div>
        <div className="strategy-deliverable-list" ref={deliverablesRef}>{DELIVERABLES.map((item, index) => <article className={`strategy-deliverable${index % 2 ? " strategy-deliverable-dark" : ""}`} key={item.title}>
          <span className="strategy-deliverable-label">Chapter 0{index + 1} / 04</span>
          <div className="strategy-deliverable-copy"><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span>{item.result}</p></div>
          <StrategyCubes variant={index} />
        </article>)}</div>
      </section>
      <ServiceProcessSection steps={STRATEGY_STEPS} headingNouns={["request", "plan", "result"]} />
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{STRATEGY_FAQ.map((item,index)=><StrategyFaqItem key={index} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <InnerPageCTA description="Tell us what needs fixing, updating or improving. We’ll review your request and suggest the next steps for one-off help or ongoing support" buttonLabel="Discuss website support" />
    </main>
    <Footer />
  </Shell>;
}
