import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { toast } from "sonner";
import { MessageCircle, Minus, Plus, ShoppingBag } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { PackShot } from "@/components/site/PackShot";
import { ProductCard } from "@/components/site/ProductCard";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { waLink } from "@/lib/brand";

export const Route = createFileRoute("/product/$productId")({
  loader: ({ params }) => {
    const product = getProduct(params.productId);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product unavailable — Game Namkeen" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const description = `${product.name} — ${product.category} from the Game Namkeen range${
      product.price != null ? `, catalogue MRP ₹${product.price}` : ""
    }.`;
    return {
      meta: [
        { title: `${product.name} — Game Namkeen` },
        { name: "description", content: description },
        { property: "og:title", content: `${product.name} — Game Namkeen` },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/product/${params.productId}` },
      ],
      links: [{ rel: "canonical", href: `/product/${params.productId}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            category: product.category,
            brand: { "@type": "Brand", name: "Game Namkeen" },
            ...(product.price != null
              ? {
                  offers: {
                    "@type": "Offer",
                    price: product.price,
                    priceCurrency: "INR",
                  },
                }
              : {}),
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container-page py-10">
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/shop" className="hover:text-primary">
          Shop
        </Link>{" "}
        /{" "}
        <Link to="/shop" search={{ category: product.category }} className="hover:text-primary">
          {product.category}
        </Link>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="aspect-square overflow-hidden rounded-3xl shadow-card">
            <PackShot product={product} />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Packaging photography for this product is pending — the original catalogue images were
            not supplied with the source material.
          </p>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            {product.category}
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl">{product.name}</h1>
          {product.price != null ? (
            <p className="mt-4 text-3xl font-extrabold text-primary">₹{product.price}</p>
          ) : (
            <p className="mt-4 text-sm text-muted-foreground">
              MRP not stated in the supplied catalogue — please enquire.
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-border">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="grid size-10 place-items-center rounded-full hover:bg-accent"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Minus className="size-4" />
              </button>
              <span className="w-10 text-center font-bold" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="grid size-10 place-items-center rounded-full hover:bg-accent"
                onClick={() => setQty((q) => q + 1)}
              >
                <Plus className="size-4" />
              </button>
            </div>
            <Button
              size="lg"
              onClick={() => {
                add(product.id, qty);
                toast.success(`${product.name} × ${qty} added to cart`);
              }}
            >
              <ShoppingBag className="size-4" /> Add to Cart
            </Button>
            <Button asChild size="lg" variant="gold">
              <Link to="/checkout" onClick={() => add(product.id, qty)}>
                Buy Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={waLink(`Hi, I am interested in ${product.name}. Please share more details.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>

          <dl className="mt-10 divide-y divide-border rounded-2xl border border-border bg-card">
            <div className="flex justify-between p-4 text-sm">
              <dt className="font-semibold">Product name</dt>
              <dd>{product.name}</dd>
            </div>
            <div className="flex justify-between p-4 text-sm">
              <dt className="font-semibold">Category</dt>
              <dd>{product.category}</dd>
            </div>
            <div className="flex justify-between p-4 text-sm">
              <dt className="font-semibold">Range</dt>
              <dd>{product.tag}</dd>
            </div>
            <div className="flex justify-between p-4 text-sm">
              <dt className="font-semibold">Catalogue MRP</dt>
              <dd>{product.price != null ? `₹${product.price}` : "Not stated"}</dd>
            </div>
            <div className="flex justify-between p-4 text-sm">
              <dt className="font-semibold">Catalogue page</dt>
              <dd>Page {product.cataloguePage}</dd>
            </div>
            <div className="flex justify-between p-4 text-sm">
              <dt className="font-semibold">Pack size</dt>
              <dd className="text-muted-foreground">Not stated in supplied catalogue</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-muted-foreground">
            Ingredients, nutrition and certification details will be published once supplied by the
            company.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-3xl">More from {product.category}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
