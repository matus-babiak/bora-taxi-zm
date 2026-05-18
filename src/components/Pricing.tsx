const left = [
  ["Prílepy", "4€"],
  ["M. n. Žit.", "4€ / 4,50€"],
  ["Žitavany", "4,50€"],
  ["Machulince", "5,50€"],
  ["Č. Dolina", "5,50€"],
  ["Č. Klačany", "6€"],
  ["Sľažany", "6€ / 6,50€"],
  ["Hosťovce", "6,50€"],
  ["Topoľčianky", "6€ / 6,50€ / 7€"],
  ["T. Mlyňany", "6€ / 6,50€ / 7€"],
  ["Olichov", "7,50€"],
  ["Obyce", "7,50€ / 8€"],
  ["Mankovce", "9€"],
  ["V. Vozokany", "9€"],
  ["Vieska n. Žit.", "9€"],
  ["Voľkovce", "9,50€"],
  ["M. Vozokany", "10€"],
  ["Veľčice", "10€"],
  ["Lovce", "10€"],
  ["Žikava", "10€"],
  ["Hosťie", "10€ / 10,50€"],
  ["Slepčany", "10,50€"],
  ["Choča", "10,50€"],
  ["Nemčiňany", "10,50€"],
  ["Čaradice", "10,50€"],
  ["Nevrlice", "11€"],
  ["Č. Hrádok", "11€"],
  ["Tekovské Nemce", "12€"],
  ["Nevidzany", "12€"],
  ["Kozárovce", "12€ / 12,50€"],
];

const right = [
  ["Zlatno", "12,50€"],
  ["Beladice", "13€"],
  ["Ladice", "13,50€"],
  ["N. V. n. Žit.", "13,50€ / 14€"],
  ["B. Chrášťany", "14€"],
  ["B. McDonalds", "14€"],
  ["Skýcov", "14€"],
  ["Jd. Kostoľany", "14,50€"],
  ["Jelenec", "14,50€"],
  ["H. Beňadik", "15€"],
  ["K. p. Tríbečom", "16€"],
  ["M. V. Chyndice", "16€ / 17€"],
  ["Vráble", "17€"],
  ["Čeladice", "17€"],
  ["Tlmače", "17€"],
  ["Lipník", "17€"],
  ["Kolíňany", "18€"],
  ["Pohranice", "20,50€"],
  ["M. V. Lehota", "21€ / 22€"],
  ["Nová Baňa", "25€"],
  ["Levice", "27€"],
  ["Nitra", "27€"],
  ["Partizánske", "35€"],
  ["Žarnovica", "35€"],
  ["Topoľčany", "39€"],
];

const airports = [
  ["Bratislava letisko ✈️", "100€"],
  ["Bratislava", "110€"],
  ["Viedeň letisko ✈️", "160€"],
  ["Budapešť letisko ✈️", "160€"],
];

function Table({ rows }: { rows: string[][] }) {
  return (
    <div className="border border-border bg-card">
      {rows.map(([place, price], i) => (
        <div
          key={place}
          className={`flex items-center justify-between px-4 py-2.5 text-sm ${
            i !== rows.length - 1 ? "border-b border-border" : ""
          } transition-colors hover:bg-primary/5`}
        >
          <span className="text-foreground">{place}</span>
          <span className="font-semibold tabular-nums text-[var(--brand-deep)]">{price}</span>
        </div>
      ))}
    </div>
  );
}

export function Pricing() {
  return (
    <section id="cennik" className="bg-background py-20">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">Cenník</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Mesto od <span className="text-primary">2,50€</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Žiadne skryté príplatky. Cena, ktorú vidíte, vždy platí.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Table rows={left} />
          <div className="flex flex-col gap-6">
            <Table rows={right} />
            <div>
              <div className="bg-[var(--ink)] px-4 py-3 text-xs font-bold uppercase tracking-wider text-primary">
                Letiská & dlhé trasy
              </div>
              <Table rows={airports} />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 border border-border bg-muted p-5 text-sm text-muted-foreground sm:grid-cols-3">
          <div><strong className="text-foreground">Jedn. sadzba:</strong> 0,80€</div>
          <div><strong className="text-foreground">Čakanie:</strong> 12€ / hod.</div>
          <div><strong className="text-foreground">Spiatočná cesta:</strong> 50% zo sadzby</div>
        </div>
      </div>
    </section>
  );
}
