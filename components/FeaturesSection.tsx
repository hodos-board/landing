import {
  MessageSquare,
  Sparkles,
  TrendingUp,
  Inbox,
  Bot,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6">
        {/* BENTO GRID ASIMMETRICO NARRATIVO */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-12">
          {/* CARD 1: RACCOLTA (Grande, accogliente, sinistra, occupa 7 colonne su desktop) */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-3xl border border-black/5 bg-[#faf8f5] p-10 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] hover:scale-[1.005]">
            <div className="absolute top-0 right-0 h-48 w-48 rounded-bl-full bg-[#6F3BFF]/5 opacity-60 transition-all duration-500 group-hover:scale-110" />

            <div className="flex flex-col h-full justify-between min-h-[300px]">
              <div>
                <div className="inline-flex h-10 px-3 items-center gap-2 rounded-xl bg-white border border-black/[0.04] shadow-sm font-[Poppins] text-xs font-semibold text-black/60">
                  <Inbox className="h-4 w-4 text-[#6F3BFF]" />
                  Fase 01 / Input
                </div>

                <h3 className="mt-8 font-[Poppins] text-3xl tracking-tight text-black/90 max-w-md">
                  Raccogli feedback ovunque,{" "}
                  <span className="text-[#6F3BFF]">senza frizione.</span>
                </h3>
                <p className="mt-3 font-[Poppins] text-sm text-black/40 max-w-sm leading-relaxed">
                  Widget nativo dentro la tua app, board pubblica per gli utenti
                  o invio centralizzato tramite API. Zero barriere.
                </p>
              </div>

              {/* Elemento Visual di Design Interattivo Interno */}
              <div className="mt-8 flex gap-2 overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-black/5 text-xs text-black/60 font-[Poppins] shadow-sm flex items-center gap-1.5">
                  <MessageSquare className="h-3 w-3 text-emerald-500" /> Discord
                  Sync
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-black/5 text-xs text-black/60 font-[Poppins] shadow-sm flex items-center gap-1.5">
                  In-App Widget
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-black/5 text-xs text-black/60 font-[Poppins] shadow-sm opacity-50">
                  + Intercom
                </span>
              </div>
            </div>
          </div>

          {/* CARD 2: CLASSIFICAZIONE (Stretta, verticale, destra, occupa 5 colonne su desktop) */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-[#111111] p-10 text-white transition-all duration-500 hover:shadow-[0_30px_60px_rgba(111,59,255,0.1)] hover:scale-[1.005]">
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#6F3BFF]/20 blur-3xl transition-opacity opacity-50 group-hover:opacity-100" />

            <div className="flex flex-col h-full justify-between min-h-[300px]">
              <div>
                <div className="inline-flex h-10 px-3 items-center gap-2 rounded-xl bg-white/5 border border-white/10 font-[Poppins] text-xs font-semibold text-white/70">
                  <Bot className="h-4 w-4 text-[#FFD84D]" />
                  Fase 02 / AI Processing
                </div>

                <h3 className="mt-8 font-[Poppins] text-3xl tracking-tight text-white/90">
                  Classificazione <br />
                  <span className="text-[#FFD84D]">intelligente.</span>
                </h3>
                <p className="mt-3 font-[Poppins] text-sm text-white/50 leading-relaxed">
                  L&apos;algoritmo analizza il linguaggio semantico, elimina i
                  duplicati e raggruppa le richieste in pattern macroscopici in
                  tempo reale.
                </p>
              </div>

              {/* Indicatore Visivo Minimalista */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-[Poppins] text-xs text-white/40">
                  Cluster Automation Attiva
                </span>
                <div className="h-2 w-2 rounded-full bg-[#00C26F] animate-pulse" />
              </div>
            </div>
          </div>

          {/* CARD 3: REASSUNTO/OUTPUT (Larga, orizzontale in basso, occupa tutte le 12 colonne) */}
          <div className="md:col-span-12 group relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-r from-white via-white to-[#6F3BFF]/5 p-10 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] hover:scale-[1.002]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
              <div className="max-w-xl">
                <div className="inline-flex h-10 px-3 items-center gap-2 rounded-xl bg-[#6F3BFF]/5 border border-[#6F3BFF]/10 font-[Poppins] text-xs font-semibold text-[#6F3BFF]">
                  <Trophy className="h-4 w-4" />
                  Fase 03 / L&apos;Impatto Reale
                </div>

                <h3 className="mt-6 font-[Poppins] text-3xl md:text-4xl  tracking-tight text-black/90">
                  Ogni lunedì, ricevi il{" "}
                  <span className="text-[#6F3BFF]">Focus Settimanale</span>.
                </h3>
                <p className="mt-3 font-[Poppins] text-sm text-black/50 leading-relaxed">
                  Niente dashboard complesse da guardare ogni ora. Generiamo un
                  resoconto definitivo con le sole 3 macro-priorità da mettere
                  in roadmap subito. Il resto è rumore archiviato.
                </p>
              </div>

              {/* Pulsante di call-to-action interna o elemento grafico strutturale */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="h-16 w-16 rounded-full border border-black/5 bg-white shadow-md flex items-center justify-center group-hover:bg-[#6F3BFF] group-hover:border-[#6F3BFF] transition-all duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="h-6 w-6 text-black/40 group-hover:text-white transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
