import Image from "next/image";
import bg from "@/images/cpu-advantage/bg.png";

export default function EmpowerEfficiency() {
  return (
    <div className="md:max-w-[1440px] max-w-[414px] overflow-hidden w-full md:px-40 md:py-[60px] px-4 py-6 relative md:h-[903px] h-[750px]">
      <div className="w-full flex flex-col items-center relative">
        {/* title */}
        <div className="px-4 py-2 rounded-[40px] border border-[rgba(255,255,255,0.75)] bg-[rgba(255,250,209,0.04)] shadow-[0px_0px_12px_0px_#FFC872_inset]">
          <p className="md:text-[18px] text-[12px] leading-[24px] bg-[linear-gradient(90deg,#FFFCF5_-0.05%,#E5B865_37.73%,#F27969_82.63%)] bg-clip-text text-transparent">
            The D-CPU Advantage
          </p>
        </div>
        <div className="mt-4 md:text-[48px] md:leading-[52px] text-[32px] leading-[36px] text-center font-medium -tracking-[1px] text-white">
          Empowering Mining Efficiency
        </div>
        {/* content */}
        <div className="md:max-w-[857px] text-[rgba(255,255,255,0.66)] text-center text-[16px] leading-[24px] font-light md:mt-8 mt-6">
          D-CPU offers a solution to traditional mining challenges. Our
          cutting-edge AI algorithms deliver substantial ROI for clients and
          token holders, accelerating financial achievements with efficiency and
          precision.
        </div>
      </div>
      {/* image desktop view */}
      <Image
        src={bg}
        width={0}
        height={0}
        alt="bg"
        className="absolute md:top-0 left-1/2 -translate-x-1/2 md:block hidden"
      />

      {/* image responsive mobile view */}
      <div className="absolute top-[200px] left-1/2 -translate-x-1/2 block md:hidden w-[600px]">
        <Image src={bg} alt="bg" className=" " />
      </div>
    </div>
  );
}
