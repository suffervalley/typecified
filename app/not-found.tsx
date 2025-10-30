"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8 inline-block">
          <div className="relative">
            <h1 className="text-[12rem] font-black leading-none tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 animate-pulse bg-linear-to-r from-primary/20 to-transparent blur-3xl" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-base text-muted-foreground">
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital wilderness.
          </p>
          <p className="text-sm text-muted-foreground">
            Don&apos;t worry, even the best explorers get lost sometimes.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="secondary">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
