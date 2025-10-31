"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Features", href: "#feature" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export const Navbar = () => {
  return (
    <header className="h-20 relative bg-background flex items-center z-50">
      <nav className="w-full px-2">
        <div className={cn("mx-auto max-w-6xl transition-all duration-300")}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 @lg:gap-0 ">
            <div className="flex w-full justify-between @lg:w-auto">
              <Link href="/" aria-label="home" className="font-medium text-xl">
                Brand
              </Link>

              <button className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 @lg:hidden h-full">
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit @lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block @lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 @md:flex-nowrap @lg:m-0 @lg:flex @lg:w-fit @lg:gap-6 @lg:space-y-0 @lg:border-transparent @lg:bg-transparent @lg:p-0 @lg:shadow-none dark:shadow-none dark:@lg:bg-transparent">
              <div className="@lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 @sm:flex-row @sm:gap-3 @sm:space-y-0 @md:w-fit">
                <Button asChild size="sm">
                  <Link href="#">
                    <span>Get Started</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
