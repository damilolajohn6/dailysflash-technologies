"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Clock, Award, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "We optimize every millisecond. Our solutions are built for speed, ensuring instant-feeling user experiences.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade security measures protect your data. We follow industry best practices and compliance standards.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description:
      "Work with a dedicated team of experts who understand your business and are invested in your success.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect deadlines. Our agile methodology ensures projects are delivered on time, every time.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description:
      "Rigorous testing and quality assurance processes guarantee bug-free, polished deliverables.",
  },
  {
    icon: Rocket,
    title: "Scalable Solutions",
    description:
      "Built to grow with you. Our architecture ensures your application scales seamlessly as your business expands.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-card/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.02]" />

      <div className="section-container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="heading-2 mt-2 mb-4">
            Excellence in Every Detail
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            We combine technical expertise with a passion for innovation to
            deliver solutions that exceed expectations.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={cn(
                  "relative p-6 rounded-2xl transition-all duration-300",
                  "hover:bg-background/80 hover:shadow-lg"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    "bg-primary/10 text-primary",
                    "group-hover:bg-primary group-hover:text-primary-foreground",
                    "transition-all duration-300"
                  )}
                >
                  <feature.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
