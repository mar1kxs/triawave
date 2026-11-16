import type { ImgHTMLAttributes } from "react";
import imageManifest from "../../generated/images.json";

type ImageAsset = { src: string; srcSet?: string; width?: number; height?: number };
const images: Record<string, ImageAsset> = imageManifest;

/** Serve appropriately sized, cacheable assets without changing the image's layout. */
export function SiteImage({ src, srcSet, sizes, width, height, decoding = "async", ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const asset = src ? images[src] : undefined;
  return <img {...props} src={asset?.src ?? src}
    srcSet={srcSet ?? asset?.srcSet}
    sizes={sizes ?? (asset?.srcSet ? "(max-width: 700px) 90vw, 50vw" : undefined)}
    width={width ?? asset?.width} height={height ?? asset?.height} decoding={decoding} />;
}
