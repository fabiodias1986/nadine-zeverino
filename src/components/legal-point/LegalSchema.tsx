'use client';
import { useParams } from 'next/navigation';

export default function LegalSchema() {
  const params = useParams();
  const locale = (params?.locale as string) || 'pt';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Legal Point by Nadine Zeverino',
    description: 'Secure property acquisition and legal representation in Portugal for international investors.',
    url: `https://www.nadinezeverino.com/${locale}/legal-point`,
    image: 'https://www.nadinezeverino.com/media/og-legal.jpg',
    logo: 'https://www.nadinezeverino.com/media/legal-point-logo.png',
    telephone: '+351964022222',
    email: 'niz@nadinezeverino.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Largo de Heliodoro Salgado Nº8',
      addressLocality: 'Portimão',
      postalCode: '8500-537',
      addressCountry: 'PT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.137,
      longitude: -8.537,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Tuesday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '18:00' },
    ],
    sameAs: [
      'https://www.facebook.com/nadinezeverino',
      'https://www.instagram.com/nadinezeverino',
      'https://www.linkedin.com/in/nadine-zeverino',
    ],
    areaServed: [
      { '@type': 'Country', name: 'Portugal' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Netherlands' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real Estate Law' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'International Successions' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Visas & Nationality' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Law' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '10',
      bestRating: '5',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
