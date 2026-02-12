import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="pt-32 pb-20">
        <div className="section-container text-center">
          <Skeleton className="h-6 w-24 mx-auto mb-6" />
          <Skeleton className="h-16 w-full max-w-2xl mx-auto mb-4" />
          <Skeleton className="h-16 w-full max-w-xl mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-lg mx-auto" />
        </div>
      </section>

      {/* Products skeleton */}
      <section className="pb-20">
        <div className="section-container">
          <div className="space-y-32">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 items-center">
                <Skeleton className="h-[500px] rounded-3xl" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-12 w-48" />
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-24 w-full" />
                  <div className="flex gap-4">
                    <Skeleton className="h-12 w-32" />
                    <Skeleton className="h-12 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
