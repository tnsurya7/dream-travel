import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dreamtravelz.in'),
  title: 'Dream Travel Agency - Premium Tour Packages from Damoh, Madhya Pradesh',
  description: 'Dream Travel Agency offers affordable and premium tour packages from Damoh, Madhya Pradesh. Kashmir, Kerala, spiritual tours, family tours, and group tours across India with 24/7 support.',
  keywords: 'travel agency Damoh, Madhya Pradesh tour packages, Kashmir tour packages, Kerala holiday packages, spiritual tours India, family tours, group tours, budget travel packages',
  authors: [{ name: 'Dream Travel Agency' }],
  openGraph: {
    title: 'Dream Travel Agency - Premium Tour Packages from Madhya Pradesh',
    description: 'Discover amazing travel destinations with Dream Travel Agency. Kashmir, Kerala, spiritual tours, and family trips at affordable prices.',
    url: 'https://dreamtravelz.in',
    siteName: 'Dream Travel Agency',
    images: [
      {
        url: 'https://dreamtravelz.in/logo.png',
        width: 512,
        height: 512,
        alt: 'Dream Travel Agency Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dream Travel Agency - Premium Tour Packages',
    description: 'Explore India with our curated travel packages from Damoh, Madhya Pradesh.',
    images: ['https://dreamtravelz.in/logo.png'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Structured Data for TravelAgency
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Dream Travel Agency",
    "url": "https://dreamtravelz.in",
    "logo": "https://dreamtravelz.in/logo.png",
    "image": "https://dreamtravelz.in/logo.png",
    "description": "Dream Travel Agency offers affordable and premium tour packages from Damoh, Madhya Pradesh including Kashmir, Kerala, spiritual tours, and family holidays across India.",
    "telephone": "+91-9109455317",
    "email": "dreamtravelagency395@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Damoh",
      "addressLocality": "Damoh",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.8315",
      "longitude": "79.4419"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://www.instagram.com/dreamtravellers3"
    ]
  }

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://dreamtravelz.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:site_name" content="Dream Travel Agency" />
        <meta property="og:image" content="https://dreamtravelz.in/logo.png" />
        <meta name="twitter:image" content="https://dreamtravelz.in/logo.png" />
      </head>
      <body className={inter.className}>
        {/* Structured Data for Google */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}