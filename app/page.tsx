import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AgentsFlow from "@/components/AgentsFlow";
import TeamSection from "@/components/TeamSection";
import BentoSection from "@/components/BentoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col bg-void">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <AgentsFlow />
      <BentoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
