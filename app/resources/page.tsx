import type { Metadata } from "next";
import PageCTA from "@/components/ui/PageCTA";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import ResourceCard from "@/components/ResourceCard";
import type { ResourceItem } from "@/lib/types";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Download free business resources from Shefa — templates, checklists, and guides for planning, marketing, AI, and government contracting.",
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
      <PageHero
        eyebrow="Insights & Resources"
        title="Tools to Help You Grow"
        description="Access practical templates, checklists, and guides designed for business owners. These resources are free for our community and updated regularly."
      />

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
            Downloads are coming soon. Resources will be available as PDF files in a
            future update.
          </p>
        </div>
      </section>

      <PageCTA
        title="Need Personalized Guidance?"
        description="Our team can help you apply these resources to your specific business situation through consulting and coaching."
        buttonText="Schedule a Strategy Session"
      />
    </>
  );
}
