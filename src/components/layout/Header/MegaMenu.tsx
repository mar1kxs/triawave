import { SERVICES } from "../../../content/services";
import { AppLink } from "../../ui/AppLink";

export function MegaMenu({ close }: { close: () => void }) {
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
