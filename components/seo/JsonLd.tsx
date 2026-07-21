import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    ...(siteConfig.phone
      ? { telephone: formatPhoneForTel(siteConfig.phone) }
      : {}),
    areaServed: {
      "@type": "AdministrativeArea",
      name: siteConfig.address.area,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "US",
    },
    serviceType: [
      "Business Consulting",
      "Strategic Advisory",
      "Executive Coaching",
      "Business Development",
      "Strategic Connections",
    ],
    sameAs: [siteConfig.social.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

function formatPhoneForTel(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  return phone.startsWith("+") ? phone : `+${digits}`;
}
