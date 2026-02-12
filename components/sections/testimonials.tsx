"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/blocks/section-header";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content:
      "Working with DailysFlash was a game-changer for our business. They didn't just build us a website—they created a digital experience that truly represents our brand. Our conversion rates have increased by 150% since launch.",
    image: IMAGES.testimonials.person1,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateCorp",
    content:
      "The AI integration they built for us has automated 60% of our customer support. Their technical expertise is matched only by their commitment to understanding our business needs. Truly exceptional work.",
    image: IMAGES.testimonials.person2,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLabs",
    content:
      "Our SEO rankings skyrocketed after working with DailysFlash. They don't just deliver projects—they become partners invested in your success. I've recommended them to every business owner I know.",
    image: IMAGES.testimonials.person3,
  },
  {
    id: "4",
    name: "David Okonkwo",
    role: "Founder",
    company: "AfriTech Solutions",
    content:
      "The NaijaRide platform they built handles thousands of rides daily without breaking a sweat. Their attention to performance and scalability was impressive. Top-tier engineering team.",
    image: IMAGES.testimonials.person4,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up the select callback
  useState(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect();
    }
  });

  return (
    <section className="section-padding overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <SectionHeader
            label="Testimonials"
            title="What our clients say about working with us"
            align="left"
            className="lg:max-w-xl"
          />

          {/* Navigation */}
          <div className="flex gap-3 mt-8 lg:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full w-12 h-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full w-12 h-12"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-[0_0_100%] sm:flex-[0_0_85%] lg:flex-[0_0_50%] pl-6"
              >
                <div className="bg-card border rounded-3xl p-8 md:p-10 h-full">
                  {/* Quote icon */}
                  <Quote className="h-10 w-10 text-primary/20 mb-6" />

                  {/* Content */}
                  <blockquote className="text-lg md:text-xl leading-relaxed mb-8">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === selectedIndex
                  ? "w-8 bg-primary"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
