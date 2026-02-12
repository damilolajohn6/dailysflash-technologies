import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 text-center">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-4" />
          <Skeleton className="h-16 w-full max-w-xl mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-lg mx-auto mb-8" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-14 w-40" />
            <Skeleton className="h-14 w-40" />
          </div>
        </div>
      </section>
    </div>
  );
}
