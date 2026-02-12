"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

const benefits = [
  "Lightning-fast delivery",
  "Enterprise-grade quality",
  "24/7 dedicated support",
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-20"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - Text content */}
          <motion.div style={{ opacity }} className="relative z-10">
            {/* Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                Now accepting new projects for Q1 2025
              </span>
            </motion.div> */}

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-1 mb-6"
            >
              We craft digital
              <br />
              <span className="text-primary">experiences</span> that
              <br />
              drive growth
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="body-large mb-8 max-w-lg"
            >
              We&apos;re a team of strategists, designers, and engineers who
              build digital products that transform businesses and delight users.
            </motion.p>

            {/* Benefits list */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {benefit}
                </li>
              ))}
            </motion.ul>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="h-12 px-6" asChild>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6" asChild>
                <Link href="/services">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Showreel
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column - Image composition */}
          <motion.div
            style={{ y }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/30"
              >
                <Image
                  src={IMAGES.hero.main}
                  alt="Team collaboration"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px]"
                  priority
                />
              </motion.div>

              {/* Floating card - Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-10 top-1/4 z-20 bg-card border rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">98</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="font-semibold">Client Projects</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card - Review */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-6 bottom-20 z-20 bg-card border rounded-2xl p-5 shadow-xl max-w-[240px]"
              >
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  &ldquo;Exceptional work. They delivered beyond our expectations.&rdquo;
                </p>
                <p className="text-xs font-medium">Sarah J. — TechStart CEO</p>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-xs text-muted-foreground mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
