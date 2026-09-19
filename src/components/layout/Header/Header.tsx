import { useEffect, useRef, useState } from "react";
import { SERVICES } from "../../../content/services";
import { AppLink } from "../../ui/AppLink";
import { MegaMenu } from "./MegaMenu";

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
