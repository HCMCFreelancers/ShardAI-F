"use client";
import { cn } from "@/libs/utils";
import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "./logo";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import tele from "@/images/header/tele.svg";
import twitter from "@/images/header/x.svg";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Features",
      link: "#features",
    },
  ];

  const { innerWidth } = useWindowDimensions();

  useEffect(() => {
    if (innerWidth > 768) {
      setIsMenuOpen(false);
    }
  }, [innerWidth]);

  return (
    <>
      {/* {isMenuOpen && <div className="h-[80px]"></div>} */}
      <header
        className={cn(
          "md:px-[80px] md:py-0 py-[32px] px-4 mx-auto max-w-[1440px] h-[70px] flex items-center justify-between transition-all duration-500 font-helvetica bg-[#000]",
          isMenuOpen &&
            "bg-[#000] w-full h-full fixed top-0 left-0 z-[1000] items-start flex flex-col gap-0 justify-start px-4"
        )}
      >
        <div className={cn("flex items-center justify-between w-full h-[5px]")}>
          <Link href={"/"} className="flex items-center gap-4">
            <Logo />
            <h1 className="text-[28px] leading-[32px] font-medium text-white">
              Shard AI
            </h1>
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="px-[10px] flex md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
            >
              <path
                d="M1 1H21"
                stroke="#FBFEFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 12H21"
                stroke="#FBFEFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="md:flex hidden gap-4 p-1 items-center">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="p-4 flex items-center justify-center"
            >
              <p className="text-[#FFFFFFA8] text-[14px] leading-[20px] font-medium hover:text-white transition-all">
                {item.name}
              </p>
            </Link>
          ))}
          <Link
            href={process.env.NEXT_PUBLIC_LINK_DAPP}
            className="px-6 py-3 rounded-[60px] bg-[radial-gradient(302.61%_113.38%_at_-3%_21.87%,#FFF7E1_0%,#FFD361_14.73%,#EC6803_100%)] hover:opacity-80 transition-all"
          >
            <span className="text-[14px] whitespace-nowrap leading-[20px] text-[#000000] tracking-[-0.05px] font-medium ">
              Launch Dapp
            </span>
          </Link>
          <Link className="size-6" href={process.env.NEXT_PUBLIC_LINK_TELEGRAM}>
            <Image src={tele} alt="telegram" width={24} height={24} />
          </Link>
          <Link className="size-6" href={process.env.NEXT_PUBLIC_LINK_TWITTER}>
            <Image src={twitter} alt="telegram" width={24} height={24} />
          </Link>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-8 w-full pt-8">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 border-b border-[#202020] flex items-center justify-between w-full hover:opacity-75 transition-all"
              >
                <p className="text-[#FFFFFF] text-[20px] leading-[28px] font-medium ">
                  {item.name}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M5.8335 14.7729L14.1668 6.43954"
                    stroke="#9CA3AF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.8335 6.43954H14.1668V14.7729"
                    stroke="#9CA3AF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="px-6 mx-4 w-fit py-3 rounded-[60px] bg-[radial-gradient(302.61%_113.38%_at_-3%_21.87%,#FFF7E1_0%,#FFD361_14.73%,#EC6803_100%)] hover:opacity-80 transition-all"
            >
              <span className="text-[14px] whitespace-nowrap leading-[20px] text-[#000000] tracking-[-0.05px] font-medium">
                Launch Dapp
              </span>
            </button>
            <div>
              <Image src={tele} alt="telegram" width={24} height={24} />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
