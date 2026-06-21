import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

import Tracker from '@/components/Tracker'
import AdminShortcut from '@/components/AdminShortcut'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata = {
  metadataBase: new URL('https://sumanhp.vercel.app'),
  title: 'Suman H P — CSE Student | Java Developer | Blockchain Enthusiast',
  description:
    'Personal portfolio of Suman H P — Information Science Engineering student at BMSITM, Bengaluru. Skilled in Java, Web Development, and Blockchain.',
  keywords: [
    'Suman H P',
    'portfolio',
    'Java developer',
    'blockchain',
    'Next.js',
    'BMSITM',
    'full stack',
  ],
  authors: [{ name: 'Suman H P', url: 'https://linkedin.com/in/sumanhp07' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sumanhp.vercel.app',
    title: 'Suman H P — Portfolio',
    description:
      'CSE Student | Java Developer | Blockchain Enthusiast. Explore my projects and skills.',
    siteName: 'Suman H P Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Suman H P Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suman H P — Portfolio',
    description: 'CSE Student | Java Developer | Blockchain Enthusiast',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <Tracker />
        <AdminShortcut />
        {children}
      </body>
    </html>
  )
}
