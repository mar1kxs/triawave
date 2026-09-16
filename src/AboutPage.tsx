import { AppLink, CTASection, Footer, Reveal, SectionHead, Shell } from "./components";
import { APPROACH, EXPECTATIONS, TEAM } from "./content/about";

function AboutHero() {
  return (
    <section className="about-hero grid-field">
      <img className="about-orbit" src="/assets/about-orbit.svg" alt="" aria-hidden="true" width="603" height="603" />
      <div className="about-diamond" aria-hidden="true" /><div className="about-square" aria-hidden="true" />
      <div className="eyebrow">01 / About Triawave</div>
      <h1>Different minds<br />one direction</h1>
      <p>We bring design, development and business thinking together to create websites with a clear purpose</p>
      <AppLink className="button" href="#team">Meet the team <img src="/assets/about-arrow-down.svg" alt="" aria-hidden="true" width="16" height="14" /></AppLink>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="team-section" id="team">
      <div className="team-layout">
        <Reveal className="team-intro"><div className="eyebrow">02 / The people behind Triawave</div><h2>The people behind Triawave</h2><p>A clear, collaborative process that keeps every stage, decision and deliverable moving forward</p></Reveal>
        <div className="team-grid">
          {TEAM.map((person) => (
            <Reveal className="person" key={person.name}>
              <div className="portrait-placeholder"><i>01</i><span>Portrait placeholder</span><b>{person.name.startsWith("Arti") ? "Artem" : person.name.split(" ")[0]}</b></div>
              <h3>{person.name}</h3><small>{person.role}</small><p>{person.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
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

function WorkingSection() {
  return (
    <section className="working-section">
      <SectionHead index="04" label="Working with us" axis="EXPECT" />
      <h2>Clear thinking<br />careful execution</h2>
      <div className="expectations-grid">
        {EXPECTATIONS.map((item) => (
          <Reveal className="expectation" key={item.title}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></Reveal>
        ))}
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <Shell>
      <main className="about-page">
        <AboutHero />
        <TeamSection />
        <ApproachSection />
        <WorkingSection />
        <CTASection />
      </main>
      <Footer />
    </Shell>
  );
}
