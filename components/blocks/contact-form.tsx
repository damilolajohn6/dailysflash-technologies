"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const budgetRanges = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-25k", label: "$10,000 - $25,000" },
  { value: "25k-50k", label: "$25,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-plus", label: "$100,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
      newsletter: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setIsSuccess(true);
      reset();
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });

      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error("Failed to send message", {
        description:
          error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Your message has been sent successfully. Our team will review your
          inquiry and get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name and Email row */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Doe"
            {...register("name")}
            error={!!errors.name}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            error={!!errors.email}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company and Phone row */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Your Company"
            {...register("company")}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register("phone")}
            error={!!errors.phone}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p className="text-sm text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service and Budget row */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In</Label>
          <Select
            onValueChange={(value: string) => setValue("service", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {SERVICES.map((service) => (
                <SelectItem key={service.id} value={service.slug}>
                  {service.title}
                </SelectItem>
              ))}
              <SelectItem value="other">Other / Not Sure</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Budget Range</Label>
          <Select
            onValueChange={(value: string) => setValue("budget", value)}
            disabled={isSubmitting}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Your Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project, goals, and timeline..."
          rows={6}
          {...register("message")}
          error={!!errors.message}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Newsletter checkbox */}
      <div className="flex items-start space-x-3">
        <Checkbox
          id="newsletter"
          checked={watch("newsletter")}
          onCheckedChange={(checked: boolean) =>
            setValue("newsletter", checked as boolean)
          }
          disabled={isSubmitting}
        />
        <div className="space-y-1 leading-none">
          <Label
            htmlFor="newsletter"
            className="text-sm font-normal cursor-pointer"
          >
            Subscribe to our newsletter
          </Label>
          <p className="text-xs text-muted-foreground">
            Get updates on our latest projects, insights, and offerings.
          </p>
        </div>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
