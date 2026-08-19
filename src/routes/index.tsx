import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, HeartHandshake, Sparkles, Store, Utensils } from "lucide-react";
import { categories, products } from "@/data/products";
import { PackShot } from "@/components/site/PackShot";
import { ProductCard } from "@/components/site/ProductCard";
import { brand } from "@/lib/brand";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Game Namkeen | Trust. Taste. Tradition." },
      {
        name: "description",
        content:
          "Shop the Game Namkeen range — ₹2 pocket packs, ₹5 namkeens, family packs, premium namkeens, wafers and chips. Trust. Taste. Tradition.",
      },
      { property: "og:title", content: "Game Namkeen | Trust. Taste. Tradition." },
      {
        property: "og:description",
        content:
          "Indian namkeens, wafers, chips and family packs from Game Namkeen. Explore the catalogue and enquire for wholesale.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const categoryBlurbs: Record<string, string> = {
  "₹5 Family Pack": "Family packs & big pouches",
  "₹5 Toys & Fun": "Snacks with toys, gifts & fun packs",
  "Premium ₹5 Snacks": "Premium snack range",
  "₹2 MRP Items": "Pocket-friendly snack options",
  Wafers: "Wafers, jars and wafer packs",
  "₹10 Premium Namkeens": "Premium packaging namkeen range",
  "₹5 Namkeens": "Classic everyday namkeen favourites",
  "₹2 Pocket Packs": "Compact namkeen pocket packs",
  "500g & 1kg Namkeen": "Larger family-size packs",
  Chips: "Game chips range",
};

const strengthIcons = [BadgeCheck, Sparkles, Utensils, Store, HeartHandshake];

function Home() {
  const showcase = products.slice(0, 10);
  const featured = products.filter((p) => p.price != null).slice(0, 8);

  return (
    <>
      <section className="bg-hero-gradient text-primary-foreground">
        <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div className="reveal">
            <span className="inline-flex rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em]">
              Indian Snacks · Namkeen · Wafers · Chips
            </span>
            <h1 className="mt-5 font-display text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
              Trust.
              <br />
              <span className="text-gold">Taste.</span>
              <br />
              Tradition.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Explore the Game Namkeen range — from ₹2 pocket packs and ₹5 favourites to premium
              namkeens, wafers, chips and family packs. Browse the full catalogue and shop your
              favourite snacks online.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gold">
                <Link to="/shop">
                  Shop Products <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <Link to="/catalogue">Explore Catalogue</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
              <div>
                <dt className="text-2xl font-extrabold text-gold">{products.length}</dt>
                <dd className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Products
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-gold">{categories.length}</dt>
                <dd className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Ranges
                </dd>
              </div>
              <div>
                <dt className="text-2xl font-extrabold text-gold">₹2–₹10</dt>
                <dd className="text-xs uppercase tracking-wide text-primary-foreground/70">
                  Catalogue MRP
                </dd>
              </div>
            </dl>
          </div>

          <div className="reveal overflow-hidden rounded-3xl bg-primary-foreground/10 p-3 shadow-lift">
            <div className="grid grid-cols-2 gap-3">
              {showcase.slice(0, 4).map((p) => (
                <Link
                  key={p.id}
                  to="/product/$productId"
                  params={{ productId: p.id }}
                  className="aspect-square overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.03]"
                >
                  <PackShot product={p} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-y border-primary-foreground/15 py-3">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
            {[...showcase, ...showcase].map((p, i) => (
              <span key={`${p.id}-${i}`}>{p.name} ·</span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl sm:text-5xl">Shop by Range</h2>
          <p className="max-w-lg text-muted-foreground">
            Ten ranges from the Game Namkeen catalogue — everyday snacks, family packs and premium
            namkeens.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const count = products.filter((p) => p.category === cat).length;
            const sample = products.find((p) => p.category === cat)!;
            return (
              <Link
                key={cat}
                to="/shop"
                search={{ category: cat }}
                className="group reveal overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <div className="h-full transition-transform duration-500 group-hover:scale-105">
                    <PackShot product={sample} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl">{cat}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{categoryBlurbs[cat]}</p>
                  <p className="mt-4 flex items-center justify-between text-sm font-bold text-primary">
                    <span>{count} products</span>
                    <span className="inline-flex items-center gap-1">
                      Explore Range <ArrowRight className="size-4" />
                    </span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl">Popular Picks</h2>
            <Button asChild variant="outline">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <h2 className="text-center text-4xl sm:text-5xl">Why Choose Game Namkeen</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {brand.strengths.map((s, i) => {
            const Icon = strengthIcons[i];
            return (
              <div
                key={s}
                className="reveal rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="mx-auto grid size-12 place-items-center rounded-full bg-gold-gradient text-gold-foreground">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-base font-bold">{s}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-20">
        <div className="overflow-hidden rounded-3xl bg-hero-gradient px-6 py-14 text-center text-primary-foreground shadow-lift sm:px-12">
          <h2 className="text-4xl sm:text-5xl">Partner With Game Namkeen</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Retailers, wholesalers, distributors, supermarkets, kirana stores and institutional
            buyers can stock the complete Game Namkeen range.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="gold">
              <Link to="/wholesale">Become a Distributor</Link>
            </Button>
            <Button asChild size="lg" variant="onDark">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
