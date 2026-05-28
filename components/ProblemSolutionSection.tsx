export default function ProblemSolutionSection() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="mb-6 font-[Poppins] text-xs font-semibold tracking-[0.2em] text-[#6F3BFF] uppercase">
            Il problema
          </div>

          <h2 className="font-[Lora] text-6xl leading-[1] tracking-[-0.04em]">
            Troppo rumore.
            <br />
            Nessun focus.
          </h2>

          <p className="mt-8 max-w-lg font-[Poppins] text-lg leading-relaxed text-black/70">
            Email, DM, Discord, screenshot, bug report. I tuoi utenti ti
            scrivono ovunque e finisci per costruire le cose sbagliate.
          </p>
        </div>

        <div className="rounded-[40px] bg-[#111111] p-10 text-white">
          <h2 className="font-[Lora] text-6xl leading-[1] tracking-[-0.04em]">
            Un unico posto.
            <br />
            Decisioni settimanali.
          </h2>

          <p className="mt-8 font-[Poppins] text-lg leading-relaxed text-white/70">
            Centralizza tutto, raggruppa i pattern e ricevi ogni settimana le
            priorità più importanti da affrontare.
          </p>
        </div>
      </div>
    </section>
  );
}
