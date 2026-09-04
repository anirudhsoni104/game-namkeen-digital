// Product data extracted from the official Game Namkeen catalogue PDF (pages 2-19).
// `price` is the catalogue MRP in INR; null means no price is stated in the catalogue.

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
    "id": "pet-pooja-fryums",
    "name": "Pet Pooja Fryums",
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
    "id": "dal-bhaat",
    "name": "Dal Bhaat",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "pav-bhaji",
    "name": "Mumbai Pav Bhaji",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "pet-pooja-tasty-puff",
    "name": "Pet Pooja Tasty Puff",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 3
  },
  {
    "id": "family-dhaba",
    "name": "Family Dhaba",
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
    "id": "mirchi-bhajiya",
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
    "id": "pet-pooja-tasty-puff-5",
    "name": "Pet Pooja Tasty Puff (Big Pack)",
    "category": "₹5 Family Pack",
    "tag": "Family Pack",
    "price": 5,
    "cataloguePage": 4
  },
  {
    "id": "babaji-ka-thullu",
    "name": "Babaji Ka Thullu",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "ketchup-katori",
    "name": "Ketchup Katori",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "makeup-jewellery-box",
    "name": "MakeUp Jewellery Box",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "balloon-pasta",
    "name": "Balloon Pasta",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "mota-wheels",
    "name": "Mota Wheels",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "laser-light",
    "name": "Laser Light",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "light-wala",
    "name": "Light Wala",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "rocket-balloon",
    "name": "Rocket Balloon",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 5
  },
  {
    "id": "patakha-candy",
    "name": "Patakha Candy",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "biskute-biscuit",
    "name": "Biskute Biscuit",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "bhaura-baati",
    "name": "Bhaura Baati",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "samosa-chatni",
    "name": "Samosa Chatni",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "jo-dikhta-hai-wo-bikta-hai",
    "name": "Jo Dikhta Hai Wo Bikta Hai",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "kaka-ka-khazana",
    "name": "Kaka Ka Khazana",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "lucky-biryani",
    "name": "Lucky Biryani",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "main-jhukega-nahi",
    "name": "Main Jhukega Nahi",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 6
  },
  {
    "id": "jodo-todo",
    "name": "Jodo Todo",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "racing-car",
    "name": "Racing Car",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "masala-puchka",
    "name": "Masala Puchka",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "smile-please",
    "name": "Smile Please",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "bhancha-ghadi",
    "name": "Bhancha Ghadi",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "patang",
    "name": "Patang",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "dancing-ball",
    "name": "Dancing Ball",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "boom-fataka",
    "name": "Boom Fataka",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 7
  },
  {
    "id": "panipuri",
    "name": "Panipuri",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "batman-ka-bhai-superman",
    "name": "Batman Ka Bhai Superman",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "khajana-hi-khajana",
    "name": "Khajana Hi Khajana",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "kefuram",
    "name": "Kefuram",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "loot-machi-hai",
    "name": "Loot Machi Hai",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "lucky-ipl",
    "name": "Lucky IPL",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "jelly-maza",
    "name": "Jelly Maza",
    "category": "₹5 Toys & Gifts",
    "tag": "Fun Pack",
    "price": 5,
    "cataloguePage": 8
  },
  {
    "id": "masala-bhel",
    "name": "Masala Bhel",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": 5,
    "cataloguePage": 9
  },
  {
    "id": "chhattisgarhi-chana-murra",
    "name": "Chhattisgarhi Chana Murra",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": 5,
    "cataloguePage": 9
  },
  {
    "id": "jhal-muri",
    "name": "Jhal Muri",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": 5,
    "cataloguePage": 9
  },
  {
    "id": "bhootiya-chilli",
    "name": "Bhootiya Chilli",
    "category": "Premium ₹5 Snacks",
    "tag": "Premium",
    "price": 5,
    "cataloguePage": 9
  },
  {
    "id": "dal-makhani",
    "name": "Dal Makhani",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "bajirao",
    "name": "Bajirao",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "sev-and-samosa",
    "name": "Sev & Samosa",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "motu-patlu",
    "name": "Motu Patlu",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "jagga-jasoos",
    "name": "Jagga Jasoos",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "ketchup-katori-2",
    "name": "Ketchup Katori",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "candy-balls",
    "name": "Candy Balls",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "gubbare-ki-duniya",
    "name": "Gubbare Ki Duniya",
    "category": "₹2 MRP Items",
    "tag": "₹2 Range",
    "price": 2,
    "cataloguePage": 10
  },
  {
    "id": "kit-kat",
    "name": "Kit-Kat Choco Coated Wafer",
    "category": "Wafers",
    "tag": "Wafers",
    "price": 5,
    "cataloguePage": 11
  },
  {
    "id": "star-gold",
    "name": "Star Gold Choco Coated Wafer",
    "category": "Wafers",
    "tag": "Wafers",
    "price": 5,
    "cataloguePage": 11
  },
  {
    "id": "2much",
    "name": "2much Choco Coated Wafer",
    "category": "Wafers",
    "tag": "Wafers",
    "price": 5,
    "cataloguePage": 11
  },
  {
    "id": "jungle-safari",
    "name": "Jungle Safari Cream Wafers",
    "category": "Wafers",
    "tag": "Wafers",
    "price": 2,
    "cataloguePage": 12
  },
  {
    "id": "wafers-chouda",
    "name": "Wafers Chouda",
    "category": "Wafers",
    "tag": "Wafers",
    "price": 5,
    "cataloguePage": 12
  },
  {
    "id": "lambu-wafers",
    "name": "Lambu Wafers",
    "category": "Wafers",
    "tag": "Wafers",
    "price": 5,
    "cataloguePage": 12
  },
  {
    "id": "achari-gathiya",
    "name": "Achari Gathiya",
    "category": "₹10 Premium Namkeens",
    "tag": "₹10 Premium",
    "price": 10,
    "cataloguePage": 13
  },
  {
    "id": "masti-maza-10",
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
    "id": "masti-maza",
    "name": "Masti Maza",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 14
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
    "id": "narangi-sev",
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
    "id": "nylon-saloni",
    "name": "Nylon Saloni",
    "category": "₹5 Namkeens",
    "tag": "₹5 Namkeen",
    "price": 5,
    "cataloguePage": 15
  },
  {
    "id": "bhajiya-phalli",
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
    "id": "nylon-saloni-2",
    "name": "Nylon Saloni",
    "category": "₹2 Pocket Packs",
    "tag": "₹2 Pocket",
    "price": 2,
    "cataloguePage": 16
  },
  {
    "id": "gangakaveri",
    "name": "Gangakaveri Namkeen",
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
    "id": "pet-pooja-special-namkeen-2",
    "name": "Pet Pooja Special Namkeen (Premium)",
    "category": "500g & 1kg Namkeen",
    "tag": "Large Pack",
    "price": null,
    "cataloguePage": 17
  },
  {
    "id": "balaji-bhel",
    "name": "Balaji Bhel",
    "category": "Balaji Premium Range",
    "tag": "Balaji",
    "price": null,
    "cataloguePage": 18
  },
  {
    "id": "balaji-wafers",
    "name": "Balaji Wafers",
    "category": "Balaji Premium Range",
    "tag": "Balaji",
    "price": null,
    "cataloguePage": 18
  },
  {
    "id": "balaji-pasta",
    "name": "Balaji Pasta",
    "category": "Balaji Premium Range",
    "tag": "Balaji",
    "price": null,
    "cataloguePage": 18
  },
  {
    "id": "balaji-jeera-papad",
    "name": "Balaji Jeera Papad",
    "category": "Balaji Premium Range",
    "tag": "Balaji",
    "price": 5,
    "cataloguePage": 18
  },
  {
    "id": "balaji-bhuja",
    "name": "Balaji Bhuja",
    "category": "Balaji Premium Range",
    "tag": "Balaji",
    "price": 5,
    "cataloguePage": 18
  },
  {
    "id": "haule-haule",
    "name": "Haule Haule Potato Chips",
    "category": "Chips",
    "tag": "Chips",
    "price": 5,
    "cataloguePage": 19
  }
];

export const categories: string[] = [
  "₹5 Family Pack",
  "₹5 Toys & Gifts",
  "Premium ₹5 Snacks",
  "₹2 MRP Items",
  "Wafers",
  "₹10 Premium Namkeens",
  "₹5 Namkeens",
  "₹2 Pocket Packs",
  "500g & 1kg Namkeen",
  "Balaji Premium Range",
  "Chips"
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
