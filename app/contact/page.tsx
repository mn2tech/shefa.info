import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shefa. Reach us at info@shefa.info or send a message through our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start a Conversation"
        description="Whether you have a question, want to schedule a strategy session, or are ready to join our network, we would love to hear from you."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-bold text-navy-900">
                Get in Touch
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                Reach out directly or fill out the form and our team will respond
                as soon as possible.
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href="mailto:info@shefa.info"
                    className="flex items-start gap-4 rounded-lg border border-gray-muted p-4 transition-colors hover:border-gold-300 hover:bg-gray-soft"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
                      aria-hidden
                    >
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500">Email</p>
                      <p className="font-semibold text-navy-900">info@shefa.info</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+12405550170"
                    className="flex items-start gap-4 rounded-lg border border-gray-muted p-4 transition-colors hover:border-gold-300 hover:bg-gray-soft"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
                      aria-hidden
                    >
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500">Phone</p>
                      <p className="font-semibold text-navy-900">(240) 555-0170</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 rounded-lg border border-gray-muted p-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-700"
                    aria-hidden
                  >
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-500">Location</p>
                    <p className="font-semibold text-navy-900">
                      Washington, DC Metro Area
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-lg border border-gray-muted bg-white p-6 shadow-sm sm:p-8">
                <SectionHeading
                  title="Send a Message"
                  subtitle="Fill out the form below and we will get back to you shortly."
                  align="left"
                  className="mb-8"
                />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
