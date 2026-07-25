
const MENU_DATA = {

  // ---------------- VEG ----------------
  veg: [
    {
      id: "v1",
      name: "Dal Tadka",
      description: "Yellow dal tempered with garlic, cumin & spices.",
      price: 140,
      unit: "per plate",
      tag: "Bestseller",
      spice: 1,
      available: true
    },
    {
      id: "v2",
      name: "Palak-Paneer",
      description: "Fresh paneer cooked in creamy spinach gravy.",
      price: 180,
      unit: "per plate",
      tag: "",
      spice: 1,
      available: true
    },
    {
      id: "v3",
      name: "Chole Masala",
      description: "Chickpeas simmered in a deep, tangy onion-tomato masala",
      price: 150,
      unit: "per plate",
      tag: "",
      spice: 2,
      available: true
    },
    {
      id: "v3",
      name: "Masala-Paneer",
      description: "Paneer cubes cooked in rich homemade masala.",
      price: 180,
      unit: "per plate",
      tag: "",
      spice: 2,
      available: true
    },
    {
      id: "v4",
      name: "Mixed Veg Sabzi",
      description: "Seasonal vegetables tossed in a light home-style masala",
      price: 120,
      unit: "per plate",
      tag: "",
      spice: 1,
      available: true
    },
    {
      id: "v5",
      name: "Dal-Baati",
      description: "Traditional dal served with freshly baked baati.",
      price: 220,
      unit: "per plate",
      tag: "chef's Pick",
      spice: 1,
      available: true
    },
    
  ],

  // ---------------- NON-VEG ----------------
  nonveg: [
    {
      id: "n1",
      name: "Chicken Curry",
      description: "Bone-in chicken cooked in a spiced onion-tomato gravy, Manoj Kitchen style",
      price: 220,
      unit: "per plate",
      tag: "Bestseller",
      spice: 2,
      available: true
    },
    {
      id: "n2",
      name: "Mutton Curry",
      description: "Slow-cooked mutton in a rich, home-style masala",
      price: 350,
      unit: "per plate",
      tag: "Chef's Pick",
      spice: 2,
      available: true
    },
    {
      id: "n3",
      name: "Egg Curry",
      description: "Boiled eggs simmered in a lightly spiced curry",
      price: 120,
      unit: "per plate",
      tag: "",
      spice: 1,
      available: true
    },
    {
      id: "n4",
      name: "Fish Fry",
      description: "Fresh fish marinated with homemade spices and fried until crispy.",
      price: 220,
      unit: "per plate",
      tag: "Spicy",
      spice: 2,
      available: true
    },
    {
      id: "n5",
      name: "Fish Curry",
      description: "Traditional Maharashtrian fish curry made with fresh spices.",
      price: 250,
      unit: "per plate",
      tag: "Chef's Pick",
      spice: 2,
      available: true
    },

  ],

  // ---------------- EXTRAS (not included by default) ----------------
  extras: [
    {
      id: "e1",
      name: "Steamed Rice",
      description: "Soft, freshly steamed rice",
      price: 70,
      unit: "per bowl",
      tag: "",
      spice: 0,
      available: true
    },
    {
      id: "e2",
      name: "Jeera Rice",
      description: "Steamed rice tempered with cumin and ghee",
      price: 100,
      unit: "per bowl",
      tag: "",
      spice: 0,
      available: true
    },
    {
      id: "e3",
      name: "Chapati",
      description: "₹15 each Soft home-style wheat flatbread ",
      price: 15 ,
      unit: "per piece",
      tag: "",
      spice: 0,
      available: true
    },
    {
      id: "e4",
      name: "Curd",
      description: "Fresh, thick homemade curd",
      price: 40,
      unit: "per bowl",
      tag: "",
      spice: 0,
      available: true
    }
  ]
};

// Exposed for later React/Next.js migration (import { MENU_DATA } from "./menu-data")
if (typeof module !== "undefined" && module.exports) {
  module.exports = MENU_DATA;
}
