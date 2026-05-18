import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jana Mikušová",
    text: "Veľká spokojnosť, prijateľné ceny, super prístup bez čakania. Inú taxislužbu by som ani nevolila, najlepší v ZM.",
  },
  {
    name: "Lubomír Žatko",
    text: "Najlepšie taxi v ZM, chalani sú šikovní a milí. Teraz, keď majú nové autá sú Topka a iba odporúčam. 👍",
  },
  {
    name: "Samona Mirtan",
    text: "Najlepší taxík, nízke ceny, rýchle vyzdvihnutie. Voľba č.1 v Zlatých Moravciach aj na dlhšie trasy.",
  },
  {
    name: "Jozef Horvát",
    text: "Brali ste ma na letisko — super prístup a dobrá cena.",
  },
  {
    name: "Mária Pokrifková",
    text: "S BoRa Taxi som veľmi spokojná. Využívam ich pravidelne. Vrelo odporúčam. 👍",
  },
  {
    name: "Mgr. Katarína Rakovská",
    text: "Najspoľahlivejší taxi, vysoká profesionalita a milí ľudia. Maximálna spokojnosť!",
  },
  {
    name: "Zuzana Vaškovičová",
    text: "Super cena, krásne voňavé auto, super vodič. Odporúčam. 👏",
  },
  {
    name: "Lýdia Rakovská",
    text: "Rada chodím s vami. Dobré ceny a milí šoféri.",
  },
];

export function Reviews() {
  return (
    <section id="recenzie" className="bg-muted py-20">
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">Recenzie</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Hodnotenie <span className="text-primary">5 hviezdičiek</span> na Google
            </h2>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-6 fill-primary text-primary" />
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col border border-border bg-card p-6 shadow-soft transition-all hover:scale-[1.02] hover:border-primary"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
              <p className="mt-4 text-sm font-semibold">{r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
