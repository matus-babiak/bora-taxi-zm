import { Phone, Instagram, Facebook, MapPin } from "lucide-react";
import airportImg from "@/assets/taxi-airport.jpg";

export function Contact() {
  return (
    <section id="kontakt" className="bg-[var(--ink)] py-20 text-white">
      <div className="mx-auto grid max-w-[1140px] gap-10 px-5 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Kontakt</p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Zavolajte <span className="text-primary">teraz</span>
          </h2>
          <p className="mt-3 text-white/70">Tešíme sa na vás — Vaše BoRa TAXI Zlaté Moravce.</p>

          <div className="mt-8 space-y-3">
            <a
              href="tel:+421915750725"
              className="group flex items-center gap-4 border border-white/15 bg-white/5 p-4 transition-all hover:scale-[1.02] hover:border-primary hover:bg-primary/10"
            >
              <Phone className="size-6 text-primary" strokeWidth={1.5} />
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Hlavná linka</div>
                <div className="text-xl font-bold">0915 750 725</div>
              </div>
            </a>
            <a
              href="tel:+421910619745"
              className="group flex items-center gap-4 border border-white/15 bg-white/5 p-4 transition-all hover:scale-[1.02] hover:border-primary hover:bg-primary/10"
            >
              <Phone className="size-6 text-primary" strokeWidth={1.5} />
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Vedľajšia linka</div>
                <div className="text-xl font-bold">0910 619 745</div>
              </div>
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/p/BoRa-TAXI-Zlat%C3%A9-Moravce-61576171593687/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-12 items-center justify-center border border-white/15 transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="size-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/bora_taxi_zm/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-12 items-center justify-center border border-white/15 transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-5" strokeWidth={1.5} />
            </a>
          </div>

          <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6 text-sm text-white/70">
            <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} />
            <div>
              <div className="font-semibold text-white">ZM - TAXI s.r.o.</div>
              <div>Rázusova 800/12, 94901 Nitra</div>
              <div>IČO: 46 684 921</div>
            </div>
          </div>
        </div>

        <div className="border border-white/10 shadow-brand">
          <img src={airportImg} alt="BoRa TAXI na letisku" className="size-full object-cover" />
        </div>
      </div>
    </section>
  );
}
