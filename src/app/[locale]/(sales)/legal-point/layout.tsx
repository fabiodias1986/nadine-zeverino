import { Playfair_Display, Inter } from 'next/font/google';
import '../../globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-white text-dark antialiased">{children}</body>
    </html>
  );
}