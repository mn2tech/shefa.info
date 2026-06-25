import type { Metadata } from "next";
import {
  Crown,
  TrendingUp,
  Megaphone,
  Bot,
  Landmark,
  Wallet,
  Users,
  Headphones,
  Video,
  Calendar,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import type { TrainingTopic, WorkshopPlaceholder } from "@/lib/types";

export const metadata: Metadata = {
  title: "Training Academy",
  description:
    "Build business skills with Shefa Training Academy — workshops and webinars on leadership, sales, marketing, AI, government contracting, finance, and more.",
};

const topics: TrainingTopic[] = [
  {
    title: "Leadership",
    description: "Develop the skills to lead teams, make decisions, and inspire growth.",
    icon: "crown",
  },
  {
    title: "Sales",
    description: "Master sales strategies, pipelines, and client relationship building.",
    icon: "trending",
  },
  {
    title: "Marketing",
    description: "Learn branding, digital marketing, and customer engagement tactics.",
    icon: "megaphone",
  },
  {
    title: "AI for Small Business",
    description: "Discover practical AI tools and workflows to improve productivity.",
    icon: "bot",
  },
  {
    title: "Government Contracting",
    description: "Navigate certifications, bidding, and compliance for government work.",
    icon: "landmark",
  },
  {
    title: "Finance",
    description: "Understand cash flow, budgeting, forecasting, and financial health.",
    icon: "wallet",
  },
  {
    title: "Hiring and Team Building",
    description: "Attract talent, build culture, and develop high-performing teams.",
    icon: "users",
  },
  {
    title: "Customer Service",
    description: "Deliver exceptional service that builds loyalty and referrals.",
    icon: "headphones",
  },
];

const iconMap = {
  crown: Crown,
  trending: TrendingUp,
  megaphone: Megaphone,
  bot: Bot,
  landmark: Landmark,
  wallet: Wallet,
  users: Users,
  headphones: Headphones,
};

const workshops: WorkshopPlaceholder[] = [
  {
    title: "Leading with Confidence",
    type: "workshop",
    description:
      "An interactive workshop on decision-making, team communication, and leadership presence.",
    date: "Coming Soon",
  },
  {
    title: "Sales Fundamentals for Small Business",
    type: "workshop",
    description:
      "Build a repeatable sales process and learn techniques for closing with integrity.",
    date: "Coming Soon",
  },
  {
    title: "AI Tools Every Business Owner Should Know",
    type: "webinar",
    description:
      "A live webinar exploring affordable AI tools for marketing, operations, and customer service.",
    date: "Coming Soon",
  },
  {
    title: "Getting Started with Government Contracts",
    type: "webinar",
    description:
      "Learn the basics of SAM registration, certifications, and finding contract opportunities.",
    date: "Coming Soon",
  },
  {
    title: "Cash Flow Management Essentials",
    type: "workshop",
    description:
      "Practical strategies for monitoring cash flow, managing expenses, and planning ahead.",
    date: "Coming Soon",
  },
  {
    title: "Building Your First Marketing Plan",
    type: "webinar",
    description:
      "Step-by-step guidance for creating a marketing plan that fits your budget and goals.",
    date: "Coming Soon",
  },
];

export default function TrainingAcademyPage() {
  return (
    <>
      <section className="bg-gray-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Training Academy
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              Learn. Lead. Grow.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              The Shefa Training Academy offers workshops and webinars designed
              to equip business owners with practical skills for today&apos;s
              challenges. Learn from experienced leaders in a supportive,
              community-driven environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="topics-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Training Topics"
            subtitle="Explore our curriculum areas designed for business owners at every stage."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => {
              const Icon = iconMap[topic.icon as keyof typeof iconMap];
              return (
                <Card key={topic.title}>
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-100 text-navy-700"
                    aria-hidden
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-navy-900">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-600">{topic.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-gray-soft py-16 sm:py-20"
        aria-labelledby="workshops-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Workshops & Webinars"
            subtitle="New sessions are added regularly. Check back for dates and registration details."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {workshops.map((workshop) => (
              <Card key={workshop.title}>
                <div className="flex items-center gap-2">
                  {workshop.type === "webinar" ? (
                    <Video className="h-4 w-4 text-gold-500" aria-hidden />
                  ) : (
                    <Calendar className="h-4 w-4 text-gold-500" aria-hidden />
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {workshop.type}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-navy-900">
                  {workshop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {workshop.description}
                </p>
                <p className="mt-4 text-sm font-medium text-navy-500">
                  {workshop.date}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900">
            Want to Be Notified About New Sessions?
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            Contact us to join our training updates list and be the first to
            know about upcoming workshops and webinars.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Get Training Updates
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
