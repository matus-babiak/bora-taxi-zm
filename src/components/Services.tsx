import { Car, Plane, Route, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Mestská doprava",
    desc: "Rýchle a pohodlné jazdy po Zlatých Moravciach od 2,50€.",
  },
  {
    icon: Plane,
    title: "Letiská",
    desc: "Bratislava 100€, Viedeň 160€, Budapešť 160€. Bezkonkurenčné ceny.",
  },
  {
    icon: Route,
    title: "Dlhé trasy",
    desc: "Nitra, Levice, Bratislava, Topoľčany — kamkoľvek v SR aj zahraničí.",
  },
  {
    icon: ShoppingBag,
    title: "Kuriér & nákupy",
    desc: "Na požiadanie zabezpečíme nákup alebo kuriérske služby.",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="bg-muted py-20">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">Služby</p>
          <h2 className="text-3xl font-bold md:text-4xl">Odvezieme vás <span className="text-primary">kamkoľvek</span></h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group border border-border bg-card p-6 shadow-soft transition-all hover:scale-[1.03] hover:border-primary hover:shadow-brand"
            >
              <s.icon className="size-9 text-primary transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
