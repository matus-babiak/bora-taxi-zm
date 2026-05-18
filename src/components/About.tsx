import sideImg from "@/assets/taxi-side.jpg";

export function About() {
  return (
    <section id="o-nas" className="relative isolate overflow-hidden bg-background py-14 sm:py-20">
      <div className="mx-auto grid max-w-[1140px] items-center gap-8 px-4 sm:gap-12 sm:px-5 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">O nás</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Taxislužba s <span className="text-primary">férovými cenami</span> v Zlatých Moravciach.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Sme moderná taxislužba s novými, čistými a voňavými vozidlami Toyota Corolla. Vozíme vás{" "}
            <strong className="font-bold text-foreground">
              bezpečne, pohodlne a za najlepšie ceny
            </strong>{" "}
            v meste aj okolí.
          </p>
          <div className="mt-8 grid min-w-0 grid-cols-3 gap-2 sm:gap-4">
            <Metric value="5★" label="Google recenzie" />
            <Metric value="NONSTOP" label="k dispozícii" />
            <Metric value="2,50€" label="Od ceny v meste" />
          </div>
        </div>
        <div className="border border-border shadow-soft">
          <img
            src={sideImg}
            alt="BoRa TAXI vozidlo"
            className="static block h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0 border-l-2 border-primary px-1.5 py-1 sm:px-3">
      <div className="text-base font-bold text-foreground sm:text-xl">{value}</div>
      <div className="text-[10px] leading-tight text-muted-foreground sm:text-xs">{label}</div>
    </div>
  );
}
