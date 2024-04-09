import hero from "@/images/hero/dapp.png";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="py-[60px] mx-auto max-w-[1440px] flex flex-col gap-10">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <h1 className="golden-text text-[64px] leading-[70px] tracking-[-0.3px] font-bold">
                AI-Powered{" "}
              </h1>
              <h1 className="silver-text text-[64px] tracking-[-0.3px] font-bold">
                Mining Excellence
              </h1>
            </div>
            <p className="text-[18px] text-center leading-[24px] tracking-[0.2px] text-[rgba(255,255,255,0.66)]">
              With deep expertise in <span className="text-[#FFF]">Crypto</span>{" "}
              and <span className="text-[#FFF]">Web3</span>, AI Gen has
              established the
              <br />
              <span className="text-[#FFF]">infrastructure</span>,{" "}
              <span className="text-[#FFF]">partnerships</span>, and
              distribution network for successful{" "}
              <span className="text-[#FFF]">Crypto mining</span>.
            </p>
          </div>
          <button className="px-8 py-4 w-fit bg-white rounded-[45px] shadow-[0px_4px_24px_0px_rgba(23,21,19,0.25)] hover:opacity-80 transition-all">
            <span className="text-[#1E1E1E] text-[16px] leading-[20px] tracking-[-0.05px] font-medium">
              Launch Dapp
            </span>
          </button>
        </div>
        <ContainerScroll>
         <Image src={hero} alt="hero" layout="fill" objectFit="cover" />
        </ContainerScroll>
      </div>
      <div className="absolute bottom-0 w-full h-[1011px] bg-[linear-gradient(180deg,rgba(1,1,1,0.00)_0%,#010101_96.93%)] z-[10000]"></div>
    </section>
  );
}

export default Hero