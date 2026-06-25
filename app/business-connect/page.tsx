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
import SectionHeading from "@/components/ui/SectionHeading";
import ConnectRequestForm from "@/components/forms/ConnectRequestForm";

export const metadata: Metadata = {
  title: "Business Connect",
  description:
    "Request trusted introductions to financial advisors, attorneys, CPAs, marketing experts, IT consultants, and more through Shefa Business Connect.",
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
      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Business Connect
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Trusted Introductions to the Professionals You Need
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-200">
              Business owners can request introductions to trusted professionals
              in our network. Tell us what you need, and we will connect you with
              vetted advisors who understand your industry and goals.
            </p>
          </div>
        </div>
      </section>

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
                <h3 className="mt-3 text-base font-semibold text-navy-900">
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm text-navy-600">
                  {category.description}
                </p>
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
          <div className="rounded-2xl border border-gray-muted bg-white p-6 shadow-sm sm:p-8">
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
