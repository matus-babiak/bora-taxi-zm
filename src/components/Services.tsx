import type { ReactNode } from "react";
import { Car, Plane, Route, ShoppingBag, Phone } from "lucide-react";
import airportImg from "@/assets/taxi-airport.jpg";

const services: {
  icon: typeof Car;
  title: string;
  desc: ReactNode;
}[] = [
  {
    icon: Car,
    title: "Mestská doprava",
    desc: (
      <>
        <strong className="font-bold text-foreground">Rýchle a pohodlné jazdy</strong> po Zlatých Moravciach od
        2,50€.
      </>
    ),
  },
  {
    icon: Plane,
    title: "Letiská",
    desc: (
      <>
        Bratislava 100€, Viedeň 160€, Budapešť 160€.{" "}
        <strong className="font-bold text-foreground">Najvýhodnejšie ceny.</strong>
      </>
    ),
  },
  {
    icon: Route,
    title: "Dlhé trasy",
    desc: (
      <>
        Nitra, Levice, Bratislava, Topoľčany.{" "}
        <strong className="font-bold text-foreground">Kamkoľvek v SR aj zahraničí.</strong>
      </>
    ),
  },
  {
    icon: ShoppingBag,
    title: "Kuriér & nákupy",
    desc: (
      <>
        Na požiadanie zabezpečíme{" "}
        <strong className="font-bold text-foreground">nákup alebo kuriérske služby.</strong>
      </>
    ),
  },
];

export function Services() {
  return (
    <section id="sluzby" className="bg-muted py-14 sm:py-20">
      {/* Mobile: content first (reverse column); lg: image left, copy right — DOM order unchanged for desktop */}
      <div className="mx-auto flex max-w-[1140px] flex-col-reverse gap-10 px-4 sm:gap-12 sm:px-5 lg:flex-row lg:items-stretch lg:gap-20">
        <div className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col justify-center lg:max-w-none">
          <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:rounded-none lg:border-0 lg:bg-transparent lg:shadow-none">
            <img
              src={airportImg}
              alt="BoRa TAXI na letisku"
              className="aspect-[16/10] w-full object-cover sm:aspect-[5/3] lg:aspect-auto lg:h-auto lg:object-contain lg:object-center"
            />
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col justify-center">
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">Služby</p>
            <h2 className="text-2xl font-bold text-balance sm:text-3xl md:text-4xl">
              Odvezieme vás <span className="text-primary">kamkoľvek</span>
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group flex min-w-0 items-start gap-3 border border-border bg-card p-4 shadow-soft transition-colors hover:border-primary sm:flex-col sm:gap-0 sm:p-6 md:transition-transform md:hover:scale-[1.03] md:hover:shadow-brand"
                >
                  <s.icon
                    className="size-8 shrink-0 text-primary transition-transform group-hover:scale-110 sm:size-9"
                    strokeWidth={1.5}
                  />
                  <div className="min-w-0 flex-1 sm:mt-5 sm:flex-none">
                    <h3 className="text-base font-bold leading-snug sm:text-lg">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <a
                href="tel:+421915750725"
                className="group flex min-h-12 w-full min-w-0 flex-1 touch-manipulation items-center justify-center gap-2 bg-[var(--cta)] px-4 py-3.5 text-sm font-bold text-[var(--cta-foreground)] transition-colors animate-pulse-cta hover:bg-[var(--cta-hover)] sm:min-h-[52px] sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
              >
                <Phone className="size-5 shrink-0 sm:size-6" /> 0915 750 725
              </a>
              <a
                href="tel:+421910619745"
                className="flex min-h-12 w-full min-w-0 flex-1 touch-manipulation items-center justify-center gap-2 border-2 border-border bg-background px-4 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-[var(--cta)] hover:bg-[var(--cta)]/10 hover:text-[var(--cta)] sm:min-h-[52px] sm:gap-3 sm:px-7 sm:py-4 sm:text-base"
              >
                <Phone className="size-5 shrink-0 sm:size-6" /> 0910 619 745
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
