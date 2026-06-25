import type { Metadata } from "next";
import {
  Users,
  Lightbulb,
  GraduationCap,
  Shield,
  Heart,
  TrendingUp,
  Handshake,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Shefa Connect helps business owners grow through trusted connections, consulting, training, and resources. Connecting Business Leaders. Empowering Growth.",
};

const whatWeDo = [
  {
    icon: Users,
    title: "Connect",
    description:
      "Introductions to trusted business leaders and professionals who can help you move forward with confidence.",
  },
  {
    icon: Lightbulb,
    title: "Consult",
    description:
      "Practical business consulting and strategy support tailored to your goals, challenges, and growth stage.",
  },
  {
    icon: GraduationCap,
    title: "Train",
    description:
      "Workshops, mentoring, and business education designed to build skills and strengthen your leadership.",
  },
];

const whyShefa = [
  {
    icon: Shield,
    title: "Trusted Network",
    description:
      "We connect you with vetted professionals and business leaders who share our commitment to integrity.",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description:
      "Shefa is built on relationships, referrals, and a shared belief that businesses grow better together.",
  },
  {
    icon: TrendingUp,
    title: "Growth Oriented",
    description:
      "Every resource, introduction, and conversation is designed to help you build a stronger business.",
  },
  {
    icon: Handshake,
    title: "Practical Support",
    description:
      "Beyond inspiration, we deliver actionable guidance you can apply to real business decisions.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-gold-500)_0%,_transparent_50%)] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              Shefa Connect
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Connecting Business Leaders.{" "}
              <span className="text-gold-400">Empowering Growth.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-100 sm:text-xl">
              Shefa helps business owners find trusted connections, practical
              guidance, training, and resources to grow with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/business-connect" size="lg">
                Join the Network
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="what-we-do-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Do"
            subtitle="Shefa serves as a connector between business owners, leaders, service providers, and trusted professionals."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {whatWeDo.map((item) => (
              <Card key={item.title}>
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-100 text-gold-600"
                  aria-hidden
                >
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-navy-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-gray-soft py-20 sm:py-24"
        aria-labelledby="why-shefa-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Shefa"
            subtitle="We believe business growth happens through trust, community, and the right connections at the right time."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyShefa.map((item) => (
              <Card key={item.title} hover={false}>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-100 text-navy-700"
                  aria-hidden
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24" aria-labelledby="advisor-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-muted bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="bg-navy-900 p-8 sm:p-12 lg:p-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold-400">
                  Business Growth Advisor
                </p>
                <h2
                  id="advisor-heading"
                  className="mt-4 text-3xl font-bold text-white sm:text-4xl"
                >
                  Get the Right Introduction at the Right Time
                </h2>
                <p className="mt-4 leading-relaxed text-navy-200">
                  Whether you need a CPA, attorney, marketing strategist, or
                  government contracting advisor, Shefa&apos;s Business Connect
                  program matches you with trusted professionals who understand
                  your industry and goals.
                </p>
                <div className="mt-8">
                  <Button href="/business-connect" variant="primary">
                    Explore Business Connect
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-soft p-8 sm:p-12 lg:p-16">
                <ul className="space-y-4" aria-label="Connection categories">
                  {[
                    "Financial Advisors & CPAs",
                    "Attorneys & Legal Counsel",
                    "Marketing & Growth Experts",
                    "IT, AI & Technology Consultants",
                    "Government Contracting Advisors",
                  ].map((category) => (
                    <li
                      key={category}
                      className="flex items-center gap-3 text-navy-700"
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full bg-gold-500"
                        aria-hidden
                      />
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-navy-900 py-20 text-white sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="cta-heading" className="text-3xl font-bold sm:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-200">
            Join a community of business owners and leaders who are building
            stronger companies through trusted connections and practical support.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/business-connect" size="lg">
              Join the Network
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
