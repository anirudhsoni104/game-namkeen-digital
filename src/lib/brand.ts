// Company details taken verbatim from the supplied Game Namkeen material.
export const brand = {
  name: "Game Namkeen",
  tagline: "Trust. Taste. Tradition.",
  phoneDisplay: "09131959804",
  phoneTel: "+919131959804",
  whatsapp: "919131959804",
  instagram: "https://www.instagram.com/game.namkeens/",
  instagramHandle: "@game.namkeens",
  units: [
    {
      name: "Sakhi Anandam Industries",
      address: "Gram – Malha, District – Durg, Chhattisgarh · 491107",
    },
    {
      name: "A.N. Products",
      address: "Gram – Umda Bhilai 3, District – Durg, Chhattisgarh · 490021",
    },
  ],
  strengths: [
    "Premium Quality Ingredients",
    "Hygienic Processing",
    "Authentic Taste",
    "Wide Variety of Namkeen",
    "Loved by Families",
  ],
};

export const waLink = (message: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
