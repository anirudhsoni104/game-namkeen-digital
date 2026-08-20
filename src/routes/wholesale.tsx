import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Building2, MessageCircle, Store, Truck, Users } from "lucide-react";
import { brand, waLink } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale & Distributor Enquiries — Game Namkeen" },
      {
        name: "description",
        content:
          "Partner with Game Namkeen. Wholesale and distribution enquiries for retailers, wholesalers, distributors, supermarkets, kirana stores and institutional buyers.",
      },
      { property: "og:title", content: "Partner With Game Namkeen" },
      {
        property: "og:description",
        content: "Stock the complete Game Namkeen namkeen, wafer and chips range.",
      },
      { property: "og:url", content: "/wholesale" },
    ],
    links: [{ rel: "canonical", href: "/wholesale" }],
  }),
  component: Wholesale,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  business: z.string().trim().min(2, "Please enter your business name").max(120),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120).or(z.literal("")),
  city: z.string().trim().min(2, "Please enter your city").max(60),
  state: z.string().trim().min(2, "Please enter your state").max(60),
  type: z.string().trim().min(2).max(60),
  requirement: z.string().trim().max(120).optional(),
  message: z.string().trim().max(600).optional(),
});

const audiences = [
  { icon: Store, label: "Retailers & kirana stores" },
  { icon: Truck, label: "Wholesalers & distributors" },
  { icon: Building2, label: "Supermarkets & chains" },
  { icon: Users, label: "Institutional buyers" },
];

function Wholesale() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please correct the highlighted fields");
      return;
    }
    setErrors({});
    window.open(
      waLink(
        `Business partnership enquiry.\nName: ${parsed.data.name}\nBusiness: ${parsed.data.business} (${parsed.data.type})\nPhone: ${parsed.data.phone}\nLocation: ${parsed.data.city}, ${parsed.data.state}\nRequirement: ${parsed.data.requirement ?? "-"}\nMessage: ${parsed.data.message ?? "-"}`,
      ),
      "_blank",
      "noopener",
    );
    toast.success("Enquiry ready to send on WhatsApp.");
    form.reset();
  };

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
    <div>
      <section className="bg-hero-gradient py-16 text-primary-foreground">
        <div className="container-page max-w-3xl">
          <h1 className="text-5xl sm:text-6xl">Partner With Game Namkeen</h1>
          <p className="mt-5 text-lg text-primary-foreground/85">
            Stock a complete snack portfolio — ₹2 pocket packs, ₹5 namkeens and family packs,
            premium ₹10 namkeens, wafers, chips and 500g/1kg packs — from one supplier.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 font-semibold"
              >
                <a.icon className="size-5 text-gold" /> {a.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-14 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <h2 className="text-3xl">Business Enquiry</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {field("name", "Your name", { required: true, autoComplete: "name" })}
            {field("business", "Business name", { required: true, autoComplete: "organization" })}
            {field("phone", "Phone", { required: true, inputMode: "numeric", autoComplete: "tel" })}
            {field("email", "Email (optional)", { type: "email", autoComplete: "email" })}
            {field("city", "City", { required: true })}
            {field("state", "State", { required: true })}
            <div>
              <Label htmlFor="type">Business type</Label>
              <select
                id="type"
                name="type"
                defaultValue="Retailer"
                className="mt-1.5 h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {["Retailer", "Kirana store", "Wholesaler", "Distributor", "Supermarket", "Institutional buyer"].map(
                  (t) => (
                    <option key={t}>{t}</option>
                  ),
                )}
              </select>
            </div>
            {field("requirement", "Approximate requirement", { placeholder: "e.g. 50 cartons / month" })}
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={4} className="mt-1.5" />
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
            Become a Business Partner
          </Button>
        </form>

        <aside className="h-max rounded-3xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-2xl">Talk to us directly</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Prefer a quick chat? Message or call the Game Namkeen team.
          </p>
          <Button asChild className="mt-5 w-full" variant="gold">
            <a
              href={waLink("Hi Game Namkeen, I would like to discuss a distribution partnership.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" /> Enquire on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" className="mt-3 w-full">
            <a href={`tel:${brand.phoneTel}`}>Call {brand.phoneDisplay}</a>
          </Button>
          <div className="mt-6 space-y-4 text-sm">
            {brand.units.map((u) => (
              <p key={u.name}>
                <strong className="block">{u.name}</strong>
                <span className="text-muted-foreground">{u.address}</span>
              </p>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Trade pricing, margins, minimum order quantities and territory terms are shared by the
            team on request.
          </p>
        </aside>
      </section>
    </div>
  );
}
