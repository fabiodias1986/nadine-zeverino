import {NextIntlClientProvider, hasLocale} from 'next-intl';
import { getMessages } from 'next-intl/server';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "@next/font/google";
import TopNavbar from "@/components/layout/TopNavbar";
import Footer from "@/components/layout/Footer"

const inter = Inter({ subsets: ["latin"] });


 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    //funcão not found page
  }
 
  return (
    <html lang={locale}>
      <body className="bg-white">
        <NextIntlClientProvider>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
      </body>
    </html>
  );
}