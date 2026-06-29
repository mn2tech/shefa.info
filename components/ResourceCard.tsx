import { Download, FileText } from "lucide-react";
import Card from "@/components/ui/Card";
import type { ResourceItem } from "@/lib/types";

interface ResourceCardProps {
  resource: ResourceItem;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card>
      <div className="flex items-start gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
          aria-hidden
        >
          <FileText className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
            {resource.type}
          </span>
          <h3 className="mt-1 font-serif text-lg font-semibold text-navy-900">
            {resource.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-600">
            {resource.description}
          </p>
        </div>
      </div>
      <button
        type="button"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-navy-200 bg-navy-50 px-4 py-2.5 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-100"
        aria-label={`Download ${resource.title}`}
      >
        <Download className="h-4 w-4" aria-hidden />
        Download Resource
      </button>
    </Card>
  );
}
