import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Globe,
  Building2,
  Headphones,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/blocks/section-header";
import { ContactForm } from "@/components/blocks/contact-form";
import { SITE_CONFIG, OFFICE_LOCATIONS, SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with DailysFlash Technologies. We'd love to hear about your project and discuss how we can help you achieve your goals.",
  openGraph: {
    title: `Contact Us | ${SITE_CONFIG.name}`,
    description:
      "Get in touch with DailysFlash Technologies. We'd love to hear about your project.",
  },
};

// Contact methods
const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    action: "Send Email",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm WAT",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    value: "Available 24/7",
    href: "#",
    action: "Start Chat",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a meeting with us",
    value: "30-min consultation",
    href: "#",
    action: "Book Meeting",
  },
];

// Social links
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: SITE_CONFIG.socials.linkedin },
  { name: "Twitter", icon: Twitter, href: SITE_CONFIG.socials.twitter },
  { name: "GitHub", icon: Github, href: SITE_CONFIG.socials.github },
  { name: "Instagram", icon: Instagram, href: SITE_CONFIG.socials.instagram },
];

// FAQs
const contactFaqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, we recommend calling our office directly or using our live chat feature.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer a free 30-minute consultation to discuss your project requirements, understand your goals, and explore how we can help. There's no obligation to proceed after the consultation.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "The more details you provide, the better we can assist you. Include information about your project goals, timeline, budget range, and any specific requirements. This helps us prepare a more tailored response.",
  },
  {
    question: "Can you work with clients in different time zones?",
    answer:
      "Absolutely! We have experience working with clients across the globe. We're flexible with meeting times and use asynchronous communication tools to ensure smooth collaboration regardless of time zone differences.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 4-8 weeks, while a complex application could take 3-6 months. We'll provide a detailed timeline estimate during our initial consultation.",
  },
];

// JSON-LD
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: OFFICE_LOCATIONS.map((office) => ({
      "@type": "PostalAddress",
      addressLocality: office.city,
      addressCountry: office.country,
      streetAddress: office.address,
    })),
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 noise pointer-events-none" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

          <div className="section-container relative">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-6">
                Contact Us
              </Badge>
              <h1 className="heading-1 mb-6">
                Let&apos;s start a{" "}
                <span className="text-primary">conversation</span>
              </h1>
              <p className="body-large">
                Have a project in mind? Want to learn more about our services?
                We&apos;d love to hear from you. Reach out and let&apos;s explore
                how we can work together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-16">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {method.description}
                    </p>
                    <p className="text-sm font-medium mb-4">{method.value}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      asChild
                    >
                      <a href={method.href}>{method.action}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Form - Takes 3 columns */}
              <div className="lg:col-span-3">
                <div className="bg-card border rounded-3xl p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="heading-3 mb-2">Send us a message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                {/* Quick Contact Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Headphones className="w-5 h-5 text-primary" />
                      Prefer to talk?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule a call with our team to discuss your project in
                      detail. We offer free 30-minute consultations.
                    </p>
                    <Button className="w-full" asChild>
                      <a href="#">
                        Schedule a Call
                        <Calendar className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Office Hours
                    </h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                      <Separator className="my-3" />
                      <p className="text-xs text-muted-foreground">
                        All times are in West Africa Time (WAT)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-primary" />
                      Connect With Us
                    </h3>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={social.name}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Resources */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Resources
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="/services"
                        className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                      >
                        <span>Our Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/products"
                        className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                      >
                        <span>Our Products</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/about"
                        className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                      >
                        <span>About Us</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Our Offices"
              title="Visit us in person"
              description="We have offices across Africa. Stop by for a coffee and a chat about your project."
              className="mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {OFFICE_LOCATIONS.map((office) => (
                <Card key={office.city} className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={office.image}
                      alt={`${office.city} office`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-primary">{office.type}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold">{office.city}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {office.country}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">
                          {office.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground shrink-0" />
                        <a
                          href={`tel:${office.phone}`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          office.address + ", " + office.city
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section (Optional - Placeholder) */}
        <section className="relative h-[400px] bg-muted/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Interactive map coming soon
              </p>
              <p className="text-sm text-muted-foreground/60">
                For now, use the "Get Directions" button on each office card
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="FAQs"
              title="Common questions"
              description="Find answers to frequently asked questions about getting in touch with us."
              className="mb-16"
            />

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {contactFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card border rounded-2xl px-6 data-[state=open]:border-primary/30"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-muted/30">
          <div className="section-container text-center">
            <h2 className="heading-3 mb-4">
              Not ready to reach out yet?
            </h2>
            <p className="body-large max-w-xl mx-auto mb-8">
              Explore our work and learn more about what we do. When you&apos;re
              ready, we&apos;ll be here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
