import { AppLink } from "../../../components/ui/AppLink";
import { SectionHead } from "../../../components/ui/SectionHead";
import { SERVICES } from "../../../content/services";

export function ServicesSection() {
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
