// Created by Qwen 3.7 November 14, 2026
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elite Chauffeur Services',
  description: 'Luxury transfers, tours, and shuttle services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-light text-brand-dark antialiased">
        <Navbar />
        <main className="min-h-screen pt-20"> {/* pt-20 to account for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
