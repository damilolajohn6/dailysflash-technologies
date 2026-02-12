"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/lib/images";

export function CTA() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={IMAGES.team.office}
              alt="Modern office space"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/85 dark:bg-background/90" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-sm font-semibold tracking-wide uppercase mb-4"
            >
              Let&apos;s Work Together
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="heading-2 text-background dark:text-foreground mb-6 max-w-3xl mx-auto"
            >
              Ready to bring your vision to life? Let&apos;s create something
              extraordinary together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-background/80 dark:text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
            >
              Whether you have a detailed project brief or just a rough idea,
              we&apos;d love to hear from you. Let&apos;s start a conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-background text-foreground hover:bg-background/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start a Conversation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-background/30 text-background hover:bg-background/10 dark:border-border dark:text-foreground dark:hover:bg-secondary"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
