import { useRef, useState, type CSSProperties } from "react";
import { AppLink, CTASection, Footer, Reveal, SectionHead, Shell } from "./components";
import { AUDIENCES, FAQS, OUTCOMES, PROCESS_STEPS, TESTIMONIALS, WORK_PROJECTS } from "./content/home";
import { SERVICES } from "./content/services";
import { usePinnedProcess } from "./hooks/usePinnedProcess";

function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <img className="hero-line hero-line-top" src="/assets/hero-line-top.svg" alt="" width="294" height="422" />
      <img className="hero-line hero-line-right" src="/assets/hero-line-right.svg" alt="" width="403" height="212" />
      <img className="hero-line hero-line-left" src="/assets/hero-line-left.svg" alt="" width="111" height="631" />
      <img className="hero-cube hero-cube-dark" src="/assets/hero-cube-dark.svg" alt="" width="191" height="191" />
      <img className="hero-cube hero-cube-soft" src="/assets/hero-cube-soft.svg" alt="" width="143" height="143" />
      <img className="hero-cube hero-cube-pink" src="/assets/hero-cube-pink.svg" alt="" width="105" height="105" />
    </div>
  );
}

function HomeHero() {
  return (
    <section className="home-hero grid-field">
      <img className="hero-shade" src="/assets/hero-shade-left.svg" alt="" aria-hidden="true" width="1457" height="1455" />
      <div className="hero-copy">
        <div className="eyebrow">01 / Hero — Three minds / one direction</div>
        <h1>Websites that<br />move businesses<br />forward</h1>
        <p>We combine strategy, design and development to create distinctive websites that clarify your offer, build trust and support growth</p>
        <div className="hero-actions">
          <AppLink href="/contact" className="button">Start a project</AppLink>
          <AppLink href="/work" className="text-link">View our work <span /></AppLink>
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

function WorkSection() {
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
              <AppLink href="/work" className="text-link">View case study ↗ <i /></AppLink>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="light-section audience-section">
      <SectionHead index="03" label="Who we help" axis="AUDIENCE" />
      <h2>Built for businesses<br />ready for what’s<br />next</h2>
      <div className="audience-grid">
        {AUDIENCES.map((audience) => (
          <Reveal className="audience-card" key={audience.title}>
            <span>{audience.number}</span>
            <img
              className="audience-icon"
              src={audience.icon}
              alt=""
              aria-hidden="true"
              width={audience.iconWidth}
              height={audience.iconHeight}
              loading="lazy"
              decoding="async"
            />
            <h3>{audience.title}</h3>
            <p>{audience.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function OutcomesSection() {
  return (
    <section className="light-section outcomes-section">
      <SectionHead index="04" label="Outcomes" axis="VALUE" />
      <h2>What we help you achieve</h2>
      <div className="outcomes-grid">
        {OUTCOMES.map((outcome) => (
          <Reveal className="outcome" key={outcome.title}>
            <span>{outcome.number}</span><h3>{outcome.title}</h3><p>{outcome.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="light-section services-section" id="services">
      <SectionHead index="04" label="Services" axis="SERVICES" />
      <h2>Services</h2>
      <div className="services-list">
        {SERVICES.map((service) => (
          <AppLink className="service-row" href={service.path} key={service.path}>
            <span>{service.number}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="service-arrow" aria-hidden="true" />
          </AppLink>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const { sectionRef, pinRef, activeStep } = usePinnedProcess(PROCESS_STEPS.length);

  return (
    <section className="process-section process-scroll" ref={sectionRef}>
      <div className="process-pin" ref={pinRef}>
        <SectionHead index="05" label="Process" axis="PROCESS" />
        <div className="process-layout">
          <div className="process-intro">
            <h2>From first idea<br />to launch — and beyond</h2>
            <p>A clear, collaborative process that keeps every stage, decision and deliverable moving forward</p>
          </div>
          <ol className="process-track" data-active={activeStep} style={{ "--process-index": activeStep } as CSSProperties}>
            {PROCESS_STEPS.map((step, index) => (
              <li className={`process-step ${index <= activeStep ? "active" : ""}`} key={step.title}>
                <span aria-current={index === activeStep ? "step" : undefined}>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const move = (direction: number) => {
    const next = Math.max(0, Math.min(TESTIMONIALS.length - 1, current + direction));
    const card = track.current?.children[next] as HTMLElement | undefined;
    if (card && track.current) track.current.scrollTo({ left: card.offsetLeft - track.current.offsetLeft, behavior: "smooth" });
    setCurrent(next);
  };
  return (
    <section className="testimonials-section">
      <SectionHead index="06" label="Client stories" axis="PROCESS" />
      <div className="testimonial-title-row">
        <h2>What clients say</h2>
        <div className="testimonial-controls" aria-label="Review navigation">
          <button type="button" aria-label="Previous review" disabled={current === 0} onClick={() => move(-1)}><img src="/assets/review-arrow-left.svg" alt="" aria-hidden="true" width="35" height="35" loading="lazy" decoding="async" /></button>
          <span aria-live="polite">{current + 1}/{TESTIMONIALS.length}</span>
          <button type="button" aria-label="Next review" disabled={current === TESTIMONIALS.length - 1} onClick={() => move(1)}><img src="/assets/review-arrow-right.svg" alt="" aria-hidden="true" width="35" height="35" loading="lazy" decoding="async" /></button>
        </div>
      </div>
      <div className="testimonials-track" ref={track}>
        {TESTIMONIALS.map((testimonial, index) => (
          <article className="testimonial" key={`${testimonial.title}-${index}`}>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.quote}</p>
            <button type="button" className="text-link" aria-expanded={expanded === index} onClick={() => setExpanded(expanded === index ? null : index)}>Read more <span /></button>
            {expanded === index && <p className="review-note">This review is placeholder text in the design. The full client review has not been supplied.</p>}
            <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, star) => <img key={star} src={`/assets/review-star${star >= testimonial.rating ? "-muted" : ""}.svg`} alt="" aria-hidden="true" width="20" height="20" loading="lazy" decoding="async" />)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section">
      <SectionHead index="08" label="Questions" axis="FAQ" />
      <div className="faq-layout">
        <div className="faq-intro"><h2>Frequently<br />asked</h2><p>For brands that need a strong identity and a clear path from product to purchase.</p></div>
        <div className="faq-list">
          {FAQS.map(([question, answer], index) => (
            <article className={open === index ? "faq-item open" : "faq-item"} key={question}>
              <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><b>{open === index ? "−" : "+"}</b>
              </button>
              <div className="faq-answer"><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <Shell>
      <main>
        <HomeHero />
        <div className="process-strip"><div className="process-strip-label">Strategy <span>—</span> Design <span>—</span> Development <span>—</span> Launch <span>—</span> Support</div><p>One connected team before, during and after launch</p></div>
        <WorkSection />
        <AudienceSection />
        <OutcomesSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </Shell>
  );
}
