"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, getTotalPrice, getTotalItems } = useCart();

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

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-neutral-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary">Shopping Cart</h2>
                {getTotalItems() > 0 && (
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                    {getTotalItems()} item{getTotalItems() !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-neutral-300 mb-3 sm:mb-4" />
                  <p className="text-neutral-600 mb-2 font-medium text-sm sm:text-base">Your cart is empty</p>
                  <p className="text-xs sm:text-sm text-neutral-500">Add items to get started</p>
                  <Link
                    href="/shop"
                    onClick={onClose}
                    className="mt-4 sm:mt-6 inline-block bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm font-medium hover:bg-charcoal transition-colors text-sm sm:text-base"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-neutral-100 last:border-0"
                    >
                      <Link
                        href={`/product/${item.product.id}`}
                        onClick={onClose}
                        className="relative w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0 bg-neutral-100 rounded-sm overflow-hidden"
                      >
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${item.product.id}`}
                          onClick={onClose}
                          className="block"
                        >
                          <h3 className="font-semibold text-primary mb-1 hover:underline truncate text-sm sm:text-base">
                            {item.product.name}
                          </h3>
                        </Link>
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                          <div
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-neutral-300"
                            style={{ backgroundColor: item.color }}
                            title={item.color}
                          />
                          <span className="text-xs sm:text-sm text-neutral-600">{item.size}</span>
                        </div>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="font-bold text-primary text-sm sm:text-base">₹{item.product.price}</span>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="p-0.5 sm:p-1 hover:bg-neutral-100 rounded transition-colors"
                            >
                              <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <span className="w-6 sm:w-8 text-center font-medium text-xs sm:text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="p-0.5 sm:p-1 hover:bg-neutral-100 rounded transition-colors"
                            >
                              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(index)}
                              className="p-0.5 sm:p-1 hover:bg-red-50 text-red-600 rounded transition-colors ml-1 sm:ml-2"
                            >
                              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                          Total: ₹{(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-neutral-200 p-4 sm:p-6 space-y-3 sm:space-y-4 bg-neutral-50">
                <div className="flex justify-between items-center">
                  <span className="text-base sm:text-lg font-semibold text-primary">Subtotal</span>
                  <span className="text-xl sm:text-2xl font-bold text-primary">₹{getTotalPrice().toFixed(2)}</span>
                </div>
                <p className="text-[10px] sm:text-xs text-neutral-500">Shipping calculated at checkout</p>
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="block w-full bg-primary text-white text-center py-3 sm:py-4 rounded-sm font-semibold hover:bg-charcoal transition-colors text-sm sm:text-base"
                >
                  Checkout
                </Link>
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="block w-full text-center py-2 sm:py-3 text-primary font-medium hover:underline text-sm sm:text-base"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

