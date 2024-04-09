import React from 'react'
import ai from '@/images/enhance-mining/ai.mp4'
import frame from '@/images/enhance-mining/frame.png'

const EnhanceMining = () => {
  return (
    <section className="pt-[120px] pb-[60px] md:px-0 px-4 mx-auto ">
      <article
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-[40px] max-w-[1219px] md:px-[32px] px-4 rounded-[62px] bg-blend-soft-light flex md:flex-row flex-col-reverse gap-[40px] md:bg-[url('/images/enhance-mining/frame.png')]  bg-[url('/images/enhance-mining/frameMb.png')]"
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
            <source src={ai} type="video/mp4" />
          </video>
        </div>
        <div className="flex flex-col gap-10 justify-between">
          <div className="flex flex-col gap-8">
            <h1 className="silver-text text-[32px] leading-[41px] font-bold">
              Enhancing Mining Efficiency with AI
            </h1>
            <p className="text-[rgba(255,255,255,0.66)] md:text-[24px] md:leading-[32px] text-[16px] leading-[24px] tracking-[0.2px] ">
              Discover how we utilize{" "}
              <span className="text-[#FFF]">Artificial Intelligence</span> to
              develop an advanced mining algorithm, optimizing hash power by
              selecting and mining{" "}
              <span className="text-[#FFF]">the most efficient coins</span>{" "}
              across L1 Blockchains in{" "}
              <span className="text-[#FFF]">real-time.</span>
            </p>
            <button className="w-fit px-6 py-2 rounded-[99px] border border-[#2D2A2A] hover:opacity-85">
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