"use client";
import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const EnhanceMining = () => {

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  return (
    <section className="pt-[120px] pb-[60px] md:px-0 px-4 mx-auto ">
      <motion.article
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-[40px] max-w-[1219px] md:px-[32px] px-4 rounded-[62px] items-center bg-blend-soft-light flex md:flex-row flex-col-reverse gap-[40px] md:bg-[url('/images/enhance-mining/frame.png')]  bg-[url('/images/enhance-mining/frameMb.png')]"
      >
        <div className="md:min-w-[534px] relative md:h-[534px] h-[364px] border-[1px] border-[#8C6549] rounded-[32px] shadow-[0px_4px_40px_0px_#1B1204,0px_4px_40px_0px_rgba(45,45,45,0.25)_inset] overflow-hidden">
          <video
            loop
            muted
            autoPlay
            preload="true"
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/strategic/ai.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-10 justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="silver-text text-[32px] leading-[41px] font-bold">
              Enhancing Mining Efficiency with AI
            </h1>
            <p className="text-[rgba(255,255,255,0.66)] md:text-[24px] md:leading-[32px] text-[16px] leading-[24px] tracking-[0.2px] ">
              Discover how neural{" "}
              <span className="text-[#FFF]">
                networks and machine learning algorithms
              </span>{" "}
              optimize hash power and maximize profits across PoW blockchains.{" "}
            </p>
            {/* <button className="w-fit px-6 py-2 rounded-[99px] border border-[#2D2A2A] hover:opacity-85">
              <span className="text-[18px]">Explore Now</span>
            </button> */}
          </div>
          {/* <div className="flex flex-col gap-2">
            <h1 className="silver-text text-[32px] leading-[32px] font-medium">
              Unique AI Gen Token
            </h1>
            <p className="text-[rgba(255,255,255,0.66)] text-[16px] leading-[24px] ">
              Introducing our exclusive AI Gen token. Earn a share of the
              revenue generated from our AI-enhanced mining rigs as a token
              holder.
            </p>
          </div> */}
        </div>
      </motion.article>
    </section>
  );
}

export default EnhanceMining;