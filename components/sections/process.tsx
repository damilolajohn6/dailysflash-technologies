"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/blocks/section-header";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, understanding your goals, challenges, and target audience to create a solid foundation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Based on our findings, we develop a comprehensive strategy that aligns with your objectives and sets clear milestones.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create beautiful, user-centered interfaces that bring your brand to life and engage your audience.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "We build scalable, performant solutions using cutting-edge technologies and industry best practices.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "After rigorous testing, we deploy your project and provide ongoing support to ensure continued success.",
  },
];

export function Process() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <SectionHeader
          label="Our Process"
          title="How we turn ideas into reality"
          description="A proven methodology that ensures every project is delivered on time, on budget, and beyond expectations."
          className="mb-16"
        />

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Step number */}
                <div
                  className={cn(
                    "absolute left-0 top-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg",
                    "bg-primary text-primary-foreground",
                    "hidden md:flex"
                  )}
                >
                  {step.number}
                </div>

                {/* Content card */}
                <div className="bg-card border rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    {/* Mobile number */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm md:hidden">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
