"use client";

import { useState, useRef } from "react";
import { Check, ArrowRight, Zap, Building2, Flame } from "lucide-react";
import { TextShimmerWave } from "./motion-primitives/text-shimmer-wave";

type PlanType = "early" | "pro" | "custom";

export default function MobileFriendlyPricingDeck() {
  const [activePlan, setActivePlan] = useState<PlanType>("pro");
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  // Stati per la gestione del Drag & Swipe manuale
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const planOrder: PlanType[] = ["early", "pro", "custom"];

  const plans = [
    {
      id: "early" as PlanType,
      tag: "Fase Iniziale / Indie",
      title: "Early Adopter",
      price: billing === "yearly" ? "9" : "14",
      desc: "Riservato ai primi 500 utenti che supportano la visione fin dall'inizio.",
      features: [
        "Fino a 3.000 feedback/mese",
        "Raggruppamento AI base (24h)",
        "Widget pubblico personalizzabile",
        "Supporto via Email prioritario",
      ],
      icon: Flame,
      badge: "bg-amber-50 text-amber-600 border-amber-200/60",
      accentColor: "text-amber-500",
      btnClass:
        "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/10",
    },
    {
      id: "pro" as PlanType,
      tag: "Il Motore Completo",
      title: "Pro Focus",
      price: billing === "yearly" ? "29" : "39",
      desc: "Per team e creatori che spediscono codice e prodotti ogni singola settimana.",
      features: [
        "Feedback e canali illimitati",
        "Raggruppamento AI real-time",
        "Focus Settimanale automatico",
        "Integrazioni (Slack, Discord, Linear)",
        "Analisi predittiva dei trend",
      ],
      icon: Zap,
      badge: "bg-[#6F3BFF]/5 text-[#6F3BFF] border-[#6F3BFF]/10",
      accentColor: "text-[#6F3BFF]",
      btnClass:
        "bg-[#6F3BFF] hover:bg-[#5a2be0] text-white shadow-[#6F3BFF]/20",
    },
    {
      id: "custom" as PlanType,
      tag: "Custom Architecture",
      title: "Enterprise",
      price: "Custom",
      desc: "Infrastruttura dedicata, sicurezza avanzata e modelli AI addestrati sul tuo workspace.",
      features: [
        "Data retention personalizzabile",
        "Modello linguistico privato",
        "SLA garantiti e uptime 99.99%",
        "Solution Engineer dedicato",
      ],
      icon: Building2,
      badge: "bg-blue-50 text-blue-600 border-blue-100",
      accentColor: "text-blue-500",
      btnClass: "bg-black hover:bg-black/80 text-white shadow-black/10",
    },
  ];

  // Gestione inizio Drag (Mouse + Touch)
  const handleDragStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
  };

  // Gestione movimento Drag
  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const offset = clientX - startX.current;
    // Smorzamento del trascinamento alle estremità del mazzo
    if (activePlan === "early" && offset > 0)
      return setDragOffset(offset * 0.3);
    if (activePlan === "custom" && offset < 0)
      return setDragOffset(offset * 0.3);
    setDragOffset(offset);
  };

  // Fine Drag: calcola se cambiare carta o resettare la posizione
  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const currentIndex = planOrder.indexOf(activePlan);
    const threshold = 100; // Pixel minimi per attivare lo swipe

    if (dragOffset < -threshold && currentIndex < planOrder.length - 1) {
      setActivePlan(planOrder[currentIndex + 1]);
    } else if (dragOffset > threshold && currentIndex > 0) {
      setActivePlan(planOrder[currentIndex - 1]);
    }
    setDragOffset(0);
  };

  const getDeckStyles = (planId: PlanType) => {
    const activeIndex = planOrder.indexOf(activePlan);
    const itemIndex = planOrder.indexOf(planId);

    if (activeIndex === itemIndex) {
      // CARD ATTIVA
      return {
        style: {
          transform: `translateX(${dragOffset}px) scale(1) rotate(${dragOffset * 0.02}deg)`,
        },
        classes:
          "z-30 opacity-100 pointer-events-auto shadow-[0_40px_100px_rgba(0,0,0,0.06)] border-black/[0.06]",
      };
    }

    // Calcolo dinamico per le card in secondo piano quando c'è un trascinamento in corso
    const baseOffset = itemIndex < activeIndex ? -38 : 38;
    const baseRotate = itemIndex < activeIndex ? -3 : 3;
    const dragModifier = dragOffset / 12;

    return {
      style: {
        transform: `translateX(calc(${baseOffset}% + ${dragOffset * 0.4}px)) scale(0.88) rotate(${baseRotate + dragModifier}deg)`,
      },
      classes: "z-10 opacity-30 cursor-pointer pointer-events-auto",
    };
  };

  return (
    <section
      id="pricing"
      className="py-32 bg-[#faf8f5]/40 relative overflow-hidden select-none"
    >
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center">
        {/* HEADER */}
        <div className="text-center max-w-2xl mb-16">
          <span className="font-[Poppins] text-xs font-bold uppercase tracking-[0.2em] text-[#6F3BFF]">
            Piani Flessibili
          </span>
          <h2 className="mt-3 font-[Poppins] text-4xl md:text-5xl font-light tracking-tight text-black/90">
            Scegli la tua velocità <br />
            di <span className=" text-[#6F3BFF]">spedizione</span>.
          </h2>

          {/* SWITCH MENSILE / ANNUALE */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-black/[0.03] border border-black/5 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1.5 font-[Poppins] text-xs font-semibold rounded-lg transition-all ${
                billing === "monthly"
                  ? "bg-white text-black shadow-sm"
                  : "text-black/40 hover:text-black/60"
              }`}
            >
              Mensile
            </button>
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`px-4 py-1.5 font-[Poppins] text-xs font-semibold rounded-lg transition-all ${
                billing === "yearly"
                  ? "bg-white text-[#6F3BFF] shadow-sm"
                  : "text-black/40 hover:text-black/60"
              }`}
            >
              Annuale (-25%)
            </button>
          </div>
        </div>

        <div>
          <TextShimmerWave
            duration={1.5}
            spread={1}
            zDistance={3}
            scaleDistance={1.1}
            rotateYDistance={10}
            className="mt-1 font-[Lora] text-md [--base-color:oklch(0.556 0 0)] [--base-gradient-color:oklch(0.708 0 0)]"
          >
            Swipe the plans...
          </TextShimmerWave>
        </div>
        {/* INDICATORI (PUNTINI DI NAVIGAZIONE) */}
        <div className="mb-8 mt-4 flex items-center gap-3">
          {planOrder.map((id) => (
            <button
              key={id}
              onClick={() => setActivePlan(id)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activePlan === id
                  ? "w-8 bg-[#6F3BFF]"
                  : "w-2 bg-black/10 hover:bg-black/30"
              }`}
            />
          ))}
        </div>

        {/* CONTENITORE DECK INTERATTIVO CON GESTIONE EVENTI INPUT */}
        <div
          className="relative w-full max-w-[430px] h-[580px] md:h-[600px] flex items-center justify-center mt-4 touch-none active:cursor-grabbing"
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {plans.map((plan) => {
            const CurrentIcon = plan.icon;
            const isCustom = plan.price === "Custom";
            const isActive = activePlan === plan.id;
            const { style, classes } = getDeckStyles(plan.id);

            return (
              <div
                key={plan.id}
                onClick={() => !isActive && setActivePlan(plan.id)}
                className={`absolute inset-0 rounded-[38px] border bg-white p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ease-out select-none ${classes}`}
                style={style}
              >
                {/* MASCHERA DI BLUR SULLE CARD LATERALI */}
                {!isActive && (
                  <div className="absolute inset-0 rounded-[38px] bg-white/20 backdrop-blur-[4px] z-40 flex items-center justify-center p-4">
                    <span
                      className={`font-[Poppins] text-[11px] font-bold uppercase tracking-wider ${plan.accentColor} bg-white shadow-md px-3 py-1.5 rounded-xl border border-black/[0.03]`}
                    >
                      {plan.title}
                    </span>
                  </div>
                )}

                {/* CONTENUTO CARD */}
                <div
                  className={
                    isActive
                      ? "opacity-100 transition-opacity duration-300"
                      : "opacity-10 pointer-events-none"
                  }
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`inline-flex h-9 px-3 items-center gap-2 rounded-xl border text-xs font-semibold font-[Poppins] ${plan.badge}`}
                    >
                      <CurrentIcon className="h-3.5 w-3.5" />
                      {plan.tag}
                    </div>
                  </div>

                  <h3 className="mt-6 font-[Poppins] text-3xl font-semibold tracking-tight text-black/90">
                    {plan.title}
                  </h3>
                  <p className="mt-2 font-[Poppins] text-xs leading-relaxed text-black/40">
                    {plan.desc}
                  </p>

                  {/* PREZZO */}
                  <div className="mt-8 flex items-baseline gap-1 text-black/90">
                    {!isCustom && (
                      <span className="font-[Poppins] text-xl font-light opacity-30 translate-y-[-10px] mr-0.5">
                        €
                      </span>
                    )}
                    <span className="font-[Poppins] text-5xl font-bold tracking-tighter tabular-nums">
                      {plan.price}
                    </span>
                    {!isCustom && (
                      <span className="font-[Poppins] text-xs font-medium ml-2 opacity-40">
                        / mese
                      </span>
                    )}
                  </div>

                  {/* CARATTERISTICHE */}
                  <ul className="mt-8 space-y-3.5">
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm font-[Poppins] font-medium text-black/70"
                      >
                        <div
                          className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-current opacity-10 ${plan.accentColor}`}
                        >
                          <Check
                            className={`h-2.5 w-2.5 stroke-[4px] ${plan.accentColor}`}
                          />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTTONE CALL TO ACTION */}
                <div
                  className={
                    isActive
                      ? "opacity-100 transition-opacity duration-300"
                      : "opacity-0 pointer-events-none"
                  }
                >
                  <button
                    type="button"
                    className={`w-full group/btn rounded-xl py-3.5 px-4 font-[Poppins] text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${plan.btnClass}`}
                  >
                    <span>{isCustom ? "Contatta il Team" : "Inizia Ora"}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
