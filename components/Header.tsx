"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CartDrawer from "./CartDrawer";
import SearchModal from "./SearchModal";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
        <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-primary">
              AREMS
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link href="/" className="text-neutral-700 hover:text-primary transition-colors font-medium text-sm lg:text-base">
                Home
              </Link>
              <Link href="/shop" className="text-neutral-700 hover:text-primary transition-colors font-medium text-sm lg:text-base">
                Shop
              </Link>
              <Link href="/about" className="text-neutral-700 hover:text-primary transition-colors font-medium text-sm lg:text-base">
                About
              </Link>
              <Link href="/contact" className="text-neutral-700 hover:text-primary transition-colors font-medium text-sm lg:text-base">
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 sm:p-2 text-neutral-700 hover:text-primary transition-colors hidden sm:block"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-1.5 sm:p-2 text-neutral-700 hover:text-primary transition-colors relative"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs">
                    {getTotalItems() > 9 ? "9+" : getTotalItems()}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 text-neutral-700 hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-neutral-200 bg-white"
            >
              <div className="px-4 py-3 sm:py-4 space-y-3 sm:space-y-4">
                <Link 
                  href="/" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-neutral-700 hover:text-primary transition-colors font-medium py-2 text-sm sm:text-base"
                >
                  Home
                </Link>
                <Link 
                  href="/shop" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-neutral-700 hover:text-primary transition-colors font-medium py-2 text-sm sm:text-base"
                >
                  Shop
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-neutral-700 hover:text-primary transition-colors font-medium py-2 text-sm sm:text-base"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-neutral-700 hover:text-primary transition-colors font-medium py-2 text-sm sm:text-base"
                >
                  Contact
                </Link>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="flex items-center gap-2 text-neutral-700 hover:text-primary transition-colors font-medium py-2 sm:hidden text-sm"
                >
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

