import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function ProblemSolutionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 items-center">
        {/* COLONNA SINISTRA: STORYTELLING (PROBLEMA + SOLUZIONE FLUSSO VERTICALE) */}
        <div className="lg:col-span-6 space-y-18">
          {/* BLOCCO BLOCCO A: IL PROBLEMA */}
          <div className="group transition-all">
            <div className="mb-4 inline-flex items-center gap-2 font-[Poppins] text-xs font-semibold tracking-[0.2em] text-red-500 uppercase bg-red-50 px-3 py-1 rounded-full">
              <AlertCircle className="h-3.5 w-3.5 stroke-[2.5px]" />
              Il problema
            </div>

            <h2 className="font-[Poppins] text-4xl md:text-5xl leading-[1.1] font-light tracking-[-0.03em] text-black/90">
              Troppo rumore.{" "}
              <span className="text-black/40 font-light">Nessun focus.</span>
            </h2>

            <p className="mt-4 max-w-xl font-[Lora] text-base md:text-lg leading-relaxed text-black/60">
              Email, DM, Discord, screenshot, bug report. I tuoi utenti ti
              scrivono ovunque e finisci per perdere giornate a decifrare il
              caos e costruire le cose sbagliate.
            </p>
          </div>

          {/* BLOCCO B: LA SOLUZIONE */}
          <div className="group transition-all">
            <div className="mb-4 inline-flex items-center gap-2 font-[Poppins] text-xs font-semibold tracking-[0.2em] text-[#6F3BFF] uppercase bg-[#6F3BFF]/5 px-3 py-1 rounded-full">
              <CheckCircle2 className="h-3.5 w-3.5 stroke-[2.5px]" />
              La soluzione
            </div>

            <h2 className="font-[Poppins] text-4xl md:text-5xl leading-[1.1] font-light tracking-[-0.03em] text-black/90">
              Un unico posto.{" "}
              <span className="text-[#6F3BFF] font-light">
                Decisioni chiare.
              </span>
            </h2>

            <p className="mt-4 max-w-xl font-[Lora] text-base md:text-lg leading-relaxed text-black/70">
              Centralizza tutto, raggruppa i pattern in automatico e ricevi ogni
              settimana le priorità assolute da affrontare senza sforzo.
            </p>
          </div>
        </div>

        {/* COLONNA DESTRA: PLACEHOLDER IMMAGINE DI DESIGN STYLE */}
        <img
          src="/shouting_man.jpg"
          className="lg:col-span-6 w-auto aspect-[4/3] rounded-3xl lg:aspect-square relative group"
        />
      </div>
    </section>
  );
}
