import type { Metadata } from "next";
import {
  Landmark,
  Scale,
  Calculator,
  Building,
  Shield,
  Megaphone,
  Cpu,
  Home,
  Hammer,
  UserCheck,
  Users,
  FileCheck,
} from "lucide-react";
import Card from "@/components/ui/Card";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ConnectRequestForm from "@/components/forms/ConnectRequestForm";

export const metadata: Metadata = {
  title: "Strategic Connections",
  description:
    "Request trusted introductions to financial advisors, attorneys, CPAs, marketing experts, IT consultants, and more through Shefa.",
};

const categories = [
  {
    icon: Landmark,
    title: "Financial Advisors",
    description: "Investment planning, wealth management, and financial strategy.",
  },
  {
    icon: Scale,
    title: "Attorneys",
    description: "Business law, contracts, compliance, and legal counsel.",
  },
  {
    icon: Calculator,
    title: "CPAs",
    description: "Accounting, tax planning, bookkeeping, and financial reporting.",
  },
  {
    icon: Building,
    title: "Banking",
    description: "Business banking, loans, lines of credit, and treasury services.",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Business insurance, liability coverage, and risk management.",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    description: "Brand strategy, digital marketing, and customer acquisition.",
  },
  {
    icon: Cpu,
    title: "IT and AI Consultants",
    description: "Technology infrastructure, cybersecurity, and AI implementation.",
  },
  {
    icon: Home,
    title: "Commercial Real Estate",
    description: "Office space, leasing, property acquisition, and site selection.",
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Commercial build-outs, renovations, and contractor referrals.",
  },
  {
    icon: UserCheck,
    title: "Business Coaches",
    description: "Executive coaching, accountability, and leadership development.",
  },
  {
    icon: Users,
    title: "Recruiters",
    description: "Talent acquisition, hiring strategy, and team building support.",
  },
  {
    icon: FileCheck,
    title: "Government Contracting Advisors",
    description: "Federal contracting, certifications, and bid preparation.",
  },
];

export default function BusinessConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic Connections"
        title="Trusted Introductions to the Professionals You Need"
        description="Business owners can request introductions to trusted professionals in our network. Tell us what you need, and we will connect you with vetted advisors who understand your industry and goals."
      />

      <section className="py-16 sm:py-20" aria-labelledby="categories-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Connection Categories"
            subtitle="Browse the types of trusted professionals available through our network."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.title} hover={false}>
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
                  aria-hidden
                >
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-serif text-base font-semibold text-navy-900">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm text-navy-600">{category.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gray-soft py-16 sm:py-20"
        aria-labelledby="request-form-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Request a Connection"
            subtitle="Complete the form below and our team will match you with trusted professionals who can help."
          />
          <div className="rounded-lg border border-gray-muted bg-white p-6 shadow-sm sm:p-8">
            <h2 id="request-form-heading" className="sr-only">
              Connection request form
            </h2>
            <ConnectRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
