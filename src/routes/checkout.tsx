import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { getProduct } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart";
import { brand, waLink } from "@/lib/brand";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Game Namkeen" },
      { name: "description", content: "Place your Game Namkeen order and confirm delivery details." },
      { property: "og:title", content: "Checkout — Game Namkeen" },
      { property: "og:description", content: "Place your Game Namkeen order." },
      { property: "og:url", content: "/checkout" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/checkout" }],
  }),
  component: Checkout;
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120).or(z.literal("")),
  address: z.string().trim().min(6, "Please enter your address").max(300),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  state: z.string().trim().min(2, "Please enter your state").max(60),
  pin: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code"),
  notes: z.string().trim().max(500).optional(),
});

function Checkout() {
  const { lines, subtotal, hasUnpricedItems, clear } = useCart();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please correct the highlighted fields");
      return;
    }
    setErrors({});
    const summary = lines
      .map((l) => `${getProduct(l.id)?.name ?? l.id} × ${l.qty}`)
      .join(", ");
    window.open(
      waLink(
        `New order request from ${parsed.data.name} (${parsed.data.mobile}).\nItems: ${summary}\nSubtotal: ₹${subtotal}\nAddress: ${parsed.data.address}, ${parsed.data.city}, ${parsed.data.state} - ${parsed.data.pin}`,
      ),
      "_blank",
      "noopener",
    );
    clear();
    toast.success("Order details sent to Game Namkeen on WhatsApp for confirmation.");
    event.currentTarget.reset();
  };

  if (lines.length === 0) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-4xl">Nothing to check out</h1>
        <Button asChild className="mt-8" size="lg">
          <Link to="/shop">Shop Products</Link>
        </Button>
      </div>
    );
  }

  const field = (
    id: string,
    label: string,
    props: React.InputHTMLAttributes<HTMLInputElement> = {},
  ) => (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={id} className="mt-1.5" {...props} />
      {errors[id] && <p className="mt-1 text-xs text-destructive">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="container-page py-10">
      <h1 className="text-4xl sm:text-5xl">Checkout</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-2xl">Delivery Details</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {field("name", "Full name", { autoComplete: "name", required: true })}
            {field("mobile", "Mobile number", { inputMode: "numeric", autoComplete: "tel", required: true })}
            <div className="sm:col-span-2">
              {field("email", "Email (optional)", { type: "email", autoComplete: "email" })}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="address">Delivery address</Label>
              <Textarea id="address" name="address" rows={3} className="mt-1.5" required />
              {errors.address && <p className="mt-1 text-xs text-destructive">{errors.address}</p>}
            </div>
            {field("city", "City", { autoComplete: "address-level2", required: true })}
            {field("state", "State", { autoComplete: "address-level1", required: true })}
            {field("pin", "PIN code", { inputMode: "numeric", autoComplete: "postal-code", required: true })}
            <div className="sm:col-span-2">
              <Label htmlFor="notes">Order notes (optional)</Label>
              <Textarea id="notes" name="notes" rows={2} className="mt-1.5" />
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-border bg-muted/60 p-4 text-sm">
            <strong className="block">Payment</strong>
            Online payment is not connected yet. Submitting this form sends your order to Game
            Namkeen on WhatsApp ({brand.phoneDisplay}) so the team can confirm pricing, delivery and
            payment.
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full">
            Place Order Request
          </Button>
        </form>

        <aside className="h-max rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-2xl">Order Summary</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {lines.map((l) => {
              const p = getProduct(l.id);
              if (!p) return null;
              return (
                <li key={l.id} className="flex justify-between gap-3">
                  <span>
                    {p.name} × {l.qty}
                  </span>
                  <span className="font-semibold">
                    {p.price != null ? `₹${p.price * l.qty}` : "—"}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex justify-between border-t border-border pt-4 font-extrabold">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>
          {hasUnpricedItems && (
            <p className="mt-2 text-xs text-muted-foreground">
              Items without a catalogue MRP are quoted by the team.
            </p>
          )}
        </aside>
      </div>
    </div>
  );
}
