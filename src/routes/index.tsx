import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { useScrollRestoration } from "@/hooks/use-scroll-restoration";
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
  useScrollRestoration();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="flex flex-col pt-14 pb-24 sm:pt-16 md:pb-0">
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
