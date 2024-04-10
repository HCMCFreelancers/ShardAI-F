import hero from "@/images/hero/dapp.png";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="md:py-[60px] py-[20px] mx-auto max-w-[1440px] flex flex-col gap-10">
        <div className="flex flex-col items-center md:gap-8 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center">
              <h1 className="golden-text md:text-[64px] md:leading-[70px] text-[32px] leading-normal tracking-[-0.3px] font-bold">
                AI-Powered{" "}
              </h1>
              <h1 className="silver-text md:text-[64px] leading-normal text-[32px] tracking-[-0.3px] font-bold">
                Mining Excellence
              </h1>
            </div>
            <p className="md:text-[18px] text-center md:leading-[24px] text-[14px] leading-[20px] tracking-[0.2px] text-[rgba(255,255,255,0.66)]">
              With deep expertise in <span className="text-[#FFF]">Crypto</span>{" "}
              and <span className="text-[#FFF]">Web3</span>, AI Gen has
              <br className="md:hidden flex" />
              established the
              <br className="md:flex hidden" />
              <span className="text-[#FFF]"> infrastructure</span>,{" "}
              <span className="text-[#FFF]">partnerships</span>, and
              <span className="text-[#FFF]">distribution</span>{" "}
              <br className="md:hidden flex" /> network for successful{" "}
              <span className="text-[#FFF]">Crypto mining</span>.
            </p>
          </div>
          <button className="md:px-8 md:py-4 py-2 px-6 w-fit bg-white rounded-[45px] shadow-[0px_4px_24px_0px_rgba(23,21,19,0.25)] hover:opacity-80 transition-all">
            <span className="text-[#1E1E1E] md:text-[16px] text-[14px] leading-[20px] tracking-[-0.05px] font-medium">
              Launch Dapp
            </span>
          </button>
        </div>
        <ContainerScroll>
          <Image src={hero} alt="hero" layout="fill" objectFit="cover" />
        </ContainerScroll>
      </div>
      <div className="absolute bottom-0 w-full md:h-[1011px] h-[500px] bg-[linear-gradient(180deg,rgba(1,1,1,0.00)_0%,#010101_98.93%)] z-[10000]"></div>
    </section>
  );
}

export default Hero