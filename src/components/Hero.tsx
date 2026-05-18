import { Phone, Zap, Route, Infinity as InfinityIcon } from "lucide-react";
import heroImg from "@/assets/taxi-hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-hidden bg-[var(--ink)] text-white">
      <div className="absolute inset-0">
        <img src={heroImg} alt="BoRa TAXI Zlaté Moravce" className="size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-[1140px] px-4 py-14 sm:px-5 sm:py-20 md:py-32">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-4 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-emerald-400/45 bg-emerald-400/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-300 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-wider">
            <span className="size-2 shrink-0 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.85)]" aria-hidden /> NONSTOP k dispozícii
          </div>
          <h1 className="text-[1.65rem] font-bold leading-[1.15] sm:text-4xl sm:leading-tight md:text-6xl">
            Spoľahlivé taxi v <span className="text-primary">Zlatých Moravciach</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
            Moderné a bezpečné autá, žiadne skryté príplatky a{" "}
            <strong className="font-bold text-white">najvýhodnejšie ceny</strong> v meste.
          </p>

          <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row">
            <a
              href="tel:+421915750725"
              className="group inline-flex min-h-12 w-full animate-pulse-cta items-center justify-center gap-2 bg-[var(--cta)] px-5 py-3.5 text-sm font-bold text-[var(--cta-foreground)] transition-colors hover:bg-[var(--cta-hover)] sm:min-h-14 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
            >
              <Phone className="size-4 shrink-0 sm:size-5" /> 0915 750 725
            </a>
            <a
              href="tel:+421910619745"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 border-2 border-white/30 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cta)] hover:bg-[var(--cta)]/10 hover:text-[var(--cta)] sm:min-h-14 sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
            >
              <Phone className="size-4 shrink-0 sm:size-5" /> 0910 619 745
            </a>
          </div>

          <div className="mt-8 flex flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-2 [-webkit-overflow-scrolling:touch] sm:mt-10 sm:gap-3 sm:overflow-visible sm:pb-0">
            <Stat icon={<Zap className="size-4 sm:size-5" />} label="Rýchle vyzdvihnutie" />
            <Stat icon={<Route className="size-4 sm:size-5" />} label="ZM & dlhé trasy" />
            <Stat icon={<InfinityIcon className="size-4 sm:size-5" />} label="NONSTOP" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex w-max min-w-0 shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-normal leading-snug tracking-wide text-white/85 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs">
      <span className="shrink-0 text-primary">{icon}</span>
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}
