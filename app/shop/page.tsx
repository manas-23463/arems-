"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { Filter, X } from "lucide-react";

export default function ShopPage() {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const allColors = Array.from(new Set(products.flatMap((p) => p.colors)));
  const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)));

  const filteredProducts = products.filter((product) => {
    if (selectedColor && !product.colors.includes(selectedColor)) return false;
    if (selectedSize && !product.sizes.includes(selectedSize)) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedColor(null);
    setSelectedSize(null);
    setPriceRange([0, 1000]);
  };

  return (
    <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-white to-neutral-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-10 md:mb-12 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 sm:mb-4 px-2">Shop</h1>
          <p className="text-neutral-600 text-base sm:text-lg md:text-xl max-w-2xl px-2">Premium essentials for your everyday wardrobe</p>
        </motion.div>

        {/* Filters */}
        <div className="mb-6 sm:mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-primary font-semibold mb-3 sm:mb-4 px-2 py-2 bg-white border border-neutral-200 rounded-sm w-full justify-center sm:w-auto sm:justify-start"
          >
            <Filter className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">{showFilters ? "Hide Filters" : "Show Filters"}</span>
          </button>

          <motion.div
            initial={false}
            animate={{ height: showFilters ? "auto" : 0 }}
            className="overflow-hidden md:block"
          >
            <div className="bg-white border border-neutral-200 p-4 sm:p-6 md:p-8 rounded-sm mb-4 sm:mb-6 md:mb-0 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {/* Color Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {allColors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all ${
                          selectedColor === color ? "border-primary scale-110" : "border-neutral-300"
                        }`}
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                        className={`px-3 py-1.5 sm:px-4 sm:py-2 border-2 rounded-sm font-medium transition-all text-sm ${
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

                {/* Price Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-2 sm:mb-3">
                    Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-primary h-2"
                  />
                  <div className="flex justify-between text-xs text-neutral-500 mt-2">
                    <span>₹0</span>
                    <span>₹1000</span>
                  </div>
                </div>
              </div>

              {(selectedColor || selectedSize || priceRange[1] < 1000) && (
                <button
                  onClick={clearFilters}
                  className="mt-3 sm:mt-4 text-xs sm:text-sm text-primary hover:underline flex items-center gap-1 font-medium"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  Clear filters
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div>
          <div className="flex items-center justify-between mb-6 sm:mb-8 px-2">
            <p className="text-neutral-600 font-medium text-sm sm:text-base">
              Showing <span className="font-bold text-primary">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

