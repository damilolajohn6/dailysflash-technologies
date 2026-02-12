import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <section className="pt-32 pb-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-6 w-24 mx-auto mb-6" />
            <Skeleton className="h-16 w-full max-w-xl mx-auto mb-4" />
            <Skeleton className="h-16 w-full max-w-lg mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Contact methods skeleton */}
      <section className="pb-16">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-52 rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Form skeleton */}
      <section className="section-padding bg-muted/30">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <Skeleton className="h-[700px] rounded-3xl" />
            </div>
            <div className="lg:col-span-2 space-y-8">
              <Skeleton className="h-48 rounded-xl" />
              <Skeleton className="h-48 rounded-xl" />
              <Skeleton className="h-32 rounded-xl" />
              <Skeleton className="h-32 rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Offices skeleton */}
      <section className="section-padding">
        <div className="section-container">
          <div className="text-center mb-16">
            <Skeleton className="h-4 w-24 mx-auto mb-4" />
            <Skeleton className="h-12 w-full max-w-md mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-sm mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-96 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
