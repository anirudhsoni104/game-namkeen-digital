import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, Search, X } from "lucide-react";
import { brand } from "@/lib/brand";
import logoAsset from "@/assets/game-namkeen-logo.png.asset.json";


const links = [
  { to: "/shop", label: "Products" },
  { to: "/catalogue", label: "Catalogue" },
  { to: "/about", label: "About" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
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
            className="h-12 w-auto"
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
          <a
            href={`tel:${brand.phoneTel}`}
            aria-label={`Call ${brand.phoneDisplay}`}
            className="grid size-10 place-items-center rounded-full transition-colors hover:bg-accent"
          >
            <Phone className="size-5" />
          </a>
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
