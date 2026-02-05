"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-white to-neutral-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 px-4">Contact Us</h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto px-4">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-neutral-200 p-5 sm:p-6 md:p-8 lg:p-12 rounded-sm shadow-sm"
        >
          {isSubmitted && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-sm">
              <p className="text-green-800 text-sm sm:text-base font-medium text-center">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm sm:text-base"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-neutral-300 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm sm:text-base"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 sm:py-4 rounded-sm font-semibold hover:bg-charcoal transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center"
        >
          <div className="p-4 sm:p-5 md:p-6 bg-white border border-neutral-200 rounded-sm">
            <h3 className="font-semibold text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">Email</h3>
            <p className="text-neutral-600 text-xs sm:text-sm">hello@arems.com</p>
          </div>
          <div className="p-4 sm:p-5 md:p-6 bg-white border border-neutral-200 rounded-sm">
            <h3 className="font-semibold text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">Response Time</h3>
            <p className="text-neutral-600 text-xs sm:text-sm">Within 24 hours</p>
          </div>
          <div className="p-4 sm:p-5 md:p-6 bg-white border border-neutral-200 rounded-sm">
            <h3 className="font-semibold text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">Support</h3>
            <p className="text-neutral-600 text-xs sm:text-sm">Monday - Friday</p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}

