/**
 * Central site configuration.
 * Set NEXT_PUBLIC_BUSINESS_PHONE in .env.local when a real number is available.
 */
export const siteConfig = {
  name: "Shefa",
  legalName: "Shefa",
  tagline: "Strategic Connections. Sustainable Growth.",
  description:
    "Shefa partners with business owners and executive teams to solve growth challenges, develop strategic opportunities, and connect them with the right people and resources.",
  url: "https://shefa.info",
  email: "contact@shefa.info",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "2408884270",
  address: {
    streetAddress: "2915 Suite F Olney Sandy Spring Road",
    locality: "Olney",
    region: "MD",
    postalCode: "20832",
    area: "Olney, MD",
  },
  social: {
    linkedin: "https://linkedin.com",
  },
  designer: {
    name: "NM2TECH",
    tagline: "Next Move",
    url: "https://nm2web-redesign.vercel.app",
    logo: "/images/nm2tech-logo.png",
  },
} as const;

export function formatAddress(): string {
  const { streetAddress, locality, region, postalCode } = siteConfig.address;
  return `${streetAddress}, ${locality}, ${region}, ${postalCode}`;
}

export function formatPhoneForDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phone;
}

export function formatPhoneForTel(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  return phone.startsWith("+") ? phone : `+${digits}`;
}

export const hasBusinessPhone = siteConfig.phone.length > 0;
