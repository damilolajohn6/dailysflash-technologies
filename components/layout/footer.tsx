"use client";

import Link from "next/link";
import { Zap, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG, SERVICES, PRODUCTS } from "@/lib/constants";

const footerLinks = {
  services: SERVICES.slice(0, 4).map((s) => ({
    label: s.title.split("&")[0].trim(),
    href: `/services/${s.slug}`,
  })),
  products: PRODUCTS.map((p) => ({
    label: p.name,
    href: `/products/${p.slug}`,
  })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: SITE_CONFIG.socials.twitter, icon: "𝕏" },
  { name: "LinkedIn", href: SITE_CONFIG.socials.linkedin, icon: "in" },
  { name: "GitHub", href: SITE_CONFIG.socials.github, icon: "GH" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-card/50">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-xl"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span>
                  <span className="text-foreground">Dailys</span>
                  <span className="text-primary">Flash</span>
                </span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-xs">
                {SITE_CONFIG.description.slice(0, 120)}...
              </p>

              {/* Contact info */}
              <div className="mt-6 space-y-3">
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_CONFIG.email}
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                  >
                    View all
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Products
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
                Newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to get updates on our latest offerings.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-10"
                />
                <Button type="submit" className="w-full" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {/* Legal links */}
            <div className="flex items-center gap-4">
              {footerLinks.legal.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-accent transition-colors text-xs font-medium"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
