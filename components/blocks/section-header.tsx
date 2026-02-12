"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className="heading-2 text-balance">{title}</h2>
      {description && (
        <p className="mt-4 body-large text-balance">{description}</p>
      )}
    </motion.div>
  );
}
