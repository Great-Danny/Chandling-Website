# Adding shadcn/ui Components

This guide shows how to add UI components from shadcn/ui to your project.

## Prerequisites
- Node.js 16.13 or later
- Project already initialized (which it is!)

## Installation Method

### 1. Add Individual Components

```bash
# Add Button component
npx shadcn-ui@latest add button

# Add Card component
npx shadcn-ui@latest add card

# Add Input component
npx shadcn-ui@latest add input

# Add Select component
npx shadcn-ui@latest add select

# Add Dialog component
npx shadcn-ui@latest add dialog

# Add Dropdown Menu
npx shadcn-ui@latest add dropdown-menu

# Add Tabs
npx shadcn-ui@latest add tabs
```

## Recommended Components to Install

For a ship chandling e-commerce site, we recommend:

```bash
# Essential E-commerce Components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add select
npx shadcn-ui@latest add checkbox
npx shadcn-ui@latest add label
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add avatar

# Navigation & Layout
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add breadcrumb

# Forms & Data
npx shadcn-ui@latest add form
npx shadcn-ui@latest add table
npx shadcn-ui@latest add pagination

# Feedback & Dialogs
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add alert-dialog
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add popover

# Additional
npx shadcn-ui@latest add carousel
npx shadcn-ui@latest add rate
```

## Using Components

After installation, components are available in `src/components/ui/`

### Example: Using a Button

```typescript
// src/components/catalog/add-to-cart-button.tsx
'use client'

import { Button } from "@/components/ui/button"

export function AddToCartButton() {
  return (
    <Button 
      className="bg-ocean-500 hover:bg-ocean-600"
      size="lg"
    >
      Add to Cart
    </Button>
  )
}
```

### Example: Using a Card

```typescript
// src/components/catalog/product-card.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProductCard() {
  return (
    <Card className="border-nautical-200">
      <CardHeader>
        <CardTitle className="text-nautical-900">Product Name</CardTitle>
      </CardHeader>
      <CardContent>
        <Badge variant="secondary">In Stock</Badge>
        <p className="mt-2 text-gray-600">Product description</p>
      </CardContent>
    </Card>
  )
}
```

## Customizing Components

Components can be customized using Tailwind classes:

```typescript
<Button 
  className="w-full bg-nautical-900 hover:bg-nautical-800 text-ocean-100"
>
  Custom Button
</Button>
```

## Component Documentation

Visit [ui.shadcn.com](https://ui.shadcn.com) for detailed documentation on each component including:
- Usage examples
- All available props
- Customization options
- Accessibility features

## Troubleshooting

### Components not appearing after install?
```bash
# Ensure installation completed successfully
npm list -g shadcn-ui

# Try installing again
npx shadcn-ui@latest add button --force
```

### Import errors?
- Check that components are in `src/components/ui/`
- Ensure paths in `tsconfig.json` are correct
- Rebuild: `npm run build`

## Next: Create Component Library Index

Create `src/components/ui/index.ts` to export all components:

```typescript
// src/components/ui/index.ts
export { Button } from './button'
export { Card, CardContent, CardHeader, CardTitle } from './card'
export { Input } from './input'
export { Badge } from './badge'
// ... add more as needed
```

Then import like:
```typescript
import { Button, Card, Input } from '@/components/ui'
```

---

All shadcn/ui components are pre-built, accessible, and ready to customize! 🎨
