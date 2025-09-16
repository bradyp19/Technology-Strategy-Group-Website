import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Technology Strategy Group - University of Virginia',
  description: 'Bridging technology and strategy at UVA. Join us, learn, and build real strategy skills through projects, events, and career preparation.',
  keywords: ['technology strategy', 'UVA', 'consulting', 'business strategy', 'student organization'],
  authors: [{ name: 'Technology Strategy Group' }],
  creator: 'Technology Strategy Group',
  publisher: 'University of Virginia',
  openGraph: {
    title: 'Technology Strategy Group - University of Virginia',
    description: 'Bridging technology and strategy at UVA. Join us, learn, and build real strategy skills.',
    url: 'https://uva.edu/tsg',
    siteName: 'Technology Strategy Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Strategy Group - University of Virginia',
    description: 'Bridging technology and strategy at UVA. Join us, learn, and build real strategy skills.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
