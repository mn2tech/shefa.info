"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    label: "Solutions",
    children: [
      { href: "/services", label: "Business Consulting" },
      { href: "/business-connect", label: "Strategic Connections" },
      { href: "/training-academy", label: "Training & Workshops" },
    ],
  },
  { href: "/#shefa-method", label: "Our Process" },
  { href: "/who-we-help", label: "Industries" },
  { href: "/events", label: "Results" },
  { href: "/resources", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors ${
        isHome
          ? "border-b border-white/10 bg-navy-950/80 backdrop-blur-md"
          : "border-b border-navy-800 bg-navy-950 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded px-3 py-2 text-xs font-medium uppercase tracking-wide text-navy-100 transition-colors hover:text-gold-400"
                  aria-expanded={solutionsOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                </button>
                {solutionsOpen && (
                  <ul
                    className="absolute left-0 top-full min-w-[220px] rounded-md border border-navy-800 bg-navy-950 py-2 shadow-xl"
                    role="menu"
                  >
                    {link.children.map((child) => (
                      <li key={child.href} role="none">
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-navy-100 transition-colors hover:bg-navy-900 hover:text-gold-400"
                          role="menuitem"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="rounded px-3 py-2 text-xs font-medium uppercase tracking-wide text-navy-100 transition-colors hover:text-gold-400"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact" size="sm" showArrow>
            Schedule a Conversation
          </Button>
        </div>

        <button
          type="button"
          className="rounded p-2 text-navy-100 hover:bg-navy-900 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-navy-800 bg-navy-950 px-4 py-4 xl:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gold-500">
                    {link.label}
                  </p>
                  <ul className="ml-2 border-l border-navy-800 pl-2">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded px-3 py-2 text-sm text-navy-100 hover:text-gold-400"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href!}
                    className="block rounded px-3 py-2 text-sm font-medium text-navy-100 hover:text-gold-400"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li className="pt-3">
              <Button
                href="/contact"
                size="sm"
                className="w-full"
                showArrow
              >
                Schedule a Conversation
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
