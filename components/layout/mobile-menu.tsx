"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);
  const pathname = usePathname();

  // Close menu when route changes
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <Logo showText />
            <div className="flex items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col p-6" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const hasChildren = "children" in link && link.children;
              const isExpanded = expandedItem === link.href;

              return (
                <li key={link.href}>
                  {hasChildren ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpandedItem(isExpanded ? null : link.href)
                        }
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                          "hover:bg-accent hover:text-accent-foreground",
                          isExpanded && "bg-accent text-accent-foreground"
                        )}
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "block rounded-lg px-4 py-2 text-sm transition-colors",
                                    "hover:bg-accent hover:text-accent-foreground",
                                    pathname === child.href &&
                                      "text-primary font-medium"
                                  )}
                                >
                                  <span>{child.label}</span>
                                  {child.description && (
                                    <span className="block text-xs text-muted-foreground mt-0.5">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        "hover:bg-accent hover:text-accent-foreground",
                        isActive && "text-primary bg-primary/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-6 border-t">
            <Button className="w-full" size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
