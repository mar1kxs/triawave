import imageManifest from "../../generated/images.json";
import { SiteImage } from "../../components/ui/SiteImage";
import type { Project } from "../../data/projects";

const images: Record<string, { src: string; srcSet?: string }> = imageManifest;

export function WorkProjectImages({ project, eager = false }: { project: Project; eager?: boolean }) {
  const { landscape, square, squareHover } = project.images;
  return <>
    <picture className="work-project-picture" data-missing-landscape={!landscape || undefined} data-missing-square={!square || undefined}>
      {square && <source media="(max-width: 700px)" srcSet={images[square.src]?.srcSet ?? square.src} sizes="90vw" />}
      {(landscape || square) && <SiteImage src={(landscape ?? square)?.src} alt="" aria-hidden="true" loading={eager ? "eager" : "lazy"} decoding="async" />}
    </picture>
    {square && squareHover && <SiteImage className="work-mobile-hover" src={squareHover.src} alt="" aria-hidden="true" loading="lazy" fetchPriority="low" />}
  </>;
}
