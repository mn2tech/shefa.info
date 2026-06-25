"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import type { ConnectRequestFormData } from "@/lib/types";
import { submitConnectRequest } from "@/lib/supabase-placeholder";

const connectionOptions = [
  "Financial Advisors",
  "Attorneys",
  "CPAs",
  "Banking",
  "Insurance",
  "Marketing",
  "IT and AI Consultants",
  "Commercial Real Estate",
  "Construction",
  "Business Coaches",
  "Recruiters",
  "Government Contracting Advisors",
  "Other",
];

const initialFormData: ConnectRequestFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  industry: "",
  location: "",
  connectionType: "",
  businessChallenge: "",
};

export default function ConnectRequestForm() {
  const [formData, setFormData] = useState<ConnectRequestFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await submitConnectRequest(formData as unknown as Record<string, string>);

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData(initialFormData);
  };

  if (isSuccess) {
    return (
      <div
        className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle
          className="mx-auto h-12 w-12 text-green-600"
          aria-hidden
        />
        <h3 className="mt-4 text-xl font-semibold text-navy-900">
          Request Submitted Successfully
        </h3>
        <p className="mt-2 text-navy-600">
          Thank you for your interest. Our team will review your request and
          connect you with trusted professionals who can help.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  const inputClassName =
    "mt-1.5 w-full rounded-lg border border-gray-muted bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="Business connection request form"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-navy-800">
            Full Name <span className="text-gold-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className={inputClassName}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-navy-800">
            Company Name <span className="text-gold-600">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            className={inputClassName}
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy-800">
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClassName}
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-navy-800">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClassName}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-navy-800">
            Industry
          </label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className={inputClassName}
            placeholder="e.g. Healthcare, Retail"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-navy-800">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={inputClassName}
            placeholder="City, State"
          />
        </div>
      </div>

      <div>
        <label htmlFor="connectionType" className="block text-sm font-medium text-navy-800">
          What kind of connection are you looking for?{" "}
          <span className="text-gold-600">*</span>
        </label>
        <select
          id="connectionType"
          name="connectionType"
          required
          value={formData.connectionType}
          onChange={handleChange}
          className={inputClassName}
        >
          <option value="">Select a category</option>
          {connectionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="businessChallenge" className="block text-sm font-medium text-navy-800">
          Business challenge or goal
        </label>
        <textarea
          id="businessChallenge"
          name="businessChallenge"
          rows={4}
          value={formData.businessChallenge}
          onChange={handleChange}
          className={`${inputClassName} resize-y`}
          placeholder="Tell us about your business needs and what you're hoping to achieve..."
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Connection Request"}
      </Button>
    </form>
  );
}
