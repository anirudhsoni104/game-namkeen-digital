import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { categories, products } from "@/data/products";
import { brand } from "@/lib/brand";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Game Namkeen — Trust. Taste. Tradition." },
      {
        name: "description",
        content:
          "Game Namkeen blends taste, crunch and quality using premium ingredients and traditional recipes, made by Sakhi Anandam Industries and A.N. Products in Durg, Chhattisgarh.",
      },
      { property: "og:title", content: "About Game Namkeen" },
      {
        property: "og:description",
        content: "The story, philosophy and manufacturing units behind Game Namkeen.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="container-page py-12">
      <header className="max-w-3xl">
        <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">
          About Game Namkeen
        </span>
        <h1 className="mt-3 text-5xl sm:text-6xl">Taste that brings joy to every bite.</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Game Namkeen brings together taste, crunch and quality, using premium ingredients and
          traditional recipes. The range is designed for tea-time, celebrations and everyday
          snacking — from ₹2 pocket packs to family-size 500g and 1kg namkeen packs.
        </p>
      </header>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {[
          { k: `${products.length}`, v: "Products in the catalogue" },
          { k: `${categories.length}`, v: "Distinct product ranges" },
          { k: "2", v: "Manufacturing units in Durg, Chhattisgarh" },
        ].map((s) => (
          <div key={s.v} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <p className="font-display text-4xl text-primary">{s.k}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-hero-gradient p-8 text-primary-foreground shadow-lift">
          <h2 className="text-3xl">Brand philosophy</h2>
          <p className="mt-4 text-primary-foreground/85">
            {brand.tagline} — a promise carried across every pack. Familiar Indian flavours,
            everyday affordability and packaging built for the modern kirana shelf.
          </p>
          <ul className="mt-6 space-y-3">
            {brand.strengths.map((s) => (
              <li key={s} className="flex items-center gap-3 font-semibold">
                <BadgeCheck className="size-5 text-gold" /> {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
          <h2 className="text-3xl">Our units</h2>
          <div className="mt-6 space-y-6">
            {brand.units.map((u) => (
              <div key={u.name}>
                <h3 className="text-xl">{u.name}</h3>
                <p className="mt-1 text-muted-foreground">{u.address}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Additional company details — incorporation history, FSSAI and GST registration numbers,
            plant capacity and certifications — will be published here once supplied.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/shop">Explore Products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/wholesale">Become a Distributor</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-3xl">The product range</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c}
              to="/shop"
              search={{ category: c }}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold transition-colors hover:bg-accent"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
