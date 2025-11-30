import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { APP_METADATA } from '../constants';

export const SEOHelper: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  // Dynamic content based on current language
  const title = t('meta.title', { defaultValue: APP_METADATA.title }) as string;
  const description = (t('meta.tagline', { defaultValue: APP_METADATA.tagline }) as string) + " - " + (t('meta.quote') as string);
  const url = window.location.href;

  // JSON-LD Schema for AI/Search Engines
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": title,
    "description": description,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "The Hive Architecture Project",
      "url": APP_METADATA.githubUrl
    },
    "inLanguage": currentLang
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* PWA Theme Color update based on mode if needed, static for now */}
      <meta name="theme-color" content="#F59E0B" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};