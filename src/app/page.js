import Redefine from "@/components/redefine/redefine-efficiency";
import StrategicGoal from "@/components/strategic/strategic-goal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center bg-black">
      <StrategicGoal />
      <Redefine />
    </main>
  );
}
