export const PreviewSkeleton = () => {
  return (
    <>
      {/* Diagonal stripe pattern separator */}
      <div
        aria-hidden="true"
        className="h-8 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-50 border-y"
      />

      <div className="border rounded-lg mx-8 overflow-hidden">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between px-4 py-3 border-b bg-card">
          {/* Left section */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-20 bg-muted animate-pulse rounded" />
            <div className="h-8 w-16 bg-muted animate-pulse rounded" />
            <div className="h-4 w-px bg-border mx-2" />
            <div className="h-4 w-32 bg-muted animate-pulse rounded" />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-1">
            <div className="h-8 w-8 bg-muted animate-pulse rounded" />
            <div className="h-8 w-8 bg-muted animate-pulse rounded" />
            <div className="h-8 w-8 bg-muted animate-pulse rounded" />
            <div className="h-4 w-px bg-border mx-2" />
            <div className="h-8 w-[60px] bg-muted animate-pulse rounded" />
            <div className="hidden md:block h-8 w-48 bg-muted animate-pulse rounded" />
            <div className="md:hidden h-8 w-8 bg-muted animate-pulse rounded" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="relative flex justify-center overflow-x-auto px-8 py-16">
          <div className="w-full space-y-4">
            <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
            <div className="h-4 w-full bg-muted animate-pulse rounded" />
            <div className="h-4 w-5/6 bg-muted animate-pulse rounded" />
            <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
          </div>
        </div>
      </div>
    </>
  );
};
