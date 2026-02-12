"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/types";

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  TrendingUp,
  Cloud,
  Brain,
  ShoppingCart,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/services/${service.slug}`}>
        <Card
          className={cn(
            "group relative h-full overflow-hidden transition-all duration-300",
            "hover:shadow-lg hover:shadow-primary/5",
            "hover:border-primary/50 hover:-translate-y-1"
          )}
        >
          {/* Subtle glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-primary/5" />
          </div>

          <CardContent className="relative p-6 flex flex-col h-full">
            {/* Icon */}
            <div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                "bg-primary/10 text-primary",
                "group-hover:bg-primary group-hover:text-primary-foreground",
                "transition-all duration-300"
              )}
            >
              <Icon className="h-6 w-6" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 flex-grow">
              {service.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {service.technologies.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {service.technologies.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{service.technologies.length - 3}
                </Badge>
              )}
            </div>

            {/* Learn more link */}
            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
