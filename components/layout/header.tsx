"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show/hide header based on scroll direction
    const direction = latest > lastScrollY.current ? "down" : "up";
    
    if (latest > 100) {
      setIsScrolled(true);
      if (direction === "down" && latest > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } else {
      setIsScrolled(false);
      setIsVisible(true);
    }
    
    lastScrollY.current = latest;
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "glass border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => {
                const hasChildren = "children" in link && link.children;
                const isActive = pathname === link.href;

                if (hasChildren) {
                  return (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuTrigger
                        className={cn(
                          isActive && "text-primary"
                        )}
                      >
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-2 p-4">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    "focus:bg-accent focus:text-accent-foreground",
                                    pathname === child.href && "bg-accent/50"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.label}
                                  </div>
                                  {child.description && (
                                    <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {child.description}
                                    </p>
                                  )}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive && "text-primary"
                        )}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:flex" />
            <Button
              className="hidden md:inline-flex"
              variant="glow"
              asChild
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
