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

export const metadata = {
  icons: {
    icon: [
      { url: '/media/legal-point-logo.png?v=2', sizes: 'any' },
      { url: '/media/legal-point-logo.png?v=2', type: 'image/png' },
    ],
    apple: '/media/legal-point-logo.png?v=2',
  },
};

export default function LegalPointLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${inter.variable} font-sans bg-black text-white antialiased min-h-screen w-full`}>
      {children}
    </div>
  );
}