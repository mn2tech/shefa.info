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
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Shefa Connect services including business consulting, strategic connections, leadership coaching, AI guidance, marketing support, and more.",
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
      <section className="bg-gray-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              Comprehensive Support for Business Growth
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              From strategic consulting to specialized guidance, Shefa offers a
              full range of services designed to help business owners make
              confident decisions and achieve meaningful growth.
            </p>
          </div>
        </div>
      </section>

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
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
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

      <section className="bg-gray-soft py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">
            Not Sure Where to Start?
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Schedule a consultation and we will help you identify the services
            and connections that best fit your business needs.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
