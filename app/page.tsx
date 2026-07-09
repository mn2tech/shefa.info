import type { Metadata } from "next";
import {
  BarChart3,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronRight,
  ClipboardList,
  Download,
  Factory,
  GraduationCap,
  Handshake,
  Heart,
  Landmark,
  Laptop,
  PenLine,
  Rocket,
  Search,
  Shield,
  ShoppingBag,
  Stethoscope,
  Target,
  Truck,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import HeroVideo from "@/components/home/HeroVideo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strategic Business Growth Advisory",
  description:
    "Shefa partners with business owners and executive teams in the Washington, DC Metro Area to solve growth challenges through strategy, relationships, and execution.",
  openGraph: {
    title: "Shefa | Strategic Business Growth Advisory | Washington DC Metro",
    description:
      "Executive advisory, strategic connections, and business growth support for leaders ready to build their next stage of success.",
    url: siteConfig.url,
  },
};

const stats = [
  { icon: Handshake, value: "200+", label: "Trusted Partners" },
  { icon: BarChart3, value: "100+", label: "Businesses Served" },
  { icon: Target, value: "$250M+", label: "Opportunities Facilitated" },
  { icon: Users, value: "20+", label: "Industries Supported" },
];

const methodSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We learn your business, goals, vision, and challenges.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Diagnose",
    description: "We identify growth opportunities and barriers.",
  },
  {
    number: "03",
    icon: PenLine,
    title: "Design",
    description: "We build a customized strategic growth blueprint.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    description: "We execute alongside you with ongoing advisory support.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Strategic Business Growth",
    description:
      "Executive advisory services designed to help organizations grow with clarity and purpose.",
  },
  {
    icon: Users,
    title: "Curated Strategic Connections",
    description:
      "Meaningful introductions to trusted professionals, strategic partners, and opportunities.",
  },
  {
    icon: BarChart3,
    title: "Business Development Execution",
    description:
      "Helping organizations move from strategy to measurable business results.",
  },
  {
    icon: Shield,
    title: "Trusted Growth Ecosystem",
    description:
      "Access to a carefully curated network of experienced professionals and experts.",
  },
];

const clientPerspectives = [
  {
    quote:
      "Shefa helped us clarify our growth priorities and connected us with advisors who understood our industry. The introductions alone saved months of searching.",
    role: "Healthcare Practice Owner",
    region: "Maryland",
  },
  {
    quote:
      "The strategic blueprint gave our leadership team a shared plan we could actually execute. It changed how we approach partnerships and expansion.",
    role: "Construction Company Leader",
    region: "Virginia",
  },
  {
    quote:
      "What stood out was the quality of the network. Every introduction felt intentional, not transactional — exactly what we needed at our stage of growth.",
    role: "Professional Services Firm",
    region: "DC Metro",
  },
];

const foundingBenefits = [
  "Executive Business Growth Assessment",
  "Customized Growth Blueprint™",
  "Quarterly Executive Strategy Sessions",
  "Preferred Client Pricing",
  "Priority Access to Strategic Partners",
  "White-Glove Advisory Experience",
];

