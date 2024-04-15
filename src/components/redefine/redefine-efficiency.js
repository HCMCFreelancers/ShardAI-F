"use client";
import Image from "next/image";
import aicpu from "@/images/redefine/cpu.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Redefine() {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const [refVid, inViewVid] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });
  const [refVid2, inViewVid2] = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  });
  return (
    <div className="md:max-w-[1440px] max-w-[414px] w-full md:px-40 py-[60px] px-4 flex md:flex-row flex-col md:items-start items-center md:gap-[60px] h-[974px] md:h-auto">
      {/* image desktop view */}
      <motion.div
        className="md:w-[530px] md:h-[605px] rounded-[24px] md:block hidden"
        ref={refVid}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewVid ? 1 : 0 }}
        transition={{ duration: 1.0 }}
      >
        <Image
          src={aicpu}
          alt="aicpu"
          width={530}
          height={605}
          className="rounded-[24px]"
        />
      </motion.div>
      {/* text content */}
      <div className="grow md:max-w-[530px] w-full flex flex-col items-start">
        {/* title */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-fit px-4 py-2 rounded-[40px] border border-[rgba(255,255,255,0.75)] bg-[rgba(255,250,209,0.04)] shadow-[0px_0px_12px_0px_#FFC872_inset]"
        >
          <p className="md:text-[18px] text-[12px] leading-[24px] bg-[linear-gradient(90deg,#FFFCF5_-0.05%,#E5B865_37.73%,#F27969_82.63%)] bg-clip-text text-transparent">
            Redefining Mining Efficiency
          </p>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="mt-4 md:text-[48px] text-[32px] leading-[36px] text-start text-3xl md:leading-[52px] font-medium tracking-[-1px] text-white"
        >
          Optimize Mining Rewards using TPU cores
        </motion.div>
        {/* content */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="md:mt-[40px] mt-4 w-full flex-col flex md:gap-6 gap-4 items-start"
        >
          <p className="md:text-[16px] md:leading-[22px] text-sm font-light text-[rgba(255,255,255,0.66)] text-start">
            Traditional mining practices often limit operations to one coin for
            extended periods, missing out on short-term opportunities.{" "}
            <span className="text-white">Manual adjustments </span>
            for optimal mining are <span className="text-white">complex</span> ,
            involving frequent changes in clients, pools, and GPU settings.
          </p>
          <p className="md:text-[16px] md:leading-[22px] text-sm font-light text-[rgba(255,255,255,0.66)]  text-start">
            By focusing solely on{" "}
            <span className="text-white">long-term profitability</span>, miners
            overlook short-term gains that can be twice as lucrative, even for
            brief periods.
          </p>
          {/* <button className="rounded-[52px] bg-[radial-gradient(302.61%_113.38%_at_-3%_21.87%,#FFF7E1_0%,#FFD361_14.73%,#EC6803_100%)] h-12 px-8 py-1.5 text-[#000] text-[18px] font-medium -tracking-[0.54px]">
            Launch Dapp
          </button> */}
          <button className="transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-[#F3904F] hover:to-[#3B4371] hover:text-white rounded-[52px] bg-[radial-gradient(302.61%_113.38%_at_-3%_21.87%,#FFF7E1_0%,#FFD361_14.73%,#EC6803_100%)] h-12 px-8 py-1.5 text-[#000] text-[18px] font-medium -tracking-[0.54px]">
            Launch Dapp
          </button>
        </motion.div>
      </div>
      {/* image reponsive mobile view */}
      <motion.div
        ref={refVid2}
        initial={{ opacity: 0 }}
        animate={{ opacity: inViewVid2 ? 1 : 0 }}
        transition={{ duration: 1.0 }}
        className="md:w-[530px] md:h-[605px] rounded-[24px] block md:hidden"
      >
        <Image
          src={aicpu}
          alt="aicpu"
          width={530}
          height={605}
          className="rounded-[24px]"
        />
      </motion.div>
    </div>
  );
}
