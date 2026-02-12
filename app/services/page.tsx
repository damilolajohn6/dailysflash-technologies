import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  ArrowUpRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/blocks/section-header";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getServiceImage } from "@/lib/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive range of digital services including web development, mobile apps, UI/UX design, cloud solutions, AI integration, and more.",
  openGraph: {
    title: `Services | ${SITE_CONFIG.name}`,
    description:
      "Comprehensive digital services to transform your business. Web development, AI, cloud solutions, and more.",
  },
};

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 noise pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4" />

        <div className="section-container relative">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-6">
              Our Services
            </Badge>
            <h1 className="heading-1 mb-6">
              Digital solutions that{" "}
              <span className="text-primary">drive results</span>
            </h1>
            <p className="body-large mb-8">
              We combine strategy, design, and technology to create digital
              experiences that help businesses grow. From initial concept to
              ongoing optimization, we&apos;re your partner in digital success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding scroll-mt-20">
        <div className="section-container">
          <SectionHeader
            label="What we do"
            title="End-to-end digital services"
            description="From strategy to execution, we provide the expertise you need to succeed in the digital landscape."
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;
              const isReversed = index % 2 === 1;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div
                    className={cn(
                      "relative bg-card border rounded-3xl overflow-hidden card-hover",
                      "grid grid-cols-1 lg:grid-cols-2"
                    )}
                  >
                    {/* Image */}
                    <div
                      className={cn(
                        "relative h-64 lg:h-auto lg:min-h-[450px]",
                        isReversed && "lg:order-2"
                      )}
                    >
                      <Image
                        src={getServiceImage(service.slug)}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/30 lg:to-background/80" />

                      {/* Service number */}
                      <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-background/90 backdrop-blur flex items-center justify-center font-mono text-sm font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={cn("p-8 lg:p-12", isReversed && "lg:order-1")}>
                      {/* Icon and title */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {service.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {service.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Key features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {service.features.slice(0, 4).map((feature) => (
                          <div
                            key={feature.title}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm truncate">
                              {feature.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b">
                        {service.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-xl font-bold text-primary">
                              {stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.technologies.slice(0, 5).map((tech) => (
                          <Badge key={tech.name} variant="secondary">
                            {tech.name}
                          </Badge>
                        ))}
                        {service.technologies.length > 5 && (
                          <Badge variant="outline">
                            +{service.technologies.length - 5} more
                          </Badge>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-primary font-medium">
                        <span>Learn more about {service.title.split("&")[0]}</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wide uppercase mb-3 block">
                Why DailysFlash
              </span>
              <h2 className="heading-2 mb-6">
                Why companies choose to work with us
              </h2>
              <p className="body-large mb-8">
                We&apos;re not just another agency. We&apos;re strategic partners
                invested in your success. Here&apos;s what sets us apart.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Technical Excellence",
                    description:
                      "Our team stays at the forefront of technology, using the latest tools and best practices to build solutions that perform.",
                  },
                  {
                    title: "Business-First Approach",
                    description:
                      "We don't just write code—we solve business problems. Every decision is guided by your objectives and ROI.",
                  },
                  {
                    title: "Transparent Communication",
                    description:
                      "You'll always know where your project stands. We believe in open, honest communication throughout the engagement.",
                  },
                  {
                    title: "Long-term Partnership",
                    description:
                      "We're here for the long haul. Our relationships don't end at launch—we support your continued growth and success.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Team collaboration"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[400px] lg:h-[500px]"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -left-8 bg-card border rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">
                      Projects Delivered
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">
                      Client Retention
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                Ready to transform your digital presence?
              </h2>
              <p className="text-background/70 dark:text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
                Let&apos;s discuss your project and explore how we can help you
                achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 dark:bg-primary dark:text-primary-foreground"
                  asChild
                >
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-background/30 text-background hover:bg-background/10 dark:border-border dark:text-foreground"
                  asChild
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
