"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === params.id);
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0] || "");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-white to-neutral-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">Product Not Found</h1>
            <p className="text-neutral-600 mb-6 sm:mb-8 text-sm sm:text-base">The product you're looking for doesn't exist.</p>
            <Link
              href="/shop"
              className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold hover:bg-charcoal transition-colors text-sm sm:text-base"
            >
              Back to Shop
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, selectedColor, selectedSize);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  return (
    <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-white to-neutral-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-[3/4] bg-neutral-100 mb-3 sm:mb-4 overflow-hidden rounded-sm shadow-sm">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square bg-neutral-100 overflow-hidden border-2 transition-all rounded-sm ${
                    selectedImageIndex === index ? "border-primary shadow-md" : "border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12.5vw"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">{product.name}</h1>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl font-bold text-primary">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg sm:text-xl text-neutral-400 line-through">₹{product.originalPrice}</span>
              )}
            </div>

            <p className="text-neutral-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">{product.description}</p>

            {/* Color Selector */}
            <div className="mb-5 sm:mb-6">
              <label className="block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Color</label>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all ${
                      selectedColor === color ? "border-primary scale-110" : "border-neutral-300"
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6 sm:mb-8">
              <label className="block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Size</label>
              <div className="flex gap-2 sm:gap-3 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 sm:px-6 sm:py-3 border-2 rounded-sm font-medium transition-all text-sm sm:text-base ${
                      selectedSize === size
                        ? "border-primary bg-primary text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3 sm:py-4 rounded-sm font-semibold text-base sm:text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                addedToCart
                  ? "bg-green-600 text-white"
                  : "bg-primary text-white hover:bg-charcoal"
              }`}
            >
              {addedToCart ? (
                <>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  Add to Cart
                </>
              )}
            </button>

            {/* Product Details */}
            <div className="mt-8 sm:mt-10 md:mt-12 space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-neutral-200 bg-neutral-50 p-4 sm:p-5 md:p-6 rounded-sm">
              <div>
                <h3 className="font-semibold text-primary mb-2 sm:mb-3 text-sm sm:text-base">Fabric & Care</h3>
                <p className="text-neutral-600 text-xs sm:text-sm mb-1.5 sm:mb-2">{product.fabric}</p>
                <p className="text-neutral-600 text-xs sm:text-sm">{product.care}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

