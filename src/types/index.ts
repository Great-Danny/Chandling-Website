export interface Product {
  id: string
  name: string
  description: string
  price: number
  salePrice?: number
  category: 'rigging' | 'safety' | 'navigation' | 'maintenance' | 'provisions'
  image: string
  sku: string
  inStock: boolean
  quantity: number
  specs?: Record<string, string>
  tags: string[]
}

export interface CartItem {
  productId: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  tax: number
  shipping: number
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
  createdAt: Date
  updatedAt: Date
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  company?: string
  phone?: string
  role: 'customer' | 'member' | 'admin'
  createdAt: Date
  updatedAt: Date
}
