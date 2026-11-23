import { SiteImage } from "../../components/ui/SiteImage";
import { useEffect, useRef } from "react";
import MathGrid from "../../components/ui/MathGrid/MathGrid";
import "../shared/service-hero-grid.css";
import { SITE } from "../../config/site";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import { InnerPageCTA, InnerSectionLabel } from "../shared/InnerPageCTA";
import { DELIVERABLES as WEBFLOW_DELIVERABLES, STRATEGY_AUDIENCES as WEBFLOW_AUDIENCES, STRATEGY_FAQ as WEBFLOW_FAQ, STRATEGY_STEPS as WEBFLOW_STEPS, WIX_AUDIENCES, WIX_DELIVERABLES, WIX_FAQ, WIX_STEPS } from "./content";
import { useDeliverableMotion } from "./useDeliverableMotion";
import { StrategyFaqItem } from "./StrategyFaqItem";
import { StrategyCubes } from "./StrategyCubes";
import "./wix-hero.css";
import { WixEditor } from "./WixEditor";
import { ServiceProcessSection } from "../shared/ServiceProcessSection";

const WIX_PROJECTS = [
  { image: "/projects/wix-panegrip.png", hoverImage: "/projects/wix-panegrip-hover.png", title: "Panegrip.dev", alt: "AI developer tools website displayed on a desktop monitor", tags: ["AI Developer Tools", "UX/UI", "App Development"] },
  { image: "/projects/strategy-project-02.png", hoverImage: "/projects/strategy-hover-03.png", title: "DEFTECHCLUSTER", alt: "Defense technology platform displayed on a smartphone", tags: ["Defense Tech", "UX/UI", "Web Development"] },
  { image: "/projects/wix-kyiv-energy.png", hoverImage: "/projects/wix-kyiv-energy-hover.png", title: "KYIV ENERGY", alt: "Kyiv Energy website displayed on a laptop", tags: ["Energy Solutions", "UX/UI", "Web Development"] },
  { image: "/projects/strategy-project-03.png", hoverImage: "/projects/strategy-hover-02.png", title: "COSMOVAR", alt: "Cosmovar beauty and aesthetics website displayed on a laptop", tags: ["Beauty & Aesthetics", "UX/UI", "Web Development"] },
] as const;

const WEBFLOW_PROJECTS = [
  { image: "/projects/wix-panegrip.png", hoverImage: "/projects/wix-panegrip-hover.png", title: "Panegrip.dev", alt: "AI developer tools website displayed on a desktop monitor", tags: ["AI Developer Tools", "UX/UI", "App Development"] },
  { image: "/projects/custom-tuscany-hover.png", hoverImage: "/projects/custom-tuscany.png", title: "Tuscany Photo Tours", alt: "Tuscany photo tours website displayed on a laptop", tags: ["Travel Platform", "UX/UI", "Web Development"] },
  { image: "/projects/wix-kyiv-energy.png", hoverImage: "/projects/wix-kyiv-energy-hover.png", title: "KYIV ENERGY", alt: "Kyiv Energy website displayed on a laptop", tags: ["Energy Solutions", "UX/UI", "App Development"] },
  { image: "/projects/uiux-liva-beauty.png", hoverImage: "/projects/uiux-hover-liva-beauty.png", title: "LIVA-BEAUTY", alt: "Beauty and ritual website displayed on a laptop", tags: ["Beauty Salon", "UX/UI", "Web Development"] },
] as const;

