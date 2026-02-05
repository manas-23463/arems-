export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  fabric: string;
  care: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Black Tee",
    price: 499,
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_2adf5c2adf5c2adf.png",
      "/images/Gemini_Generated_Image_2adf5c2adf5c2adf.png",
    ],
    description: "The ultimate black essential. Deep midnight black that never fades, crafted from premium organic cotton for everyday luxury.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
  {
    id: "2",
    name: "Ash Gray Classic Tee",
    price: 499,
    colors: ["#b8b8b8"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_4fwtjo4fwtjo4fwt.png",
      "/images/Gemini_Generated_Image_4fwtjo4fwtjo4fwt.png",
    ],
    description: "Sophisticated ash gray tee that pairs effortlessly with any outfit. A versatile staple for your wardrobe.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
  {
    id: "3",
    name: "Pure White Tee",
    price: 499,
    colors: ["#ffffff"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_9rdyyf9rdyyf9rdy.png",
      "/images/Gemini_Generated_Image_9rdyyf9rdyyf9rdy.png",
    ],
    description: "Crisp, clean white tee that's a wardrobe essential. Premium quality cotton for ultimate comfort and timeless style.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
  {
    id: "4",
    name: "Navy Blue Essential Tee",
    price: 499,
    colors: ["#1e2952"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_we7q5zwe7q5zwe7q.png",
      "/images/Gemini_Generated_Image_we7q5zwe7q5zwe7q.png",
    ],
    description: "Deep navy blue tee with a rich, elegant tone. Perfect for both casual and semi-formal occasions.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
  {
    id: "5",
    name: "Royal Blue Premium Tee",
    price: 499,
    colors: ["#4169e1"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_we7q5zwe7q5zwe7q.png",
      "/images/Gemini_Generated_Image_we7q5zwe7q5zwe7q.png",
    ],
    description: "Vibrant royal blue that makes a statement. A bold yet versatile addition to your everyday collection.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
  {
    id: "6",
    name: "Teal Green Fresh Tee",
    price: 499,
    colors: ["#5eb3b7"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_980jmg980jmg980j.png",
      "/images/Gemini_Generated_Image_980jmg980jmg980j.png",
    ],
    description: "Fresh teal green that brings a pop of color to your basics. Modern, trendy, and effortlessly cool.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
  {
    id: "7",
    name: "Bold Red Statement Tee",
    price: 499,
    colors: ["#c44b4f"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_j0xsiej0xsiej0xs.png",
      "/images/Gemini_Generated_Image_j0xsiej0xsiej0xs.png",
    ],
    description: "Eye-catching red tee that commands attention. Perfect for those who love to stand out with confidence.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
  {
    id: "8",
    name: "Fuschia Pink Vibrant Tee",
    price: 499,
    colors: ["#c74375"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [
      "/images/Gemini_Generated_Image_fx3pzhfx3pzhfx3p.png",
      "/images/Gemini_Generated_Image_fx3pzhfx3pzhfx3p.png",
    ],
    description: "Bold fuschia pink that radiates energy and style. A unique color that adds personality to your collection.",
    fabric: "100% Premium Organic Cotton",
    care: "Machine wash cold, tumble dry low",
    category: "Plain T-shirts",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Arjun Sharma",
    rating: 5,
    review: "The perfect fit and incredible quality. These are the best plain tees I've ever owned.",
    product: "Midnight Black Tee",
    location: "Mumbai",
  },
  {
    id: "2",
    name: "Priya Patel",
    rating: 5,
    review: "Minimalist luxury at its finest. The fabric feels amazing and the design is timeless.",
    product: "Pure White Tee",
    location: "Bangalore",
  },
  {
    id: "3",
    name: "Rohan Khanna",
    rating: 5,
    review: "Worth every penny. These tees have become my daily essentials. Highly recommend!",
    product: "Navy Blue Essential Tee",
    location: "Delhi",
  },
];

