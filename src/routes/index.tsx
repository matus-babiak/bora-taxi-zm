import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CallFab } from "@/components/CallFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BoRa TAXI Zlaté Moravce — Spoľahlivé taxi 0915 750 725" },
      {
        name: "description",
        content:
          "Taxislužba BoRa TAXI Zlaté Moravce — nové autá, najnižšie ceny, letiská a dlhé trasy. NONSTOP po rezervácii. Volajte 0915 750 725.",
      },
      { property: "og:title", content: "BoRa TAXI Zlaté Moravce" },
      {
        property: "og:description",
        content: "Spoľahlivá taxislužba v Zlatých Moravciach. Mesto, okolie, letiská. Volajte 0915 750 725.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <CallFab />
    </div>
  );
}
