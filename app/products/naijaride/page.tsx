import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  MapPin,
  CreditCard,
  Shield,
  WifiOff,
  Calculator,
  Star,
  CheckCircle2,
  Smartphone,
  Apple,
  Play,
  Quote,
  ChevronRight,
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
import { PRODUCTS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

// Get NaijaRide data
const product = PRODUCTS.find((p) => p.slug === "naijaride")!;

// Icon mapping
const iconMap: Record<string, any> = {
  MapPin,
  CreditCard,
  Shield,
  WifiOff,
  Calculator,
  Star,
};

export const metadata: Metadata = {
  title: `${product.name} - ${product.tagline}`,
  description: product.description,
  openGraph: {
    title: `${product.name} | ${SITE_CONFIG.name}`,
    description: product.description,
    url: `${SITE_CONFIG.url}/products/${product.slug}`,
    images: [{ url: product.heroImage, width: 1200, height: 630 }],
  },
};

// JSON-LD
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: product.name,
  description: product.description,
  url: `${SITE_CONFIG.url}/products/${product.slug}`,
  applicationCategory: "TravelApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "NGN",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50000",
  },
};

export default function NaijaRidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src={product.heroImage}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          </div>

          <div className="section-container relative">
            {/* Breadcrumb */}
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li>
                  <Link href="/products" className="hover:text-foreground transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <ChevronRight className="w-4 h-4" />
                </li>
                <li className="text-foreground font-medium">{product.name}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge
                    className="text-sm px-3 py-1"
                    style={{ backgroundColor: product.color }}
                  >
                    {product.status}
                  </Badge>
                  <Badge variant="outline">Since {product.launchDate}</Badge>
                </div>

                <h1 className="heading-1 mb-4">{product.name}</h1>
                <p className="text-2xl text-primary font-medium mb-6">
                  {product.tagline}
                </p>
                <p className="body-large mb-8">{product.description}</p>

                {/* App download buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  {product.appStore && (
                    <a
                      href={product.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <Apple className="w-6 h-6" />
                      <div className="text-left">
                        <div className="text-xs opacity-80">Download on the</div>
                        <div className="font-semibold">App Store</div>
                      </div>
                    </a>
                  )}
                  {product.playStore && (
                    <a
                      href={product.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
                    >
                      <Play className="w-6 h-6" />
                      <div className="text-left">
                        <div className="text-xs opacity-80">Get it on</div>
                        <div className="font-semibold">Google Play</div>
                      </div>
                    </a>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {product.stats.map((stat) => (
                    <div key={stat.label}>
                      <div
                        className="text-2xl md:text-3xl font-bold"
                        style={{ color: product.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* App mockups */}
              <div className="relative hidden lg:block">
                <div className="relative">
                  {/* Phone mockup */}
                  <div className="relative z-10 mx-auto w-[280px]">
                    <div className="bg-foreground rounded-[3rem] p-3 shadow-2xl">
                      <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                        <Image
                          src={product.platforms[0].image}
                          alt="NaijaRide App"
                          width={280}
                          height={600}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Background decoration */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
                    style={{ backgroundColor: product.color }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <SectionHeader
                label="Overview"
                title={product.overview.title}
                align="center"
                className="mb-12"
              />
              <div className="prose prose-lg dark:prose-invert max-w-none text-center">
                {product.overview.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Features"
              title="Everything you need for a great ride"
              description="NaijaRide is packed with features designed specifically for the Nigerian market."
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || MapPin;
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: product.color }}
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Platforms"
              title="Apps for everyone"
              description="Whether you're a rider, driver, or operator, we have an app for you."
              className="mb-16"
            />

            <div className="space-y-20">
              {product.platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 items-center",
                    index % 2 === 1 && "lg:[direction:rtl]"
                  )}
                >
                  {/* Image */}
                  <div className={cn(index % 2 === 1 && "lg:[direction:ltr]")}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={platform.image}
                        alt={platform.name}
                        width={600}
                        height={400}
                        className="object-cover w-full h-[400px]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={cn(index % 2 === 1 && "lg:[direction:ltr]")}>
                    <h3 className="heading-3 mb-4">{platform.name}</h3>
                    <p className="text-muted-foreground mb-8">
                      {platform.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {platform.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2
                            className="w-5 h-5 shrink-0"
                            style={{ color: product.color }}
                          />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Testimonials"
              title="What our users say"
              className="mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {product.testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-8">
                    <Quote
                      className="w-10 h-10 mb-6 opacity-10"
                      style={{ color: product.color }}
                    />
                    <blockquote className="text-lg mb-6">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Technology"
              title="Built with modern tech"
              description="NaijaRide is built on a robust, scalable technology stack."
              className="mb-16"
            />

            <div className="flex flex-wrap justify-center gap-4">
              {product.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="px-6 py-3 bg-card border rounded-full text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Roadmap"
              title="What's coming next"
              description="We're constantly improving NaijaRide. Here's what we're working on."
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.roadmap.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <Badge
                      variant={
                        item.status === "In Progress" ? "default" : "secondary"
                      }
                      className="mb-4"
                    >
                      {item.status}
                    </Badge>
                    <div className="text-sm text-muted-foreground mb-2">
                      {item.quarter}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="FAQs"
              title="Frequently asked questions"
              className="mb-16"
            />

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {product.faqs.map((faq, index) => (
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

        {/* Download CTA */}
        <section className="section-padding bg-muted/30">
          <div className="section-container text-center">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6"
              style={{ backgroundColor: `${product.color}20` }}
            >
              <Smartphone className="w-10 h-10" style={{ color: product.color }} />
            </div>
            <h2 className="heading-2 mb-4">
              Ready to ride with NaijaRide?
            </h2>
            <p className="body-large max-w-xl mx-auto mb-8">
              Download the app today and experience the future of ride-hailing
              in Nigeria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {product.appStore && (
                <a
                  href={product.appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Apple className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="font-semibold text-lg">App Store</div>
                  </div>
                </a>
              )}
              {product.playStore && (
                <a
                  href={product.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Play className="w-7 h-7" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="font-semibold text-lg">Google Play</div>
                  </div>
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
