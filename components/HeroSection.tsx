import { ArrowRight, CircleDot, Play } from "lucide-react";
import InteractiveDemo from "./InteractiveDemo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-16">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#6F3BFF]/20 bg-[#6F3BFF]/5 px-4 py-2">
              <CircleDot className="h-3 w-3 animate-pulse fill-[#6F3BFF] text-[#6F3BFF]" />
              <span className="font-[Poppins] text-xs font-medium tracking-[0.06em] text-[#6F3BFF] uppercase">
                Feedback per builder indipendenti
              </span>
            </div>

            <h1 className="max-w-175 font-[Poppins] font-light text-6xl leading-[1.08] tracking-[-0.04em]">
              Trasforma feedback sparsi in <br />
              <span className="text-[#6F3BFF] italic">decisioni chiare</span>
            </h1>

            <p className="max-w-xl font-[Lora] text-xl leading-relaxed text-black/70 mt-6">
              Raccogli bug, suggerimenti e segnali dalla tua community.
              Raggruppiamo, analizziamo e trasformiamo il rumore in priorità
              concrete.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/subscribe">
                <Button className="group h-14 rounded-2xl bg-[#111111] px-8 font-sans text-base  text-white hover:bg-black">
                  Inizia gratis
                  <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:-mr-1 group-hover:ml-3" />
                </Button>
              </Link>

              <Button
                variant="outline"
                className="h-14 rounded-2xl border-black/10 bg-white px-8 font-[Poppins] text-base font-medium"
              >
                <Play className="mr-2 h-4 w-4 fill-black" />
                Vedi come funziona
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-5">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-11 w-11 rounded-full border-2 border-[#f6f3ee] bg-neutral-300"
                  />
                ))}
              </div>

              <div>
                <p className="font-[Poppins] ">Usato da 1.200+ builder</p>
                <p className="font-[Lora] text-sm text-black/60">
                  in tutto il mondo
                </p>
              </div>
            </div>
          </div>

          <InteractiveDemo />
        </div>
      </div>
    </section>
  );
}
