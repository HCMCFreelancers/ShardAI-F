import Image from "next/image";
import bgChip from "@/images/collaborate/bgChip.png";
import ap_optimized from "@/images/collaborate/ap_optimized.png";

const Collaborate = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] md:py-[60px] md:px-[160px] py-[24px] px-[16px] flex flex-col items-center md:gap-[40px] gap-[16px]">
        <div className="w-full flex flex-col gap-[24px] items-center">
          <div className="px-4 py-2 rounded-[40px] border border-[rgba(255,255,255,0.75)] bg-[rgba(255,250,209,0.04)] shadow-[0px_0px_12px_0px_#FFC872_inset] flex justify-center items-center">
            <div className="md:text-[18px] leading-[24px] text-[16px] bg-[linear-gradient(90deg,#FFFCF5_-0.05%,#E5B865_37.73%,#F27969_82.63%)] bg-clip-text text-transparent">
              Collaborating for the Future
            </div>
          </div>
          <div className="w-full max-w-[500px] bg-[linear-gradient(91deg,#FFF-1.2%,#B0B1B4_99.77%)] md:text-[48px] text-[24px] leading-[32px] font-medium md:leading-[52px] tracking-[-1px] gradientSilver text-center">
            Shaping Decentralized Finance Together
          </div>
          <div className="text-[rgba(255,255,255,0.66)] text-center md:text-[16px] md:leading-[22px] text-[14px] leading-[20px] font-light w-full max-w-[687px]">
            AI Gen and its AI-driven mining facility, represent a revolutionary
            force in the cryptocurrency landscape. The integration of
            AI-optimized mining, sustainability practices, and community
            engagement positions AI Gen as a beacon of innovation and
            efficiency.
          </div>
        </div>
        <div className="w-full md:px-[120px] md:flex gap-[16px]">
          <div className="grow md:h-[612px] h-[300px] bg-[url('/images/collaborate/bgChip.png')] bg-cover rounded-[24px] overflow-hidden"></div>
          <div className="w-full md:max-w-[363px] flex flex-col">
            <div className="w-full p-[24px] flex flex-col gap-[24px] items-center">
              <div className="text-[#fff] text-[20px] font-medium leading-[28px]">
                Pioneering Cryptocurrency Mining Through AI Innovation
              </div>
              <div className="text-[rgba(255,255,255,0.66)] text-[14px] font-light leading-[22px] tracking-[0.2px] flex flex-col items-center">
                At the forefront of the cryptocurrency realm, AI-driven mining
                facility signifies a groundbreaking shift. By combining
                AI-optimized mining, sustainable practices, and community
                involvement, AI Gen emerges as a trailblazer in innovation and
                efficiency.
                <div className="w-[263px] h-[157px] relative">
                  <div className="w-[263px] h-[197px] absolute bottom-[-40px] left-0 ">
                    <Image
                      src={ap_optimized}
                      alt="ai optimized"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-[24px] flex flex-col gap-[24px]">
              <div className="text-[#fff] text-[20px] font-medium leading-[28px]">
                Explore Limitless Mining Opportunities
              </div>
              <div className="text-[rgba(255,255,255,0.66)] text-[14px] font-light leading-[22px] tracking-[0.2px]">
                Join us at AI Gen and discover how the fusion of AI and
                cryptocurrency mining opens doors to endless possibilities.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Collaborate;
