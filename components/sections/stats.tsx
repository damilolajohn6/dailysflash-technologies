"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/blocks/animated-counter";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with subtle effect */}
          <div className="absolute inset-0 bg-primary/5 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-grid opacity-[0.03]" />

          <div className="relative px-6 py-12 md:px-12 md:py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