const industries = [
  { icon: Building2, label: "Construction & Real Estate" },
  { icon: Stethoscope, label: "Healthcare Practices" },
  { icon: Laptop, label: "Technology Companies" },
  { icon: Factory, label: "Manufacturing & Distribution" },
  { icon: Briefcase, label: "Professional Services" },
  { icon: Landmark, label: "Financial Services & Fintech" },
  { icon: Heart, label: "Nonprofits & Faith-Based Orgs." },
  { icon: ShoppingBag, label: "Retail & Consumer Brands" },
  { icon: Shield, label: "Government Contractors" },
  { icon: UtensilsCrossed, label: "Hospitality & Leisure" },
  { icon: Truck, label: "Logistics & Supply Chain" },
  { icon: GraduationCap, label: "Education & Training" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-[var(--header-height)] flex min-h-[calc(100svh+2rem)] flex-col justify-center bg-navy-950 pt-[var(--header-height)] text-white"
        aria-labelledby="hero-heading"
      >
        <HeroVideo />
        <div className="hero-overlay hero-overlay-home absolute inset-0" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <h1
              id="hero-heading"
              className="hero-animate hero-animate-delay-2 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Helping Businesses Grow Through{" "}
              <span className="text-gold-400">
                Strategy, Relationships &amp; Execution.
              </span>
            </h1>
            <p className="hero-animate hero-animate-delay-3 mt-6 text-lg leading-relaxed text-navy-100 sm:text-xl">
              Shefa partners with business owners and executive teams to solve
              growth challenges, develop strategic opportunities, and connect
              them with the right people and resources to accelerate long-term
              success.
            </p>
            <div className="hero-animate hero-animate-delay-4 mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" size="lg" showArrow>
                Schedule a Strategy Session
              </Button>
              <Button href="/resources" variant="ghost" size="lg">
                <Download className="h-4 w-4" aria-hidden />
                Download Capability Statement
              </Button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-animate hero-animate-delay-5 relative border-t border-white/10 bg-navy-950/90 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4 lg:px-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-500/30 text-gold-400"
                  aria-hidden
                >
                  <stat.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-gold-400">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-navy-200">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shefa Method */}
      <section
        id="shefa-method"
        className="py-20 sm:py-24"
        aria-labelledby="method-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              The Shefa Method™
            </p>
            <h2
              id="method-heading"
              className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl"
            >
              A Proven Framework for Sustainable Business Growth
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((step, index) => (
              <div key={step.title} className="relative text-center">
                {index < methodSteps.length - 1 && (
                  <ChevronRight
                    className="absolute -right-4 top-8 hidden h-6 w-6 text-gold-300 lg:block"
                    aria-hidden
                  />
                )}
                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-400 text-gold-500"
                  aria-hidden
                >
                  <step.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gold-600">
                  {step.number} {step.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section
        className="bg-gray-soft py-20 sm:py-24"
        aria-labelledby="pillars-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="pillars-heading"
            className="text-center font-serif text-3xl font-bold text-navy-900 sm:text-4xl"
          >
            Our Four Pillars
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <Card key={pillar.title} hover={false} className="text-center">
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center text-gold-500"
                  aria-hidden
                >
                  <pillar.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-600">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Perspectives */}
      <section
        className="bg-gray-soft py-20 sm:py-24"
        aria-labelledby="perspectives-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">
              Client Perspectives
            </p>
            <h2
              id="perspectives-heading"
              className="mt-3 font-serif text-3xl font-bold text-navy-900 sm:text-4xl"
            >
              Trusted by Business Leaders Across the Region
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-600">
              Anonymized perspectives from clients we&apos;ve supported. Full case
              studies are available upon request.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {clientPerspectives.map((item) => (
              <Card key={item.role} hover={false}>
                <p className="font-serif text-lg leading-relaxed text-navy-800">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-gray-muted pt-4">
                  <p className="text-sm font-semibold text-navy-900">{item.role}</p>
                  <p className="text-sm text-navy-500">{item.region}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/events" variant="outline">
              Explore Results &amp; Events
            </Button>
          </div>
        </div>
      </section>

      {/* Founding Client Program */}
      <section
        id="founding-client"
        className="bg-navy-950 py-20 text-white sm:py-24"
        aria-labelledby="founding-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
                Founding Client Program
              </p>
              <h2
                id="founding-heading"
                className="mt-3 font-serif text-3xl font-bold sm:text-4xl"
              >
                By Invitation Only
              </h2>
              <p className="mt-4 leading-relaxed text-navy-200">
                Become one of only 10 Founding Clients and help shape the future
                of Shefa. Receive exclusive benefits designed to accelerate your
                growth journey.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg" showArrow>
                  Apply to Become a Founding Client
                </Button>
              </div>
            </div>

            <div className="rounded-lg border-2 border-gold-500/60 bg-navy-900/50 p-8">
              <h3 className="text-center font-serif text-xl font-semibold text-gold-400">
                Founding Client Benefits
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {foundingBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-gold-400"
                      aria-hidden
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center text-xs uppercase tracking-widest text-gold-500/80">
                Applications close once all 10 positions are filled
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 sm:py-24" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="industries-heading"
            className="text-center font-serif text-3xl font-bold text-navy-900 sm:text-4xl"
          >
            Industries We Serve
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {industries.map((industry) => (
              <div
                key={industry.label}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-300 text-gold-500"
                  aria-hidden
                >
                  <industry.icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-xs font-medium leading-snug text-navy-700">
                  {industry.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-xl text-center lg:text-left">
              <h2
                id="cta-heading"
                className="font-serif text-3xl font-bold sm:text-4xl"
              >
                Ready to Build Your Next Stage of Growth?
              </h2>
              <p className="mt-4 text-navy-200">
                Let&apos;s create a strategy that unlocks new opportunities,
                strengthens your business, and drives results.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 sm:flex-row lg:flex-col lg:items-end">
              <div className="space-y-3 text-center text-sm text-navy-200 lg:text-right">
                <p className="flex items-center justify-center gap-2 lg:justify-end">
                  <Calendar className="h-4 w-4 text-gold-400" aria-hidden />
                  Schedule your Executive Strategy Session today
                </p>
                <p className="flex items-center justify-center gap-2 lg:justify-end">
                  <Shield className="h-4 w-4 text-gold-400" aria-hidden />
                  Confidential. Strategic. Results-Focused.
                </p>
              </div>
              <Button href="/contact" size="lg" showArrow>
                Schedule a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
