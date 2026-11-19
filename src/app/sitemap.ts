import type { MetadataRoute } from "next";
import { CATEGORIES, PRODUCTS } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/commercial-solutions",
    "/custom-design",
    "/projects",
    "/about",
    "/contact",
  ].map((route) => ({
    url: route || "/",
    lastModified: new Date(),
  }));

  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `/products/${cat.slug}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCTS.map((prod) => ({
    url: `/product/${prod.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
