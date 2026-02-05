"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

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
    <main className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-b from-white via-neutral-50 to-neutral-100">
      <Header />

      <section className="relative">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs sm:text-sm font-medium text-primary">
                We usually reply within a few hours
              </p>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-5">
              Let&apos;s talk about your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                next favorite tee
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
              Have a sizing question, bulk order enquiry, or just want to say hi?
              Our team in India will get back to you shortly.
            </p>
          </motion.div>

          {/* Main content: form + info */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] gap-8 lg:gap-10 items-start">
            {/* Contact form card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-white/90 backdrop-blur-sm border border-neutral-200/80 rounded-2xl shadow-lg shadow-neutral-200/60 p-5 sm:p-6 md:p-8 lg:p-10"
            >
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-[11px] sm:text-xs font-semibold text-green-700 shadow-sm">
                Made in India, shipped pan India 🇮🇳
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 sm:mb-6 p-3 sm:p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                    <span className="text-emerald-700 text-lg">✓</span>
                  </div>
                  <p className="text-emerald-800 text-sm sm:text-base font-medium">
                    Message sent successfully! Our team will reach out to you shortly.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-50/60 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
                      placeholder="e.g. Arjun Sharma"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-neutral-300 bg-neutral-50/60 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">
                    Phone (optional)
                  </label>
                  <div className="flex items-center gap-2 rounded-lg border border-neutral-300 bg-neutral-50/60 px-3 sm:px-4 py-2.5 sm:py-3 focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary/15 transition-all">
                    <span className="text-xs sm:text-sm text-neutral-500">+91</span>
                    <input
                      type="tel"
                      className="w-full bg-transparent text-sm sm:text-base outline-none"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-1.5 sm:mb-2">
                    How can we help?
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-neutral-300 bg-neutral-50/60 px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15 resize-none"
                    placeholder="Tell us a bit about what you're looking for – sizing help, order support, bulk enquiry, feedback..."
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs sm:text-sm text-neutral-500">
                    By reaching out, you agree to be contacted over email or WhatsApp for your query.
                  </p>
                </div>
              </form>
            </motion.div>

            {/* Contact info / quick support card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4 sm:space-y-5 md:space-y-6"
            >
              <div className="rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-3">
                  Contact
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                  Talk to our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    AREMS Care
                  </span>{" "}
                  team
                </h2>

                <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-neutral-800 p-2">
                      <Mail className="w-4 h-4 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium">Email us</p>
                      <p className="text-neutral-300 text-xs sm:text-sm">support@arems.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-neutral-800 p-2">
                      <Phone className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <p className="font-medium">Call / WhatsApp</p>
                      <p className="text-neutral-300 text-xs sm:text-sm">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-neutral-800 p-2">
                      <Clock className="w-4 h-4 text-amber-300" />
                    </div>
                    <div>
                      <p className="font-medium">Support hours</p>
                      <p className="text-neutral-300 text-xs sm:text-sm">
                        Monday – Saturday, 10:00 AM to 7:00 PM IST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-neutral-800 p-2">
                      <MapPin className="w-4 h-4 text-pink-300" />
                    </div>
                    <div>
                      <p className="font-medium">Studio</p>
                      <p className="text-neutral-300 text-xs sm:text-sm">
                        AREMS Studio, Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-neutral-800/80 border border-neutral-700 p-3.5 sm:p-4 flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-emerald-500/10 p-2">
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-300">
                    Prefer WhatsApp? Just send us a “Hi AREMS” and we&apos;ll take it from there.
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-neutral-300/80 bg-white/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 text-xs sm:text-sm text-neutral-600">
                <p className="font-semibold text-primary mb-2">Order related queries</p>
                <p>
                  For existing orders, please include your{" "}
                  <span className="font-semibold">order ID</span> and registered{" "}
                  <span className="font-semibold">mobile number</span> so we can help you faster.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


