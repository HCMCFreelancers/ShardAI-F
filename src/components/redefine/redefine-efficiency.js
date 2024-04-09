import Image from "next/image";
import aicpu from "@/images/redefine/cpu.png";

export default function Redefine() {
  return (
    <div className="md:max-w-[1440px] max-w-[414px] w-full md:px-40 md:py-[60px] px-4 py-6 flex md:flex-row flex-col md:items-start items-center md:gap-[60px]">
      {/* image desktop view */}
      <div className="md:w-[530px] md:h-[605px] rounded-[24px] md:block hidden">
        <Image
          src={aicpu}
          alt="aicpu"
          width={530}
          height={605}
          className="rounded-[24px]"
        />
      </div>
      {/* text content */}
      <div className="grow md:max-w-[530px] w-full flex flex-col items-center md:items-start">
        {/* title */}
        <div className="w-fit px-4 py-2 rounded-[40px] border border-[rgba(255,255,255,0.75)] bg-[rgba(255,250,209,0.04)] shadow-[0px_0px_12px_0px_#FFC872_inset]">
          <p className="text-[18px] leading-[24px] bg-[linear-gradient(90deg,#FFFCF5_-0.05%,#E5B865_37.73%,#F27969_82.63%)] bg-clip-text text-transparent">
            Redefining Mining Efficiency
          </p>
        </div>
        <div className="mt-4 md:text-[48px] text-center md:text-start text-3xl md:leading-[52px] font-medium tracking-[-1px] text-white">
          Overcoming Traditional Challenges
        </div>
        {/* content */}
        <div className="md:mt-[40px] mt-4 w-full flex-col flex md:gap-6 gap-4 md:items-start items-center">
          <p className="md:text-[16px] md:leading-[22px] text-sm font-light text-[rgba(255,255,255,0.66)] md:text-start text-center">
            Traditional mining practices often limit operations to one coin for
            extended periods, missing out on short-term opportunities.{" "}
            <span className="text-white">Manual adjustments </span>
            for optimal mining are <span className="text-white">complex</span> ,
            involving frequent changes in clients, pools, and GPU settings.
          </p>
          <p className="md:text-[16px] md:leading-[22px] text-sm font-light text-[rgba(255,255,255,0.66)]  md:text-start text-center">
            By focusing solely on{" "}
            <span className="text-white">long-term profitability</span>, miners
            overlook short-term gains that can be twice as lucrative, even for
            brief periods.
          </p>
          <button className="rounded-[52px] bg-[radial-gradient(302.61%_113.38%_at_-3%_21.87%,#FFF7E1_0%,#FFD361_14.73%,#EC6803_100%)] h-12 px-8 py-1.5 text-[#000] text-[18px] font-medium -tracking-[0.54px]">
            Launch Dapp
          </button>
        </div>
      </div>
      {/* image reponsive mobile view */}
      <div className="md:w-[530px] md:h-[605px] rounded-[24px] block md:hidden">
        <Image
          src={aicpu}
          alt="aicpu"
          width={530}
          height={605}
          className="rounded-[24px]"
        />
      </div>
    </div>
  );
}
