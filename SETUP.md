# Project Setup Guide

## Installation & Setup Steps

### 1. **Verify Node.js Installation**
First, ensure you have Node.js 18.17+ installed:
```bash
node --version
npm --version
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### 2. **Install Dependencies**
```bash
npm install
```
This will install all required packages listed in `package.json`

### 3. **Run Development Server**
```bash
npm run dev
```
- Server runs at: http://localhost:3000
- Press `Ctrl+C` to stop the server

### 4. **Project Structure Overview**

#### Core Folders
- **`src/app/`**: Next.js App Router pages and layouts
  - `(public)/`: Public-facing pages (catalog, home)
  - `(dashboard)/`: Protected member dashboard
  - `api/`: Backend API routes

- **`src/components/`**: Reusable React components
  - `navigation/`: Header and footer
  - `catalog/`: Product-related components
  - `dashboard/`: Dashboard widgets
  - `ui/`: shadcn/ui components (to be added)

- **`src/types/`**: TypeScript type definitions
- **`src/lib/`**: Utility functions and helpers
- **`src/hooks/`**: Custom React hooks
- **`src/styles/`**: Global CSS files

#### Configuration Files
- **`tailwind.config.ts`**: Tailwind CSS with custom nautical colors
- **`next.config.js`**: Next.js settings
- **`tsconfig.json`**: TypeScript configuration
- **`.eslintrc.json`**: Code linting rules
- **`package.json`**: Dependencies and scripts

### 5. **Available Scripts**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint for code quality
npm run lint
```

## Color Scheme Reference

The site uses a nautical theme with custom Tailwind colors:

```
Nautical Blues:
- nautical-900: #00234B (primary dark)
- nautical-800: #003366
- nautical-700: #004080
- ... (lighter shades up to nautical-50)

Ocean Blues:
- ocean-900: #0a2348
- ocean-500: #6db3e8
- ocean-400: #8ec5ef
- ... (supporting shades)

Dock Colors:
- dock-wood: #8b5a3c
- dock-metal: #6b7280
- dock-rope: #92400e
```

## Feature Implementation Checklist

### Phase 1: Foundation ✅
- [x] Next.js project setup
- [x] Tailwind CSS with nautical theme
- [x] Project folder structure
- [x] Layout and navigation components
- [x] HomePage with hero section
- [x] Basic dashboard layout
- [x] Type definitions

### Phase 2: Frontend Components (To Do)
- [ ] Install shadcn/ui components (`button`, `card`, `input`, etc.)
- [ ] Create product card component
- [ ] Build product catalog page
- [ ] Implement product filters and search
- [ ] Create shopping cart UI

### Phase 3: Authentication (To Do)
- [ ] Set up NextAuth.js or Supabase Auth
- [ ] Create login/register pages
- [ ] Implement protected routes
- [ ] Add user session management

### Phase 4: Backend & Database (To Do)
- [ ] Set up database (PostgreSQL/MongoDB)
- [ ] Create API routes for products
- [ ] Create API routes for orders
- [ ] Add order management API

### Phase 5: E-commerce Features (To Do)
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Payment integration (Stripe/PayPal)
- [ ] Order tracking

### Phase 6: Dashboard Features (To Do)
- [ ] Order history
- [ ] Account settings
- [ ] Wishlist/Favorites
- [ ] Loyalty points system

### Phase 7: Polish & Deploy (To Do)
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Mobile responsiveness testing
- [ ] Error handling & logging
- [ ] Deploy to Vercel/production

## Creating Your First Feature

### Example: Add a "Safety Equipment" Catalog Page

1. **Create the page file:**
   ```bash
   mkdir -p src/app/\(public\)/catalog/safety
   touch src/app/\(public\)/catalog/safety/page.tsx
   ```

2. **Edit the page:**
   ```typescript
   export default function SafetyPage() {
     return (
       <div className="container mx-auto px-4 py-12">
         <h1 className="text-4xl font-serif font-bold text-nautical-900">
           Safety Equipment
         </h1>
         <p className="text-gray-600 mt-4">
           Wide selection of maritime safety equipment
         </p>
       </div>
     )
   }
   ```

3. **Add navigation link:**
   - Edit `src/components/navigation/main-nav.tsx`
   - Add to the `catalogLinks` array

## Useful Development Tips

1. **Type Safety**: Always use TypeScript types from `src/types/index.ts`

2. **Import Paths**: Use the `@/` alias for cleaner imports:
   ```typescript
   import { Product } from '@/types'  // ✅ Good
   import { Product } from '../../../types'  // ❌ Avoid
   ```

3. **Component Organization**: Group related components together
   ```
   src/components/
   ├── catalog/
   │   ├── product-card.tsx
   │   ├── product-filter.tsx
   │   └── index.ts  // Export all components here
   ```

4. **Styling Consistency**: Use the nautical color variables:
   ```jsx
   <div className="bg-nautical-900 text-ocean-300">
     Premium colors! ⚓
   </div>
   ```

## Troubleshooting

### Port 3000 Already in Use
```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Then restart: npm run dev
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript Errors
- Check `tsconfig.json` paths
- Run `npm run lint` to find issues
- Use `@/` alias imports

## Next Steps

1. Install shadcn/ui components
2. Set up authentication
3. Connect to a database
4. Build your first feature!

---

🚀 **Ready to build?** Start with `npm run dev`!
