"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(products);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.colors.some(color => color.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSearchResults(filtered);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setSearchQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl max-h-[80vh] overflow-hidden flex flex-col"
          >
            {/* Search Header */}
            <div className="p-4 sm:p-6 border-b border-neutral-200">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 flex-shrink-0" />
                  <input
                    type="text"
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for t-shirts, colors..."
                    className="flex-1 text-base sm:text-lg outline-none text-primary placeholder:text-neutral-400"
                  />
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-neutral-100 rounded-full transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Search Results */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="max-w-4xl mx-auto">
                {searchResults.length > 0 ? (
                  <>
                    <p className="text-sm text-neutral-500 mb-4">
                      {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} found
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.id}`}
                          onClick={onClose}
                          className="flex gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-neutral-50 rounded-sm transition-colors group"
                        >
                          <div className="relative w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 bg-neutral-100 rounded-sm overflow-hidden">
                            <Image
                              src={product.images[0]}
                              alt={product.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-primary mb-1 group-hover:underline text-sm sm:text-base">
                              {product.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-neutral-500 line-clamp-2 mb-2">
                              {product.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary text-sm sm:text-base">₹{product.price}</span>
                              <div className="flex gap-1">
                                {product.colors.slice(0, 3).map((color, i) => (
                                  <div
                                    key={i}
                                    className="w-4 h-4 rounded-full border border-neutral-300"
                                    style={{ backgroundColor: color }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 sm:w-16 sm:h-16 text-neutral-300 mx-auto mb-4" />
                    <p className="text-neutral-600 font-medium mb-2">No products found</p>
                    <p className="text-sm text-neutral-500">Try searching with different keywords</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
