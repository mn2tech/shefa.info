import type { Metadata } from "next";
import { Heart, Users, Shield, ArrowRightLeft } from "lucide-react";
import Card from "@/components/ui/Card";
import PageCTA from "@/components/ui/PageCTA";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shefa — a strategic advisory firm helping business owners grow through relationships, strategy, and trusted community support.",
};

const values = [
  {
    icon: Heart,
    title: "Trust",
    description:
      "Every connection and recommendation is built on integrity, transparency, and a genuine commitment to your success.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We foster a supportive network where business owners and leaders learn from each other and grow together.",
  },
  {
    icon: ArrowRightLeft,
    title: "Referrals",
    description:
      "Our referral-based approach ensures you meet professionals who come recommended by people who know your needs.",
  },
  {
    icon: Shield,
    title: "Practical Support",
    description:
      "From strategy sessions to hands-on guidance, we focus on solutions you can implement in your business today.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Shefa"
        title="Growing Businesses Through Relationships, Strategy, and Education"
        description="Shefa exists to help business owners grow through relationships, strategy, and education. We believe the right connection at the right time can transform a business."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy-900">Our Mission</h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                Shefa serves as a bridge between business owners and the trusted
                professionals they need to succeed. We combine strategic consulting,
                meaningful introductions, and practical training to help leaders
                make confident decisions and build sustainable growth.
              </p>
              <p className="mt-4 leading-relaxed text-navy-600">
                Whether you are launching a startup, scaling a growing company, or
                strengthening a local business, Shefa provides the community,
                guidance, and resources to help you move forward.
              </p>
            </div>
            <div className="rounded-lg border border-gold-500/30 bg-navy-950 p-8 text-white sm:p-10">
              <blockquote className="font-serif text-lg leading-relaxed text-navy-100">
                &ldquo;We are not just consultants — we are connectors. Our role is
                to help business owners find the people, knowledge, and support
                they need to thrive.&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-medium text-gold-400">
                — The Shefa Team
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-soft py-16 sm:py-20" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Stand For"
            subtitle="Trust, community, referrals, and practical support are at the heart of everything we do."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
                  aria-hidden
                >
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Join Our Growing Community"
        description="Connect with business leaders, access practical resources, and find the support you need to grow with confidence."
        buttonText="Request a Connection"
        buttonHref="/business-connect"
      />
    </>
  );
}
