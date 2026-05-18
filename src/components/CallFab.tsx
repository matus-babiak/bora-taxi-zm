import { Phone } from "lucide-react";

export function CallFab() {
  return (
    <a
      href="tel:+421915750725"
      aria-label="Zavolať BoRa TAXI"
      className="fixed z-40 flex size-14 animate-pulse-cta items-center justify-center bg-[var(--cta)] text-[var(--cta-foreground)] shadow-cta transition-colors hover:bg-[var(--cta-hover)] touch-manipulation bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] right-[max(1.25rem,env(safe-area-inset-right,0px))] md:hidden"
    >
      <Phone className="size-6" />
    </a>
  );
}
