"use client";

import { usePathname } from "next/navigation";

interface SchemaProps {
  type: "Organization" | "LocalBusiness" | "Product" | "BreadcrumbList" | "FAQPage";
  data: any;
}

export default function Schema({ type, data }: SchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const OrganizationSchema = {
  "@id": "https://sportsurf.in/#org",
  "name": "SportSurf India",
  "url": "https://sportsurf.in",
  "logo": "https://sportsurf.in/logo.webp",
  "description": "India's leading sports surface and infrastructure company.",
  "foundingDate": "2013",
  "areaServed": "IN",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://linkedin.com/company/sportsurf",
    "https://instagram.com/sportsurfindia"
  ]
};
