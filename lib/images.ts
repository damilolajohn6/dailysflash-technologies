/**
 * Centralized image URLs from Unsplash
 * All images are optimized for web use
 */

export const IMAGES = {
  // Hero section
  hero: {
    main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    secondary:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },

  // Team & About
  team: {
    collaboration:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    meeting:
      "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&q=80",
    office:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    workspace:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80",
    culture:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
    teamwork:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    brainstorm:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    celebration:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },

  // Services - Main images
  services: {
    // Slug-based keys (used by getServiceImage helper)
    "web-mobile-development":
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    "ui-ux-design":
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    "digital-marketing":
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    "cloud-devops":
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    "ai-machine-learning":
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    "ecommerce-software":
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    // Shorthand aliases (used by services-grid component)
    webDev:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    uiux: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    marketing:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    cloud:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    ecommerce:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
  },

  // Testimonials - Professional headshots
  testimonials: {
    person1:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    person2:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    person3:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    person4:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },

  // Products
  products: {
    naijaride:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    lazarus:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    dashboard:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },

  // About page
  about: {
    story:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80",
    mission:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    values:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    founder:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },

  // General/decorative
  patterns: {
    grid: "/images/patterns/grid.svg",
    dots: "/images/patterns/dots.svg",
  },
} as const;

// Service slug to image mapping
export function getServiceImage(slug: string): string {
  return (
    IMAGES.services[slug as keyof typeof IMAGES.services] ||
    IMAGES.services["web-mobile-development"]
  );
}

// Avatar placeholders with initials
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Generate avatar background color based on name
export function getAvatarColor(name: string): string {
  const colors = [
    "bg-rose-500",
    "bg-sky-500",
    "bg-emerald-500",
    "bg-amber-500",
    "bg-indigo-500",
    "bg-pink-500",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}
