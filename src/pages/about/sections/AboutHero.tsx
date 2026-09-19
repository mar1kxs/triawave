import { AppLink } from "../../../components/ui/AppLink";

export function AboutHero() {
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
