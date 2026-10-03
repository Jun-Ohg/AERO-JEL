import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aerojel.vercel.app",
      lastModified: new Date(),
    },
  ];
}