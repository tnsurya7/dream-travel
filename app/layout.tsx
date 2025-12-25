import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dreamtravelagency.com'),
  title: 'Dream Travel Agency - Explore the World with Premium Travel Packages',
  description: 'Discover amazing travel destinations with Dream Travel Agency. Wedding tours, honeymoon packages, family trips, and international tours at affordable prices.',
  keywords: 'travel agency, tour packages, honeymoon packages, family tours, international tours, India tours, wedding tours, educational tours',
  authors: [{ name: 'Dream Travel Agency' }],
  openGraph: {
    title: 'Dream Travel Agency - Premium Travel Experiences',
    description: 'Explore the world with our curated travel packages. From romantic honeymoons to family adventures.',
    url: 'https://dreamtravelagency.com',
    siteName: 'Dream Travel Agency',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dream Travel Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dream Travel Agency - Premium Travel Experiences',
    description: 'Explore the world with our curated travel packages.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://dreamtravelagency.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}