import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="pt-32 pb-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <Skeleton className="h-6 w-24 mb-6" />
            <Skeleton className="h-16 w-full mb-4" />
            <Skeleton className="h-16 w-3/4 mb-6" />
            <Skeleton className="h-24 w-full mb-8" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-36" />
              <Skeleton className="h-12 w-36" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats skeleton */}
      <section className="py-12 border-y">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-6 w-6 mx-auto mb-3" />
                <Skeleton className="h-10 w-16 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story skeleton */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            <Skeleton className="h-[500px] rounded-3xl" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
        </div>
      </section>

      {/* Values skeleton */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-24 mx-auto mb-4" />
            <Skeleton className="h-12 w-full max-w-lg mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-md mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Team skeleton */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-24 mx-auto mb-4" />
            <Skeleton className="h-12 w-full max-w-lg mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-md mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-64 rounded-t-xl" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-16 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
