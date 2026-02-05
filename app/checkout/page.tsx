"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Package } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  
  const shippingCost = items.length > 0 ? 50 : 0;
  const total = getTotalPrice() + shippingCost;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Generate order number
    const randomOrderNum = "AREMS" + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Simulate processing
    setTimeout(() => {
      setOrderNumber(randomOrderNum);
      setOrderSuccess(true);
      setIsProcessing(false);
      clearCart();
    }, 2000);
  };

  return (
    <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-neutral-50 to-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        {!orderSuccess && (
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-neutral-600 hover:text-primary transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Continue Shopping
          </Link>
        )}

        {orderSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center py-12 sm:py-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="mb-6 sm:mb-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4"
            >
              Order Placed Successfully!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8"
            >
              Thank you for your purchase. Your order has been confirmed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-neutral-50 border border-neutral-200 rounded-sm p-6 sm:p-8 mb-8 sm:mb-10"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Package className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-neutral-600">Order Number</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-primary tracking-wider">{orderNumber}</p>
              <p className="text-xs sm:text-sm text-neutral-500 mt-4">
                Keep this order number for tracking your shipment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-50 border border-blue-200 rounded-sm p-4 sm:p-6 mb-8"
            >
              <p className="text-xs sm:text-sm text-blue-800">
                <strong>Note:</strong> This is a demo store. No actual payment was processed and no order will be shipped.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <Link
                href="/"
                className="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold hover:bg-charcoal transition-colors text-sm sm:text-base"
              >
                Back to Home
              </Link>
              <Link
                href="/shop"
                className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold hover:bg-primary hover:text-white transition-colors text-sm sm:text-base"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </motion.div>
        ) : items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 sm:py-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Your cart is empty</h2>
            <p className="text-neutral-600 mb-6 sm:mb-8 text-sm sm:text-base">Add some items to your cart to checkout</p>
            <Link
              href="/shop"
              className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-sm font-semibold hover:bg-charcoal transition-colors text-sm sm:text-base"
            >
              Shop Now
            </Link>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border border-neutral-200">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Shipping Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Address</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">City</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                        placeholder="New York"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">State</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                        placeholder="NY"
                      />
                    </div>
                    <div className="sm:col-span-2 md:col-span-1">
                      <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">ZIP Code</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border border-neutral-200 mt-4 sm:mt-6">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Payment Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Card Number</label>
                    <input
                      type="text"
                      required
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Expiry Date</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">CVV</label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-sm shadow-sm border border-neutral-200 lg:sticky lg:top-24">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Order Summary</h2>
                
                {/* Cart Items */}
                <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item, index) => (
                    <div key={index} className="flex gap-3 pb-3 border-b border-neutral-100 last:border-0">
                      <div className="relative w-16 h-20 flex-shrink-0 bg-neutral-100 rounded-sm overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-primary text-sm truncate">{item.product.name}</h3>
                        <p className="text-xs text-neutral-500">
                          {item.size} • Qty: {item.quantity}
                        </p>
                        <p className="text-sm font-bold text-primary mt-1">
                          ₹{(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex justify-between text-neutral-600 text-sm sm:text-base">
                    <span>Subtotal</span>
                    <span>₹{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600 text-sm sm:text-base">
                    <span>Shipping</span>
                    <span>₹{shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-3 sm:pt-4 flex justify-between text-lg sm:text-xl font-bold text-primary">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
                <button 
                  type="submit"
                  disabled={isProcessing}
                  onClick={handleSubmit}
                  className="w-full bg-primary text-white py-3 sm:py-4 rounded-sm font-semibold hover:bg-charcoal transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  {isProcessing ? "Processing..." : "Complete Order"}
                </button>
                <p className="text-[10px] sm:text-xs text-neutral-500 text-center mt-3 sm:mt-4 leading-relaxed">
                  Your personal data will be used to process your order and support your experience.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </main>
  );
}

