import { projectsFor, projectPresentation } from "../../data/projects";
import { DiagonalArrow } from "../../components/ui/DiagonalArrow";
import { WorkProjectImages } from "./WorkProjectImages";
import { useEffect, useRef, useState } from "react";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import { SITE } from "../../config/site";
import { InnerPageCTA } from "../shared/InnerPageCTA";
import "./work-page.css";


function CubeEdges() {
  return <svg className="work-cube-edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 22 44 0 100 17 100 78 56 100 0 83Z M0 22 56 39 100 17 M56 39V100" />
  </svg>;
}

const PROJECTS = projectsFor("work");

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
            <div className="work-page-placeholder" role="img" aria-label={`${projectPresentation(project, "work").title}. ${projectPresentation(project, "work").tags.join(", ")}. ${projectPresentation(project, "work").alt}`} key={project.id}>
              <WorkProjectImages project={project} eager={index === 0} />
              <span className="work-project-title" aria-hidden="true">{projectPresentation(project, "work").title}</span>
              <div className="work-project-tags" aria-hidden="true">{projectPresentation(project, "work").tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
          )}
        </div>
        <div className="work-projects-expansion" id="work-extra-projects" data-open={expanded} aria-hidden={!expanded} inert={!expanded}>
          <div className="work-projects-expansion-inner">
            <div className="work-page-grid work-extra-grid">
              {PROJECTS.slice(6).map((project, index) => <div className="work-page-placeholder" role="img"
                aria-label={`${projectPresentation(project, "work").title}. ${projectPresentation(project, "work").tags.join(", ")}. ${projectPresentation(project, "work").alt}`} key={project.id}
                ref={index === 0 ? firstNewProject : undefined} tabIndex={index === 0 ? -1 : undefined}>
                <WorkProjectImages project={project} />
                <span className="work-project-title" aria-hidden="true">{projectPresentation(project, "work").title}</span>
                <div className="work-project-tags" aria-hidden="true">{projectPresentation(project, "work").tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>)}
            </div>
          </div>
        </div>
        <button className="work-page-more" type="button" onClick={showMore} aria-controls="work-extra-projects"
          aria-expanded={expanded} disabled={expanded} style={expanded ? { visibility: "hidden" } : undefined}>+ Show more</button>
        <span className="work-project-status" role="status">{expanded ? `${PROJECTS.length - 6} more projects shown. ${PROJECTS.length} projects in total.` : ""}</span>
      </section>
      <InnerPageCTA />
    </main>
    <Footer />
  </Shell>;
}
