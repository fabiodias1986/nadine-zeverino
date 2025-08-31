import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "@next/font/google";
import Footer from "@/components/layout/Footer";
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

// Metadata para SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const { locale } = params;
  
  // Títulos e descrições por idioma
  const metadataByLocale = {
    pt: {
      title: "Nadine Isabel Zeverino - Advogada em Portimão | Direito Português",
      description: "Advogada especializada em Portimão com mais de 10 anos de experiência. Soluções jurídicas personalizadas em Direito Civil, Comercial, Imobiliário e Laboral. Proteção integral dos seus direitos.",
      keywords: "advogada Portimão, direito português, consultoria jurídica, direito civil, direito comercial, direito imobiliário, direito laboral, advocacia Portimão, Nadine Zeverino",
    },
    en: {
      title: "Nadine Isabel Zeverino - Lawyer in Portimão | Portuguese Law",
      description: "Specialized lawyer in Portimão with over 10 years of experience. Personalized legal solutions in Civil, Commercial, Real Estate and Labor Law. Comprehensive protection of your rights.",
      keywords: "lawyer Portimão, Portuguese law, legal consulting, civil law, commercial law, real estate law, labor law, advocacy Portimão, Nadine Zeverino",
    },
    es: {
      title: "Nadine Isabel Zeverino - Abogada en Portimão | Derecho Portugués",
      description: "Abogada especializada en Portimão con más de 10 años de experiencia. Soluciones jurídicas personalizadas en Derecho Civil, Comercial, Inmobiliario y Laboral. Protección integral de sus derechos.",
      keywords: "abogada Portimão, derecho portugués, consultoría jurídica, derecho civil, derecho comercial, derecho inmobiliario, derecho laboral, abogacía Portimão, Nadine Zeverino",
    },
    fr: {
      title: "Nadine Isabel Zeverino - Avocate à Portimão | Droit Portugais",
      description: "Avocate spécialisée à Portimão avec plus de 10 ans d'expérience. Solutions juridiques personnalisées en Droit Civil, Commercial, Immobilier et du Travail. Protection complète de vos droits.",
      keywords: "avocate Portimão, droit portugais, conseil juridique, droit civil, droit commercial, droit immobilier, droit du travail, avocature Portimão, Nadine Zeverino",
    },
    de: {
      title: "Nadine Isabel Zeverino - Rechtsanwältin in Portimão | Portugiesisches Recht",
      description: "Spezialisierte Rechtsanwältin in Portimão mit über 10 Jahren Erfahrung. Personalisierte Rechtslösungen im Zivil-, Handels-, Immobilien- und Arbeitsrecht. Umfassender Schutz Ihrer Rechte.",
      keywords: "Rechtsanwältin Portimão, portugiesisches Recht, Rechtsberatung, Zivilrecht, Handelsrecht, Immobilienrecht, Arbeitsrecht, Anwaltschaft Portimão, Nadine Zeverino",
    }
  };

  const localeMetadata = metadataByLocale[locale as keyof typeof metadataByLocale] || metadataByLocale.pt;

  return {
    title: localeMetadata.title,
    description: localeMetadata.description,
    keywords: localeMetadata.keywords,
    authors: [{ name: "Nadine Isabel Zeverino" }],
    creator: "Nadine Isabel Zeverino",
    publisher: "Nadine Isabel Zeverino - Advogada",
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
      canonical: `https://www.nadinezeverino.com/${locale}`,
      languages: {
        'pt': 'https://www.nadinezeverino.com/pt',
        'en': 'https://www.nadinezeverino.com/en',
        'es': 'https://www.nadinezeverino.com/es',
        'fr': 'https://www.nadinezeverino.com/fr',
        'de': 'https://www.nadinezeverino.com/de',
      }
    },
    openGraph: {
      title: localeMetadata.title,
      description: localeMetadata.description,
      url: `https://www.nadinezeverino.com/${locale}`,
      siteName: "Nadine Isabel Zeverino - Advogada",
      images: [
        {
          url: "https://www.nadinezeverino.com/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Nadine Isabel Zeverino - Advogada em Portimão"
        }
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: localeMetadata.title,
      description: localeMetadata.description,
      images: ["https://www.nadinezeverino.com/images/og-image.jpg"],
      creator: "@nadinezeverino"
    },
    verification: {
      google: "google-site-verification-code", // Substitua pelo seu código real
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-white`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}