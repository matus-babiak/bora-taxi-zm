import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { href: "#o-nas", label: "O nás" },
  { href: "#sluzby", label: "Služby" },
  { href: "#cennik", label: "Cenník" },
  { href: "#recenzie", label: "Recenzie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-14 max-w-[1140px] items-center justify-between gap-3 px-4 sm:h-16 sm:px-5">
        <a href="#top" className="flex min-w-0 items-center gap-2 text-base font-bold tracking-tight sm:text-lg">
          <span className="bg-primary px-2 py-0.5 text-primary-foreground">BoRa</span>
          <span>TAXI ZM</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="tel:+421915750725"
          className="hidden items-center gap-2 bg-[var(--cta)] px-4 py-2 text-sm font-semibold text-[var(--cta-foreground)] transition-colors hover:bg-[var(--cta-hover)] md:inline-flex"
        >
          <Phone className="size-4" /> 0915 750 725
        </a>
        <button
          aria-label="Menu"
          type="button"
          onClick={() => setOpen(!open)}
          className="-mr-1 touch-manipulation p-2 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-h-[min(70vh,calc(100dvh-3.5rem))] max-w-[1140px] flex-col overflow-y-auto overscroll-contain px-4 py-3 sm:px-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+421915750725"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[var(--cta)] px-4 py-3 font-semibold text-[var(--cta-foreground)] transition-colors hover:bg-[var(--cta-hover)]"
            >
              <Phone className="size-4" /> 0915 750 725
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
