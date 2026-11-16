import { SiteImage } from "../../../components/ui/SiteImage";
import { MotionHeading } from "../../../components/ui/MotionHeading";
import { AppLink } from "../../../components/ui/AppLink";
import { SectionHead } from "../../../components/ui/SectionHead";
import { Reveal } from "../../../components/ui/Reveal";
import { WORK_PROJECTS } from "../content";

export function WorkSection() {
  return (
    <section className="work-section" id="work">
      <SectionHead index="02" label="Selected work" axis="WORK" />
      <Reveal className="work-intro">
        <MotionHeading>Selected work</MotionHeading>
        <p>A small number of projects, each<br />built around a specific business goal</p>
      </Reveal>
      <div className="work-grid">
        {WORK_PROJECTS.map((project, index) => (
          <Reveal className={`work-card work-${index + 1}`} key={project.id}>
            <div className="work-image">
              <SiteImage src={project.image} alt={project.imageAlt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              <span className="home-project-title" aria-hidden="true">{project.imageTitle}</span>
              <div className="home-project-tags" aria-hidden="true">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </div>
            <div className="work-copy">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.services}</small>
              <AppLink href="/work" className="text-link">Explore the project <span aria-hidden="true" /></AppLink>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
