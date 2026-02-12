import { z } from "zod";

// Contact form schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z
    .string()
    .max(100, "Company name must be less than 100 characters")
    .optional(),
  phone: z
    .string()
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Please enter a valid phone number",
    )
    .optional()
    .or(z.literal("")),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be less than 5000 characters"),
  newsletter: z.boolean().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Newsletter form schema
export const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type NewsletterFormData = z.infer<typeof newsletterFormSchema>;
