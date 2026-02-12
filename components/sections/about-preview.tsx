"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "10", label: "Team Members" },
];

export function AboutPreview() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={IMAGES.team.collaboration}
                  alt="Our team collaborating"
                  width={600}
                  height={450}
                  className="object-cover w-full h-[400px] lg:h-[500px]"
                />
              </div>

              {/* Overlapping image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background shadow-xl hidden md:block"
              >
                <Image
                  src={IMAGES.team.meeting}
                  alt="Team meeting"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-6 -left-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl font-bold">5+</div>
                <div className="text-sm opacity-90">Years</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-3">
              About Us
            </span>

            <h2 className="heading-2 mb-6">
              We&apos;re a passionate team building the future of digital
            </h2>

            <p className="body-large mb-6">
              Founded in 2021, DailysFlash Technologies has grown from a small
              startup to a full-service digital agency. We believe in the power
              of great design and cutting-edge technology to transform businesses.
            </p>

            <p className="text-muted-foreground mb-8">
              Our diverse team brings together expertise in design, development,
              and strategy to deliver solutions that not only look beautiful but
              also drive measurable results for our clients.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button size="lg" asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
