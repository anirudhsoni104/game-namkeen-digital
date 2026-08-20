import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand, waLink } from "@/lib/brand";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Game Namkeen — Durg, Chhattisgarh" },
      {
        name: "description",
        content:
          "Contact Game Namkeen: Sakhi Anandam Industries, Gram Malha, Durg 491107 and A.N. Products, Gram Umda Bhilai 3, Durg 490021. Call 09131959804.",
      },
      { property: "og:title", content: "Contact Game Namkeen" },
      {
        property: "og:description",
        content: "Phone, addresses and Instagram for the Game Namkeen team in Durg, Chhattisgarh.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120).or(z.literal("")),
  message: z.string().trim().min(4, "Please add a short message").max(600),
});

function Contact() {
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
        `Website enquiry.\nName: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nEmail: ${parsed.data.email || "-"}\nMessage: ${parsed.data.message}`,
      ),
      "_blank",
      "noopener",
    );
    toast.success("Your message is ready to send on WhatsApp.");
    form.reset();
  };

  return (
    <div className="container-page py-12">
      <header className="max-w-2xl">
        <h1 className="text-5xl sm:text-6xl">Contact Us</h1>
        <p className="mt-4 text-muted-foreground">
          Questions about products, orders or stocking Game Namkeen? Reach the team directly.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {brand.units.map((u) => (
            <div key={u.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <MapPin className="size-5 text-primary" />
              <h2 className="mt-3 text-xl">{u.name}</h2>
              <p className="mt-1 text-muted-foreground">{u.address}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-xl">Phone</h2>
            <a
              href={`tel:${brand.phoneTel}`}
              className="mt-2 inline-flex items-center gap-2 font-bold text-primary"
            >
              <Phone className="size-4" /> {brand.phoneDisplay}
            </a>
            <h2 className="mt-6 text-xl">Instagram</h2>
            <a
              href={brand.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 font-bold text-primary"
            >
              <Instagram className="size-4" /> {brand.instagramHandle}
            </a>
            <p className="mt-6 text-xs text-muted-foreground">
              An email address was not supplied with the company details — please call or use
              WhatsApp.
            </p>
            <Button asChild className="mt-5 w-full" variant="gold">
              <a
                href={waLink("Hi Game Namkeen, I have an enquiry.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" /> Enquire on WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="h-max rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          <h2 className="text-3xl">Send a message</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" className="mt-1.5" autoComplete="name" required />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" className="mt-1.5" inputMode="numeric" autoComplete="tel" required />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email">Email (optional)</Label>
              <Input id="email" name="email" type="email" className="mt-1.5" autoComplete="email" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={5} className="mt-1.5" required />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
          </div>
          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
            Send Enquiry
          </Button>
        </form>
      </div>
    </div>
  );
}