export default function WixPage({ platform = "Wix Studio" }: { platform?: "Wix Studio" | "Webflow" }) {
  const isWixStudio = platform === "Wix Studio";
  const pageContent = isWixStudio
    ? { deliverables: WIX_DELIVERABLES, audiences: WIX_AUDIENCES, steps: WIX_STEPS, faq: WIX_FAQ }
    : { deliverables: WEBFLOW_DELIVERABLES, audiences: WEBFLOW_AUDIENCES, steps: WEBFLOW_STEPS, faq: WEBFLOW_FAQ };
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
    <main className={`inner-page strategy-page wix-page${platform === "Webflow" ? " webflow-page" : ""}`} ref={pageRef}>
      <MathGrid className="service-hero service-hero-grid">
        <div className="strategy-breadcrumb"><span><span className="strategy-breadcrumb-parent">Services</span> / {platform === "Webflow" ? "Webflow Development" : "Wix & Wix Studio Development"}</span><span>Triawave Studio</span></div>
        <div className="service-hero-layout">
          <div className="service-hero-text">
            <h1 id="wix-title">{isWixStudio ? <>Built for your<br />business<br /><span>easy to manage</span></> : <>Your brand<br /><span>built in {platform}</span></>}</h1>
            <div className="service-hero-copy"><p>{isWixStudio ? "We design and build websites in Wix Studio, or bring your approved layouts to life. We create responsive pages and use Wix Velo for custom functionality where needed. After launch, we show your team how to update content without coding" : "We design your website from scratch and build it in Webflow—or work from your existing designs. We create responsive pages, set up CMS and interactions, launch the site and show your team how to update its content"}</p><AppLink className="button" href={SITE.contactUrl}>Discuss your website</AppLink></div>
          </div>
          <WixEditor platform={platform} />
        </div>
      </MathGrid>
      <section className="strategy-projects" aria-labelledby="strategy-projects-title">
        <div className="strategy-projects-heading">
          <span>01 / Selected work</span>
          <h2 id="strategy-projects-title">Projects</h2>
          <span>X:01 / Y:Work</span>
        </div>
        <div className="strategy-projects-grid">
          {(platform === "Wix Studio" ? WIX_PROJECTS : WEBFLOW_PROJECTS).map((project, index) => <div className="strategy-project-placeholder service-project-card" role="img" aria-label={`${project.title}. ${project.alt}`} key={project.title}>
            <SiteImage className="service-project-card-image" src={project.image} alt="" aria-hidden="true" loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            <SiteImage className="service-project-card-hover-image" src={project.hoverImage} alt="" aria-hidden="true" fetchPriority="low" loading="lazy" decoding="async" />
            <span className="service-project-card-label" aria-hidden="true">{project.title}</span>
            <div className="service-project-card-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          </div>)}
        </div>
      </section>
      <section className="strategy-start" id="strategy-start">
        <InnerSectionLabel number="02" title={isWixStudio ? "The right start" : "Who it’s for"} axis="Audience" />
        <div className="strategy-start-copy">
          <h2>{isWixStudio ? <>A website that fits<br />the way you work</> : <>A new website<br />or a new chapter</>}</h2>
          {!isWixStudio && <p></p>}
        </div>
        <div className="strategy-audiences">{pageContent.audiences.map((item, index) => <article key={item.title}>
          <span className="strategy-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
        </article>)}</div>
      </section>
      <section className="strategy-deliverables">
        <InnerSectionLabel number="03" title="What you get" axis="Deliverables" />
        <div className="strategy-deliverables-heading"><h2>{isWixStudio ? <>Built for your business<br />ready to go live</> : <>Designed for your brand<br />built for your team</>}</h2><p className="strategy-scope">{isWixStudio ? "From design to launch, you get a responsive website with the features your business needs—and practical guidance so your team can manage its content" : "You get a responsive Webflow website with reusable components, content tools set up for your team and practical guidance for everyday updates"}</p></div>
        <div className="strategy-deliverable-list" ref={deliverablesRef}>{pageContent.deliverables.map((item, index) => <article className={`strategy-deliverable${index % 2 ? " strategy-deliverable-dark" : ""}`} key={item.title}>
          <span className="strategy-deliverable-label">Chapter 0{index + 1} / 04</span>
          <div className="strategy-deliverable-copy"><h3>{item.title}</h3><p>{item.copy}</p><p className="strategy-result"><span>You get</span>{item.result}</p></div>
          <StrategyCubes variant={index} />
        </article>)}</div>
      </section>
      <ServiceProcessSection steps={pageContent.steps} headingNouns={["plan", "build", "launch"]} />
      <section className="strategy-faq">
        <InnerSectionLabel number="05" title="A little more clarity" axis="FAQ" />
        <div className="strategy-faq-grid"><h2>Good questions<br />straight answers</h2><div>{pageContent.faq.map((item,index)=><StrategyFaqItem key={index} question={item.question} answer={item.answer} />)}</div></div>
      </section>
      <InnerPageCTA description={isWixStudio ? "Need a new site, a redesign or features that better support your business? Tell us what you need—we’ll help define the right Wix approach" : "Share your idea, designs or existing website. We’ll help define the design, development and content setup your Webflow project needs"} buttonLabel={isWixStudio ? "Discuss your website" : undefined} />
    </main>
    <Footer />
  </Shell>;
}

export function WebflowPage() { return <WixPage platform="Webflow" />; }
