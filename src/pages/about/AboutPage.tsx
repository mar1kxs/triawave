import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { InnerPageCTA } from "../shared/InnerPageCTA";
import { AboutHero } from "./sections/AboutHero";
import { TeamSection } from "./sections/TeamSection";
import { ApproachSection } from "./sections/ApproachSection";
import { WorkingSection } from "./sections/WorkingSection";

export default function AboutPage() {
  return (
    <Shell>
      <main className="about-page">
        <AboutHero />
        <TeamSection />
        <ApproachSection />
        <WorkingSection />
        <InnerPageCTA />
      </main>
      <Footer />
    </Shell>
  );
}
