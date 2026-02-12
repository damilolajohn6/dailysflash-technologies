"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6 flex flex-col h-full">
        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < testimonial.rating
                  ? "text-amber-400 fill-amber-400"
                  : "text-muted"
              )}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">
            &ldquo;{testimonial.content}&rdquo;
          </p>
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 mt-6 pt-6 border-t">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-sm">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
