import { SectionHead } from "../../../components/ui/SectionHead";
import { Reveal } from "../../../components/ui/Reveal";
import { EXPECTATIONS } from "../content";

export function WorkingSection() {
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
