/**
 * js/products.js - Hussein Bakes Product Database
 * Optimized for Premium Branding & Local SEO
 * Last Updated: 2026
 */

const products = {
  // ============================
  // CAKES - CUSTOM CRAFTED (48H)
  // ============================
  cakes: [
    {
      id: "vanilla-cake",
      name: "Vanilla Cake",
      description: "Soft, classic vanilla sponge with premium vanilla buttercream. A timeless celebration favorite.",
      image: "images/hussein-bakes-vanilla-cake-kitui.jpeg",
      badge: "Popular",
      rules: {
        preparation: "Custom Crafted",
        notice: "To ensure the perfect design and flavor, please allow 48 hours for preparation."
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: [
        { name: "Custom Message Writing", price: 0 },
        { name: "Extra Cream Layer", price: 300 },
        { name: "Chocolate Drizzle/Drip", price: 500 },
        { name: "Premium Fondant Decoration", price: 1200 }
      ]
    },
    {
      id: "vanilla-cardamom",
      name: "Vanilla & Cardamom Cake",
      description: "Our signature masterpiece. Warm cardamom-infused sponge with delicate buttercream. A local Kitui specialty.",
      image: "images/hussein-bakes-signature-cardamom-cake.jpeg",
      badge: "Signature",
      rules: {
        preparation: "Signature Craft",
        notice: "Our signature recipe requires a 48-hour preparation for the perfect infusion of spice."
      },
      prices: { "1kg": 2500, "2kg": 4500, "3kg": 6500, "4kg": 8500 },
      addons: [{ name: "Custom Message Writing", price: 0 }]
    },
    {
      id: "chocolate-cake",
      name: "Chocolate Cake",
      description: "Rich, moist chocolate sponge with smooth chocolate ganache. Pure chocolate indulgence.",
      image: "images/hussein-bakes-rich-chocolate-cake.jpeg",
      badge: "Popular",
      rules: { preparation: "Custom Crafted", notice: "Please allow 48 hours to ensure a perfectly moist and rich finish." },
      prices: { "1kg": 2500, "2kg": 4500, "3kg": 6500, "4kg": 8500 },
      addons: [{ name: "Custom Message Writing", price: 0 }]
    },
    {
      id: "red-velvet",
      name: "Red Velvet Cake",
      description: "Classic red velvet with signature cream cheese frosting. Elegant and luxurious.",
      image: "images/hussein-bakes-luxury-red-velvet-cake.jpeg",
      badge: "Popular",
      rules: { preparation: "Custom Crafted", notice: "48-hour pre-order required for the perfect luxury finish." },
      prices: { "1kg": 2500, "2kg": 4500, "3kg": 6500, "4kg": 8500 },
      addons: [{ name: "Custom Message Writing", price: 0 }]
    },
    {
      id: "black-forest",
      name: "Black Forest Cake",
      description: "Chocolate sponge layered with fresh whipped cream and cherries. A classic celebration choice.",
      image: "images/hussein-bakes-black-forest-cake-kitui.jpeg",
      badge: "Classic",
      rules: { preparation: "Custom Crafted", notice: "We use fresh cream; please allow 48 hours for prep." },
      prices: { "1kg": 2500, "2kg": 4500, "3kg": 6500, "4kg": 8500 },
      addons: [{ name: "Custom Message Writing", price: 0 }]
    }
  ],
  
  // ============================
  // PIZZA - ARTISANAL FRESH (3H)
  // ============================
  pizza: [
    {
      id: "beef-pizza",
      name: "Beef Pizza",
      description: "Seasoned ground beef and melted mozzarella on our slow-proofed artisanal crust.",
      image: "images/hussein-bakes-beef-pizza-kitui.jpeg",
      badge: "Friday BOGO",
      rules: {
        preparation: "Freshly Hand-Crafted",
        notice: "We make our dough fresh. Order early for timed pickup or delivery (approx 3 hours)."
      },
      prices: {
        "Small (9\")": 550,
        "Medium (12\")": 850,
        "Large - Family Size (14\")": 1200
      },
      addons: [
        { name: "Extra Cheese", price: 150 },
        { name: "Extra Beef Topping", price: 200 }
      ]
    },
    {
      id: "chicken-tikka-pizza",
      name: "Chicken Tikka Pizza",
      description: "Mildly spiced chicken tikka pieces on a fresh artisanal crust. Kitui's favorite slice.",
      image: "images/hussein-bakes-chicken-tikka-pizza.jpeg",
      badge: "Friday BOGO",
      rules: {
        preparation: "Freshly Hand-Crafted",
        notice: "Our artisanal dough takes 3 hours to proof for the perfect light and airy crust."
      },
      prices: {
        "Small (9\")": 550,
        "Medium (12\")": 850,
        "Large - Family Size (14\")": 1200
      }
    },
    {
      id: "cheese-pizza",
      name: "Cheese Pizza",
      description: "The ultimate cheese lover's delight. A premium blend of mozzarella on tomato base.",
      image: "images/hussein-bakes-classic-cheese-pizza.jpeg",
      badge: "Classic",
      rules: { preparation: "Freshly Hand-Crafted", notice: "Freshly baked to order. Recommended 3-hour notice." },
      prices: { "Small": 550, "Medium": 850, "Large": 1200 }
    },
    {
      id: "vegetable-pizza",
      name: "Vegetable Pizza",
      description: "Loaded with fresh bell peppers, onions, and tomatoes on a golden crust.",
      image: "images/hussein-bakes-vegetable-pizza.jpeg",
      badge: "Vegetarian",
      rules: { preparation: "Freshly Hand-Crafted", notice: "Freshly baked to order. Recommended 3-hour notice." },
      prices: { "Small": 550, "Medium": 850, "Large": 1200 }
    }
  ]
};

// ============================
// CORE LOGIC FUNCTIONS
// ============================

window.getProductsByCategory = (category) => products[category] || [];

window.getProductById = (productId) => {
  for (let category in products) {
    const product = products[category].find(p => p.id === productId);
    if (product) {
      product.category = category;
      return product;
    }
  }
  return null;
};

window.getProductPriceRange = (product) => {
  const prices = Object.values(product.prices);
  return { min: Math.min(...prices), max: Math.max(...prices) };
};

window.isFriday = () => new Date().getDay() === 5;

window.getFridayOffer = (product) => {
  // Friday Special applies to Beef and Chicken Tikka (Medium Size)
  if (product.category === 'pizza' && (product.id === 'beef-pizza' || product.id === 'chicken-tikka-pizza')) {
    if (window.isFriday()) {
      return "🎉 TODAY: Buy 1 Get 1 Free on Medium Size!";
    } else {
      return "📅 Pre-order for Friday: Buy 1 Get 1 Free (Medium Size)";
    }
  }
  return null;
};

window.getDeliveryFee = (deliveryOption) => (deliveryOption === 'Delivery' ? 100 : 0);

console.log('Hussein Bakes: Optimized Product Engine Loaded!');
