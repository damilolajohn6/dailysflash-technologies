"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  fallback?: string;
}

export function OptimizedImage({
  className,
  alt,
  fallback,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <Image
        className={cn(
          "object-cover transition-all duration-700",
          isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"
        )}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
      {error && fallback && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <span className="text-muted-foreground text-sm">{fallback}</span>
        </div>
      )}
    </div>
  );
}
