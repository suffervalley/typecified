"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const currentTheme = resolvedTheme || theme;

  if (!mounted) {
    return (
      <button
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-accent"
        aria-label="Toggle theme"
        disabled
      >
        <div className="shrink-0">
          <Moon className="size-5" />
        </div>
        <span
          className={cn(
            "whitespace-nowrap text-sm font-medium transition-opacity duration-300"
          )}
        >
          Theme
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-accent"
      aria-label="Toggle theme"
    >
      <div className="shrink-0">
        {currentTheme === "dark" ? (
          <Sun className="size-5" />
        ) : (
          <Moon className="size-5" />
        )}
      </div>
      <span
        className={cn(
          "whitespace-nowrap text-sm font-medium transition-opacity duration-300"
        )}
      >
        {currentTheme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
