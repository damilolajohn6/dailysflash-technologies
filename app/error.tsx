"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-destructive/10 text-destructive mb-6">
          <AlertTriangle className="w-10 h-10" />
        </div>

        {/* Message */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Something went wrong!
        </h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. An unexpected error has occurred.
          Please try again or contact support if the problem persists.
        </p>

        {/* Error details (in development) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 bg-destructive/5 rounded-lg text-left max-w-md mx-auto">
            <p className="text-sm font-mono text-destructive">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted-foreground mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" onClick={() => reset()}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
