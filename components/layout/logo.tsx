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
      <div className="py-2">
        <Image
          src="/images/logosite.png"
          alt="DailysFlash"
          width={240}
          height={100}
          className="py-4"
        />
      </div>
    </Link>
  );
}
