import { AppLink } from "../../../components/ui/AppLink";
import { SectionHead } from "../../../components/ui/SectionHead";
import { Reveal } from "../../../components/ui/Reveal";
import { WORK_PROJECTS } from "../content";

export function WorkSection() {
  return (
    <section className="work-section" id="work">
      <SectionHead index="02" label="Selected work" axis="WORK" />
      <Reveal className="work-intro">
        <h2>Selected work</h2>
        <p>A small number of projects, each<br />built around a specific business goal</p>
      </Reveal>
      <div className="work-grid">
        {WORK_PROJECTS.map((project, index) => (
          <Reveal className={`work-card work-${index + 1}`} key={project.id}>
            <div className="work-image" aria-label="Case study image placeholder">CASE</div>
            <div className="work-copy">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>Triawave creates distinctive digital experiences for growing companies, professional services, e-commerce brands and ambitious startups</p>
              <small>Strategy · Content structure · Visual design · Build</small>
              <AppLink href="/work" className="text-link">View case study  <i /></AppLink>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
