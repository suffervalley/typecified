"use client";

import { Monitor, Tablet, Smartphone, Eye, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PackageManagerSelector } from "./package-manager-selector";
import type { PackageManager } from "./package-manager-icon";

export type ViewMode = "preview" | "code";
export type DeviceSize = "desktop" | "tablet" | "mobile";

interface PreviewHeaderProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  deviceSize: DeviceSize;
  setDeviceSize: (size: DeviceSize) => void;
  title?: string;
  registryName?: string;
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
  copiedCommand: boolean;
  onCopyCommand: () => void;
}

export const PreviewHeader = ({
  viewMode,
  setViewMode,
  deviceSize,
  setDeviceSize,
  title,
  registryName,
  packageManager,
  setPackageManager,
  copiedCommand,
  onCopyCommand,
}: PreviewHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-card">
      {/* Left section - View mode tabs */}
      <div className="flex items-center gap-1">
        <Button
          variant={viewMode === "preview" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setViewMode("preview")}
          className="h-8 gap-2"
        >
          <Eye className="size-4 text-muted-foreground" />
          <span className="hidden sm:inline">Preview</span>
        </Button>
        <Button
          variant={viewMode === "code" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setViewMode("code")}
          className="h-8 gap-2"
        >
          <Code2 className="size-4 text-muted-foreground" />
          <span className="hidden sm:inline">Code</span>
        </Button>
        {title && (
          <>
            <div className="relative h-full hidden sm:block">
              <Separator orientation="vertical" className="h-4! ml-1 mr-2" />
            </div>
            <p className="text-sm font-medium text-muted-foreground hidden sm:block">
              {title}
            </p>
          </>
        )}
      </div>

      {/* Right section - Action buttons */}
      <div className="flex items-center gap-1">
        {viewMode === "preview" && (
          <>
            <Button
              variant={deviceSize === "desktop" ? "secondary" : "ghost"}
              size="icon-sm"
              onClick={() => setDeviceSize("desktop")}
              title="Desktop view"
            >
              <Monitor className="size-4 text-muted-foreground" />
            </Button>
            <Button
              variant={deviceSize === "tablet" ? "secondary" : "ghost"}
              size="icon-sm"
              onClick={() => setDeviceSize("tablet")}
              title="Tablet view"
            >
              <Tablet className="size-4 text-muted-foreground" />
            </Button>
            <Button
              variant={deviceSize === "mobile" ? "secondary" : "ghost"}
              size="icon-sm"
              onClick={() => setDeviceSize("mobile")}
              title="Mobile view"
            >
              <Smartphone className="size-4 text-muted-foreground" />
            </Button>
          </>
        )}

        {/* Package Manager Selector & Install Command */}
        {registryName && (
          <>
            <Separator orientation="vertical" className="h-4! mr-2" />
            <PackageManagerSelector
              packageManager={packageManager}
              setPackageManager={setPackageManager}
              registryName={registryName}
              copied={copiedCommand}
              onCopy={onCopyCommand}
            />
          </>
        )}
      </div>
    </div>
  );
};
