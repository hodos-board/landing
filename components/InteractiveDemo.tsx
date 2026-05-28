"use client";

import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

export default function InteractiveDemo() {
  return (
    <Card className="relative overflow-hidden rounded-[36px] border border-black/5 bg-white/90 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.08)]">
      <div className="absolute top-0 right-0 h-[240px] w-[240px] rounded-full bg-[#6F3BFF]/10 blur-3xl" />

      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="font-[Poppins] text-2xl font-semibold">Prova Live</p>
          <p className="mt-1 font-[Poppins] text-black/60">
            Simula un feedback reale
          </p>
        </div>

        <div className="font-[Poppins] text-sm text-black/40">
          Aggiornamento live
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-3xl border border-black/10 bg-[#faf8f5] p-5">
          <Input
            className="border-0 bg-transparent p-0 font-[Poppins] text-base shadow-none focus-visible:ring-0"
            defaultValue="L'app crasha quando provo a esportare un CSV su mobile"
          />

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3 font-[Poppins] text-sm text-black/50">
              <div className="rounded-xl bg-black/5 px-3 py-2">
                Screenshot allegato
              </div>
              <div className="rounded-xl bg-black/5 px-3 py-2">Safari iOS</div>
            </div>

            <Button className="rounded-2xl bg-[#6F3BFF] font-[Poppins] hover:bg-[#5a2be0]">
              Invia feedback
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-3xl border border-black/10 p-5">
            <div className="mb-6 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#6F3BFF]" />
              <span className="font-[Poppins] font-medium">
                Analisi AI live
              </span>
            </div>

            <div className="space-y-5">
              <Step label="Analisi del contenuto" active />
              <Step label="Raggruppamento AI" active />
              <Step label="Priorità stimata" active />
              <Step label="Incluso nel digest" />
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#faf8ff] p-5">
            <div className="flex items-center justify-between">
              <span className="font-[Poppins] font-medium">Match trovato</span>
              <div className="rounded-full bg-[#00C26F]/10 px-3 py-1 font-[Poppins] text-xs font-medium text-[#00A55D]">
                LIVE
              </div>
            </div>

            <div className="mt-6">
              <div className="rounded-2xl border border-black/5 bg-white p-4">
                <p className="font-[Poppins] font-medium">
                  Crash esportazione CSV
                </p>
                <p className="mt-1 font-[Poppins] text-sm text-black/50">
                  23 segnalazioni simili
                </p>

                <div className="mt-4 flex gap-2">
                  {["Bug", "Mobile", "Import"].map((tag) => (
                    <div
                      key={tag}
                      className="rounded-full bg-black/5 px-3 py-1 font-[Poppins] text-xs font-medium"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between font-[Poppins] text-sm">
                  <span>Priorità stimata</span>
                  <span className="font-semibold text-red-500">Alta</span>
                </div>
                <Progress value={82} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function Step({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
          active
            ? "border-[#6F3BFF] bg-[#6F3BFF]"
            : "border-black/20 bg-transparent"
        }`}
      >
        {active && <Check className="h-3 w-3 text-white" />}
      </div>
      <span className="font-[Poppins] text-sm">{label}</span>
    </div>
  );
}
