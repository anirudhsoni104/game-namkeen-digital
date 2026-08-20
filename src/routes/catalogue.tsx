import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { categories, products } from "@/data/products";
import { PackShot } from "@/components/site/PackShot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/catalogue")({
  head: () => ({
    meta: [
      { title: "Digital Catalogue — Game Namkeen" },
      {
        name: "description",
        content:
          "Browse the Game Namkeen digital catalogue page by page — namkeens, wafers, chips, family packs and premium ranges.",
      },
      { property: "og:title", content: "Digital Catalogue — Game Namkeen" },
      {
        property: "og:description",
        content: "Page-by-page digital catalogue of the complete Game Namkeen range.",
      },
      { property: "og:url", content: "/catalogue" },
    ],
    links: [{ rel: "canonical", href: "/catalogue" }],
  }),
  component: Catalogue;
});

function Catalogue() {
  const pages = useMemo(
    () => Array.from(new Set(products.map((p) => p.cataloguePage))).sort((a, b) => a - b),
    [],
  );
  const [pageIndex, setPageIndex] = useState(0);
  const [query, setQuery] = useState("");

  const page = pages[pageIndex]!;
  const pageProducts = products.filter((p) => p.cataloguePage === page);
  const matches = query.trim()
    ? products.filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()))
    : [];

  return (
    <div className="container-page py-10">
      <header className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl">Digital Catalogue</h1>
        <p className="mt-3 text-muted-foreground">
          The Game Namkeen catalogue, page by page. Jump to a range, search for a product, or step
          through the pages to see everything the brand offers.
        </p>
      </header>

      <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a product in the catalogue…"
            aria-label="Search the catalogue"
            className="h-12 rounded-xl pl-12"
          />
        </div>
        <Button variant="outline" disabled title="Original catalogue PDF not supplied yet">
          Download PDF (pending)
        </Button>
      </div>

      {query.trim() && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {matches.length === 0 && (
            <li className="text-sm text-muted-foreground">No products match “{query}”.</li>
          )}
          {matches.slice(0, 12).map((m) => (
            <li key={m.id}>
              <button
                type="button"
                onClick={() => {
                  const idx = pages.indexOf(m.cataloguePage);
                  if (idx >= 0) setPageIndex(idx);
                  setQuery("");
                }}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold hover:bg-accent"
              >
                {m.name} · page {m.cataloguePage}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const first = products.find((p) => p.category === c)!;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setPageIndex(Math.max(0, pages.indexOf(first.cataloguePage)))}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-bold hover:bg-accent"
            >
              {c}
            </button>
          );
        })}
      </div>

      <section className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl">
            Catalogue page {page}
            <span className="ml-2 text-sm font-semibold text-muted-foreground">
              ({pageIndex + 1} of {pages.length})
            </span>
          </h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous page"
              disabled={pageIndex === 0}
              onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next page"
              disabled={pageIndex === pages.length - 1}
              onClick={() => setPageIndex((i) => Math.min(pages.length - 1, i + 1))}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pageProducts.map((p, i) => (
            <Link
              key={p.id}
              to="/product/$productId"
              params={{ productId: p.id }}
              className="reveal group overflow-hidden rounded-2xl border border-border transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <div className="h-full transition-transform duration-500 group-hover:scale-110">
                  <PackShot product={p} />
                </div>
              </div>
              <div className="p-3">
                <p className="font-bold">{p.name}</p>
                <p className="text-xs text-muted-foreground">
                  {p.category}
                  {p.price != null ? ` · ₹${p.price}` : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Scanned catalogue page images and the original PDF were not included in the supplied
          material. Once provided, each page will render as a zoomable scan alongside these product
          tiles.
        </p>
      </section>
    </div>
  );
}
