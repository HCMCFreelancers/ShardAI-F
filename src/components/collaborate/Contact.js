"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import logo from "@/images/contact/logo.png";
import twitter from "@/images/contact/twitter.png";
import telegram from "@/images/contact/telegram.png";
import dextools from "@/images/contact/dextools.png";
import Image from "next/image";
import Link from "next/link";
import docs from "@/images/footer/doc.png";

const Contact = () => {
  const social = [
    {
      icon: docs,
      id: 1,
      href: String(process.env.NEXT_PUBLIC_LINK_DOCS),
    },
    {
      icon: telegram,
      id: 2,
      href: String(process.env.NEXT_PUBLIC_LINK_TELEGRAM),
    },
    {
      icon: twitter,
      id: 3,
      href: String(process.env.NEXT_PUBLIC_LINK_TWITTER),
    },
    {
      icon: dextools,
      id: 4,
      href: String(process.env.NEXT_PUBLIC_LINK_DEXTOOLS),
    },
  ];
  const footerLinks = [
    {
      title: "Web Links",
      links: [
        { title: "Home", href: "/" },
        { title: "Our Services", href: "#services" },
        { title: "Features", href: "#features" },
        { title: "Docs", href: String(process.env.NEXT_PUBLIC_LINK_DOCS) },
      ],
    },
    {
      title: "Social Links",
      links: [
        { title: "TG Bot", href: String(process.env.NEXT_PUBLIC_LINK_DAPP) },
        { title: "Dapp", href: String(process.env.NEXT_PUBLIC_LINK_DAPP) },
        {
          title: "Twitter",
          href: String(process.env.NEXT_PUBLIC_LINK_TWITTER),
        },
        {
          title: "Telegram",
          href: String(process.env.NEXT_PUBLIC_LINK_TELEGRAM),
        },
      ],
    },
    {
      title: "Other Links",
      links: [
        {
          title: "Etherscan",
          href: String(process.env.NEXT_PUBLIC_LINK_ETHERSCAN),
        },
        {
          title: "Dextools",
          href: String(process.env.NEXT_PUBLIC_LINK_DEX),
        },
        {
          title: "CoinmarketCap",
          href: String(process.env.NEXT_PUBLIC_LINK_COINMARKETCAP),
        },
        {
          title: "Coingecko",
          href: String(process.env.NEXT_PUBLIC_LINK_GECKO),
        },
      ],
    },
  ];
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  return (
    // <div className="w-full flex justify-center">
    //   <div className="w-full max-w-[1440px] md:px-[80px] md:pt-[40px] pt-[14px] px-[16px] pb-[24px] flex justify-center">
    //     <motion.div
    //       ref={ref1}
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
    //       transition={{ duration: 0.5 }}
    //       className="w-full max-w-[509px] gap-[24px] flex flex-col items-center"
    //     >
    //       <div className="w-[60px] h-[60px]">
    //         <Image src={logo} alt="logo" objectFit="cover" />
    //       </div>
    //       <div className="flex flex-col gap-[16px] items-center">
    //         <div className="text-[#fff] md:text-[48px] md:leading-[48px] text-[28px] leading-[28px] tracking-[-1px] font-bold">
    //           Contact us
    //         </div>
    //         <div className="w-full text-center md:text-[16px] text-[14px] font-normal leading-[20px] md:leading-[24px] tracking-[-0.2px] text-[#A5ABB6]">
    //           We share thoughts on design, tools, and productivity. If you don't
    //           want to miss them, subscribe to our newsletter on Substack.
    //         </div>
    //       </div>
    //       <div className="flex justify-center w-full gap-[24px]">
    //         {listSocial.map((item, index) => {
    //           return (
    //             <Link
    //               key={item.id}
    //               href={item.href}
    //               className="md:w-[56px]
    //               hover:opacity-60 transition-all
    //               md:h-[56px] w-[40px] h-[40px] rounded-[40px] flex justify-center items-center border-[1px] border-solid border-[#E7E7E7] p-[4px] md:p-[8px]"
    //             >
    //               <Image src={item.icon} alt="icon" objectFit="cover" />
    //             </Link>
    //           );
    //         })}
    //       </div>
    //       <div className="text-[#676D79] md:text-[16px] text-[14px] font-normal leading-[20px] md:leading-[24px] py-[16px]">
    //         © Shard AI 2024, All Rights Reserved.
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>
    <footer
      className="w-full "
      style={{
        background: "#000",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="max-w-[1440px] mx-auto md:p-[64px_120px_24px_120px] p-[24px_16px_24px_16px] flex flex-col gap-5">
        <div className="flex  md:flex-row flex-col justify-between">
          <div className="flex flex-col md:items-start items-center md:gap-[41px] gap-4">
            <div className="flex items-center gap-[12.788px]">
              <Image src={logo} width={48} height={48} alt="logo" />
              <h1 className="text-[#FFFFFF] text-[48px]  font-bold ">
                Shard AI
              </h1>
            </div>
            <p className="text-[#9CA3AF] text-[16px] leading-[24px] tracking-[-0.3px] font-inter md:text-start text-center">
              All Your Data in One Place.
              <br />
              Search, Find, and Dig Deeper with AI.
            </p>
            <div className="flex items-center gap-4 mb-[40px]">
              {social.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="md:w-[56px]
                  hover:opacity-60 transition-all
                  md:h-[56px] w-[40px] h-[40px] rounded-[40px] flex justify-center items-center border-[1px] border-solid border-[#E7E7E7] p-[4px] md:p-[8px]"
                >
                  <Image src={item.icon} alt="icon" objectFit="cover" />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex md:gap-[80px] gap-2 flex-start">
            {footerLinks.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-[12px] md:w-full w-[122px]"
              >
                <h2 className="text-[#FFFFFF] text-[16px] leading-[24px] tracking-[-0.3px] font-semibold whitespace-nowrap font-inter">
                  {item.title}
                </h2>
                {item.links.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="text-[#9CA3AF] whitespace-nowrap md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] tracking-[-0.3px] font-inter"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="h-[1px] bg-[#2E2E2E] w-full"></div>
        <div className="flex w-full md:justify-between justify-center items-center text-[#9CA3AF] text-[16px] leading-[24px] tracking-[-0.3px] font-inter">
          <span>© Shard AI 2024, All Rights Reserved.</span>
          <div className="md:flex hidden items-center gap-10">
            <span>Privacy Policy</span>
            <span>Term Of Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Contact;
