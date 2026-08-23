import type { Product } from "@/data/products";
import { getProductImage } from "@/data/product-images";

/**
 * Placeholder pack visual.
 * The supplied material did not include the packaging photography
 * (assets/catalogue/*.jpg was not provided), so products render a branded
 * typographic tile until the real pack shots are added.
 */
const palettes = [
  "from-[oklch(0.55_0.22_27.5)] to-[oklch(0.4_0.16_30)]",
  "from-[oklch(0.62_0.19_45)] to-[oklch(0.45_0.16_28)]",
  "from-[oklch(0.5_0.16_20)] to-[oklch(0.36_0.13_32)]",
  "from-[oklch(0.6_0.17_60)] to-[oklch(0.44_0.15_38)]",
];

function hash(value: string) {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) h = (h * 31 + value.charCodeAt(i)) % 9973;
  return h;
}

export function PackShot({ product, className = "" }: { product: Product; className?: string }) {
  const image = getProductImage(product.id);
  if (image) {
    return (
      <div
        className={`relative flex h-full w-full items-center justify-center overflow-hidden bg-[oklch(0.97_0.02_85)] p-4 ${className}`}
      >
        <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/25 blur-2xl" />
        <img
          src={image}
          alt={`${product.name} pack shot`}
          loading="lazy"
          className="relative h-full w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.18)]"
        />
      </div>
    );
  }
  const palette = palettes[hash(product.id) % palettes.length];
  return (
    <div
      role="img"
      aria-label={`${product.name} pack — packaging photo pending`}
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br ${palette} p-5 ${className}`}
    >
      <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/25 blur-2xl" />
      <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-gold">
        Game Namkeen
      </span>
      <span className="font-display text-2xl leading-tight text-primary-foreground">
        {product.name}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/70">
        {product.tag}
      </span>
    </div>
  );
}
