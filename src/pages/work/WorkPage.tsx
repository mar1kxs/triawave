import { DiagonalArrow } from "../../components/ui/DiagonalArrow";
import imageManifest from "../../generated/images.json";
import { SiteImage } from "../../components/ui/SiteImage";
import { useEffect, useRef, useState } from "react";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import { SITE } from "../../config/site";
import { InnerPageCTA } from "../shared/InnerPageCTA";
import "./work-page.css";

const mobileImages: Record<string, { src: string; srcSet?: string }> = imageManifest;

function CubeEdges() {
  return <svg className="work-cube-edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 22 44 0 100 17 100 78 56 100 0 83Z M0 22 56 39 100 17 M56 39V100" />
  </svg>;
}

const PROJECTS = [
  { src: "/projects/work-project-08.png", mobileSrc: "/projects/custom-tuscany-hover.png", hoverImage: "/projects/custom-tuscany.png", title: "Tuscany Photo Tours", tags: ["Travel Platform", "UX/UI", "Web Development"], alt: "Tuscany photo tours website displayed on a laptop" },
  { src: "/projects/work-project-07.png", mobileSrc: "/projects/uiux-liva-beauty.png", hoverImage: "/projects/uiux-hover-liva-beauty.png", title: "LIVA-BEAUTY", tags: ["Beauty Salon", "UX/UI", "Web Development"], alt: "Beauty and ritual website displayed on a laptop" },
  { src: "/projects/work-project-06.png", mobileSrc: "/projects/strategy-project-02.png", hoverImage: "/projects/strategy-hover-03.png", title: "deftechcluster", tags: ["Defense Tech", "UX/UI", "Web Development"], alt: "Innovation Bridges website displayed on a smartphone" },
  { src: "/projects/work-project-05.png", mobileSrc: "/projects/uiux-schooltogo.png", hoverImage: "/projects/uiux-hover-schooltogo.png", title: "SCHOOLTOGO.ONLINE", tags: ["Online School", "UX/UI", "Web Development"], alt: "Online school website displayed on a smartphone" },
  { src: "/projects/work-project-04.png", mobileSrc: "/projects/ecommerce-kuberg.png", hoverImage: "/projects/ecommerce-kuberg-hover.png", title: "KUBERG APP", tags: ["Electric Motorcycles", "UX/UI", "App Development"], alt: "Kuberg electric bike website displayed on a smartphone" },
  { src: "/projects/work-project-03.png", mobileSrc: "/projects/wix-kyiv-energy.png", hoverImage: "/projects/wix-kyiv-energy-hover.png", title: "KYIV ENERGY", tags: ["Energy Solutions", "UX/UI", "App Development"], alt: "Kyiv Energy website displayed on a tablet" },
  { src: "/projects/work-project-02.png", mobileSrc: "/projects/strategy-project-04.png", hoverImage: "/projects/strategy-hover-01.png", title: "BML-LAB", tags: ["Digital Pathology", "UX/UI", "App Development"], alt: "Medical laboratory website displayed on a desktop computer" },
  { src: "/projects/work-project-01.png", mobileSrc: "/projects/wix-panegrip.png", hoverImage: "/projects/wix-panegrip-hover.png", title: "Panegrip.dev", tags: ["AI Developer Tools", "UX/UI", "App Development"], alt: "AI coding assistant website shown on a desktop monitor" },
  { src: "/projects/work-project-10.png", mobileSrc: "/projects/strategy-project-01.png", hoverImage: "/projects/strategy-hover-04.png", title: "CAPYCASINO", tags: ["Sweepstakes Casino", "UX/UI", "App Development"], alt: "Sweepstakes casino mobile app displayed on a smartphone" },
  { src: "/projects/work-project-09.png", mobileSrc: "/projects/strategy-project-03.png", hoverImage: "/projects/strategy-hover-02.png", title: "COSMOVAR", tags: ["Beauty & Aesthetics", "UX/UI", "App Development"], alt: "Beauty and aesthetics website displayed on a laptop" },
] as const;

