import { Activity, Sparkles, TrendingUp } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Activity,
      title: "-70%",
      text: "tempo perso a leggere messaggi sparsi",
    },
    {
      icon: Sparkles,
      title: "3x",
      text: "più chiarezza sulle priorità reali",
    },
    {
      icon: TrendingUp,
      title: "+40%",
      text: "più velocità nello shipped delle cose giuste",
    },
  ];

  return (
    <section className="border-y border-black/5 bg-white/50 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6F3BFF]/10">
              <stat.icon className="h-6 w-6 text-[#6F3BFF]" />
            </div>

            <div>
              <p className="font-[Poppins] text-4xl font-semibold tracking-tight">
                {stat.title}
              </p>
              <p className="mt-1 font-[Poppins] text-black/60">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
