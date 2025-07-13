import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Metadata for SEO
export const metadata: Metadata = {
  title: {
    default: 'DevPort - Modern Web Development Solutions',
    template: '%s | DevPort',
  },
  description: 'Transforming ideas into exceptional digital experiences. This website is a living example of our capabilities.',
  keywords: [
    'web development',
    'portfolio',
    'react',
    'next.js',
    'tailwind',
    'modern web',
    'frontend development',
    'responsive design',
  ],
  authors: [
    {
      name: 'Your Name',
      url: 'https://yourwebsite.com',
    },
  ],
  creator: 'Your Name',
  publisher: 'Your Company',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'DevPort',
    title: 'DevPort - Modern Web Development Solutions',
    description: 'Transforming ideas into exceptional digital experiences.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DevPort - Modern Web Development Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevPort - Modern Web Development Solutions',
    description: 'Transforming ideas into exceptional digital experiences.',
    creator: '@yourtwitter',
    images: ['/images/og-image.jpg'],
  },
};

// Viewport settings
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased`}>
        <Providers>
          <Header />
          <main className="flex-grow pt-24"> {/* Add consistent padding-top for the fixed header */}
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
