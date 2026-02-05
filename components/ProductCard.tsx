"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.colors[0], product.sizes[0]);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden bg-neutral-100 aspect-[3/4] mb-3 sm:mb-4 rounded-xl shadow-sm group-hover:shadow-lg transition-shadow duration-300">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {discount && (
            <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-sm font-semibold rounded-sm">
              -{discount}%
            </div>
          )}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 py-2 sm:py-3 px-3 sm:px-4 rounded-sm font-semibold text-xs sm:text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
              addedToCart
                ? "bg-green-600 text-white"
                : "bg-white text-primary hover:bg-primary hover:text-white shadow-lg"
            }`}
          >
            {addedToCart ? (
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                Added!
              </span>
            ) : (
              <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                Quick Add
              </span>
            )}
          </button>
        </div>
        <div className="px-0.5 sm:px-1">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-0.5 sm:mb-1 text-primary group-hover:underline line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
            <span className="text-lg sm:text-xl font-bold text-primary">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-neutral-400 line-through text-xs sm:text-sm">₹{product.originalPrice}</span>
            )}
          </div>
          <div className="flex gap-1.5 sm:gap-2">
            {product.colors.slice(0, 4).map((color, i) => (
              <div
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-neutral-300"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] sm:text-xs text-neutral-500 flex items-center">+{product.colors.length - 4}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

