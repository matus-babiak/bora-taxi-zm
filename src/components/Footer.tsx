export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6 sm:py-8">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-3 px-4 text-center text-xs text-muted-foreground sm:flex-row sm:px-5 sm:text-left">
        <div>© {new Date().getFullYear()} BoRa TAXI Zlaté Moravce · ZM - TAXI s.r.o. · IČO: 46 684 921</div>
        <div className="text-sm sm:text-base">
          Volajte:{" "}
          <a href="tel:+421915750725" className="font-semibold text-foreground hover:text-primary">
            0915 750 725
          </a>
        </div>
      </div>
    </footer>
  );
}
