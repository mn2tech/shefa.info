import type { Metadata } from "next";
import {
  BarChart3,
  Network,
  UserCheck,
  ClipboardList,
  Bot,
  Megaphone,
  DollarSign,
  Landmark,
} from "lucide-react";
import Card from "@/components/ui/Card";
import PageCTA from "@/components/ui/PageCTA";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Shefa services including strategic advisory, business consulting, leadership coaching, AI guidance, marketing support, and more.",
};

const services = [
  {
    icon: BarChart3,
    title: "Business Consulting",
    description:
      "One-on-one and group consulting to address operational challenges, improve efficiency, and develop actionable growth strategies.",
  },
  {
    icon: Network,
    title: "Strategic Connections",
    description:
      "Curated introductions to trusted professionals, advisors, and business leaders within our vetted network.",
  },
  {
    icon: UserCheck,
    title: "Leadership Coaching",
    description:
      "Personalized coaching to strengthen your leadership skills, decision-making, and ability to guide your team.",
  },
  {
    icon: ClipboardList,
    title: "Business Planning",
    description:
      "Support with business plans, goal setting, financial projections, and roadmaps for sustainable growth.",
  },
  {
    icon: Bot,
    title: "AI and Technology Guidance",
    description:
      "Practical guidance on adopting AI tools, improving workflows, and leveraging technology for competitive advantage.",
  },
  {
    icon: Megaphone,
    title: "Marketing and Growth Support",
    description:
      "Strategies for brand development, customer acquisition, digital marketing, and measurable growth initiatives.",
  },
  {
    icon: DollarSign,
    title: "Funding Readiness",
    description:
      "Preparation for loans, investors, and grants — including financial documentation, pitch development, and lender connections.",
  },
  {
    icon: Landmark,
    title: "Government Contracting Guidance",
    description:
      "Step-by-step support for businesses pursuing federal, state, and local government contracts and certifications.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Comprehensive Support for Business Growth"
        description="From strategic consulting to specialized guidance, Shefa offers services designed to help business owners make confident decisions and achieve meaningful growth."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Help You Grow"
            subtitle="Each service is delivered with a focus on trust, practicality, and long-term results."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title}>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
                  aria-hidden
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Not Sure Where to Start?"
        description="Schedule a consultation and we will help you identify the services and connections that best fit your business needs."
        buttonText="Schedule a Strategy Session"
      />
    </>
  );
}
