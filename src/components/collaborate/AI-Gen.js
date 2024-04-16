"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AIGen = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <motion.div
      ref={ref1}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center"
    >
      <div className="max-w-[1440px] w-full md:py-[60px] py-[24px] px-[16px] md:px-[160px]">
        <div className="w-full md:h-[560px] h-[300px] md:p-[80px] md:pt-[32px] pt-[24px] px-[16px] bg-[url(/images/collaborate/hero.png)] bg-cover flex justify-center items-center">
          <div className="w-full max-w-[611px] text-[#FFF] md:text-[24px] font-medium md:leading-[32px] text-[18px] leading-[28px] tracking-[-0.2px] text-center">
            Shard AI is unlocking the potential of AI and Blockchain.
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default AIGen;
