import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "AREMS - Premium Everyday Essentials",
  description: "Premium minimalist clothing brand focused on high-quality plain T-shirts. Luxury, clean, modern essentials.",
  keywords: ["premium t-shirts", "minimalist clothing", "organic cotton", "everyday essentials", "luxury basics"],
  authors: [{ name: "AREMS" }],
  openGraph: {
    title: "AREMS - Premium Everyday Essentials",
    description: "Premium minimalist clothing brand focused on high-quality plain T-shirts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <ScrollToTop />
        </CartProvider>
      </body>
    </html>
  );
}

