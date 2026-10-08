import { useRef, useState } from "react";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import { SITE } from "../../config/site";
import { Cubes, InnerPageCTA } from "../shared/InnerPageCTA";
import "./work-page.css";

function CubeEdges() {
  return <svg className="work-cube-edges" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 22 44 0 100 17 100 78 56 100 0 83Z M0 22 56 39 100 17 M56 39V100" />
  </svg>;
}

export default function WorkPage() {
  const [expanded, setExpanded] = useState(false);
  const firstNewProject = useRef<HTMLDivElement>(null);

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
          <AppLink className="button work-hero-contact" href={`mailto:${SITE.email}`}>Let’s talk <span aria-hidden="true">↗</span></AppLink>
        </div>
        <div className="work-hero-art" aria-hidden="true">
          <div className="work-hero-cube work-hero-cube-dark"><i /><i /><i /><CubeEdges /></div>
          <div className="work-hero-cube work-hero-cube-pink"><i /><i /><i /><CubeEdges /></div>
          <span className="work-hero-cross" /><span className="work-hero-cross" />
          <span className="work-hero-cross" /><span className="work-hero-cross" />
        </div>
        <div className="work-hero-mobile-art"><Cubes /></div>
        <div className="work-hero-meta"><span>Strategy / Design / Development</span><AppLink href="#work-projects">View projects ↓</AppLink></div>
      </section>
      <section className="work-page-projects" id="work-projects" aria-label="Projects">
        <div className="work-page-grid" id="work-project-grid">
          {Array.from({ length: 6 }, (_, index) =>
            <div className="work-page-placeholder" role="img" aria-label={`Project image placeholder ${index + 1}`} key={index}
              >
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </div>
          )}
        </div>
        <div className="work-projects-expansion" id="work-extra-projects" data-open={expanded} aria-hidden={!expanded} inert={!expanded}>
          <div className="work-projects-expansion-inner">
            <div className="work-page-grid work-extra-grid">
              {[7, 8].map((number) => <div className="work-page-placeholder" role="img"
                aria-label={`Project image placeholder ${number}`} key={number}
                ref={number === 7 ? firstNewProject : undefined} tabIndex={number === 7 ? -1 : undefined}>
                <span aria-hidden="true">{String(number).padStart(2, "0")}</span>
              </div>)}
            </div>
          </div>
        </div>
        <button className="work-page-more" type="button" onClick={showMore} aria-controls="work-extra-projects"
          aria-expanded={expanded} disabled={expanded} style={expanded ? { visibility: "hidden" } : undefined}>+ Show more</button>
        <span className="work-project-status" role="status">{expanded ? "2 more projects shown. 8 projects in total." : ""}</span>
      </section>
      <InnerPageCTA />
    </main>
    <Footer />
  </Shell>;
}
