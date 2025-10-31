"use client";

import { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import {
  PackageManagerIcon,
  type PackageManager,
} from "./package-manager-icon";
import { ExternalLink } from "lucide-react";

interface PackageManagerSelectorProps {
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
  registryName: string;
  copied: boolean;
  onCopy: () => void;
}

const packageManagers: {
  id: PackageManager;
  label: string;
  command: (name: string) => string;
}[] = [
  {
    id: "npm",
    label: "npm",
    command: (name) => `npx shadcn@latest add https://typecified.com/r/${name}`,
  },
  {
    id: "yarn",
    label: "yarn",
    command: (name) =>
      `yarn dlx shadcn@latest add https://typecified.com/r/${name}`,
  },
  {
    id: "pnpm",
    label: "pnpm",
    command: (name) =>
      `pnpm dlx shadcn@latest add https://typecified.com/r/${name}`,
  },
  {
    id: "bun",
    label: "bun",
    command: (name) =>
      `bunx --bun shadcn@latest add https://typecified.com/r/${name}`,
  },
];

export const PackageManagerSelector = ({
  packageManager,
  setPackageManager,
  registryName,
  copied,
  onCopy,
}: PackageManagerSelectorProps) => {
  const installCommand = useMemo(() => {
    const pm = packageManagers.find((p) => p.id === packageManager);
    return pm ? pm.command(registryName) : "";
  }, [packageManager, registryName]);

  return (
    <div className="flex items-center gap-2">
      <Select
        value={packageManager}
        onValueChange={(value) => setPackageManager(value as PackageManager)}
      >
        <SelectTrigger size="sm" className="w-[60px] h-8 px-2">
          <PackageManagerIcon manager={packageManager} />
        </SelectTrigger>
        <SelectContent>
          {packageManagers.map((pm) => (
            <SelectItem key={pm.id} value={pm.id}>
              <div className="flex items-center gap-2">
                <PackageManagerIcon manager={pm.id} />
                <span>{pm.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Desktop: Full command */}
      <button
        onClick={onCopy}
        title={copied ? "Copied!" : "Click to copy"}
        className="hidden md:flex items-center gap-2 text-xs bg-secondary hover:bg-secondary/80 px-3 py-1.5 rounded-md border font-mono transition-colors cursor-pointer"
      >
        {copied ? "Copied!" : installCommand}
      </button>

      {/* Mobile: Icon only */}
      <button
        onClick={onCopy}
        title={copied ? "Copied!" : "Click to copy registry URL"}
        className="md:hidden flex items-center justify-center size-8 bg-secondary hover:bg-secondary/80 rounded-md border transition-colors cursor-pointer"
      >
        <ExternalLink className="size-4 text-muted-foreground" />
      </button>
    </div>
  );
};
