import Link from "next/link";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
          <FileQuestion className="w-10 h-10" />
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl md:text-9xl font-bold text-primary/20 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
