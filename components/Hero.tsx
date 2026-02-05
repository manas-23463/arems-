"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white via-neutral-50 to-beige/20 pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Optimized Decorative background elements - using CSS will-change */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-primary/20 to-beige/30 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-beige/40 to-primary/20 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      {/* Simplified Floating Geometric Shapes - reduced animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-[15%] left-[10%] w-16 h-16 sm:w-24 sm:h-24 border-2 border-primary/20 rotate-45"></div>
        <div className="absolute bottom-[20%] right-[15%] w-20 h-20 sm:w-32 sm:h-32 border-2 border-charcoal/15 rounded-full"></div>
      </div>

      {/* Floating Badges - Simplified animations */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-4 sm:left-8 md:left-16 top-[30%] hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-sm shadow-lg border border-neutral-100">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-neutral-500">Premium</p>
              <p className="text-sm font-bold text-primary">100% Cotton</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-4 sm:right-8 md:right-16 top-[35%] hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-sm shadow-lg border border-neutral-100">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <div>
              <p className="text-xs text-neutral-500">Flat Price</p>
              <p className="text-sm font-bold text-primary">₹499 Only</p>
            </div>
          </div>
        </div>
      </motion.div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-primary/10 via-beige/20 to-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full mb-4 sm:mb-6 border border-primary/20 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            Premium Quality • Minimalist Design
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          </span>
        </motion.div>
        
        <motion.div className="relative inline-block mb-4 sm:mb-6">
          {/* Static Decorative elements around logo */}
          <div className="absolute -top-4 -right-4 w-8 h-8 sm:w-12 sm:h-12 border-2 border-primary/30 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 sm:w-10 sm:h-10 border-2 border-beige/50 rotate-45"></div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight relative"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-charcoal to-primary">
              AREMS
            </span>
          </motion.h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 mb-3 sm:mb-4 font-light max-w-3xl mx-auto px-4"
        >
          Premium Everyday Essentials
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-neutral-500 mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
        >
          Crafted with care, designed for life. Discover timeless pieces that elevate your everyday wardrobe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-4"
        >
          <Link
            href="/shop"
            className="group relative bg-gradient-to-r from-primary via-charcoal to-primary text-white px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Shop Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>
          <Link
            href="/shop"
            className="group relative border-2 border-primary text-primary px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm font-semibold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
            Explore Collection
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-12"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary">9</p>
            <p className="text-xs sm:text-sm text-neutral-500">Premium Colors</p>
          </div>
          <div className="w-px h-8 bg-neutral-200"></div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary">100%</p>
            <p className="text-xs sm:text-sm text-neutral-500">Organic Cotton</p>
          </div>
          <div className="w-px h-8 bg-neutral-200"></div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary">₹499</p>
            <p className="text-xs sm:text-sm text-neutral-500">Flat Price</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

