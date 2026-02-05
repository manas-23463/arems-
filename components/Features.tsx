"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Ruler, Sparkles, Shield } from "lucide-react";

const features = [
  {
    title: "100% Premium Cotton",
    description: "Crafted from the finest organic cotton for ultimate comfort",
    icon: Leaf,
    gradient: "from-green-400/20 to-emerald-500/20",
    iconBg: "bg-green-400/10",
    iconColor: "text-green-600"
  },
  {
    title: "Perfect Fit",
    description: "Designed to flatter every body type with precision tailoring",
    icon: Ruler,
    gradient: "from-blue-400/20 to-cyan-500/20",
    iconBg: "bg-blue-400/10",
    iconColor: "text-blue-600"
  },
  {
    title: "Minimal Design",
    description: "Timeless aesthetics that never go out of style",
    icon: Sparkles,
    gradient: "from-purple-400/20 to-pink-500/20",
    iconBg: "bg-purple-400/10",
    iconColor: "text-purple-600"
  },
  {
    title: "Long-lasting Fabric",
    description: "Built to last, maintaining quality wash after wash",
    icon: Shield,
    gradient: "from-orange-400/20 to-red-500/20",
    iconBg: "bg-orange-400/10",
    iconColor: "text-orange-600"
  },
];

export default function Features() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden">
      {/* Soft static background accents (no continuous animation for better performance) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-beige/20 rounded-full blur-3xl" />
      </div>

      {/* Subtle decorative shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-[20%] left-[10%] w-24 h-24 border-2 border-primary rounded-full" />
        <div className="absolute bottom-[25%] right-[15%] w-32 h-32 border-2 border-charcoal rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-beige/20 px-4 py-2 rounded-full mb-6 border border-primary/20"
          >
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Premium Features</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4 px-4">
            Why Choose AREMS
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Quality that speaks for itself, design that stands the test of time
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`relative text-center p-6 sm:p-8 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm rounded-sm border-2 border-white shadow-md hover:shadow-xl transition-transform duration-200 hover:-translate-y-1`}
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/20 rounded-tr-full" />

              <div className="relative z-10">
                <div className="flex justify-center mb-4 sm:mb-5">
                  <div className={`p-4 sm:p-5 ${feature.iconBg} rounded-full shadow-lg border-2 border-white/50`}>
                    <feature.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${feature.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

