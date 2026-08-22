import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { brand } from "@/lib/brand";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "About" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="container-page flex items-center justify-between gap-4 py-3"
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img
            src={logoAsset.url}
            alt="Game Namkeen logo"
            width={132}
            height={76}
            className="h-10 w-auto"
          />
          <span className="sr-only">Game Namkeen</span>
        </Link>


        <div className="hidden items-center gap-7 text-sm font-bold lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <Link
            to="/shop"
            aria-label="Search products"
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-accent"
          >
            <Search className="size-5" />
          </Link>
          <Link
            to="/cart"
            aria-label={`Cart, ${count} items`}
            className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-accent"
          >
            <ShoppingCart className="size-5" />
            {count > 0 && (
              <span
                key={count}
                className="reveal absolute -right-0.5 -top-0.5 grid min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground"
              >
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-accent lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-bold last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <a href={`tel:${brand.phoneTel}`} className="py-3 text-base font-bold text-primary">
              Call {brand.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
