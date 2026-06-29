import type { Metadata } from "next";
import {
  Store,
  Rocket,
  Church,
  Briefcase,
  MapPin,
  Building2,
} from "lucide-react";
import Card from "@/components/ui/Card";
import PageCTA from "@/components/ui/PageCTA";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import type { AudienceCard } from "@/lib/types";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Shefa supports small business owners, startups, faith-based leaders, service providers, local businesses, and growing companies.",
};

const audiences: AudienceCard[] = [
  {
    title: "Small Business Owners",
    description:
      "Entrepreneurs running established small businesses who need trusted advisors, strategic guidance, and a supportive peer network.",
    icon: "store",
  },
  {
    title: "Startups",
    description:
      "Founders in early stages seeking mentorship, funding readiness, connections to service providers, and foundational business education.",
    icon: "rocket",
  },
  {
    title: "Faith-Based Business Leaders",
    description:
      "Business owners who lead with purpose and values, looking for a community that understands the intersection of faith and enterprise.",
    icon: "church",
  },
  {
    title: "Professional Service Providers",
    description:
      "Attorneys, CPAs, consultants, and advisors who want to connect with quality clients and contribute to a trusted referral network.",
    icon: "briefcase",
  },
  {
    title: "Local Community Businesses",
    description:
      "Neighborhood and community-focused businesses that want to grow locally while building meaningful relationships with other leaders.",
    icon: "mappin",
  },
  {
    title: "Growing Companies",
    description:
      "Businesses ready to scale who need strategic planning, leadership coaching, hiring support, and connections to growth resources.",
    icon: "building",
  },
];

const iconMap = {
  store: Store,
  rocket: Rocket,
  church: Church,
  briefcase: Briefcase,
  mappin: MapPin,
  building: Building2,
};

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title="Business Leaders at Every Stage of Growth"
        description="Shefa is designed for business owners and professionals who value trust, community, and practical support. No matter where you are in your journey, we are here to help you connect and grow."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Community"
            subtitle="From solo entrepreneurs to scaling companies, Shefa serves a diverse network of business leaders."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => {
              const Icon = iconMap[audience.icon as keyof typeof iconMap];
              return (
                <Card key={audience.title}>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-100 text-navy-700"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">
                    {audience.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-navy-600">
                    {audience.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA
        title="Is Shefa Right for You?"
        description="If you are a business owner looking for trusted connections and practical growth support, we would love to hear from you."
        buttonText="Request a Connection"
        buttonHref="/business-connect"
      />
    </>
  );
}
