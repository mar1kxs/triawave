import { useEffect, useState, type ReactNode } from "react";
import { SITE } from "../config/site";
import { SERVICES } from "../content/services";
import { AppLink } from "./AppLink";
import MathGrid from "./MathGrid";

export function SectionHead({ index, label, axis }: { index: string; label: string; axis: string }) {
  return (
    <div className="section-head">
      <span>{index} / {label}</span>
      <span>X:{index} / Y:{axis}</span>
    </div>
  );
}

export function CubeCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`cube-cluster ${className}`} aria-hidden="true">
      <img className="cube cube-dark" src="/assets/hero-cube-dark.svg" alt="" width="191" height="191" />
      <img className="cube cube-soft" src="/assets/hero-cube-soft.svg" alt="" width="143" height="143" />
      <img className="cube cube-pink" src="/assets/hero-cube-pink.svg" alt="" width="105" height="105" />
    </div>
  );
}

export function CTASection() {
  return (
    <MathGrid className="cta-section">
      <div className="cta-content">
        <div className="cta-title">LET’S TALK<br /><span>MOVE.</span></div>
        <p>A new website, a fresh direction, or an idea worth exploring.<br />Let&apos;s talk it through.</p>
        <AppLink href="/contact" className="button cta-button">Discuss your project <span>↗</span></AppLink>
      </div>
    </MathGrid>
  );
}

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-primary">
          <div>
            <h3>Explore / Triawave</h3>
            <AppLink href="/work">Work</AppLink>
            <AppLink href="/#services">Services</AppLink>
            <AppLink href="/about">About</AppLink>
            <AppLink href="/contact">Contact</AppLink>
          </div>
          <div className="footer-contact">
            <h3>Get in touch</h3>
            <a className="footer-email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <p><span>Instagram ↗</span><i /> <span>Telegram ↗</span><i /> <span>WhatsApp ↗</span></p>
            <p><span>Upwork ↗</span><i /> <span>LinkedIn ↗</span></p>
          </div>
        </div>
        <div className="footer-services">
          <h3>Services index</h3>
          <div>
            {SERVICES.map((service) => (
              <AppLink href={service.path} key={service.path}>
                <span>{service.number}</span>{service.title}<b>→</b>
              </AppLink>
            ))}
          </div>
        </div>
      </footer>
      <div className="legal-strip">
        <span>© {SITE.legalYear} {SITE.name}</span>
        <span>Europe / Worldwide</span>
        <AppLink href="/terms">Terms</AppLink>
        <AppLink href="/cookie-policy">Cookie Policy</AppLink>
        <AppLink href="/privacy-policy">Privacy Policy</AppLink>
      </div>
    </>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [shown, setShown] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return <div ref={setNode} className={`reveal ${shown ? "is-shown" : ""} ${className}`}>{children}</div>;
}

