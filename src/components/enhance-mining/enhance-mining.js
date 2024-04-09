import React from 'react'
import ai from '@/images/enhance-mining/ai.mp4'

const EnhanceMining = () => {
  return (
    <section className="pt-[120px] pb-[60px] mx-auto ">
      <article className="py-[40px] max-w-[1219px] px-[32px] rounded-[62px] bg-blend-soft-light flex gap-[40px] bg-[radial-gradient(144.68%_116.2%_at_43.52%_0%,rgba(0,0,0,0.00)_0%,rgba(236,104,3,0.04)_63.82%,rgba(255,212,98,0.50)_100%)]">
        <div className="min-w-[534px] relative h-[534px] border-[1px] border-[#8C6549] rounded-[32px] shadow-[0px_4px_40px_0px_#1B1204,0px_4px_40px_0px_rgba(45,45,45,0.25)_inset] overflow-hidden">
          <video
            loop
            muted
            autoPlay
            preload="true"
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={ai} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-10 justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="silver-text text-[32px] leading-[41px] font-bold">
              Enhancing Mining Efficiency with AI
            </h1>
            <p className="text-[rgba(255,255,255,0.66)] text-[24px] leading-[32px] tracking-[0.2px] ">
              Discover how we utilize{" "}
              <span className="text-[#FFF]">Artificial Intelligence</span> to
              develop an advanced mining algorithm, optimizing hash power by
              selecting and mining{" "}
              <span className="text-[#FFF]">the most efficient coins</span>{" "}
              across L1 Blockchains in{" "}
              <span className="text-[#FFF]">real-time.</span>
            </p>
            <button className="w-fit px-6 py-2 rounded-[99px] border border-[#2D2A2A]">
              <span className="text-[18px]">Explore Now</span>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="silver-text text-[32px] leading-[32px] font-medium">
              Unique AI Gen Token
            </h1>
            <p className="text-[rgba(255,255,255,0.66)] text-[16px] leading-[24px] ">
              Introducing our exclusive AI Gen token. Earn a share of the
              revenue generated from our AI-enhanced mining rigs as a token
              holder.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default EnhanceMining;