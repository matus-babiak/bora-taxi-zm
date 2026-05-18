import { Phone, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/taxi-hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--ink)] text-white">
      <div className="absolute inset-0">
        <img src={heroImg} alt="BoRa TAXI Zlaté Moravce" className="size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-[1140px] gap-10 px-5 py-20 md:py-32">
        <div className="max-w-2xl animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="size-2 animate-pulse bg-primary" /> NONSTOP po rezervácii
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Spoľahlivé taxi v <span className="text-primary">Zlatých Moravciach</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Nové autá, najnižšie ceny v meste a žiadne skryté príplatky.
            Cena, ktorú vidíte, vždy platí.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+421915750725"
              className="group inline-flex animate-pulse-cta items-center justify-center gap-3 bg-primary px-7 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-[var(--brand-deep)] hover:text-white"
            >
              <Phone className="size-5" /> 0915 750 725
            </a>
            <a
              href="tel:+421910619745"
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="size-5" /> 0910 619 745
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <Stat icon={<Clock className="size-5" />} label="Rýchle vyzdvihnutie" />
            <Stat icon={<MapPin className="size-5" />} label="Letiská & dlhé trasy" />
            <Stat icon={<Phone className="size-5" />} label="Bez skrytých poplatkov" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 border border-white/10 bg-white/5 px-3 py-3 text-sm">
      <span className="text-primary">{icon}</span>
      <span className="text-white/85">{label}</span>
    </div>
  );
}
