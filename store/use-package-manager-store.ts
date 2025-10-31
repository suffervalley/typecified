import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { PackageManager } from "@/components/preview-code/package-manager-icon";

interface PackageManagerStore {
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
  _hasHydrated: boolean;
  _setHasHydrated: (value: boolean) => void;
}

export const usePackageManagerStore = create<PackageManagerStore>()(
  persist(
    (set) => ({
      packageManager: "npm",
      setPackageManager: (pm: PackageManager) => set({ packageManager: pm }),
      _hasHydrated: false,
      _setHasHydrated: (value: boolean) => set({ _hasHydrated: value }),
    }),
    {
      name: "package-manager-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?._setHasHydrated(true);
      },
    }
  )
);