export default function WorkPage() {
  const [expanded, setExpanded] = useState(false);
  const firstNewProject = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".work-page");
    const header = document.querySelector<HTMLElement>(".site-header");
    const referral = document.querySelector<HTMLElement>(".referral-bar");
    if (!page || !header) return;

    const measure = () => {
      const chromeHeight = header.offsetHeight + (referral?.isConnected ? referral.offsetHeight : 0);
      page.style.setProperty("--work-top-chrome", `${chromeHeight}px`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    if (referral) observer.observe(referral);
    measure();

    return () => observer.disconnect();
  }, []);

  function showMore() {
    setExpanded(true);
    requestAnimationFrame(() => firstNewProject.current?.focus({ preventScroll: true }));
  }

  return <Shell>
    <main className="inner-page work-page">
      <section className="work-page-hero">
        <div className="work-hero-copy">
          <div className="eyebrow">01 / Portfolio</div>
          <h1>Projects</h1>
          <p>A selection of our web design and development work</p>
          <AppLink className="button work-hero-contact" href={SITE.contactUrl}>Let’s talk <span aria-hidden="true"><DiagonalArrow /></span></AppLink>
        </div>
        <div className="work-hero-art" aria-hidden="true">
          <div className="work-hero-cube work-hero-cube-dark"><i /><i /><i /><CubeEdges /></div>
          <div className="work-hero-cube work-hero-cube-pink"><i /><i /><i /><CubeEdges /></div>
          <span className="work-hero-cross" /><span className="work-hero-cross" />
          <span className="work-hero-cross" /><span className="work-hero-cross" />
        </div>
        <div className="work-hero-meta"><span>Strategy / Design / Development</span><AppLink href="#work-projects">View projects ↓</AppLink></div>
      </section>
      <section className="work-page-projects" id="work-projects" aria-label="Projects">
        <div className="work-page-grid" id="work-project-grid">
          {PROJECTS.slice(0, 6).map((project, index) =>
            <div className="work-page-placeholder" role="img" aria-label={`${project.title}. ${project.tags.join(", ")}. ${project.alt}`} key={project.src}>
              <picture className="work-project-picture"><source media="(max-width: 700px)" srcSet={mobileImages[project.mobileSrc]?.srcSet ?? project.mobileSrc} sizes="90vw" /><SiteImage src={project.src} alt="" aria-hidden="true" loading={index === 0 ? "eager" : "lazy"} decoding="async" /></picture>
              <SiteImage className="work-mobile-hover" src={project.hoverImage} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
              <span className="work-project-title" aria-hidden="true">{project.title}</span>
              <div className="work-project-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          )}
        </div>
        <div className="work-projects-expansion" id="work-extra-projects" data-open={expanded} aria-hidden={!expanded} inert={!expanded}>
          <div className="work-projects-expansion-inner">
            <div className="work-page-grid work-extra-grid">
              {PROJECTS.slice(6).map((project, index) => <div className="work-page-placeholder" role="img"
                aria-label={`${project.title}. ${project.tags.join(", ")}. ${project.alt}`} key={project.src}
                ref={index === 0 ? firstNewProject : undefined} tabIndex={index === 0 ? -1 : undefined}>
                <picture className="work-project-picture"><source media="(max-width: 700px)" srcSet={mobileImages[project.mobileSrc]?.srcSet ?? project.mobileSrc} sizes="90vw" /><SiteImage src={project.src} alt="" aria-hidden="true" loading="lazy" decoding="async" /></picture>
              <SiteImage className="work-mobile-hover" src={project.hoverImage} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />
                <span className="work-project-title" aria-hidden="true">{project.title}</span>
                <div className="work-project-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>)}
            </div>
          </div>
        </div>
        <button className="work-page-more" type="button" onClick={showMore} aria-controls="work-extra-projects"
          aria-expanded={expanded} disabled={expanded} style={expanded ? { visibility: "hidden" } : undefined}>+ Show more</button>
        <span className="work-project-status" role="status">{expanded ? "4 more projects shown. 10 projects in total." : ""}</span>
      </section>
      <InnerPageCTA />
    </main>
    <Footer />
  </Shell>;
}
