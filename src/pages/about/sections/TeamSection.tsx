import { Reveal } from "../../../components/ui/Reveal";
import { TEAM } from "../content";

export function TeamSection() {
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
