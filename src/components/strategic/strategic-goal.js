"use client";
import Image from "next/image";
import hand from "@/images/strategic/coin-hand.svg";
import global from "@/images/strategic/global.svg";
import server from "@/images/strategic/server.svg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const STRATEGICS = [
  {
    iconUrl: hand.src,
    title: "Maximize Returns",
    content:
      "Implement an advanced mining algorithm driven by AI to optimize returns and profitability.",
  },
  {
    iconUrl: server.src,
    title: "Expand Our Services",
    content:
      "Bolster operational capabilities by expanding our mining facility, ensuring better efficiency, and introducing innovative services such as Hash & Node rental.",
  },
  {
    iconUrl: global.src,
    title: "Establish Global Leadership",
    content:
      "Cement AI Gen's position as a trailblazer in the industry, setting standards for sustainable and efficient mining practices worldwide.",
  },
];

export default function StrategicGoal() {
  return (
    <div className="md:max-w-[1440px] max-w-[414px] w-full px-4 py-[60px] md:px-40 flex flex-col items-center">
      {/* title */}
      <div className="px-4 py-2 rounded-[40px] border border-[rgba(255,255,255,0.75)] bg-[rgba(255,250,209,0.04)] shadow-[0px_0px_12px_0px_#FFC872_inset]">
        <p className="md:text-[18px] text-[12px] leading-[24px] bg-[linear-gradient(90deg,#FFFCF5_-0.05%,#E5B865_37.73%,#F27969_82.63%)] bg-clip-text text-transparent">
          AI Gen is born to
        </p>
      </div>
      <div className="mt-4 text-[32px] leading-[36px] text-center md:text-[48px] md:leading-[52px] font-medium tracking-[-1px] text-white">
        Strategic Goals for Success
      </div>
      {/* content */}
      <div className="mt-[60px]  w-full flex md:flex-row flex-col items-center">
        {/* text content */}
        <div className="flex flex-col md:gap-6 gap-4 w-full md:max-w-[488px]">
          {STRATEGICS.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              rootMargin: "-200px 0px",
            });
            return (
              <motion.div
                ref={ref}
                animate={{ x: inView ? 0 : "-100%", opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full flex flex-col items-center transform transition duration-500 ease-in-out hover:scale-105">
                  <div
                    key={index}
                    className="p-4 flex flex-col w-full gap-4 border border-[rgba(255,255,255,0.10)] 
      rounded-lg bg-[linear-gradient(180deg,rgba(11,12,16,0.40)_0%,rgba(19,22,26,0.40)_100%)] 
      backdrop-blur-md shadow-[0px_2px_23.2px_0px_rgba(21,15,94,0.04)] "
                  >
                    {/* icon */}
                    <div>
                      <Image
                        src={item.iconUrl}
                        alt="icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    {/* title */}
                    <div className="text-[18px] leading-[28px] font-medium text-white">
                      {item.title}
                    </div>
                    {/* content */}
                    <div className="font-light text-[14px] leading-[22px] tracking-[0.2px] text-[rgba(255,255,255,0.66)] ">
                      {item.content}
                    </div>
                  </div>
                  <div className="-mt-[0.25px] w-[calc(100%-10px)] rounded-lg h-[1px] bg-[linear-gradient(90deg,#303133_6.14%,#EEE_50.6%,#303133_93.42%)]"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* video */}
        <video
          width="600"
          height="600"
          autoPlay
          loop
          muted
          className="mix-blend-plus-lighter mt-8 md:mt-0"
        >
          <source src="/videos/strategic/sphere.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
