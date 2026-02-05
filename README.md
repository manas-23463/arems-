# AREMS - Premium Everyday Essentials

A premium, modern e-commerce website for AREMS, a high-end minimalist clothing brand focused on premium plain T-shirts.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

## Features

- 🏠 **Home Page** - Full-screen hero section with brand messaging, features, product showcase, and testimonials
- 🛍️ **Shop Page** - Grid-based product layout with color, size, and price filters
- 📦 **Product Detail Page** - Large image gallery, size/color selectors, and detailed product information
- ℹ️ **About Page** - Brand story and values
- 🛒 **Cart & Checkout** - Slide-in cart drawer and complete checkout flow
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ✨ **Smooth Animations** - Subtle micro-interactions and page transitions

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── checkout/       # Checkout page
│   ├── contact/        # Contact page
│   ├── product/[id]/   # Product detail page
│   ├── shop/           # Shop/Products page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── CartDrawer.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductShowcase.tsx
│   └── Testimonials.tsx
└── lib/
    └── data.ts         # Product data and testimonials
```

## Design Philosophy

AREMS embodies minimalist luxury with:
- Clean, spacious layouts
- Neutral color palette (black, white, beige, charcoal)
- Large, bold typography
- Premium UI feel similar to Apple's design language
- Smooth animations and hover effects

## Build for Production

```bash
npm run build
npm start
```

## License

This project is created for AREMS brand.

