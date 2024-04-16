"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import logo from "@/images/contact/logo.png";
import twitter from "@/images/contact/twitter.png";
import tiktok from "@/images/contact/tiktok.png";
import telegram from "@/images/contact/telegram.png";
import dextools from "@/images/contact/dextools.png";
import Image from "next/image";

const Contact = () => {
  const listSocial = [
    {
      icon: tiktok,
      id: 1,
    },
    {
      icon: telegram,
      id: 2,
    },
    {
      icon: twitter,
      id: 3,
    },
    {
      icon: dextools,
      id: 4,
    },
  ];
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] md:px-[80px] md:pt-[40px] pt-[14px] px-[16px] pb-[24px] flex justify-center">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[509px] gap-[24px] flex flex-col items-center"
        >
          <div className="w-[60px] h-[60px]">
            <Image src={logo} alt="logo" objectFit="cover" />
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <div className="text-[#fff] md:text-[48px] md:leading-[48px] text-[28px] leading-[28px] tracking-[-1px] font-bold">
              Contact us
            </div>
            <div className="w-full text-center md:text-[16px] text-[14px] font-normal leading-[20px] md:leading-[24px] tracking-[-0.2px] text-[#A5ABB6]">
              We share thoughts on design, tools, and productivity. If you don't
              want to miss them, subscribe to our newsletter on Substack.
            </div>
          </div>
          <div className="flex justify-center w-full gap-[24px]">
            {listSocial.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="md:w-[56px] md:h-[56px] w-[40px] h-[40px] rounded-[40px] flex justify-center items-center border-[1px] border-solid border-[#E7E7E7] p-[4px] md:p-[8px]"
                >
                  <Image src={item.icon} alt="icon" objectFit="cover" />
                </div>
              );
            })}
          </div>
          <div className="text-[#676D79] md:text-[16px] text-[14px] font-normal leading-[20px] md:leading-[24px] py-[16px]">
            © Shard AI 2024, All Rights Reserved.
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
