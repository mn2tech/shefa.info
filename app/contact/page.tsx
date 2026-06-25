import type { Metadata } from "next";
import { Mail, Globe, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shefa Connect. Reach us at info@shefa.info or send a message through our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gray-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-600">
              Contact
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-navy-600">
              Whether you have a question, want to schedule a consultation, or
              are ready to join our network, we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-navy-900">
                Get in Touch
              </h2>
              <p className="mt-4 leading-relaxed text-navy-600">
                Reach out directly or fill out the form and our team will respond
                as soon as possible.
              </p>

              <ul className="mt-8 space-y-6">
                <li>
                  <a
                    href="mailto:info@shefa.info"
                    className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-gray-soft"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
                      aria-hidden
                    >
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500">Email</p>
                      <p className="font-semibold text-navy-900">
                        info@shefa.info
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://shefa.info"
                    className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-gray-soft"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600"
                      aria-hidden
                    >
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500">
                        Website
                      </p>
                      <p className="font-semibold text-navy-900">shefa.info</p>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4 rounded-lg p-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-100 text-navy-700"
                    aria-hidden
                  >
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy-500">Phone</p>
                    <p className="font-semibold text-navy-900">
                      Available upon request
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-muted bg-white p-6 shadow-sm sm:p-8">
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
