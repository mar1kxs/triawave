import { SectionHead } from "../../../components/ui/SectionHead";
import { Reveal } from "../../../components/ui/Reveal";
import { APPROACH } from "../content";

export function ApproachSection() {
  return (
    <section className="light-section about-approach">
      <SectionHead index="03" label="Our approach" axis="AUDIENCE" />
      <div className="approach-layout">
        <Reveal className="approach-intro">
          <h2>Design connected<br />to the bigger picture</h2>
          <p>A website is more than a visual concept. We connect business goals, thoughtful design and development so the final result works as a whole.</p>
          <img className="about-approach-cubes" src="/assets/about-approach-cubes.svg" alt="" aria-hidden="true" width="176" height="177" loading="lazy" decoding="async" />
        </Reveal>
        <div className="approach-list">
          {APPROACH.map((item, index) => (
            <Reveal className="approach-row" key={item.title}>
              <span>{item.number}/</span><div><h3>{item.title}</h3><p>{item.copy}</p></div><b className={`shape shape-${index + 1}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
