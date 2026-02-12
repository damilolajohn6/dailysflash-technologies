import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="relative pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <Skeleton className="h-6 w-24 mb-6" />
            <Skeleton className="h-16 w-full mb-4" />
            <Skeleton className="h-16 w-3/4 mb-6" />
            <Skeleton className="h-6 w-full max-w-lg mb-8" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-40" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Services skeleton */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-24 mx-auto mb-4" />
            <Skeleton className="h-10 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-xl mx-auto" />
          </div>

          <div className="space-y-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-[450px] rounded-3xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
