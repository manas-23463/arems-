"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";
import { motion } from "framer-motion";

export default function ShopPage() {
  // No filters now – we just show all products with a nice info strip
  const filteredProducts = products;

  return (
    <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-white via-neutral-50 to-neutral-100">
      <Header />

      <section className="relative">
        {/* Soft background shapes */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-10 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-4rem] left-1/3 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6"
          >
            <div className="text-center md:text-left space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mx-auto md:mx-0">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  8 premium colours • Everyday luxury
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                Shop
              </h1>
              <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto md:mx-0">
                Premium plain T-shirts crafted for all‑day comfort, clean silhouettes and a modern Indian wardrobe.
              </p>
            </div>

            <div className="flex items-center justify-center md:justify-end gap-6 text-xs sm:text-sm text-neutral-600">
              <div className="text-center">
                <p className="font-semibold text-primary text-base sm:text-lg">
                  {products.length}
                </p>
                <p className="text-[11px] sm:text-xs">Colour options</p>
              </div>
              <div className="hidden sm:block w-px h-10 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
              <div className="hidden sm:block text-center">
                <p className="font-semibold text-primary text-base sm:text-lg">100% Cotton</p>
                <p className="text-[11px] sm:text-xs">Soft, breathable fabric</p>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-neutral-200/80 shadow-lg shadow-neutral-200/60 px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6">
            {/* top accent bar */}
            <div className="absolute inset-x-4 top-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-400 rounded-b-full opacity-70" />

            <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6 px-0.5 sm:px-1">
              <p className="text-neutral-600 font-medium text-xs sm:text-sm md:text-base">
                Showing{" "}
                <span className="font-bold text-primary">{filteredProducts.length}</span>{" "}
                product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
