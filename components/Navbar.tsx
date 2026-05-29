import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    // L'header fa da contenitore fisso/sticky e aggiunge il padding (margine) superiore e laterale
    <header className="fixed top-0 z-50 w-full px-4 pt-4 sm:px-6">
      {/* Questo div diventa la vera barra flottante:
        - max-w-7xl: mantiene la larghezza coerente con il resto della pagina
        - bg-[#f6f3ee]/40: ridotto l'alpha a /40 per renderlo più trasparente e valorizzare il blur
        - backdrop-blur-xl: l'effetto sfocatura sullo sfondo
        - rounded-3xl e border: per i bordi arrotondati e l'effetto "vetro" sottile
        - shadow-lg/5: aggiunge profondità per farla sembrare davvero sospesa
      */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-3xl border border-black/5 bg-[#f6f3ee]/40 px-6 shadow-lg shadow-black/5 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="active:scale-[0.99] transition-all">
          <div className="flex items-center gap-5">
            <img src="/hodos_logo_dark.svg" className="hidden h-9 w-9" />
            <img src="/hodos_logotype_light.svg" className="h-6" />
            <span className="hidden font-serif text-2xl font-semibold tracking-tight">
              FocusPilot
            </span>
          </div>
        </Link>

        {/* Links di Navigazione */}
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex font-poppins">
          <Link
            href="#features"
            className="transition hover:opacity-60 active:scale-[0.98]"
          >
            Funzionalità
          </Link>
          <Link
            href="#pricing"
            className="transition hover:opacity-60 active:scale-[0.98]"
          >
            Prezzi
          </Link>
          <Link
            href="#changelog"
            className="transition hover:opacity-60 active:scale-[0.98]"
          >
            Changelog
          </Link>
          <Link
            href="#resources"
            className="transition hover:opacity-60 active:scale-[0.98]"
          >
            Risorse
          </Link>
        </nav>

        {/* Pulsanti di Azione */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hover:bg-transparent">
            Accedi
          </Button>

          <Link href="/subscribe">
            <Button className="group h-12 rounded-2xl bg-[#111111] px-6 text-white hover:bg-black font-poppins">
              Inizia gratis
              <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:-mr-1 group-hover:ml-3" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
