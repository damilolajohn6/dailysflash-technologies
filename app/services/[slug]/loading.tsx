import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="relative pt-32 pb-20">
        <div className="section-container">
          <Skeleton className="h-4 w-48 mb-8" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Skeleton className="w-16 h-16 rounded-2xl mb-6" />
              <Skeleton className="h-14 w-full mb-4" />
              <Skeleton className="h-14 w-3/4 mb-6" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-5/6 mb-8" />
              <div className="grid grid-cols-4 gap-6 mb-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-8 w-16 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
            <Skeleton className="h-[400px] rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Content sections skeleton */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-4 w-24 mb-4" />
            <Skeleton className="h-10 w-full mb-10" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
