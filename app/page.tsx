"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ShoppingBag, TrendingUp, Award } from "lucide-react";

export default function Home() {
  const collections = [
    {
      color: "#000000",
      name: "Midnight Black",
      gradient: "from-neutral-900 to-black",
      textColor: "text-white"
    },
    {
      color: "#b8b8b8",
      name: "Ash Gray",
      gradient: "from-neutral-400 to-neutral-300",
      textColor: "text-primary"
    },
    {
      color: "#ffffff",
      name: "Pure White",
      gradient: "from-white to-neutral-50",
      textColor: "text-primary"
    },
    {
      color: "#1e2952",
      name: "Navy Blue",
      gradient: "from-blue-900 to-blue-800",
      textColor: "text-white"
    },
    {
      color: "#4169e1",
      name: "Royal Blue",
      gradient: "from-blue-600 to-blue-500",
      textColor: "text-white"
    },
    {
      color: "#5eb3b7",
      name: "Teal Green",
      gradient: "from-teal-500 to-cyan-400",
      textColor: "text-white"
    },
    {
      color: "#c44b4f",
      name: "Bold Red",
      gradient: "from-red-600 to-red-500",
      textColor: "text-white"
    },
    {
      color: "#c74375",
      name: "Fuschia Pink",
      gradient: "from-pink-600 to-pink-500",
      textColor: "text-white"
    }
  ];

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      
      {/* Color Collection Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-neutral-50 to-white relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base font-semibold text-primary">Our Collection</span>
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
              8 Premium Colors
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose from our carefully curated palette of timeless colors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {collections.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`relative h-48 sm:h-64 rounded-sm bg-gradient-to-br ${item.gradient} p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                <div className="relative h-full flex flex-col justify-end">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 border-4 border-white/30 shadow-lg"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <h3 className={`font-bold text-base sm:text-lg ${item.textColor}`}>
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-sm font-semibold hover:bg-charcoal transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ShoppingBag className="w-5 h-5" />
              Explore All Colors
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Quality Promise Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-charcoal to-primary text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/4 w-32 h-32 border border-white rounded-sm rotate-45"
          ></motion.div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,241,235,0.1),transparent_50%)]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">The AREMS Difference</span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-beige bg-clip-text text-transparent">
              Premium Quality Promise
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
              Uncompromising quality meets unbeatable value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Award,
                title: "₹499 Only",
                description: "Premium quality at an affordable price for everyone",
                color: "from-yellow-400/20 to-orange-500/20",
                iconBg: "bg-yellow-400/20"
              },
              {
                icon: TrendingUp,
                title: "100% Cotton",
                description: "Organic, breathable fabric for maximum comfort",
                color: "from-green-400/20 to-emerald-500/20",
                iconBg: "bg-green-400/20"
              },
              {
                icon: Sparkles,
                title: "8 Colors",
                description: "Carefully curated palette for every style",
                color: "from-purple-400/20 to-pink-500/20",
                iconBg: "bg-purple-400/20"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className={`relative bg-gradient-to-br ${item.color} backdrop-blur-md p-6 sm:p-8 rounded-sm border-2 border-white/30 text-center group overflow-hidden`}
              >
                {/* Animated background on hover */}
                <motion.div
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"
                ></motion.div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-tr-full"></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`${item.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-5 border-2 border-white/30 shadow-lg`}
                  >
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white drop-shadow-lg">{item.title}</h3>
                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">{item.description}</p>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "linear"
                  }}
                ></motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-sm border border-white/20">
              <Award className="w-8 h-8" />
              <div className="text-left">
                <p className="text-sm text-white/70">Trusted by</p>
                <p className="text-2xl font-bold">10,000+ Customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Features />
      <Testimonials />
      <Footer />
    </main>
  );
}

