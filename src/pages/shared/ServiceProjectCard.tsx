import { SiteImage } from "../../components/ui/SiteImage";
import { projectPresentation, type Project, type ProjectContext } from "../../data/projects";

export function ServiceProjectCard({ project, context, index }: {
  project: Project;
  context: ProjectContext;
  index: number;
}) {
  const { title, alt, tags } = projectPresentation(project, context);
  const { square, squareHover } = project.images;
  return <div className="strategy-project-placeholder service-project-card" role="img" aria-label={`${title}. ${alt}`}>
    {square && <SiteImage className="service-project-card-image" src={square.src} alt="" aria-hidden="true" loading={index === 0 ? "eager" : "lazy"} decoding="async" />}
    {square && squareHover && <SiteImage className="service-project-card-hover-image" src={squareHover.src} alt="" aria-hidden="true" fetchPriority="low" loading="lazy" decoding="async" />}
    <span className="service-project-card-label" aria-hidden="true">{title}</span>
    <div className="service-project-card-tags" aria-hidden="true">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </div>;
}
