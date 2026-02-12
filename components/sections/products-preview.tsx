"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/blocks/section-header";
import { PRODUCTS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

const productImages: Record<string, string> = {
  naijaride: IMAGES.products.naijaride,
  "lazarus-system": IMAGES.products.lazarus,
};

export function ProductsPreview() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="Our Products"
          title="Products we've built and launched"
          description="Beyond client work, we've developed our own products that serve thousands of users daily."
          className="mb-16"
        />

        <div className="space-y-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/products/${product.slug}`}>
                <div
                  className={cn(
                    "group relative bg-card border rounded-3xl overflow-hidden card-hover",
                    index % 2 === 1 && "lg:flex-row-reverse",
                  )}
                >
                  <div
                    className={cn(
                      "grid lg:grid-cols-2 gap-0",
                      index % 2 === 1 && "lg:[direction:rtl]",
                    )}
                  >
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
                      <Image
                        src={productImages[product.slug]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/80" />
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        "p-8 lg:p-12 flex flex-col justify-center",
                        index % 2 === 1 && "lg:[direction:ltr]",
                      )}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {product.status}
                        </Badge>
                        {product.website && (
                          <a
                            href={product.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-primary text-sm font-medium mb-4">
                        {product.tagline}
                      </p>

                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {product.description}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-2 gap-2 mb-6">
                        {product.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature.title}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature.title}
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {product.technologies.map((tech) => (
                          <Badge
                            key={tech.name}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech.name}
                          </Badge>
                        ))}
                      </div>

                      {/* Arrow indicator */}
                      <div className="mt-6 flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-2">
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
