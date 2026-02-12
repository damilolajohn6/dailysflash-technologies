"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-bold text-xl group",
        className,
      )}
    >
      <motion.div
        className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 border border-primary/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* <Zap className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" /> */}
        <Image
          src="/images/logoicon.png"
          alt="DailysFlash"
          width={24}
          height={24}
        />
        <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
      <Image
        src="/images/logosite.png"
        alt="DailysFlash"
        width={240}
        height={100}
      />
    </Link>
  );
}
