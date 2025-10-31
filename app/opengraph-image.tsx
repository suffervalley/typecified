import {
  generateOGImage,
  ogImageSize,
  ogImageContentType,
} from "@/lib/og-image";

// Image metadata
export const alt = "Suffer Valley — Born from Failure. Built for Precision.";
export const size = ogImageSize;
export const contentType = ogImageContentType;

// Image generation for homepage
export default async function Image() {
  return generateOGImage({
    title: "Typecified",
    subtitle: "Build freely. Design beautifully.",
    description:
      "100% free, open-source UI library built with shadcn/ui + Tailwind",
  });
}
