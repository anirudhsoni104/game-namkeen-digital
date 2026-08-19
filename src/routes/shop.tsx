import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ShopSearch = { category?: string; q?: string };

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    category: typeof search.category === "string" ? search.category : undefined,
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop All Products — Game Namkeen" },
      {
        name: "description",
        content:
          "Browse all Game Namkeen products: ₹2 pocket packs, ₹5 namkeens, family packs, premium namkeens, wafers and chips. Search, filter and add to cart.",
      },
      { property: "og:title", content: "Shop All Products — Game Namkeen" },
      {
        property: "og:description",
        content: "Search and filter the complete Game Namkeen snack range.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const sorts = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "az", label: "A–Z" },
] as const;

function Shop() {
  const { category, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const [sort, setSort] = useState<(typeof sorts)[number]["id"]>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const query = q ?? "";

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    let list = products.filter((p) => {
      if (category && p.category !== category) return false;
      if (!term) return true;
      return (
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.tag.toLowerCase().includes(term) ||
        (p.price != null && String(p.price).includes(term))
      );
    });
    if (sort === "az") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "price-asc")
      list = [...list].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    if (sort === "price-desc")
      list = [...list].sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    return list;
  }, [category, query, sort]);

  const setSearch = (next: ShopSearch) =>
    navigate({ search: (prev) => ({ ...prev, ...next }), replace: true });

  const suggestions =
    query.trim().length > 1
      ? products
          .filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()))
          .slice(0, 5)
      : [];

  return (
    <div className="container-page py-10">
      <header>
        <h1 className="text-4xl sm:text-5xl">Shop All Products</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The complete Game Namkeen range from the product catalogue. Prices shown are the catalogue
          MRP where stated.
        </p>
      </header>

      <div className="relative mt-8">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setSearch({ q: e.target.value || undefined })}
          placeholder="Search products, categories or price…"
          aria-label="Search products"
          className="h-14 rounded-2xl pl-12 pr-12 text-base shadow-card"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => setSearch({ q: undefined })}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        )}
        {suggestions.length > 0 && (
          <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-popover shadow-lift">
            {suggestions.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-accent"
                  onClick={() => setSearch({ q: s.name })}
                >
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-muted-foreground">{s.category}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          className="lg:hidden"
          onClick={() => setShowFilters((v) => !v)}
          aria-expanded={showFilters}
        >
          <SlidersHorizontal className="size-4" /> Filters
        </Button>
        <label className="ml-auto flex items-center gap-2 text-sm font-semibold">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="h-10 rounded-lg border border-input bg-background px-3 text-sm"
          >
            {sorts.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div
        className={`mt-4 flex-wrap gap-2 ${showFilters ? "flex" : "hidden"} lg:flex`}
        role="group"
        aria-label="Filter by category"
      >
        <button
          type="button"
          onClick={() => setSearch({ category: undefined })}
          className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
            !category
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card hover:bg-accent"
          }`}
        >
          All ({products.length})
        </button>
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setSearch({ category: c })}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
              category === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card hover:bg-accent"
            }`}
          >
            {c} ({products.filter((p) => p.category === c).length})
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        Showing {results.length} of {products.length} products
        {category ? ` in ${category}` : ""}
        {query ? ` for “${query}”` : ""}.
      </p>

      {results.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-border p-12 text-center">
          <h2 className="text-2xl">No products found</h2>
          <p className="mt-2 text-muted-foreground">
            Try a different keyword or clear the filters below.
          </p>
          <Button className="mt-6" onClick={() => setSearch({ q: undefined, category: undefined })}>
            Clear search &amp; filters
          </Button>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
