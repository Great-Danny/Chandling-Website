# 🚢 Limani Supply - Project Structure

```
Chandling Website/
│
├── src/
│   ├── app/                              # Next.js App Router
│   │   ├── (public)/                     # Public pages group
│   │   │   ├── layout.tsx               # Public layout with nav & footer
│   │   │   ├── page.tsx                 # Home page with hero section
│   │   │   ├── catalog/                 # Product catalog pages
│   │   │   ├── about/                   # About page
│   │   │   └── contact/                 # Contact page
│   │   │
│   │   ├── (dashboard)/                 # Protected dashboard group
│   │   │   ├── layout.tsx               # Dashboard layout with sidebar
│   │   │   ├── page.tsx                 # Dashboard overview
│   │   │   ├── orders/                  # Order management
│   │   │   ├── account/                 # Account settings
│   │   │   └── favorites/               # Saved items
│   │   │
│   │   ├── api/                         # Backend API routes
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   └── users/
│   │   │
│   │   └── layout.tsx                   # Root layout
│   │
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── main-nav.tsx            # ⭐ Header with branding & menu
│   │   │   ├── footer.tsx              # ⭐ Footer with links & contact
│   │   │   └── index.ts
│   │   │
│   │   ├── catalog/
│   │   │   ├── product-card.tsx
│   │   │   ├── product-grid.tsx
│   │   │   ├── product-filter.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── stats-card.tsx
│   │   │   ├── order-list.tsx
│   │   │   ├── account-settings.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── ui/                         # shadcn/ui components (to add)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── ... (more components)
│   │
│   ├── types/
│   │   └── index.ts                    # ⭐ Product, Order, User types
│   │
│   ├── lib/
│   │   ├── utils.ts                    # Helper functions
│   │   ├── api.ts                      # API client
│   │   └── constants.ts                # Constants
│   │
│   ├── hooks/
│   │   ├── useCart.ts                  # Cart state management
│   │   ├── useAuth.ts                  # Authentication
│   │   └── useProducts.ts              # Product fetching
│   │
│   └── styles/
│       └── globals.css                 # ⭐ Global styles & animations
│
├── public/
│   └── images/                         # Static assets
│
├── Configuration Files:
│   ├── package.json                    # ⭐ Dependencies & scripts
│   ├── tsconfig.json                   # ⭐ TypeScript config with @/* alias
│   ├── tailwind.config.ts              # ⭐ Tailwind with nautical colors
│   ├── postcss.config.js               # PostCSS config
│   ├── next.config.js                  # Next.js config
│   ├── .eslintrc.json                  # ESLint rules
│   ├── .gitignore                      # Git ignore file
│   ├── .env.example                    # Environment variables template
│   │
│   └── Documentation:
│       ├── README.md                   # Main documentation
│       ├── SETUP.md                    # Installation & setup guide
│       └── SHADCN_SETUP.md             # Guide for adding UI components
```

## 🎨 Color Scheme

### Nautical Theme
```
Primary: #00234B (Navy Blue)
├── Darkest: #001a33 (nautical-950)
├── Dark: #00234B (nautical-900) ⭐
├── Medium-Dark: #003366 (nautical-800)
├── Light: #e6f5ff (nautical-50)
└── Lightest: transparent

Ocean Blues:
├── Dark: #0a2348 (ocean-950)
├── Primary: #6db3e8 (ocean-500) ⭐
├── Light: #b0d9f8 (ocean-300)
└── Lightest: #e8f4ff (ocean-100)

Accent Colors:
├── Dock Wood: #8b5a3c
├── Dock Metal: #6b7280
└── Dock Rope: #92400e
```

## 📊 Architecture Overview

```
Next.js 15 (App Router)
│
├── 📱 Frontend
│   ├── React Components (TypeScript)
│   ├── Tailwind CSS (Nautical Theme)
│   ├── shadcn/ui Components
│   └── Lucide Icons
│
├── 🔌 API Routes
│   ├── /api/products
│   ├── /api/orders
│   └── /api/users
│
├── 🔐 Auth (To Setup)
│   ├── NextAuth.js / Supabase
│   └── Protected Routes
│
└── 🗄️ Database (To Setup)
    ├── PostgreSQL / MongoDB
    └── ORM (Prisma / Mongoose)
```

## 🚀 Deployment Ready

- ✅ Vercel ready (optimal for Next.js)
- ✅ Docker ready
- ✅ Environment variables configured
- ✅ TypeScript strict mode enabled
- ✅ ESLint configured
- ✅ Production build optimized

## 📋 Component Inventory

### Navigation Components ⭐
- `MainNav`: Header with logo, menu, user account button
- `Footer`: Footer with links, contact info, company info

### Layout Components
- `RootLayout`: Global HTML setup, fonts, metadata
- `PublicLayout`: Public pages layout (nav + footer)
- `DashboardLayout`: Dashboard with sidebar + main content

### Page Examples
- `Home`: Hero section, features, CTA
- `Dashboard`: Statistics cards, recent orders

### Available for Development
- Product catalog pages
- Product filtering & search
- Shopping cart
- Checkout
- User authentication pages
- Account management
- Order tracking

## 🔗 Important Paths

```
Imports use @/* alias:
├── @/components/... → src/components/
├── @/types → src/types/
├── @/lib/... → src/lib/
├── @/hooks/... → src/hooks/
├── @/styles/... → src/styles/
└── @/app/... → src/app/
```

## ⚡ Quick Start Commands

```bash
# Install dependencies (after Node.js is installed)
npm install

# Start development server
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Check code quality
npm run lint
```

## ✨ Nautical Theme Features

- 🌊 Ocean-inspired color palette
- 🧭 Maritime-themed components
- ⚓ Anchor icon in branding
- 🌊 Wave animations
- 🎨 Custom Tailwind colors for "nautical", "ocean", "dock"
- 📱 Fully responsive design
- ♿ Accessibility built-in

## 📚 Key Files to Review

Start with these for understanding the structure:

1. [README.md](README.md) - Project overview
2. [SETUP.md](SETUP.md) - Installation guide
3. [src/app/layout.tsx](src/app/layout.tsx) - Root layout
4. [src/app/(public)/page.tsx](src/app/(public)/page.tsx) - Home page
5. [src/components/navigation/main-nav.tsx](src/components/navigation/main-nav.tsx) - Navigation
6. [tailwind.config.ts](tailwind.config.ts) - Color definitions
7. [src/types/index.ts](src/types/index.ts) - Data types

---

## 🎯 Next Phase Checklist

- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Visit http://localhost:3000
- [ ] Install shadcn/ui components
- [ ] Set up authentication
- [ ] Connect database
- [ ] Deploy to Vercel

🚢 **Happy Coding!** Your ship chandling website is ready to sail! ⚓
