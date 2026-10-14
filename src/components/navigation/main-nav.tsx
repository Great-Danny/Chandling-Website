'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, LogIn, Anchor } from 'lucide-react'

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)

  const catalogLinks = [
    { href: '/catalog/rigging', label: 'Rigging & Ropes' },
    { href: '/catalog/safety', label: 'Safety Equipment' },
    { href: '/catalog/navigation', label: 'Navigation Tools' },
    { href: '/catalog/maintenance', label: 'Maintenance' },
    { href: '/catalog/provisions', label: 'Provisions' },
  ]

  const mainLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Resources' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-nautical-200 bg-gradient-to-r from-nautical-900 to-nautical-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-ocean-300 transition-colors"
          >
            <Anchor className="w-6 h-6 text-ocean-400 animate-bounce" />
            <span className="font-serif text-2xl font-bold">Limani</span>
            <span className="font-serif text-2xl font-bold text-ocean-300">Supply</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Catalog Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-white hover:text-ocean-300 transition-colors flex items-center gap-1">
                Catalog
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 w-48 bg-white text-nautical-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 mt-0">
                {catalogLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm hover:bg-nautical-50 hover:text-nautical-800 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-white hover:text-ocean-300 transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User Menu & Auth */}
          <div className="flex items-center gap-4">
            {/* User Menu Dropdown */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 text-white hover:text-ocean-300 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                Account
              </button>
              {isUserMenuOpen && (
                <div className="absolute right-0 w-40 bg-white text-nautical-900 rounded-md shadow-lg py-2">
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-sm hover:bg-nautical-50 transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block px-4 py-2 text-sm hover:bg-nautical-50 transition-colors"
                  >
                    Register
                  </Link>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-nautical-50 transition-colors border-t border-nautical-100"
                  >
                    Dashboard
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-ocean-300 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-nautical-700">
            <div className="space-y-2 mt-4">
              <div className="px-4 py-2">
                <p className="text-ocean-300 text-xs font-semibold mb-2">CATALOG</p>
                <div className="space-y-1">
                  {catalogLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-white text-sm hover:text-ocean-300 hover:bg-nautical-800 rounded transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-nautical-700 pt-2 px-4">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-white text-sm hover:text-ocean-300 hover:bg-nautical-800 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-nautical-700 pt-2 px-4 space-y-2">
                <Link
                  href="/login"
                  className="block px-3 py-2 text-white text-sm hover:text-ocean-300 hover:bg-nautical-800 rounded transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 bg-ocean-500 text-white text-sm hover:bg-ocean-600 rounded transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
