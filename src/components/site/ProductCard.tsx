import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";
import { PackShot } from "./PackShot";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();

  return (
    <article
      className="group reveal flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
      style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
    >
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
          <PackShot product={product} />
        </div>
        {product.price != null && (
          <span className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-extrabold text-gold-foreground shadow-card">
            ₹{product.price}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {product.category}
        </span>
        <h3 className="text-lg leading-snug">
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="transition-colors hover:text-primary"
          >
            {product.name}
          </Link>
        </h3>
        <div className="mt-4 flex items-center gap-2">
          <Button
            size="sm"
            className="flex-1"
            onClick={() => {
              add(product.id);
              toast.success(`${product.name} added to cart`);
            }}
          >
            <ShoppingBag className="size-4" /> Add to Cart
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/product/$productId" params={{ productId: product.id }}>
              View
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
