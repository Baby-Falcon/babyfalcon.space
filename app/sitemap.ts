import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://babyfalcon.space",
      lastModified: new Date(),
    },
  ];
}
