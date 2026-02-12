import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  FolderKanban,
  UserCheck,
  PiggyBank,
  Package,
  BarChart3,
  CheckCircle2,
  Check,
  Quote,
  ChevronRight,
  Monitor,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

// Get Lazarus data
const product = PRODUCTS.find((p) => p.slug === "lazarus-system")!;

// Icon mapping
const iconMap: Record<string, any> = {
  Users,
  FolderKanban,
  UserCheck,
  PiggyBank,
  Package,
  BarChart3,
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
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "299",
    highPrice: "799",
    priceCurrency: "USD",
  },
};

export default function LazarusSystemPage() {
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
                  <Badge variant="outline">Enterprise Solution</Badge>
                </div>

                <h1 className="heading-1 mb-4">{product.name}</h1>
                <p className="text-2xl text-primary font-medium mb-6">
                  {product.tagline}
                </p>
                <p className="body-large mb-8">{product.description}</p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {product.website && (
                    <Button size="lg" variant="outline" asChild>
                      <a
                        href={product.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
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

              {/* Dashboard preview */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
                  <Image
                    src={product.gallery[0].image}
                    alt="Lazarus Dashboard"
                    width={700}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-card border rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <BarChart3 className="w-5 h-5" style={{ color: product.color }} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Real-time Analytics</div>
                      <div className="text-xs text-muted-foreground">
                        Updated every second
                      </div>
                    </div>
                  </div>
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
              title="Everything your business needs"
              description="Lazarus System brings together all critical business functions into one unified platform."
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, index) => {
                const Icon = iconMap[feature.icon] || Users;
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

        {/* Modules Section */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Modules"
              title="Modular by design"
              description="Start with what you need and add modules as you grow. Every module integrates seamlessly."
              className="mb-16"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.modules.map((module, index) => (
                <Card
                  key={index}
                  className={cn(
                    "relative overflow-hidden",
                    module.included && "border-primary"
                  )}
                >
                  {module.included && (
                    <div className="absolute top-0 right-0">
                      <Badge
                        className="rounded-none rounded-bl-lg"
                        style={{ backgroundColor: product.color }}
                      >
                        Included
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{module.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {module.description}
                    </p>
                    <ul className="space-y-2">
                      {module.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check
                            className="w-4 h-4 shrink-0"
                            style={{ color: product.color }}
                          />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Pricing"
              title="Simple, transparent pricing"
              description="Choose the plan that fits your business. All plans include core features."
              className="mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {product.pricing.map((plan, index) => (
                <Card
                  key={index}
                  className={cn(
                    "relative overflow-hidden",
                    plan.highlighted && "border-primary shadow-xl scale-105"
                  )}
                >
                  {plan.highlighted && (
                    <div
                      className="absolute top-0 left-0 right-0 py-2 text-center text-sm font-medium"
                      style={{ backgroundColor: product.color, color: "white" }}
                    >
                      Most Popular
                    </div>
                  )}
                  <CardContent className={cn("p-8", plan.highlighted && "pt-14")}>
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      {plan.price === "Custom" ? (
                        <div className="text-4xl font-bold">Custom</div>
                      ) : (
                        <>
                          <span className="text-4xl font-bold">
                            ${plan.price}
                          </span>
                          <span className="text-muted-foreground">
                            /{plan.period}
                          </span>
                        </>
                      )}
                    </div>
                    <Button
                      className="w-full mb-6"
                      variant={plan.highlighted ? "default" : "outline"}
                      asChild
                    >
                      <Link href="/contact">
                        {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                      </Link>
                    </Button>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: product.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Testimonials"
              title="Trusted by leading businesses"
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
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Technology"
              title="Built for enterprise"
              description="Lazarus System is built on a modern, secure, and scalable technology stack."
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
        <section className="section-padding">
          <div className="section-container">
            <SectionHeader
              label="Roadmap"
              title="What's coming next"
              description="We're constantly improving Lazarus System. Here's what we're working on."
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
        <section className="section-padding bg-muted/30">
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

        {/* CTA Section */}
        <section className="section-padding">
          <div className="section-container text-center">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6"
              style={{ backgroundColor: `${product.color}20` }}
            >
              <Sparkles className="w-10 h-10" style={{ color: product.color }} />
            </div>
            <h2 className="heading-2 mb-4">
              Ready to transform your operations?
            </h2>
            <p className="body-large max-w-xl mx-auto mb-8">
              Schedule a personalized demo and see how Lazarus System can
              streamline your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
