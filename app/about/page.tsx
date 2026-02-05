"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Heart, Leaf, ShoppingBag, Users, Target, Sparkles, Shirt, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on materials or craftsmanship. Every piece is built to last.",
      gradient: "from-yellow-400/20 to-orange-500/20",
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-400/10"
    },
    {
      icon: Heart,
      title: "Minimalist Design",
      description: "Less is more. We believe in the power of simplicity and timeless aesthetics.",
      gradient: "from-pink-400/20 to-rose-500/20",
      iconColor: "text-pink-600",
      iconBg: "bg-pink-400/10"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "We're committed to ethical sourcing and sustainable production methods.",
      gradient: "from-green-400/20 to-emerald-500/20",
      iconColor: "text-green-600",
      iconBg: "bg-green-400/10"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "₹499", label: "Affordable Price", icon: TrendingUp },
    { number: "100%", label: "Organic Cotton", icon: Leaf },
    { number: "9", label: "Color Options", icon: Sparkles }
  ];

  return (
    <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-primary/20 to-beige/30 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 w-64 h-64 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-beige/40 to-primary/20 rounded-full blur-3xl"
          ></motion.div>
        </div>

        {/* Floating Geometric Patterns */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <motion.div
            animate={{ rotate: 360, x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-primary rotate-45"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-charcoal rounded-full"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 40, 0], rotate: [0, 180, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-beige/30 to-primary/20 rounded-sm"
          ></motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="relative inline-block mb-4 sm:mb-6"
            >
              {/* Rotating ring decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-primary/30 rounded-full scale-125"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-beige/50 rounded-full scale-150"
              ></motion.div>
              
              <div className="relative bg-gradient-to-br from-primary/10 to-beige/20 p-4 sm:p-6 rounded-full inline-flex border-2 border-primary/20 shadow-xl">
                <ShoppingBag className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-charcoal to-primary bg-clip-text text-transparent">
                About AREMS
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-light"
            >
              Premium Everyday Essentials, Crafted with Care
            </motion.p>
          </motion.div>

          {/* Enhanced Stats Section with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group bg-gradient-to-br from-white to-neutral-100 p-4 sm:p-6 rounded-sm border-2 border-neutral-200 shadow-lg text-center hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-beige/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></motion.div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex bg-primary/10 p-2 rounded-full mb-2"
                  >
                    <stat.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-charcoal bg-clip-text text-transparent mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-600 font-medium">{stat.label}</div>
                </div>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative bg-gradient-to-b from-white to-neutral-50 py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/20 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-20 h-20 border-2 border-beige/30 rotate-45"
        ></motion.div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="text-center mb-6 sm:mb-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-beige/20 px-4 py-2 rounded-full mb-4 border border-primary/20"
              >
                <Shirt className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Journey</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">Our Story</h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-transparent via-charcoal to-transparent mx-auto"
              ></motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 5, transition: { duration: 0.3 } }}
              className="relative group bg-gradient-to-r from-beige/20 via-white to-white p-5 sm:p-7 rounded-sm border-l-4 border-charcoal shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-charcoal via-primary to-charcoal"></div>
              <motion.div
                className="absolute right-0 top-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
              ></motion.div>
              
              <p className="relative text-base sm:text-lg text-neutral-700 leading-relaxed">
                AREMS is a premium minimalist clothing brand dedicated to creating the perfect everyday essentials.
                We believe that great style should be simple, effortless, and built to last.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ x: -5, transition: { duration: 0.3 } }}
              className="relative group bg-gradient-to-l from-neutral-100 via-white to-white p-5 sm:p-7 rounded-sm border-r-4 border-primary shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-primary via-beige to-primary"></div>
              <motion.div
                className="absolute left-0 top-0 w-24 h-24 bg-beige/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"
              ></motion.div>
              
              <p className="relative text-sm sm:text-base text-neutral-700 leading-relaxed">
                Our journey began with a simple question: Why can't everyday basics be extraordinary? We set out to
                answer that by crafting premium T-shirts that combine exceptional quality, perfect fit, and timeless
                design. Every piece in our collection is thoughtfully designed to become a staple in your wardrobe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className="relative group bg-gradient-to-br from-neutral-50 via-beige/20 to-neutral-50 p-5 sm:p-7 rounded-sm border-2 border-neutral-200 shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-sm"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-sm"></div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/10 rounded-full"
              ></motion.div>
              
              <p className="relative text-sm sm:text-base text-neutral-700 leading-relaxed">
                We source only the finest organic cotton and work with skilled artisans to ensure every garment meets
                our exacting standards. Our minimalist approach means no unnecessary details—just pure, refined
                essentials that speak for themselves.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="relative py-8 sm:py-12 md:py-16 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-beige/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-beige/20 px-4 py-2 rounded-full mb-4 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">What We Stand For</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">Our Values</h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3 } }}
                className={`relative group bg-gradient-to-br ${value.gradient} backdrop-blur-sm p-6 sm:p-8 rounded-sm border-2 border-white shadow-xl hover:shadow-2xl transition-all overflow-hidden`}
              >
                {/* Corner decorations */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/20 rounded-tr-full"></div>
                
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></motion.div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`${value.iconBg} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-5 sm:mb-6 border-2 border-white/50 shadow-lg`}
                  >
                    <value.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${value.iconColor}`} />
                  </motion.div>
                  <h3 className="font-bold text-lg sm:text-xl text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                ></motion.div>

                {/* Pulsing glow */}
                <motion.div
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-sm"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative bg-gradient-to-br from-charcoal via-primary to-charcoal text-white py-10 sm:py-14 md:py-16 overflow-hidden">
        {/* Animated patterns */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 w-32 h-32 border border-white rotate-45"
          ></motion.div>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,241,235,0.1),transparent_50%)]"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block mb-4 sm:mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-white/30 rounded-full scale-125"
              ></motion.div>
              <div className="relative bg-white/10 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30 shadow-2xl">
                <Target className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-5 bg-gradient-to-r from-white via-beige to-white bg-clip-text text-transparent">
              Our Mission
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light text-white/90"
            >
              At AREMS, we're not just selling clothes—we're offering a philosophy. A commitment to quality over
              quantity, simplicity over complexity, and timeless style over fleeting trends. Join us in embracing
              the beauty of the essential.
            </motion.p>
            
            {/* Decorative lines */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mt-8 max-w-md mx-auto"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

