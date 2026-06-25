import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import type { NavLink } from "@/lib/types";

const footerLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/business-connect", label: "Business Connect" },
  { href: "/training-academy", label: "Training Academy" },
  { href: "/resources", label: "Resources" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-muted bg-navy-950 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold text-white">Shefa Connect</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-200">
              Connecting Business Leaders. Empowering Growth. Shefa helps
              business owners find trusted connections, practical guidance,
              training, and resources to grow with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:info@shefa.info"
                  className="flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  info@shefa.info
                </a>
              </li>
              <li>
                <a
                  href="https://shefa.info"
                  className="flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-white"
                >
                  <Globe className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  shefa.info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-800 pt-8 text-center text-sm text-navy-300">
          <p>&copy; {currentYear} Shefa Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
