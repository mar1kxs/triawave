import { MotionHeading } from "../../../components/ui/MotionHeading";
import { AppLink } from "../../../components/ui/AppLink";
import { SectionHead } from "../../../components/ui/SectionHead";
import { SERVICES } from "../../../content/services";

const HOME_SERVICE_ORDER = [
  "/services/landing-page-design-development",
  "/services/ui-ux-web-design",
  "/services/wix-studio-development",
  "/services/webflow-development",
  "/services/e-commerce-development",
  "/services/custom-web-development",
  "/services/website-support-optimization",
  "/services/website-strategy",
];

export function ServicesSection() {
  return (
    <section className="light-section services-section" id="services">
      <SectionHead index="04" label="Services" axis="SERVICES" />
      <MotionHeading>Services</MotionHeading>
      <div className="services-list">
        {HOME_SERVICE_ORDER.map((path, index) => {
          const service = SERVICES.find((item) => item.path === path);
          if (!service) return null;
          return (
            <AppLink className="service-row" href={service.path} key={service.path}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true" />
            </AppLink>
          );
        })}
      </div>
    </section>
  );
}
