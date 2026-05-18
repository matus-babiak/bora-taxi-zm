import sideImg from "@/assets/taxi-side.jpg";

export function About() {
  return (
    <section id="o-nas" className="bg-background py-20">
      <div className="mx-auto grid max-w-[1140px] items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">O nás</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Taxislužba <span className="text-primary">číslo 1</span> v Zlatých Moravciach
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Sme moderná taxislužba s novými, čistými a voňavými vozidlami Toyota Corolla.
            Vozíme vás bezpečne, pohodlne a za najlepšie ceny v meste aj okolí.
            Po rezervácii sme tu pre vás NONSTOP — letiská, dlhé trasy aj rýchle jazdy po meste.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <Metric value="5★" label="Google recenzie" />
            <Metric value="NONSTOP" label="Po rezervácii" />
            <Metric value="2,50€" label="Od ceny v meste" />
          </div>
        </div>
        <div className="border border-border shadow-soft transition-transform hover:scale-[1.02]">
          <img src={sideImg} alt="BoRa TAXI vozidlo" className="size-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-primary px-3 py-1">
      <div className="text-xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
