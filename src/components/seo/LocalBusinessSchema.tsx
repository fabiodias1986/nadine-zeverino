import Script from 'next/script';

export default function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Nadine Isabel Zeverino - Advogada",
        "image": "https://www.nadinezeverino.com/images/og-image.jpg",
        "url": "https://www.nadinezeverino.com",
        "telephone": "+351 964 022 222",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Largo de Heliodoro Salgado Nº8",
            "addressLocality": "Portimão",
            "postalCode": "8500-537",
            "addressCountry": "PT"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.138407,
            "longitude": -8.537578
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        },
        "priceRange": "$$",
        "founder": {
            "@type": "Person",
            "name": "Nadine Isabel Zeverino"
        }
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
