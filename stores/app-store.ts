import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AppState {
  // Mobile menu state
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;

  // Contact form state
  isContactFormSubmitting: boolean;
  setContactFormSubmitting: (submitting: boolean) => void;
  lastSubmissionTime: number | null;
  setLastSubmissionTime: (time: number) => void;

  // UI state
  hasScrolled: boolean;
  setHasScrolled: (scrolled: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Mobile menu
      isMobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ isMobileMenuOpen: open }),
      toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),

      // Contact form
      isContactFormSubmitting: false,
      setContactFormSubmitting: (submitting) =>
        set({ isContactFormSubmitting: submitting }),
      lastSubmissionTime: null,
      setLastSubmissionTime: (time) => set({ lastSubmissionTime: time }),

      // UI
      hasScrolled: false,
      setHasScrolled: (scrolled) => set({ hasScrolled: scrolled }),
    }),
    {
      name: "dailysflash-storage",
      partialize: (state) => ({
        lastSubmissionTime: state.lastSubmissionTime,
      }),
    }
  )
);
