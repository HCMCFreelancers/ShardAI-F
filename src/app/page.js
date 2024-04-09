import AIGen from "@/components/collaborate/AI-Gen";
import Contact from "@/components/collaborate/Contact";
import Cooperate from "@/components/collaborate/Cooperate";
import Collaborate from "@/components/collaborate/collaborate";
import EmpowerEfficiency from "@/components/cpu-advantage/empower-efficiency";
import Redefine from "@/components/redefine/redefine-efficiency";
import StrategicGoal from "@/components/strategic/strategic-goal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-black">
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
