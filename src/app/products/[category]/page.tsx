import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CATEGORIES, getCategoryBySlug } from "@/data/products";
import CatalogueView from "@/components/CatalogueView";

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <nav className="flex items-center gap-2 text-xs text-charcoal/60 mb-6">
        <Link href="/" className="hover:text-charcoal">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/products" className="hover:text-charcoal">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-charcoal font-medium">{cat.name}</span>
      </nav>

      <div className="max-w-2xl mb-8 space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-natural-oak font-semibold capitalize">
          {cat.segment} Collection
        </p>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-charcoal">
          {cat.name}
        </h1>
        <p className="text-sm sm:text-base text-charcoal/75">{cat.description}</p>
      </div>

      <Suspense fallback={<div className="py-12 text-sm text-charcoal/60">Loading category...</div>}>
        <CatalogueView initialCategory={cat.slug} />
      </Suspense>
    </div>
  );
}
