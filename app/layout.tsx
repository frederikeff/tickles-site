import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import CookieConsent from '@/components/CookieConsent'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import './globals.css'

// TypeScript type for Schema.org data
type SchemaOrgData = {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  founder?: {
    '@type': string;
    name: string;
    sameAs: string[];
  };
  sameAs: string[];
  description: string;
  address?: {
    '@type': string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  areaServed?: {
    '@type': string;
    name: string;
  };
  offers?: {
    '@type': string;
    category: string[];
  };
};

const inter = Inter({ subsets: ['latin'] })

// Define base URL
const siteUrl = 'https://tickles.me'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tickles - Love Simplified | NYC Dating & Relationship Wisdom',
    template: '%s | Tickles'
  },
  description: 'Discover authentic connections in NYC through daily relationship wisdom, guided events, and genuine matchmaking experiences. Skip the dating app drama and find real love.',
  keywords: [
    'NYC dating',
    'relationship advice',
    'dating events',
    'love in New York',
    'dating coach',
    'relationship wisdom',
    'authentic connections',
    'Chelsea dating walks',
    'NYC singles',
    'relationship newsletter'
  ],
  authors: [{ name: 'Tickles' }],
  creator: 'Tickles',
  publisher: 'Tickles',
  
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [
      { url: '/images/favicon.ico' }
    ],
    apple: [
      { url: '/images/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/images/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    manifest: '/images/site.webmanifest'
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Tickles',
    title: 'Tickles - Love Simplified | NYC Dating & Relationship Wisdom',
    description: 'Find authentic connections in NYC through genuine experiences and daily relationship wisdom. Skip the dating app drama and discover real love.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tickles - Making Love Simple in NYC',
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Tickles - Love Simplified',
    description: 'Daily relationship wisdom and authentic dating experiences in NYC',
    site: '@TicklesNYC',
    creator: '@TicklesNYC',
    images: ['/images/og-image.jpg'],
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
    }
  },

  alternates: {
    canonical: siteUrl,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Tickles',
              url: siteUrl,
              logo: `${siteUrl}/images/og-image.jpg`,
              description: 'NYC-based relationship wisdom and authentic dating experiences',
              sameAs: [
                'https://instagram.com/ticklesnyc',
                'https://twitter.com/TicklesNYC'
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'New York',
                addressRegion: 'NY',
                addressCountry: 'US'
              },
              areaServed: {
                '@type': 'City',
                name: 'New York City'
              },
              offers: {
                '@type': 'Offer',
                category: [
                  'Dating Newsletter',
                  'Relationship Events',
                  'Dating Coaching'
                ]
              }
            } as SchemaOrgData)
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
          <Analytics />
        </div>
      </body>
    </html>
  )
}