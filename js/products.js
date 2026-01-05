// js/products.js - Hussein Bakes Product Database
// Last Updated: 2025

const products = {
  // ============================
  // CAKES - 48 HOUR PRE-ORDER
  // ============================
  cakes: [
    {
      id: "vanilla-cake",
      name: "Vanilla Cake",
      description: "Soft, classic vanilla sponge with premium vanilla buttercream. Perfect for birthdays and celebrations.",
      image: "images/cakes/vanilla.jpg",
      badge: "Popular",
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
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
        { name: "Fresh Fruit Topping", price: 600 },
        { name: "Premium Fondant Decoration", price: 1200 }
      ]
    },
    {
      id: "vanilla-cardamom",
      name: "Vanilla & Cardamom Cake",
      description: "Our signature cake! Warm cardamom-infused sponge with delicate vanilla buttercream. A Kitui favorite.",
      image: "images/cakes/vanilla-cardamom.jpg",
      badge: "Signature",
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "Signature recipe - 48-hour advance order required"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    },
    {
      id: "chocolate-cake",
      name: "Chocolate Cake",
      description: "Rich, moist chocolate sponge with smooth chocolate ganache. Every chocolate lover's dream.",
      image: "images/cakes/chocolate.jpg",
      badge: "Popular",
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    },
    {
      id: "double-chocolate",
      name: "Double Chocolate Cake",
      description: "Double the chocolate! Extra chocolate layers and rich frosting for intense chocolate flavor.",
      image: "images/cakes/double-chocolate.jpg",
      badge: null,
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    },
    {
      id: "black-forest",
      name: "Black Forest Cake",
      description: "Classic German-style chocolate sponge with whipped cream and cherry layers. Elegant and delicious.",
      image: "images/cakes/black-forest.jpg",
      badge: "Popular",
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    },
    {
      id: "white-forest",
      name: "White Forest Cake",
      description: "Light vanilla sponge with whipped cream and cherry filling. A beautiful, delicate option.",
      image: "images/cakes/white-forest.jpg",
      badge: null,
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    },
    {
      id: "blueberry",
      name: "Blueberry Cake",
      description: "Soft vanilla sponge with fresh blueberry compote and cream. Refreshing and fruity.",
      image: "images/cakes/blueberry.jpg",
      badge: null,
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    },
    {
      id: "red-velvet",
      name: "Red Velvet Cake",
      description: "Classic red velvet with signature cream cheese frosting. Rich color, luxurious taste.",
      image: "images/cakes/red-velvet.jpg",
      badge: "Popular",
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    },
    {
      id: "cinnamon",
      name: "Cinnamon Spice Cake",
      description: "Warm cinnamon-spiced cake with caramel drizzle. Perfect for cozy celebrations.",
      image: "images/cakes/cinnamon.jpg",
      badge: null,
      rules: {
        preparation: "48 hours",
        delivery: "Pickup only at Hussein Bakes, Kitui Town",
        notice: "All cakes require 48-hour advance order"
      },
      prices: {
        "1kg (Serves 8-10)": 2500,
        "2kg (Serves 15-20)": 4500,
        "3kg (Serves 25-30)": 6500,
        "4kg (Serves 35-40)": 8500
      },
      addons: []
    }
  ],
  
    // ============================
  // PIZZA - 3-4 HOUR PREPARATION
  // ============================
  pizza: [
    {
      id: "beef-pizza",
      name: "Beef Pizza",
      description: "Seasoned ground beef, rich tomato sauce, and melted mozzarella cheese.",
      image: "images/pizza/beef.jpg",
      badge: "Popular",
      rules: {
        preparation: "3-4 hours",
        delivery: "Available within Kitui Town (KES 100)",
        notice: "Friday SPECIAL: Buy 1 Get 1 Free on MEDIUM size!"
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
      description: "Tender chicken tikka pieces with mild spices, rich sauce, and cheese.",
      image: "images/pizza/chicken.jpg",
      badge: "Popular",
      rules: {
        preparation: "3-4 hours",
        delivery: "Available within Kitui Town (KES 100)",
        notice: "Friday SPECIAL: Buy 1 Get 1 Free on MEDIUM size!"
      },
      prices: {
        "Small (9\")": 550,
        "Medium (12\")": 850,
        "Large - Family Size (14\")": 1200
      },
      addons: [
        { name: "Extra Cheese", price: 150 },
        { name: "Extra Chicken Tikka", price: 200 }
      ]
    },
    {
      id: "cheese-pizza",
      name: "Cheese Pizza",
      description: "Classic cheese-only pizza with rich tomato sauce. Perfect for kids.",
      image: "images/pizza/cheese.jpg",
      badge: null,
      rules: {
        preparation: "3-4 hours",
        delivery: "Available within Kitui Town (KES 100)",
        notice: null
      },
      prices: {
        "Small (9\")": 550,
        "Medium (12\")": 850,
        "Large - Family Size (14\")": 1200
      },
      addons: [
        { name: "Extra Cheese", price: 150 }
      ]
    },
    {
      id: "vegetable-pizza",
      name: "Vegetable Pizza",
      description: "Fresh mixed vegetables (bell peppers, onions, tomatoes) with light cheese.",
      image: "images/pizza/vegetable.jpg",
      badge: null,
      rules: {
  preparation: "Freshly hand-crafted",
  delivery: "Available within Kitui Town (KES 100)",
  notice: "Freshness takes time: We recommend ordering 3 hours in advance for the perfect crust."
}

      prices: {
        "Small (9\")": 550,
        "Medium (12\")": 850,
        "Large - Family Size (14\")": 1200
      },
      addons: [
        { name: "Extra Cheese", price: 150 },
        { name: "Olives", price: 80 }
      ]
    }
  ]

// ============================
// HELPER FUNCTIONS
// ============================

/**
 * Get product by ID from any category
 * @param {string} productId - The product ID to find
 * @returns {Object|null} - Product object or null if not found
 */
function getProductById(productId) {
  for (let category in products) {
    const product = products[category].find(p => p.id === productId);
    if (product) {
      product.category = category; // Add category for easy reference
      return product;
    }
  }
  return null;
}

/**
 * Get all products from a specific category
 * @param {string} category - 'cakes' or 'pizza'
 * @returns {Array} - Array of products
 */
function getProductsByCategory(category) {
  return products[category] || [];
}

/**
 * Get price range for a product
 * @param {Object} product - Product object
 * @returns {Object} - {min: number, max: number}
 */
function getProductPriceRange(product) {
  const prices = Object.values(product.prices);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
}

/**
 * Check if today is Friday
 * @returns {boolean} - True if today is Friday
 */
function isFriday() {
  return new Date().getDay() === 5; // 5 = Friday
}

/**
 * Get Friday offer text for a product
 * @param {Object} product - Product object
 * @returns {string|null} - Offer text or null
 */
function getFridayOffer(product) {
  if (product.category === 'pizza' && (product.id === 'beef-pizza' || product.id === 'chicken-tikka-pizza')) {
    const today = new Date();
    const isFriday = today.getDay() === 5;
    
    if (isFriday) {
      return "🎉 TODAY: Buy 1 Get 1 Free!";
    } else {
      // Calculate next Friday
      const nextFriday = new Date(today);
      const daysUntilFriday = (5 - today.getDay() + 7) % 7 || 7;
      nextFriday.setDate(today.getDate() + daysUntilFriday);
      const formattedDate = nextFriday.toLocaleDateString('en-KE', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'short' 
      });
      
      return `📅 Pre-order for ${formattedDate} & get Buy 1 Get 1 Free`;
    }
  }
  return null;
}

/**
 * Calculate delivery fee based on option
 * @param {string} deliveryOption - 'Pickup' or 'Delivery'
 * @returns {number} - Delivery fee in KES
 */
function getDeliveryFee(deliveryOption) {
  return deliveryOption === 'Delivery' ? 100 : 0;
}

// ============================
// EXPORT TO GLOBAL SCOPE
// ============================
window.productsData = products;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getProductPriceRange = getProductPriceRange;
window.isFriday = isFriday;
window.getFridayOffer = getFridayOffer;
window.getDeliveryFee = getDeliveryFee;

console.log('Hussein Bakes Products loaded successfully!');