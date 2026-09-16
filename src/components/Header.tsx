import { useEffect, useRef, useState, type ReactNode } from "react";
import { SERVICES } from "../content/services";
import { AppLink } from "./AppLink";

export function ReferralBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <aside className="referral-bar">
      <AppLink href="/contact">
        Refer a business to Triawave - they receive €250 off their first project, and you receive €250 in studio credit. <strong>View referral program ↗</strong>
      </AppLink>
      <button type="button" aria-label="Close referral notice" onClick={() => setVisible(false)}>×</button>
    </aside>
  );
}

function MegaMenu({ close }: { close: () => void }) {
  const groups = ["Design", "Development", "Support"] as const;

  return (
    <div id="services-menu" className="mega-menu" role="region" aria-label="Services menu">
      {groups.map((group) => (
        <div className="mega-column" key={group}>
          <h3>{group}</h3>
          {SERVICES.filter((service) => service.group === group).map((service, index) => (
            <AppLink className={group === "Design" && index === 0 ? "active" : undefined} href={service.path} onClick={close} key={service.path}>
              {service.number === "01" ? "Website Design & Redesign" : service.number === "02" ? "UI/UX Design" : service.title}
            </AppLink>
          ))}
        </div>
      ))}
      <div className="mega-help">
        <h3>Need a hand choosing?</h3>
        <p>Tell us what you need your website to do. We’ll help you choose the right approach.</p>
        <AppLink href="/contact" className="button button-small" onClick={close}>Discuss your project ↗</AppLink>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuPinned, setMenuPinned] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
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
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
        setMenuPinned(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const close = () => { setMenuOpen(false); setMobileOpen(false); setMenuPinned(false); };
    const outside = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) close(); };
    window.addEventListener("popstate", close);
    document.addEventListener("pointerdown", outside);
    return () => { window.removeEventListener("popstate", close); document.removeEventListener("pointerdown", outside); };
  }, []);

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
        <AppLink href="/contact">Contact</AppLink>
      </nav>
      <AppLink href="/contact" className="button header-cta">Let’s talk</AppLink>
      <button className="mobile-toggle" type="button" aria-expanded={mobileOpen} aria-label="Toggle menu" onClick={() => setMobileOpen((value) => !value)}>
        <span /> <span />
      </button>
      {menuOpen && <MegaMenu close={() => { setMenuOpen(false); setMenuPinned(false); }} />}
      {mobileOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <AppLink href="/work" onClick={() => setMobileOpen(false)}>Work</AppLink>
          <AppLink href="/about" onClick={() => setMobileOpen(false)}>About</AppLink>
          <AppLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</AppLink>
          {SERVICES.map((service) => <AppLink href={service.path} onClick={() => setMobileOpen(false)} key={service.path}>{service.title}</AppLink>)}
        </nav>
      )}
    </header>
  );
}

export function MinimalHeader() {
  return (
    <header className="minimal-header">
      <AppLink href="/" className="brand" aria-label="Triawave home">
        <img src="/assets/logo.svg" alt="Triawave" width="209" height="40" />
      </AppLink>
    </header>
  );
}

export function Shell({ children, showReferral = true }: { children: ReactNode; showReferral?: boolean }) {
  return (
    <>
      {showReferral && <ReferralBar />}
      <Header />
      {children}
    </>
  );
}
