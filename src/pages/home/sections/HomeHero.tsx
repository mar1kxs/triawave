import { MotionHeading } from "../../../components/ui/MotionHeading";
import { AppLink } from "../../../components/ui/AppLink";
import { HeroArt } from "../components/HeroArt";
import { StartProjectButton } from "../components/StartProjectButton";

export function HomeHero() {
  return (
    <section className="home-hero grid-field">
      <img className="hero-shade" src="/assets/hero-shade-left.svg" alt="" aria-hidden="true" width="1457" height="1455" />
      <div className="hero-copy">
        <div className="eyebrow">01 / Hero — Three minds / one direction</div>
        <MotionHeading as="h1">Websites that<br />move businesses<br />forward</MotionHeading>
        <p>We combine strategy, design and development to create distinctive websites that clarify your offer, build trust and support growth</p>
        <div className="hero-actions">
          <StartProjectButton />
          <AppLink href="/work" className="text-link">View our work <span aria-hidden="true" /></AppLink>
        </div>
      </div>
      <HeroArt />
      <div className="hero-meta">
        <span>Independent digital studio</span>
        <span>Europe / Worldwide</span>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
