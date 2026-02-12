import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  Globe,
  Smartphone,
  Tablet,
  Radio,
  Zap,
  Search,
  Layout,
  Grid,
  Sparkles,
  MousePointer,
  Play,
  FileText,
  DollarSign,
  Share2,
  Mail,
  BarChart3,
  Box,
  ArrowRightLeft,
  Boxes,
  GitBranch,
  FileCode,
  Activity,
  MessageSquare,
  LineChart,
  Eye,
  Type,
  Workflow,
  ShoppingBag,
  Store,
  CreditCard,
  Package,
  Users,
  Cog,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "@/components/blocks/section-header";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getServiceImage } from "@/lib/images";
import { cn } from "@/lib/utils";

// Icon mapping - expanded
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  Globe,
  Smartphone,
  Tablet,
  Link: ArrowRightLeft,
  Radio,
  Zap,
  Search,
  Layout,
  Grid,
  Sparkles,
  MousePointer,
  Play,
  FileText,
  DollarSign,
  Share2,
  Mail,
  BarChart3,
  Box,
  ArrowRightLeft,
  Boxes,
  GitBranch,
  FileCode,
  Activity,
  MessageSquare,
  LineChart,
  Eye,
  Type,
  Workflow,
  ShoppingBag,
  Store,
  CreditCard,
  Package,
  Users,
  Cog,
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${SITE_CONFIG.name}`,
      description: service.description,
      url: `${SITE_CONFIG.url}/services/${service.slug}`,
      images: [{ url: getServiceImage(service.slug) }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] || Code2;
  const heroImage = getServiceImage(service.slug);

  // Get related services
  const relatedServices = SERVICES.filter((s) =>
    (service.relatedServices as readonly string[]).includes(s.slug),
  );

  // Get current service index for navigation
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? SERVICES[currentIndex - 1] : null;
  const nextService =
    currentIndex < SERVICES.length - 1 ? SERVICES[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
        </div>

        <div className="section-container relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/services"
              className="hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{service.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Icon className="w-8 h-8" />
              </div>

              <h1 className="heading-1 mb-6">{service.title}</h1>

              <p className="body-large mb-8">{service.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {service.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#case-studies">View Case Studies</a>
                </Button>
              </div>
            </div>

            {/* Feature highlight card */}
            <div className="relative">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-6">
                    What&apos;s included
                  </h3>
                  <div className="space-y-4">
                    {service.features.slice(0, 4).map((feature) => {
                      const FeatureIcon = iconMap[feature.icon] || CheckCircle2;
                      return (
                        <div key={feature.title} className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                            <FeatureIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium">{feature.title}</div>
                            <div className="text-sm text-muted-foreground line-clamp-1">
                              {feature.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Separator className="my-6" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Starting at
                      </div>
                      <div className="text-2xl font-bold">
                        {service.pricing.startingAt}
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
              title={service.overview.headline}
              align="left"
              className="mb-10"
            />

            <div className="space-y-6">
              {service.overview.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed"
                >
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
            label="Capabilities"
            title="What we deliver"
            description="Our comprehensive approach covers every aspect of your project needs."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => {
              const FeatureIcon = iconMap[feature.icon] || CheckCircle2;
              return (
                <Card key={feature.title} className="card-hover">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                      <FeatureIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader
            label="Our Process"
            title="How we work"
            description="A proven methodology that ensures every project is delivered on time and exceeds expectations."
            className="mb-16"
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-12">
              {service.process.map((phase, index) => (
                <div key={phase.phase} className="relative md:pl-24">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg hidden md:flex">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <Card>
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          {/* Mobile number */}
                          <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm md:hidden">
                            {String(index + 1).padStart(2, "0")}
                          </div>
                          <h3 className="text-xl font-semibold">
                            {phase.phase}
                          </h3>
                        </div>
                        <Badge variant="secondary" className="w-fit">
                          <Clock className="w-3 h-3 mr-1" />
                          {phase.duration}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {phase.description}
                      </p>

                      <div>
                        <div className="text-sm font-medium mb-3">
                          Key Deliverables
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable) => (
                            <Badge
                              key={deliverable}
                              variant="outline"
                              className="bg-background"
                            >
                              <Check className="w-3 h-3 mr-1" />
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <SectionHeader
            label="Tech Stack"
            title="Technologies we use"
            description="We use industry-leading tools and technologies to build robust, scalable solutions."
            className="mb-16"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {service.technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-card border rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
              >
                <div className="font-medium mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="section-padding scroll-mt-20">
        <div className="section-container">
          <SectionHeader
            label="Case Studies"
            title="Real results for real clients"
            description="See how we've helped businesses like yours achieve their goals."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {service.caseStudies.map((study, index) => (
              <Card key={study.title} className="overflow-hidden card-hover">
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary">{study.industry}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-1">
                    {study.client}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{study.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-medium mb-1">Challenge</div>
                      <p className="text-sm text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Solution</div>
                      <p className="text-sm text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <div className="text-lg font-bold text-primary">
                          {result.improvement}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {result.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader
                label="FAQ"
                title="Common questions"
                description="Everything you need to know about our services. Can't find what you're looking for? Contact us."
                align="left"
              />
              <Button className="mt-8" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              label="Investment"
              title="Pricing & Engagement"
              className="mb-12"
            />

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      Projects starting at
                    </div>
                    <div className="text-4xl font-bold">
                      {service.pricing.startingAt}
                    </div>
                  </div>
                  <Button size="lg" asChild>
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6">
                  {service.pricing.note}
                </p>

                <div>
                  <div className="text-sm font-medium mb-3">
                    Pricing factors include:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.pricing.factors.map((factor) => (
                      <li key={factor} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {factor}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <SectionHeader
            label="Related Services"
            title="You might also be interested in"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon] || Code2;
              return (
                <Link key={related.id} href={`/services/${related.slug}`}>
                  <Card className="h-full card-hover group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <RelatedIcon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="relative bg-foreground dark:bg-card rounded-[2.5rem] overflow-hidden">
            <div className="absolute inset-0 noise opacity-[0.03]" />
            <div className="relative px-8 py-20 md:px-16 md:py-24 text-center">
              <h2 className="heading-2 text-background dark:text-foreground mb-6 max-w-2xl mx-auto">
                Ready to get started with {service.title.toLowerCase()}?
              </h2>
              <p className="text-background/70 dark:text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Let&apos;s discuss your project and explore how we can help you
                achieve your goals.
              </p>
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 dark:bg-primary dark:text-primary-foreground"
                asChild
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-8 border-t">
        <div className="section-container">
          <div className="flex items-center justify-between">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{prevService.title}</span>
                <span className="sm:hidden">Previous</span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              All Services
            </Link>

            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="hidden sm:inline">{nextService.title}</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
