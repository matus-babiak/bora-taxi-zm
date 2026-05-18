import { useEffect, useRef, useState } from "react";
import { Phone, Instagram, Facebook, MapPin } from "lucide-react";
import heroImg from "@/assets/taxi-hero.jpg";

const LEFT_COLUMN_TALLER_RATIO = 1.15;

export function Contact() {
  const leftRef = useRef<HTMLDivElement>(null);
  const [photoMinHeight, setPhotoMinHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = leftRef.current;
    if (!el || typeof ResizeObserver === "undefined" || typeof window === "undefined") return;

    const mq = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (!mq.matches) {
        setPhotoMinHeight(undefined);
        return;
      }
      setPhotoMinHeight(el.getBoundingClientRect().height * LEFT_COLUMN_TALLER_RATIO);
    };

    update();
    const ro = new ResizeObserver(() => update());
    ro.observe(el);
    mq.addEventListener("change", update);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    <section id="kontakt" className="bg-[var(--ink)] py-14 text-white sm:py-20">
      <div className="mx-auto flex max-w-[1140px] flex-col gap-10 px-4 sm:gap-14 sm:px-5 lg:flex-row lg:items-stretch lg:gap-20">
        <div className="flex min-h-0 min-w-0 flex-1 basis-0 flex-col justify-center">
          <div ref={leftRef} className="min-w-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Kontakt</p>
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Zavolajte <span className="text-primary">teraz</span>
          </h2>
          <p className="mt-3 text-white/70">Tešíme sa na vás — Vaše BoRa TAXI Zlaté Moravce.</p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="tel:+421915750725"
              className="group flex min-h-12 w-full min-w-0 flex-1 touch-manipulation items-center justify-center gap-2 bg-[var(--cta)] px-4 py-3.5 text-sm font-bold text-[var(--cta-foreground)] transition-colors animate-pulse-cta hover:bg-[var(--cta-hover)] sm:min-h-[52px] sm:gap-3 sm:px-7 sm:py-5 sm:text-lg"
            >
              <Phone className="size-5 shrink-0 sm:size-6" /> 0915 750 725
            </a>
            <a
              href="tel:+421910619745"
              className="flex min-h-12 w-full min-w-0 flex-1 touch-manipulation items-center justify-center gap-2 border-2 border-white/30 bg-white/5 px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[var(--cta)] hover:text-[var(--cta)] hover:bg-[var(--cta)]/10 sm:min-h-[52px] sm:gap-3 sm:px-7 sm:py-5 sm:text-lg"
            >
              <Phone className="size-5 shrink-0 sm:size-6" /> 0910 619 745
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
        </div>

        <div
          className="relative w-full min-w-0 shrink-0 lg:min-h-0 lg:flex-1 lg:basis-0"
          style={photoMinHeight != null ? { minHeight: photoMinHeight } : undefined}
        >
          <img
            src={heroImg}
            alt="BoRa TAXI Zlaté Moravce"
            className="block h-auto w-full max-w-full object-contain object-center lg:absolute lg:inset-0 lg:h-full lg:max-w-none lg:object-right"
          />
        </div>
      </div>
    </section>
  );
}
