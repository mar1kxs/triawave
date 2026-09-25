import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { Cubes, InnerPageCTA } from "../shared/InnerPageCTA";

export default function WorkPage() {
  return <Shell>
    <main className="inner-page work-page">
      <section className="work-page-hero">
        <div><div className="eyebrow">01 / Portfolio</div><h1>Projects</h1><p>A selection of our web design and development work</p></div>
        <Cubes pair />
      </section>
      <section className="work-page-projects" aria-label="Projects">
        <div className="work-page-grid">
          {Array.from({ length: 6 }, (_, index) => <div className="work-page-placeholder" role="img" aria-label={`Project image placeholder ${index + 1}`} key={index} />)}
        </div>
        <button className="work-page-more" disabled title="More projects will be added here">+ Show more</button>
      </section>
      <InnerPageCTA />
    </main>
    <Footer />
  </Shell>;
}
