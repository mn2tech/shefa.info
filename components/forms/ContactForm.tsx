"use client";

import { useState, FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import type { ContactFormData } from "@/lib/types";
import { submitContactMessage } from "@/lib/supabase-placeholder";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await submitContactMessage(formData as unknown as Record<string, string>);

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
          Message Sent Successfully
        </h3>
        <p className="mt-2 text-navy-600">
          Thank you for reaching out. We will get back to you shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="Contact form"
      noValidate
    >
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-navy-800">
          Name <span className="text-gold-600">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1.5 w-full rounded-lg border border-gray-muted bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
          placeholder="Your full name"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-navy-800">
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-gray-muted bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-navy-800">
            Phone
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1.5 w-full rounded-lg border border-gray-muted bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-navy-800">
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="mt-1.5 w-full resize-y rounded-lg border border-gray-muted bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20"
          placeholder="How can we help you?"
        />
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
