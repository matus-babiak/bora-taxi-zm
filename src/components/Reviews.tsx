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
    <section id="recenzie" className="bg-muted py-14 sm:py-20">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-5">
        <div className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-10">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--brand-deep)]">Recenzie</p>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Hodnotenie <span className="text-primary">5 hviezdičiek</span> na Google
            </h2>
          </div>
          <div className="flex items-center justify-center gap-0.5 sm:gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-primary text-primary sm:size-6" />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap content-center justify-center gap-4 sm:gap-5">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex w-full flex-col border border-border bg-card p-4 shadow-soft transition-all hover:border-primary sm:p-6 md:hover:scale-[1.02] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
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
