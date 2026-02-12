import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Monitor,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/blocks/section-header";
import { PRODUCTS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover our flagship products: NaijaRide - Nigeria's leading ride-hailing platform, and Lazarus System - enterprise resource management redefined.",
  openGraph: {
    title: `Products | ${SITE_CONFIG.name}`,
    description:
      "Discover our flagship products: NaijaRide and Lazarus System.",
  },
};

// JSON-LD
const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PRODUCTS.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.description,
      url: `${SITE_CONFIG.url}/products/${product.slug}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 noise pointer-events-none" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

          <div className="section-container relative text-center">
            <Badge variant="outline" className="mb-6">
              Our Products
            </Badge>
            <h1 className="heading-1 mb-6 max-w-4xl mx-auto">
              Products we&apos;ve built,{" "}
              <span className="text-primary">launched, and scaled</span>
            </h1>
            <p className="body-large max-w-2xl mx-auto mb-8">
              Beyond client work, we develop our own products that solve real
              problems and serve thousands of users daily. Here&apos;s what
              we&apos;ve built.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-20">
          <div className="section-container">
            <div className="space-y-32">
              {PRODUCTS.map((product, index) => (
                <div
                  key={product.id}
                  className={cn(
                    "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                    index % 2 === 1 && "lg:[direction:rtl]"
                  )}
                >
                  {/* Image Side */}
                  <div className={cn(index % 2 === 1 && "lg:[direction:ltr]")}>
                    <div className="relative">
                      {/* Main image */}
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/30">
                        <Image
                          src={product.heroImage}
                          alt={product.name}
                          width={700}
                          height={500}
                          className="object-cover w-full h-[400px] lg:h-[500px]"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Product badge */}
                        <div className="absolute top-6 left-6">
                          <Badge
                            className="text-sm px-3 py-1"
                            style={{ backgroundColor: product.color }}
                          >
                            {product.status}
                          </Badge>
                        </div>

                        {/* Bottom info */}
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-white text-2xl font-bold">
                                {product.name}
                              </h3>
                              <p className="text-white/80 text-sm">
                                {product.tagline}
                              </p>
                            </div>
                            {product.website && (
                              <a
                                href={product.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Floating stats card */}
                      <div
                        className={cn(
                          "absolute -bottom-8 bg-card border rounded-2xl p-6 shadow-xl",
                          index % 2 === 0 ? "-right-8" : "-left-8",
                          "hidden lg:block"
                        )}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          {product.stats.slice(0, 2).map((stat) => (
                            <div key={stat.label}>
                              <div
                                className="text-2xl font-bold"
                                style={{ color: product.color }}
                              >
                                {stat.value}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={cn(index % 2 === 1 && "lg:[direction:ltr]")}>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: product.color }}
                      />
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        Since {product.launchDate}
                      </span>
                    </div>

                    <h2 className="heading-2 mb-4">{product.name}</h2>

                    <p className="text-xl text-muted-foreground mb-6">
                      {product.tagline}
                    </p>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Key features */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {product.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature.title}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2
                            className="w-4 h-4 shrink-0"
                            style={{ color: product.color }}
                          />
                          <span className="text-sm">{feature.title}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mobile stats (visible on mobile) */}
                    <div className="grid grid-cols-2 gap-4 mb-8 lg:hidden">
                      {product.stats.slice(0, 2).map((stat) => (
                        <div key={stat.label} className="bg-muted/50 rounded-xl p-4">
                          <div
                            className="text-2xl font-bold"
                            style={{ color: product.color }}
                          >
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.technologies.slice(0, 6).map((tech) => (
                        <Badge key={tech.name} variant="secondary">
                          {tech.name}
                        </Badge>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" asChild>
                        <Link href={`/products/${product.slug}`}>
                          Learn More
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We Build Products Section */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <SectionHeader
              label="Our Philosophy"
              title="Why we build our own products"
              description="Building products isn't just about business—it's how we stay sharp, experiment with new technologies, and solve real problems."
              className="mb-16"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-World Testing",
                  description:
                    "Our products are live laboratories where we test new technologies, patterns, and approaches before recommending them to clients.",
                },
                {
                  title: "Deep Expertise",
                  description:
                    "Building products from scratch gives us insight into every aspect of the development lifecycle—knowledge we bring to every client project.",
                },
                {
                  title: "Solving Real Problems",
                  description:
                    "We build products that address genuine market needs, creating value for users while pushing our capabilities forward.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <span className="text-primary font-bold text-lg">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="section-container">
            <div className="relative bg-card border rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
                <h2 className="heading-3 mb-4">
                  Have a product idea?
                </h2>
                <p className="body-large max-w-xl mx-auto mb-8">
                  Whether you want to build something new or improve an existing
                  product, we&apos;d love to help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" asChild>
                    <Link href="/contact">
                      Let&apos;s Build Together
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/services">View Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
