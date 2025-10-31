"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import {
  PreviewHeader,
  type ViewMode,
  type DeviceSize,
} from "./preview-header";
import { usePackageManagerStore } from "@/store/use-package-manager-store";
import { PreviewSkeleton } from "./preview-skeleton";

interface PreviewCodeProps {
  children: React.ReactNode;
  title?: string;
  code?: string;
  filePath?: string;
  registryName?: string;
  onOpenInEditor?: () => void;
}

export const PreviewCode = ({
  children,
  title = "Component Preview",
  code,
  filePath,
  registryName,
  onOpenInEditor,
}: PreviewCodeProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>("preview");
  const [deviceSize, setDeviceSize] = useState<DeviceSize>("desktop");
  const packageManager = usePackageManagerStore(
    (state) => state.packageManager
  );
  const setPackageManager = usePackageManagerStore(
    (state) => state.setPackageManager
  );
  const hasHydrated = usePackageManagerStore((state) => state._hasHydrated);
  const [fetchedCode, setFetchedCode] = useState<string>("");
  const [copiedCommand, setCopiedCommand] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const { theme } = useTheme();

  const deviceWidths = {
    desktop: "w-full",
    tablet: "w-[768px]",
    mobile: "w-[375px]",
  };

  const copyCommandToClipboard = async () => {
    if (!registryName) return;
    const installCommand = `https://typecified.com/r/${registryName}`;
    await navigator.clipboard.writeText(installCommand);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  const copyCodeToClipboard = async () => {
    if (!sourceCode) return;
    await navigator.clipboard.writeText(sourceCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Fetch source code from file
  useEffect(() => {
    if (filePath && !code) {
      fetch(`/api/source-code?path=${encodeURIComponent(filePath)}`)
        .then((res) => res.text())
        .then((text) => setFetchedCode(text))
        .catch(() => setFetchedCode("// Failed to load source code"));
    }
  }, [filePath, code]);

  // Use code prop if provided, otherwise use fetched code
  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  const sourceCode = useMemo(() => code || fetchedCode, [code, fetchedCode]);

  // Show skeleton while hydrating from localStorage
  if (!hasHydrated) {
    return <PreviewSkeleton />;
  }

  return (
    <>
      {/* Diagonal stripe pattern separator */}
      <div
        aria-hidden="true"
        className="h-8 w-full bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-50 border-y"
      />

      <div className="border rounded-lg mx-8 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col">
          <PreviewHeader
            viewMode={viewMode}
            setViewMode={setViewMode}
            deviceSize={deviceSize}
            setDeviceSize={setDeviceSize}
            title={title}
            registryName={registryName}
            packageManager={packageManager}
            setPackageManager={setPackageManager}
            copiedCommand={copiedCommand}
            onCopyCommand={copyCommandToClipboard}
          />
        </div>

        {/* Content area */}
        {viewMode === "preview" ? (
          <div className="relative flex justify-center overflow-x-auto px-8">
            <div
              className={cn(
                "transition-all duration-300 @container",
                deviceWidths[deviceSize]
              )}
            >
              {children}
            </div>
          </div>
        ) : (
          <div className="relative overflow-x-auto max-w-full h-full [&_pre]:whitespace-pre! [&_code]:whitespace-pre! bg-secondary/50 dark:bg-card/50">
            {sourceCode && (
              <div className="absolute top-2 right-2 z-10">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  onClick={copyCodeToClipboard}
                  title="Copy code"
                  className="h-8 w-8 bg-background/80 hover:bg-background backdrop-blur-sm"
                >
                  {copiedCode ? (
                    <Check className="size-4 text-green-600" />
                  ) : (
                    <Copy className="size-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            )}
            {sourceCode ? (
              <div className="inline-block min-w-full h-full">
                <SyntaxHighlighter
                  language="tsx"
                  style={theme === "dark" ? oneDark : oneLight}
                  showLineNumbers
                  wrapLines={false}
                  customStyle={{
                    background: "transparent",
                    margin: 0,
                    padding: "1rem",
                    whiteSpace: "pre",
                  }}
                  codeTagProps={{
                    style: {
                      whiteSpace: "pre",
                    },
                  }}
                >
                  {sourceCode}
                </SyntaxHighlighter>
              </div>
            ) : (
              <pre className="text-sm font-mono whitespace-pre p-4">
                <code>{"// Loading code..."}</code>
              </pre>
            )}
          </div>
        )}

        {/* Optional: Open in Editor button */}
        {onOpenInEditor && (
          <div className="border-t px-4 py-2 bg-muted/20 flex justify-end">
            <Button variant="outline" size="sm" onClick={onOpenInEditor}>
              Open in Editor
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
