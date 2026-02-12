import { Metadata } from "next";
import {
  Hero,
  ServicesGrid,
  AboutPreview,
  Process,
  ProductsPreview,
  Testimonials,
  CTA,
} from "@/components/sections";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
};

// JSON-LD structured data
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phone,
    contactType: "customer service",
    email: SITE_CONFIG.email,
  },
  sameAs: [
    SITE_CONFIG.socials.twitter,
    SITE_CONFIG.socials.linkedin,
    SITE_CONFIG.socials.github,
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <Process />
      <ProductsPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
