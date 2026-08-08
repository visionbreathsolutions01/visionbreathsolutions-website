import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_DOMAIN = "https://www.visionbreathsolutions.com";
const DEFAULT_SITE_NAME = "Vision Breath Solutions Pvt. Ltd.";
const DEFAULT_OG_IMAGE = `${DEFAULT_DOMAIN}/favicon.png`;

const SEO = ({
  title,
  description,
  keywords,
  path = "",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  schema = null,
}) => {
  const fullTitle = title
    ? `${title} | ${DEFAULT_SITE_NAME}`
    : "Vision Breath Solutions Pvt. Ltd. | AI, Software & Web Development Company";

  const canonicalUrl = `${DEFAULT_DOMAIN}${path}`;
  const metaDescription =
    description ||
    "Vision Breath Solutions Pvt. Ltd. provides AI solutions, software development, website development, mobile app development, cloud solutions, enterprise software, automation, digital transformation, UI/UX design, and IT consulting services.";

  const metaKeywords =
    keywords ||
    "Vision Breath Solutions, Vision Breath Solutions Pvt Ltd, AI Solutions Company, AI Development Company, Software Company, Software Company in India, Website Development Company, Mobile App Development Company, Custom Software Development, Enterprise Software Company, Cloud Solutions Company, Digital Transformation Company";

  // Comprehensive default JSON-LD schema graph
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "SoftwareCompany", "LocalBusiness", "ProfessionalService"],
        "@id": `${DEFAULT_DOMAIN}/#organization`,
        "name": "Vision Breath Solutions Pvt. Ltd.",
        "alternateName": ["Vision Breath Solutions", "Vision Breath"],
        "url": DEFAULT_DOMAIN,
        "logo": {
          "@type": "ImageObject",
          "url": `${DEFAULT_DOMAIN}/favicon.png`,
          "caption": "Vision Breath Solutions Logo"
        },
        "image": `${DEFAULT_DOMAIN}/favicon.png`,
        "description": metaDescription,
        "email": "visionbreathsolutions@gmail.com",
        "telephone": "+91-9963416422",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pathuru Cross Road, Kunchanapalli",
          "addressLocality": "Vijayawada",
          "addressRegion": "Andhra Pradesh",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "16.4863",
          "longitude": "80.6099"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:30"
        },
        "sameAs": [
          "https://www.instagram.com/visionbreathsolutions_01/",
          "https://github.com/visionbreathsolutions",
          "https://www.linkedin.com/company/visionbreathsolutions",
          "https://www.facebook.com/visionbreathsolutions",
          "https://x.com/visionbreath",
          "https://www.youtube.com/@visionbreathsolutions"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${DEFAULT_DOMAIN}/#website`,
        "url": DEFAULT_DOMAIN,
        "name": "Vision Breath Solutions Pvt. Ltd.",
        "publisher": {
          "@id": `${DEFAULT_DOMAIN}/#organization`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": fullTitle,
        "description": metaDescription,
        "isPartOf": {
          "@id": `${DEFAULT_DOMAIN}/#website`
        },
        "about": {
          "@id": `${DEFAULT_DOMAIN}/#organization`
        },
        "inLanguage": "en-US"
      }
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard HTML Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="Vision Breath Solutions Pvt. Ltd." />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Language & Encoding */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#4f46e5" />

      {/* Open Graph / Social Media */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@visionbreath" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
