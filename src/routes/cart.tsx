import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { getProduct } from "@/data/products";
import { PackShot } from "@/components/site/PackShot";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Game Namkeen" },
      { name: "description", content: "Review the Game Namkeen products in your cart before checkout." },
      { property: "og:title", content: "Your Cart — Game Namkeen" },
      { property: "og:description", content: "Review your Game Namkeen snack order." },
      { property: "og:url", content: "/cart" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, setQty, remove, subtotal, hasUnpricedItems } = useCart();

  if (lines.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-4xl">Your cart is empty</h1>
        <p className="mt-3 text-muted-foreground">Add some namkeen and it will show up here.</p>
        <Button asChild className="mt-8" size="lg">
          <Link to="/shop">Shop Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container-page py-10">
      <h1 className="text-4xl sm:text-5xl">Your Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <ul className="space-y-4">
          {lines.map((line) => {
            const product = getProduct(line.id);
            if (!product) return null;
            return (
              <li
                key={line.id}
                className="flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-card"
              >
                <Link
                  to="/product/$productId"
                  params={{ productId: product.id }}
                  className="size-24 shrink-0 overflow-hidden rounded-xl"
                >
                  <PackShot product={product} />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-lg font-bold">{product.name}</h2>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${product.name}`}
                      onClick={() => remove(line.id)}
                      className="text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="size-5" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <div className="flex items-center rounded-full border border-border">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        className="grid size-9 place-items-center rounded-full hover:bg-accent"
                        onClick={() => setQty(line.id, line.qty - 1)}
                      >
                        <Minus className="size-4" />
                      </button>
                      <span className="w-9 text-center font-bold">{line.qty}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        className="grid size-9 place-items-center rounded-full hover:bg-accent"
                        onClick={() => setQty(line.id, line.qty + 1)}
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                    <span className="font-extrabold">
                      {product.price != null ? `₹${product.price * line.qty}` : "Price on enquiry"}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <aside className="h-max rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-2xl">Order Summary</h2>
          <div className="mt-4 flex justify-between text-sm">
            <span>Subtotal</span>
            <span className="font-bold">₹{subtotal}</span>
          </div>
          {hasUnpricedItems && (
            <p className="mt-2 text-xs text-muted-foreground">
              Some items have no MRP in the catalogue and are excluded from the subtotal — the team
              will confirm pricing.
            </p>
          )}
          <p className="mt-2 text-xs text-muted-foreground">
            Delivery charges are confirmed by the team after the order is placed.
          </p>
          <Button asChild className="mt-6 w-full" size="lg">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
          <Button asChild variant="outline" className="mt-3 w-full">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </aside>
      </div>
    </div>
  );
}
