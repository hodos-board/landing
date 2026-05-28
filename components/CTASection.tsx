import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[40px] bg-[#111111] p-20">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-3xl font-[Lora] text-6xl leading-[1] tracking-[-0.04em] text-white">
                Smetti di rincorrere feedback sparsi.
              </h2>

              <p className="mt-6 max-w-2xl font-[Poppins] text-xl leading-relaxed text-white/70">
                Più chiarezza. Più focus. Nessuna complessità enterprise.
              </p>
            </div>

            <Button className="h-16 rounded-2xl bg-white px-10 font-[Poppins] text-lg font-semibold text-black hover:bg-white/90">
              Attiva il tuo workspace
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
