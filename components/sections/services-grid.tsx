"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/blocks/section-header";
import { SERVICES } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

const serviceImages: Record<string, string> = {
  "web-mobile-development": IMAGES.services.webDev,
  "ui-ux-design": IMAGES.services.uiux,
  "digital-marketing": IMAGES.services.marketing,
  "cloud-devops": IMAGES.services.cloud,
  "ai-machine-learning": IMAGES.services.ai,
  "ecommerce-software": IMAGES.services.ecommerce,
};

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <SectionHeader
          label="What we do"
          title="Services that drive real business results"
          description="We combine strategy, design, and technology to create digital experiences that help businesses grow and succeed."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              image={serviceImages[service.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: (typeof SERVICES)[number];
  index: number;
  image: string;
}

function ServiceCard({ service, index, image }: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        ref={cardRef}
        href={`/services/${service.slug}`}
        className="group block relative h-[400px] rounded-2xl overflow-hidden bg-card border card-hover"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Service number */}
          <span className="text-primary/60 text-sm font-mono mb-2">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {service.shortDescription}
          </p>

          {/* Link indicator */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span>Explore service</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </Link>
    </motion.div>
  );
}
