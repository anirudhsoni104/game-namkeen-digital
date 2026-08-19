import { Link } from "@tanstack/react-router";
import { Instagram, Phone } from "lucide-react";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-24 bg-hero-gradient text-primary-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 text-[9px] font-black uppercase ring-2 ring-gold">
              Game
            </span>
            <span className="font-display text-xl font-bold">Game Namkeen</span>
          </div>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {brand.tagline}
          </p>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Namkeens, wafers, chips and family packs from Chhattisgarh, India.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Shop</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li>
              <Link to="/shop" className="hover:text-gold">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "₹5 Namkeens" }} className="hover:text-gold">
                Namkeens
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "Wafers" }} className="hover:text-gold">
                Wafers
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "Chips" }} className="hover:text-gold">
                Chips
              </Link>
            </li>
            <li>
              <Link to="/shop" search={{ category: "₹5 Family Pack" }} className="hover:text-gold">
                Family Packs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
            <li>
              <Link to="/about" className="hover:text-gold">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="hover:text-gold">
                Catalogue
              </Link>
            </li>
            <li>
              <Link to="/wholesale" className="hover:text-gold">
                Wholesale
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Reach Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            {brand.units.map((u) => (
              <li key={u.name}>
                <strong className="block font-semibold text-primary-foreground">{u.name}</strong>
                {u.address}
              </li>
            ))}
            <li>
              <a
                href={`tel:${brand.phoneTel}`}
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Phone className="size-4" /> {brand.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Instagram className="size-4" /> {brand.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Game Namkeen · Sakhi Anandam Industries / A.N. Products</span>
          <span>
            Shipping, returns, FAQs, privacy and terms pages are pending content from the company.
          </span>
        </div>
      </div>
    </footer>
  );
}
