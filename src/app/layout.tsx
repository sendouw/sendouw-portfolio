import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Andy Sendouw - IT Professional Portfolio',
  description: 'Professional IT portfolio showcasing 5+ years of service desk and technical support experience. Specialized in user provisioning, endpoint management, and process automation.',
  keywords: 'IT Professional, Service Desk, Help Desk, Technical Support, Active Directory, Azure AD, SCCM, Intune, Portfolio, Andy Sendouw',
  authors: [{ name: 'Andy Sendouw' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Andy Sendouw - IT Professional Portfolio',
    description: 'Professional IT portfolio showcasing 5+ years of service desk and technical support experience.',
    url: 'https://yourdomain.com',
    siteName: 'Andy Sendouw Portfolio',
    images: [
      {
        url: '/photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Andy Sendouw - IT Professional',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andy Sendouw - IT Professional Portfolio',
    description: 'Professional IT portfolio showcasing 5+ years of service desk and technical support experience.',
    images: ['/photo.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  other: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#3B82F6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/photo.jpg" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}