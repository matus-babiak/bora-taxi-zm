import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { formatEuro } from "@/lib/format-euro";

const MOBILE_INITIAL_ROWS = 12;

const left = [
  ["Zlaté Moravce", "od 2,50 €"],
  ["Prílepy", "4€"],
  ["Martin nad Žitavou", "4€ / 4,50€"],
  ["Žitavany", "4,50€"],
  ["Machulince", "5,50€"],
  ["Čierna Dolina", "5,50€"],
  ["Čierne Klačany", "6€"],
  ["Sľažany", "6€ / 6,50€"],
  ["Hosťovce", "6,50€"],
  ["Topoľčianky", "6€ / 6,50€ / 7€"],
  ["Tesárske Mlyňany", "6€ / 6,50€ / 7€"],
  ["Olichov", "7,50€"],
  ["Obyce", "7,50€ / 8€"],
  ["Mankovce", "9€"],
  ["Veľké Vozokany", "9€"],
  ["Vieska nad Žitavou", "9€"],
  ["Voľkovce", "9,50€"],
  ["Malé Vozokany", "10€"],
  ["Velčice", "10€"],
  ["Lovce", "10€"],
  ["Žikava", "10€"],
  ["Hostie", "10€ / 10,50€"],
  ["Slepčany", "10,50€"],
  ["Choča", "10,50€"],
  ["Nemčiňany", "10,50€"],
  ["Čaradice", "10,50€"],
  ["Neverice", "11€"],
  ["Červený Hrádok", "11€"],
  ["Tekovské Nemce", "12€"],
  ["Nevidzany", "12€"],
  ["Kozárovce", "12€ / 12,50€"],
];

const right = [
  ["Zlatno", "12,50€"],
  ["Beladice", "13€"],
  ["Ladice", "13,50€"],
  ["Nová Ves nad Žitavou", "13,50€ / 14€"],
  ["Beladice, Chrášťany", "14€"],
  ["Beladice, McDonalds", "14€"],
  ["Skýcov", "14€"],
  ["Jedľové Kostoľany", "14,50€"],
  ["Jelenec", "14,50€"],
  ["Hronský Beňadik", "15€"],
  ["Kostoľany pod Tribečom", "16€"],
  ["Malé / Veľké Chyndice", "16€ / 17€"],
  ["Vráble", "17€"],
  ["Čeľadice", "17€"],
  ["Tlmače", "17€"],
  ["Lipník", "17€"],
  ["Kolíňany", "18€"],
  ["Pohranice", "20,50€"],
  ["Malá / Veľká Lehota", "21€ / 22€"],
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

const allRoutes = [...left, ...right];

function Table({ rows }: { rows: string[][] }) {
  return (
    <div className="border border-border bg-card">
      {rows.map(([place, price], i) => (
        <div
          key={place}
          className={`flex items-start justify-between gap-2 px-3 py-2.5 text-sm leading-snug sm:px-4 sm:py-3 sm:text-base ${
            i !== rows.length - 1 ? "border-b border-border" : ""
          } transition-colors hover:bg-primary/5`}
        >
          <span className="max-w-[65%] min-w-0 break-words pr-1 text-foreground sm:max-w-none">{place}</span>
          <span className="shrink-0 text-right font-semibold tabular-nums text-[var(--brand-deep)]">
            {formatEuro(price)}
          </span>
        </div>
      ))}
    </div>
  );
}

function AirportsBlock() {
  return (
    <div>
      <div className="bg-[var(--ink)] px-4 py-3 text-sm font-bold uppercase tracking-wider text-primary sm:text-base">
        Letiská & dlhé trasy
      </div>
      <Table rows={airports} />
    </div>
  );
}

function ShowMoreButton({
  expanded,
  onClick,
}: {
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={expanded}
      aria-controls="pricing-cennik-mobile"
      className="mt-3 flex w-full touch-manipulation items-center justify-center gap-2 border border-border bg-muted py-3.5 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {expanded ? "Zbaliť cenník" : "Rozbaliť cenník"}
      <ChevronDown
        className={`size-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
        aria-hidden
      />
    </button>
  );
}

export function Pricing() {
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const mobileRows = mobileExpanded ? allRoutes : allRoutes.slice(0, MOBILE_INITIAL_ROWS);
  const hiddenCount = allRoutes.length - MOBILE_INITIAL_ROWS;
  const showMobileToggle = hiddenCount > 0;

  return (
    <section id="cennik" className="relative isolate overflow-hidden bg-background py-14 sm:py-20">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">Cenník</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Taxi Zlaté Moravce <span className="text-primary">od 2,50 €</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Žiadne skryté príplatky.{" "}
            <strong className="font-bold text-foreground">Cena, ktorú vidíte, vždy platí.</strong>
          </p>
        </div>

        {/* Mobile: jedna tabuľka, prvých 12 riadkov + rozbalenie */}
        <div id="pricing-cennik-mobile" className="lg:hidden">
          <Table rows={mobileRows} />
          {showMobileToggle && (
            <ShowMoreButton expanded={mobileExpanded} onClick={() => setMobileExpanded((v) => !v)} />
          )}
          <div className="mt-6">
            <AirportsBlock />
          </div>
        </div>

        {/* Desktop: dva stĺpce */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-2">
          <Table rows={left} />
          <div className="flex flex-col gap-6">
            <Table rows={right} />
            <AirportsBlock />
          </div>
        </div>

        <div className="mt-8 grid gap-3 border border-border bg-muted p-4 text-sm leading-relaxed text-muted-foreground sm:grid-cols-3 sm:p-5 sm:text-base">
          <div>
            <strong className="text-foreground">Jedn. sadzba:</strong> {formatEuro("0,80€")}
          </div>
          <div>
            <strong className="text-foreground">Čakanie:</strong> {formatEuro("12€ / hod.")}
          </div>
          <div>
            <strong className="text-foreground">Spiatočná cesta:</strong> 50% zo sadzby
          </div>
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
    </section>
  );
}
