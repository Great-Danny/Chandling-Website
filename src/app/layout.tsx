import type { Metadata } from "next"
import { Merriweather, Roboto } from "next/font/google"
import "@/styles/globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Limani Supply - Premium Ship Chandling",
  description: "Your trusted partner for high-quality ship chandling supplies and maritime logistics solutions.",
  keywords: "ship chandling, maritime supplies, vessel maintenance, marine equipment",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://limanisupply.com",
    siteName: "Limani Supply",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00234B" />
      </head>
      <body
        className={`${merriweather.variable} ${roboto.variable} font-sans bg-white text-nautical-900`}
      >
        {children}
      </body>
    </html>
  )
}
