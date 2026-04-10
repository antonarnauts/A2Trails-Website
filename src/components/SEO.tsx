import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  schema?: any;
}

export default function SEO({ 
  title, 
  description, 
  canonical = 'https://a2trails.com', 
  type = 'website',
  schema 
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const siteName = 'A2Trails';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'A2Trails specializes in the consultancy, design, and construction of sustainable mountain bike trails, pump tracks, and skill parks across Europe.';
  const metaDescription = description || defaultDescription;

  // Local Business Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "A2Trails",
    "image": "https://a2trails.com/images/logo.webp",
    "@id": "https://a2trails.com",
    "url": "https://a2trails.com",
    "telephone": "+3200000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mariemontkaai 15",
      "addressLocality": "Brussel",
      "postalCode": "1080",
      "addressCountry": "BE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.8503,
      "longitude": 4.3517
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
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/a2trails",
      "https://www.instagram.com/a2trails"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/webp" href="/images/A2TrailsLogo.webp" />
      <html lang={currentLang} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content="https://a2trails.com/images/og-image.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://a2trails.com/images/og-image.webp" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
