import AIGen from "@/components/collaborate/AI-Gen";
import Contact from "@/components/collaborate/Contact";
import Cooperate from "@/components/collaborate/Cooperate";
import Collaborate from "@/components/collaborate/collaborate";
import EmpowerEfficiency from "@/components/cpu-advantage/empower-efficiency";
import EnhanceMining from "@/components/enhance-mining/enhance-mining";
import Hero from "@/components/hero/hero";
import Redefine from "@/components/redefine/redefine-efficiency";
import StrategicGoal from "@/components/strategic/strategic-goal";

export default function Home() {
  return (
    <main
      style={{
        backgroundRepeat: "no-repeat",
      }}
      className="w-full flex flex-col items-center bg-cover md:bg-main bg-mobile"
    >
      <Hero />
      <EnhanceMining />
      <StrategicGoal />
      <Redefine />
      <EmpowerEfficiency />
      <Collaborate />
      <AIGen />
      <Cooperate />
      <Contact />
    </main>
  );
}
