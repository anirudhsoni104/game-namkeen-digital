// Product data extracted from the supplied Game Namkeen catalogue website.
// Only fields present in the source material are populated. `price` is the
// catalogue MRP in INR; null means no price was stated in the source.

export type Product = {
  id: string;
  name: string;
  category: string;
  tag: string;
  price: number | null;
  cataloguePage: number;
};

export const products: Product[] = [
  {
    "id": "pet-pouch-b",
    "name": "Pet Pooja",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "ponga-panda",
    "name": "Ponga Panda",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "noodler-masala",
    "name": "Noodler Masala",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "masala-pipe",
    "name": "Masala Pipe",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "chowmein",
    "name": "Chowmein",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "3d-samosa",
    "name": "3D Samosa",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "palak-paneer",
    "name": "Palak Paneer",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "bhindi-masala",
    "name": "Bhindi Masala",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 2
  },
  {
    "id": "chatpata-pasta",
    "name": "Chatpata Pasta",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "hot-chilli-pasta",
    "name": "Hot Chilli Pasta",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "masala-chowmein",
    "name": "Masala Chowmein",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "pop-corn",
    "name": "Pop Corn",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "dal-makhni",
    "name": "Dal Bhaat",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "paneer-bhaji",
    "name": "Paneer Bhaji",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "paneer-tikka",
    "name": "Paneer Tikka",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 4
  },
  {
    "id": "kaju-curry",
    "name": "Kaju Curry",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 4
  },
  {
    "id": "tasty-fry-masala",
    "name": "Mirchi Bhajiya",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 4
  },
  {
    "id": "patar-patar",
    "name": "Patar-Patar",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 4
  },
  {
    "id": "sev-samosa",
    "name": "Sev Samosa",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 4
  },
  {
    "id": "indori-kabab",
    "name": "Indori Kabab",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 4
  },
  {
    "id": "makeup-box",
    "name": "Makeup Jewellery Box",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "balloon-pasta",
    "name": "Balloon Pasta",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "mota-wheels",
    "name": "Mota Wheels",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "laser-light",
    "name": "Laser Light",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "racing-car",
    "name": "Racing Car",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "masala-puchka",
    "name": "Masala Puchka",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "smile-please",
    "name": "Smile Please",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "dancing-ball",
    "name": "Dancing Ball",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "jelly-masti",
    "name": "Jelly Maza",
    "category": "₹5 Toys & Fun",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "masala-bhel",
    "name": "Masala Bhel",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": null,
    "cataloguePage": 9
  },
  {
    "id": "chilli-bhujia",
    "name": "Bhootiya Chilli",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": null,
    "cataloguePage": 9
  },
  {
    "id": "hal-muri",
    "name": "Jhal Muri",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": null,
    "cataloguePage": 9
  },
  {
    "id": "bhujia-chilli",
    "name": "Bhujia Chilli",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": null,
    "cataloguePage": 9
  },
  {
    "id": "dal-ratani",
    "name": "Dal Makhani",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "sev-samosa-2",
    "name": "Sev & Samosa",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "mota-wheels-2",
    "name": "Mota Wheels",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "jagga-jasoo",
    "name": "Jagga Jasoo",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "kit-kat",
    "name": "Kit-Kat",
    "category": "Wafers",
    "tag": "Wafers",
    "price": null,
    "cataloguePage": 11
  },
  {
    "id": "wafer-stick",
    "name": "Star Gold Wafer",
    "category": "Wafers",
    "tag": "Wafers",
    "price": null,
    "cataloguePage": 11
  },
  {
    "id": "2-much",
    "name": "2 Much",
    "category": "Wafers",
    "tag": "Wafers",
    "price": null,
    "cataloguePage": 11
  },
  {
    "id": "jungle-safari",
    "name": "Jungle Safari",
    "category": "Wafers",
    "tag": "Wafers",
    "price": null,
    "cataloguePage": 12
  },
  {
    "id": "wafer-chouda",
    "name": "Wafer Chouda",
    "category": "Wafers",
    "tag": "Wafers",
    "price": null,
    "cataloguePage": 12
  },
  {
    "id": "lambu-wafers",
    "name": "Lambu Wafers",
    "category": "Wafers",
    "tag": "Wafers",
    "price": null,
    "cataloguePage": 12
  },
  {
    "id": "awari-gathiya",
    "name": "Awari Gathiya",
    "category": "₹10 Premium Namkeens",
    "tag": "₹10 Premium",
    "price": 10,
    "cataloguePage": 13
  },
  {
    "id": "masti-maza",
    "name": "Masti Maza",
    "category": "₹10 Premium Namkeens",
    "tag": "₹10 Premium",
    "price": 10,
    "cataloguePage": 13
  },
  {
    "id": "besan-papdi",
    "name": "Besan Papdi",
    "category": "₹10 Premium Namkeens",
    "tag": "₹10 Premium",
    "price": 10,
    "cataloguePage": 13
  },
  {
    "id": "sab-kuch-mixture",
    "name": "Sab Kuch Mixture",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
  },
  {
    "id": "masala-matar",
    "name": "Masala Matar",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
  },
  {
    "id": "neebu-bhujiya",
    "name": "Neebu Bhujiya",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
  },
  {
    "id": "nargri-sev",
    "name": "Narangi Sev",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
  },
  {
    "id": "teekha-mixture",
    "name": "Teekha Mixture",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
  },
  {
    "id": "gathiya",
    "name": "Gathiya",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
  },
  {
    "id": "papadi",
    "name": "Papadi",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
  },
  {
    "id": "party-mix",
    "name": "Party Mix",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 15
  },
  {
    "id": "chana-chatpata",
    "name": "Chana Chatpata",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 15
  },
  {
    "id": "dal-moth",
    "name": "Dal Moth",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 15
  },
  {
    "id": "masala-moongfali",
    "name": "Masala Moongfali",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 15
  },
  {
    "id": "nayalon-saloni",
    "name": "Nylon Saloni",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 15
  },
  {
    "id": "bhujia-falsa",
    "name": "Bhajiya Phalli",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 15
  },
  {
    "id": "hara-matar",
    "name": "Hara Matar",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "neebu-bhujiya-2",
    "name": "Neebu Bhujiya",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "teekha-maza",
    "name": "Teekha Maza",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "party-mix-2",
    "name": "Party Mix",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "masala-moongfali-2",
    "name": "Masala Moongfali",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "chana-chatpata-2",
    "name": "Chana Chatpata",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "dal-moth-2",
    "name": "Dal Moth",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "nayalon-saloni-2",
    "name": "Nylon Saloni",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "gathakatori",
    "name": "Gangakaveri",
    "category": "500g & 1kg Namkeen",
    "tag": "Large Pack",
    "price": null,
    "cataloguePage": 17
  },
  {
    "id": "pet-pooja-special-namkeen",
    "name": "Pet Pooja Special Namkeen",
    "category": "500g & 1kg Namkeen",
    "tag": "Large Pack",
    "price": null,
    "cataloguePage": 17
  },
  {
    "id": "haula-haula",
    "name": "Haula Haula",
    "category": "Chips",
    "tag": "Chips",
    "price": null,
    "cataloguePage": 19
  }
];

export const categories: string[] = [
  "₹5 Family Pack",
  "₹5 Toys & Fun",
  "Premium ₹5 Snacks",
  "₹2 MRP Items",
  "Wafers",
  "₹10 Premium Namkeens",
  "₹5 Namkeens",
  "₹2 Pocket Packs",
  "500g & 1kg Namkeen",
  "Chips"
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
