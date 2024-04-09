import Image from "next/image";
import bg from "@/images/cpu-advantage/bg.png";

export default function EmpowerEfficiency() {
  return (
    <div className="md:max-w-[1440px] w-full md:px-40 md:py-[60px]  relative md:h-[903px]">
      <div className="w-full flex flex-col items-center relative">
        {/* title */}
        <div className="px-4 py-2 rounded-[40px] border border-[rgba(255,255,255,0.75)] bg-[rgba(255,250,209,0.04)] shadow-[0px_0px_12px_0px_#FFC872_inset]">
          <p className="text-[18px] leading-[24px] bg-[linear-gradient(90deg,#FFFCF5_-0.05%,#E5B865_37.73%,#F27969_82.63%)] bg-clip-text text-transparent">
            The D-CPU Advantage
          </p>
        </div>
        <div className="md:mt-4 text-[48px] leading-[52px] font-medium -tracking-[1px] text-white">
          Empowering Mining Efficiency
        </div>
        {/* content */}
        <div className="md:max-w-[857px] text-[rgba(255,255,255,0.66)] text-center text-[16px] leading-[22px] font-light mt-8">
          D-CPU offers a solution to traditional mining challenges. Our
          cutting-edge AI algorithms deliver substantial ROI for clients and
          token holders, accelerating financial achievements with efficiency and
          precision.
        </div>
      </div>
      {/* image */}
      <Image
        src={bg}
        width={0}
        height={0}
        alt="bg"
        className="md:absolute md:top-0"
      />
    </div>
  );
}
