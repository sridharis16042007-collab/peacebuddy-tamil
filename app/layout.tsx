import type { Metadata, Viewport } from 'next';
import { Noto_Sans_Tamil, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const notoSansTamil = Noto_Sans_Tamil({
  weight: ['400', '500', '600', '700'],
  subsets: ['tamil'],
  display: 'swap',
  variable: '--font-noto-tamil',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B3D6B',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://peacebuddytamil.com'),
  title: {
    default: 'Peace Buddy Tamil — மன அமைதி. தெளிவான சிந்தனை. நிம்மதியான வாழ்வு.',
    template: '%s | Peace Buddy Tamil',
  },
  description:
    'A gentle Tamil-first space for peace of mind, mindful living, and emotional wellbeing. Calm overthinking, practice guided meditation, and cultivate lasting tranquility.',
  keywords: [
    'மன அமைதி',
    'தியானம்',
    'மன நலம்',
    'தமிழ் தியானம்',
    'peace of mind tamil',
    'mindfulness tamil',
    'overthinking relief tamil',
    'guided meditation tamil',
    'emotional wellbeing tamil',
  ],
  authors: [{ name: 'Peace Buddy Tamil' }],
  creator: 'Peace Buddy Tamil',
  publisher: 'Peace Buddy Tamil',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://peacebuddytamil.com',
    languages: {
      'ta-IN': 'https://peacebuddytamil.com',
      'en-US': 'https://peacebuddytamil.com?lang=en',
    },
  },
  openGraph: {
    title: 'Peace Buddy Tamil — அமைதியான மனம். தெளிவான சிந்தனை.',
    description:
      'A calm, Tamil-first space for peace of mind, emotional wellbeing and mindful living.',
    url: 'https://peacebuddytamil.com',
    siteName: 'Peace Buddy Tamil',
    images: [
      {
        url: '/Peace_Buddy_Teal_Circular_Emblem.png',
        width: 512,
        height: 512,
        alt: 'Peace Buddy Tamil Circular Emblem',
      },
    ],
    locale: 'ta_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peace Buddy Tamil — மன அமைதிக்கான தமிழ் தளம்',
    description: 'A gentle Tamil space for peace of mind, mindful living and emotional wellbeing.',
    images: ['/Peace_Buddy_Teal_Circular_Emblem.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/Peace_Buddy_Teal_Circular_Emblem.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/Peace_Buddy_Teal_Circular_Emblem.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://peacebuddytamil.com/#organization',
        name: 'Peace Buddy Tamil',
        url: 'https://peacebuddytamil.com',
        logo: 'https://peacebuddytamil.com/Peace_Buddy_Teal_Circular_Emblem.png',
        description: 'A gentle, Tamil-first space for peace of mind, emotional wellbeing and mindful living.',
        sameAs: [
          'https://instagram.com/[CLIENT_INSTAGRAM]',
          'https://youtube.com/[CLIENT_YOUTUBE]',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://peacebuddytamil.com/#website',
        url: 'https://peacebuddytamil.com',
        name: 'Peace Buddy Tamil',
        publisher: {
          '@id': 'https://peacebuddytamil.com/#organization',
        },
        inLanguage: ['ta', 'en'],
      },
    ],
  };

  return (
    <html lang="ta" className={`${notoSansTamil.variable} ${inter.variable}`}>
      <head>
        {/* Preload hero logo emblem for fastest LCP */}
        <link
          rel="preload"
          href="/Peace_Buddy_Teal_Circular_Emblem.webp"
          as="image"
          type="image/webp"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ice text-ink antialiased">
        <LanguageProvider>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
