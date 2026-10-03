import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

const routes = [
  "",
  "/a-propos",
  "/productions/vitrines-web",
  "/productions/application",
  "/pricing",
  "/contact",
  "/rendez-vous",
  "/pourquoi-refaire-site-web",
  "/confidentialite",
  "/conditions-generales-vente",
  "/politique-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
