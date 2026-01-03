import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import BioClient from './BioClient';

// This is a Server Component for metadata generation

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'LegalPoint.Bio' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `https://www.nadinezeverino.com/${locale}/bio`,
            languages: {
                'pt': 'https://www.nadinezeverino.com/pt/bio',
                'en': 'https://www.nadinezeverino.com/en/bio',
                'nl': 'https://www.nadinezeverino.com/nl/bio',
            }
        }
    };
}

export default function BioPage() {
    return <BioClient />;
}
