import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export const SEO = ({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Dr. Hamza Hussain'
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = 'https://insightmindclinic.com';
  const fullUrl = `${siteUrl}${location.pathname}`;
  const fullImage = `${siteUrl}${image}`;

  const defaultKeywords = [
    'psychiatrist pune',
    'mental health clinic',
    'depression treatment',
    'anxiety therapy',
    'psychiatric consultation',
    'dr hamza hussain',
    'insight mind clinic',
    'pune psychiatrist',
    'mental health services',
    'psychiatric care'
  ];

  const allKeywords = [...defaultKeywords, ...keywords].join(', ');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Insight - The Mind Clinic",
    "description": description,
    "url": fullUrl,
    "telephone": "+91-9390442784",
    "email": "contact@drhamzahussain.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2nd Floor, Opus B, Undri",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411028",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "$$",
    "medicalSpecialty": "Psychiatry",
    "hasCredential": "Board Certified Psychiatrist",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Insight - The Mind Clinic</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Insight - The Mind Clinic" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@insightclinic" />
      
      {/* Article specific */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

// Pre-defined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: 'Best Psychiatrist in Pune | Dr. Hamza Hussain',
    description: 'Expert psychiatric care by Dr. Hamza Hussain at Insight - The Mind Clinic. Specialized in depression, anxiety, OCD, and mental health treatment in Pune.',
    keywords: ['best psychiatrist pune', 'mental health treatment', 'depression therapy']
  },
  services: {
    title: 'Mental Health Services | Depression, Anxiety, OCD Treatment',
    description: 'Comprehensive mental health services including depression treatment, anxiety therapy, OCD management, and psychiatric consultation in Pune.',
    keywords: ['depression treatment pune', 'anxiety therapy', 'ocd treatment']
  },
  about: {
    title: 'About Dr. Hamza Hussain | Gold Medalist Psychiatrist',
    description: 'Meet Dr. Hamza Hussain, gold medalist psychiatrist with 15+ years experience. Learn about our holistic approach to mental health care.',
    keywords: ['dr hamza hussain', 'psychiatrist experience', 'holistic mental health']
  }
};