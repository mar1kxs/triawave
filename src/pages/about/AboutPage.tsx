import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { CTASection } from "../../components/sections/CTASection";
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
        <CTASection />
      </main>
      <Footer />
    </Shell>
  );
}
