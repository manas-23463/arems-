"use client";

import { motion } from "framer-motion";
import { Star, Quote, MapPin, Sparkles } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100/50" />
      
      {/* Animated Accent Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 mb-6 sm:mb-8"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            <span className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Customer Love
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 px-4">
            Hear It from Our
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Happy Customers
            </span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            Join thousands of satisfied customers across India loving our premium basics
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card Background with Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="relative bg-white border-2 border-neutral-200 group-hover:border-neutral-300 rounded-2xl p-6 sm:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Quote className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-5 sm:mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    </motion.div>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-neutral-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                  "{testimonial.review}"
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-5 sm:mb-6" />

                {/* Customer Info */}
                <div className="space-y-2 sm:space-y-3">
                  <p className="font-bold text-primary text-base sm:text-lg">{testimonial.name}</p>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-500">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">
                    <p className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {testimonial.product}
                    </p>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Join over <span className="font-bold text-primary">10,000+</span> happy customers
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

