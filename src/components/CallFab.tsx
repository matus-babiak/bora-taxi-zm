import { Phone } from "lucide-react";

export function CallFab() {
  return (
    <a
      href="tel:+421915750725"
      aria-label="Zavolať BoRa TAXI"
      className="fixed bottom-5 right-5 z-40 flex size-14 animate-pulse-cta items-center justify-center bg-primary text-primary-foreground shadow-brand transition-colors hover:bg-[var(--brand-deep)] hover:text-white md:hidden"
    >
      <Phone className="size-6" />
    </a>
  );
}
