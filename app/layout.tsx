import type { Metadata } from 'next';
import { Montserrat,Playfair_Display, Alex_Brush} from 'next/font/google';
import './globals.css';

/**
 * Fonts Configuration
 * 
 * - Cormorant Garamond: Elegant serif for headings and decorative text
 * - Montserrat: Clean, refined sans-serif for body text
 */
// const cormorant = Cormorant_Garamond({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-cormorant',
// });

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-playfair',
  display: 'swap',
})


const greatVibes = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-greatvibes',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hidayah & Azwan – Wedding Invitation',
  description:
    'Dengan penuh kesyukuran, kami menjemput anda ke majlis perkahwinan Hidayah & Azwan.',

  openGraph: {
    title: 'Jemputan Perkahwinan Hidayah & Azwan',
      description:
        'Dengan penuh kesyukuran, kami menjemput anda ke majlis perkahwinan Hidayah & Azwan',
    url: 'https://lakar-hidayahazwan.vercel.app',
    siteName: 'Majlis Kesyukuran Hidayah & Azwan',
    images: [
      {
        url: 'https://lakar-hidayahazwan.vercel.app/images/thumbnail2.png',
        width: 1200,
        height: 630,
        alt: 'Jemputan Perkahwinan Hidayah & Azwan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jemputan Perkahwinan Hidayah & Azwan',
    description:
      'Dengan penuh kesyukuran, kami menjemput anda ke majlis perkahwinan Hidayah & Azwan.',
    images: ['https://lakar-hidayahazwan.vercel.app/images/thumbnail2.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${greatVibes.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
