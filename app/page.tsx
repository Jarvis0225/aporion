import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgentsFlow from "@/components/AgentsFlow";
import TeamSection from "@/components/TeamSection";
import BentoSection from "@/components/BentoSection";

export default function Home() {
  return (
    <main className="flex flex-col bg-void">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <AgentsFlow />
      <BentoSection />
      
      {/* Placeholder for future sections */}
      <div className="min-h-screen flex items-center justify-center py-40 px-6">
        <p className="text-[#A1A1AA] text-sm font-[family-name:var(--font-jetbrains)] font-light">
          [ More sections coming soon... ]
        </p>
      </div>
    </main>
  );
}
