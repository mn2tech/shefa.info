import type { Metadata } from "next";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ResourceCard from "@/components/ResourceCard";
import type { ResourceItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Download free business resources from Shefa Connect — templates, checklists, and guides for planning, marketing, AI, and government contracting.",
};

const resources: ResourceItem[] = [
  {
    title: "Business Plan Template",
    description:
      "A structured template to help you outline your business model, market analysis, and financial projections.",
    type: "Template",
    icon: "file",
  },
  {
    title: "Cash Flow Checklist",
    description:
      "A practical checklist for monitoring income, expenses, and maintaining healthy cash flow.",
    type: "Checklist",
    icon: "file",
  },
  {
    title: "Marketing Checklist",
    description:
      "Essential marketing tasks and milestones for launching and growing your brand presence.",
    type: "Checklist",
    icon: "file",
  },
  {
    title: "AI Tools for Small Business",
    description:
      "A curated guide to affordable AI tools for content creation, automation, and customer support.",
    type: "Guide",
    icon: "file",
  },
  {
    title: "Federal Contracting Starter Guide",
    description:
      "An introductory guide to SAM registration, NAICS codes, and finding federal opportunities.",
    type: "Guide",
    icon: "file",
  },
  {
    title: "Networking Follow-Up Email Template",
    description:
      "Professional email templates for following up after networking events and introductions.",
    type: "Template",
    icon: "file",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gray-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Resources
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              Tools to Help You Grow
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              Access practical templates, checklists, and guides designed for
              business owners. These resources are free for our community and
              updated regularly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Free Downloads"
            subtitle="Download and use these resources to strengthen your business planning and operations."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-navy-500">
            Downloads are coming soon. Resources will be available as PDF files
            in a future update.
          </p>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Need Personalized Guidance?</h2>
          <p className="mt-4 text-lg text-navy-200">
            Our team can help you apply these resources to your specific business
            situation through consulting and coaching.
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
