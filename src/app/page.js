import EmpowerEfficiency from "@/components/cpu-advantage/empower-efficiency";
import EnhanceMining from "@/components/enhance-mining/enhance-mining";
import Redefine from "@/components/redefine/redefine-efficiency";
import StrategicGoal from "@/components/strategic/strategic-goal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-black">
      <EnhanceMining />
      <StrategicGoal />
      <Redefine />
      <EmpowerEfficiency />
    </main>
  );
}
