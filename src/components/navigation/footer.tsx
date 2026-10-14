'use client'

import Link from 'next/link'
import { Anchor, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-nautical-800 to-nautical-900 text-white border-t border-nautical-700">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-6 h-6 text-ocean-400" />
              <span className="font-serif text-xl font-bold">
                Limani<span className="text-ocean-300">Supply</span>
              </span>
            </div>
            <p className="text-ocean-200 text-sm">
              Leading provider of premium ship chandling supplies and maritime logistics solutions worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-ocean-300">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Catalog Categories */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-ocean-300">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/catalog/rigging" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  Rigging & Ropes
                </Link>
              </li>
              <li>
                <Link href="/catalog/safety" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  Safety Equipment
                </Link>
              </li>
              <li>
                <Link href="/catalog/navigation" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  Navigation Tools
                </Link>
              </li>
              <li>
                <Link href="/catalog/maintenance" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-ocean-300">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ocean-400 mt-1 flex-shrink-0" />
                <p className="text-ocean-200">Port Area, Maritime District, Global Trading Hub</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ocean-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ocean-400 flex-shrink-0" />
                <a href="mailto:info@limanisupply.com" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                  info@limanisupply.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-nautical-700 pt-8 mt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-ocean-200 text-sm">
              &copy; 2024 Limani Supply. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm">
              <Link href="/privacy" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-ocean-200 hover:text-ocean-100 transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Border */}
      <div className="h-1 bg-gradient-to-r from-ocean-500 via-ocean-400 to-ocean-500"></div>
    </footer>
  )
}
