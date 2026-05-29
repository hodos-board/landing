import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import PricingSection from "@/components/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f3ee] text-[#111111]">
      {/* Background Decorativo */}
      <div className="pointer-events-none absolute top-0 right-0 h-[700px] w-[700px] rounded-full bg-[#6F3BFF]/10 blur-3xl" />
      <div className="pointer-events-none absolute top-[200px] right-[100px] h-[500px] w-[500px] rounded-full bg-[#FFD84D]/20 blur-3xl" />

      <Navbar />

      <HeroSection />

      <StatsSection />

      <ProblemSolutionSection />

      <FeaturesSection />

      <PricingSection />

      <CTASection />
    </main>
  );
}
