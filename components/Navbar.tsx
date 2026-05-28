import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f6f3ee]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black font-serif font-semibold text-white">
            F/
          </div>
          <span className="font-serif text-2xl font-semibold tracking-tight">
            FocusPilot
          </span>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          <Link href="#features" className="transition hover:opacity-60">
            Funzionalità
          </Link>
          <Link href="#pricing" className="transition hover:opacity-60">
            Prezzi
          </Link>
          <Link href="#changelog" className="transition hover:opacity-60">
            Changelog
          </Link>
          <Link href="#resources" className="transition hover:opacity-60">
            Risorse
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden font-[Poppins] text-sm font-medium md:block">
            Accedi
          </button>

          <Button className="group h-12 rounded-2xl bg-[#111111] px-6 font-[Poppins] text-white hover:bg-black">
            Inizia gratis
            <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:-mr-1 group-hover:ml-3" />
          </Button>
        </div>
      </div>
    </header>
  );
}
