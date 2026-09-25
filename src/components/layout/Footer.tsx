import { SITE } from "../../config/site";
import { SERVICES } from "../../content/services";
import { AppLink } from "../ui/AppLink";

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
          </div>
          <div className="footer-contact">
            <h3>Get in touch</h3>
            <a className="footer-email" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <p><span className="footer-social">Instagram</span><i /> <span className="footer-social">Telegram</span><i /> <span className="footer-social">WhatsApp</span></p>
            <p><span className="footer-social">Upwork</span><i /> <span className="footer-social">LinkedIn</span></p>
          </div>
        </div>
        <div className="footer-services">
          <h3>Services index</h3>
          <div>
            {SERVICES.map((service) => (
              <AppLink href={service.path} key={service.path}>
                <span>{service.number}</span>{service.title}<b className="footer-service-arrow" aria-hidden="true" />
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
