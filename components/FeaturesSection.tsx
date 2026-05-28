import { MessageSquare, Sparkles, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Raccogli feedback ovunque",
      text: "Widget, board pubblica e raccolta centralizzata.",
    },
    {
      icon: Sparkles,
      title: "Classifica bug e richieste",
      text: "AI che raggruppa pattern e priorità automaticamente.",
    },
    {
      icon: TrendingUp,
      title: "Ricevi il focus settimanale",
      text: "Le 3 priorità principali da affrontare subito.",
    },
  ];

  return (
    <section id="features" className="pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="rounded-[32px] border border-black/5 bg-white p-8"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6F3BFF]/10">
                <feature.icon className="h-6 w-6 text-[#6F3BFF]" />
              </div>

              <h3 className="font-[Poppins] text-2xl font-semibold tracking-tight">
                {feature.title}
              </h3>

              <p className="mt-4 font-[Poppins] leading-relaxed text-black/60">
                {feature.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
