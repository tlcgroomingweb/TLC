import type { MetadataRoute } from "next";
import { showcaseHomepageOnly, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  if (!showcaseHomepageOnly) {
    routes.push({
      url: `${site.url}/our-services`,
      changeFrequency: "monthly",
      priority: 0.9,
    });
    routes.push({
      url: `${site.url}/our-team`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return routes;
}
