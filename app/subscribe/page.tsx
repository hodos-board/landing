"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simuliamo la chiamata API (es. integrazione con Loop, Resend o database)
    // per dare enfasi alla micro-interazione.
    await new Promise((resolve) => setTimeout(resolve, 1800));

    // Qui andrà la logica reale (es: fetch('/api/subscribe', ...))
    setStatus("success");
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f6f3ee] text-[#111111] px-6">
      {/* Background Decorativo coerente con la Landing */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#6F3BFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#FFD84D]/10 blur-3xl" />

      {/* Bottone di ritorno alla Home */}
      <Link
        href="/"
        className="group absolute top-8 left-8 flex items-center gap-2 font-poppins text-sm font-medium text-black/60 transition hover:text-black"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Torna alla home
      </Link>

      <div className="w-full max-w-xl z-10">
        <Card className="overflow-hidden rounded-[36px] border border-black/5 bg-white/90 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.06)] backdrop-blur-xl">
          {/* STATO 1: IDLE / LOADING (Il Form) */}
          {status !== "success" && (
            <div className="animate-fade-in">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6F3BFF]/20 bg-[#6F3BFF]/5 px-4 py-2">
                <Sparkles className="h-3 w-3 text-[#6F3BFF] animate-pulse" />
                <span className="font-poppins text-xs font-semibold tracking-[0.04em] text-[#6F3BFF] uppercase">
                  Accesso Anticipato Esclusivo
                </span>
              </div>

              <h1 className="font-[Lora] text-4xl sm:text-5xl leading-[1.1] tracking-[-0.03em]">
                Diventa un{" "}
                <span className="text-[#6F3BFF] italic">Beta Builder</span>.
              </h1>

              <p className="mt-4 font-poppins text-black/60 leading-relaxed">
                I posti per il lancio iniziale sono limitati. Lascia la tua
                email da founder: ti contatteremo non appena FocusPilot sarà
                pronto, riservandoti un{" "}
                <strong className="text-black font-semibold">
                  forte sconto sul piano Premium
                </strong>{" "}
                o una{" "}
                <strong className="text-black font-semibold">
                  prova gratuita estesa
                </strong>
                .
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="relative flex flex-col sm:flex-row gap-3 rounded-2xl sm:border sm:border-black/10 sm:bg-[#faf8f5] sm:p-2">
                  <Input
                    type="email"
                    required
                    disabled={status === "loading"}
                    placeholder="La tua migliore email aziendale..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 sm:h-12 border border-black/10 sm:border-0 bg-[#faf8f5] sm:bg-transparent px-4 font-poppins text-base shadow-none focus-visible:ring-2 focus-visible:ring-[#6F3BFF] sm:focus-visible:ring-0 rounded-xl sm:flex-1"
                  />

                  {/* Micro-interaction Button */}
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className={`h-14 sm:h-12 rounded-xl px-6 font-poppins font-medium text-white transition-all duration-300 sm:w-auto w-full
                      ${
                        status === "loading"
                          ? "bg-[#6F3BFF]/80 cursor-not-allowed scale-[0.98]"
                          : "bg-[#111111] hover:bg-black active:scale-[0.97]"
                      }
                    `}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-white" />
                        Salvataggio...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1 group">
                        Assicura il mio sconto
                        <ArrowRight className="ml-2 h-4 w-4 transition-all group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </div>
                <p className="text-xs font-poppins text-black/40 text-center sm:text-left pl-2">
                  🛡️ Zero spam. Solo aggiornamenti sullo sviluppo e il tuo
                  codice sconto.
                </p>
              </form>
            </div>
          )}

          {/* STATO 2: SUCCESS (Messaggio di conferma con animazione) */}
          {status === "success" && (
            <div className="flex flex-col items-center text-center py-6 animate-scale-up">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00C26F]/10 mb-6 ">
                <CheckCircle2 className="h-10 w-10 text-[#00A55D]" />
              </div>

              <h2 className="font-lora text-4xl tracking-[-0.03em]">
                Sei dentro, Founder!
              </h2>

              <p className="mt-4 font-poppins text-black/60 max-w-md leading-relaxed">
                Abbiamo registrato correttamente l&apos;indirizzo{" "}
                <span className="font-semibold text-black">{email}</span>. Sei
                ufficialmente in lista per ricevere l&apos;accesso prioritario e
                l&apos;offerta di lancio dedicata.
              </p>

              <div className="mt-8 pt-6 border-t border-black/5 w-full">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="h-12 rounded-xl border-black/10 bg-white px-6 font-poppins text-sm font-medium"
                  >
                    Torna alla Landing Page
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Card>
      </div>
    </main>
  );
}
