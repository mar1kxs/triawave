import { SITE } from "../../../config/site";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "../../../content/services";
import { AppLink } from "../../ui/AppLink";
import { MegaMenu } from "./MegaMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [menuPinned, setMenuPinned] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (mobileOpen) {
        setHeaderVisible(true);
        previousScrollY = currentScrollY;
        return;
      }
      if (currentScrollY <= 8 || currentScrollY < previousScrollY) {
        setHeaderVisible(true);
      } else if (currentScrollY > previousScrollY + 4) {
        setHeaderVisible(false);
        setMenuOpen(false);
        setMenuPinned(false);
      }
      previousScrollY = currentScrollY;
    };
    const onPointerMove = (event: MouseEvent) => {
      if (event.clientY <= 20) setHeaderVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onPointerMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onPointerMove);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setMenuPinned(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const close = () => { setMenuOpen(false); setMobileOpen(false); setMobileServicesOpen(false); setMenuPinned(false); };
    const outside = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) close(); };
    window.addEventListener("popstate", close);
    document.addEventListener("pointerdown", outside);
    return () => { window.removeEventListener("popstate", close); document.removeEventListener("pointerdown", outside); };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  const toggleMobileMenu = () => {
    setMobileServicesOpen(false);
    setMobileOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header ref={headerRef} className={headerVisible ? "site-header" : "site-header site-header-hidden"} onMouseLeave={() => { if (!menuPinned) setMenuOpen(false); }}>
      <AppLink href="/" className="brand" aria-label="Triawave home">
        <img src="/assets/logo.svg" alt="Triawave" width="209" height="40" />
      </AppLink>
      <nav className="desktop-nav" aria-label="Main navigation">
        <AppLink href="/work">Work</AppLink>
        <button
          type="button"
          className={menuOpen ? "nav-services active" : "nav-services"}
          aria-expanded={menuOpen}
          aria-controls="services-menu"
          onMouseEnter={() => setMenuOpen(true)}
          onClick={() => { setMenuOpen(!menuPinned); setMenuPinned(!menuPinned); }}
        >
          Services <span aria-hidden="true"><img src="/assets/header-arrow-down.svg" alt="" width="12" height="12" /></span>
        </button>
        <AppLink href="/about">About</AppLink>
        <AppLink href={`mailto:${SITE.email}`}>Contact</AppLink>
      </nav>
      <AppLink href={`mailto:${SITE.email}`} className="button header-cta">Let’s talk</AppLink>
      <button className="mobile-toggle" type="button" aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={toggleMobileMenu}>
        <span /> <span />
      </button>
      {menuOpen && <MegaMenu close={() => { setMenuOpen(false); setMenuPinned(false); }} />}
      {mobileOpen && (
        <nav className={`mobile-nav${mobileServicesOpen ? " mobile-nav-services-open" : ""}`} aria-label="Mobile navigation">
          {!mobileServicesOpen ? (
            <div className="mobile-nav-main">
              <p className="mobile-nav-eyebrow">Explore / Triawave</p>
              <div className="mobile-nav-links">
                <AppLink href="/work" onClick={closeMobileMenu}>Work</AppLink>
                <button type="button" onClick={() => setMobileServicesOpen(true)}>Services <span aria-hidden="true">›</span></button>
                <AppLink href="/about" onClick={closeMobileMenu}>About</AppLink>
                <AppLink href={`mailto:${SITE.email}`} onClick={closeMobileMenu}>Contact</AppLink>
              </div>
              <div className="mobile-nav-footer">
                <AppLink className="mobile-nav-email" href={`mailto:${SITE.email}`} onClick={closeMobileMenu}>{SITE.email}</AppLink>
                <MobileMenuHelp close={closeMobileMenu} />
              </div>
            </div>
          ) : (
            <div className="mobile-services-panel">
              <div className="mobile-services-heading">
                <button type="button" onClick={() => setMobileServicesOpen(false)}><span aria-hidden="true">‹</span> Menu</button>
                <h2>Services</h2>
              </div>
              <div className="mobile-services-list">
                {(["Design", "Development", "Support"] as const).map((group) => (
                  <section className="mobile-service-group" key={group}>
                    <h3>{group}</h3>
                    {SERVICES.filter((service) => service.group === group).map((service) => (
                      <AppLink href={service.path} onClick={closeMobileMenu} key={service.path}>
                        <span className="mobile-service-link-title">
                          {service.number === "01" ? "Website Design & Redesign" : service.number === "02" ? "UI/UX Design" : service.title}
                        </span>
                        <span aria-hidden="true"><img src="/assets/mobile-service-arrow.svg" alt="" width="16" height="15" /></span>
                      </AppLink>
                    ))}
                  </section>
                ))}
              </div>
              <div className="mobile-nav-footer"><MobileMenuHelp close={closeMobileMenu} /></div>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}

function MobileMenuHelp({ close }: { close: () => void }) {
  return (
    <div className="mobile-menu-help">
      <h3>Need a hand choosing?</h3>
      <p>Tell us what you need your website to do. We’ll help you choose the right approach.</p>
      <AppLink href={`mailto:${SITE.email}`} className="button" onClick={close}>Discuss your project</AppLink>
    </div>
  );
}
