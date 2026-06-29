import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

const footerColumns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/#shefa-method", label: "Our Process" },
      { href: "/#founding-client", label: "Founding Client Program" },
      { href: "/contact", label: "Careers" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { href: "/services", label: "Strategic Advisory" },
      { href: "/business-connect", label: "Business Development" },
      { href: "/business-connect", label: "Partnership Development" },
      { href: "/training-academy", label: "Executive Workshops" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/resources", label: "Insights" },
      { href: "/events", label: "Case Studies" },
      { href: "/resources", label: "Tools & Guides" },
      { href: "/contact", label: "FAQs" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Strategic connections and sustainable growth for business owners
              and executive teams ready to build their next stage of success.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-colors hover:bg-gold-500/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gold-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+12405550170"
                  className="flex items-start gap-2 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                  (240) 555-0170
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@shefa.info"
                  className="flex items-start gap-2 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                  info@shefa.info
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                Washington, DC Metro Area
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-800 pt-8 text-xs text-navy-400 sm:flex-row">
          <p>&copy; {currentYear} Shefa. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
