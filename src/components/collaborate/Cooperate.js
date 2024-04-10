"use client";
import amdIcon from "@/images/cooperate/amdIcon.png";
import evga from "@/images/cooperate/evga.png";
import giga from "@/images/cooperate/giga.png";
import asus from "@/images/cooperate/asus.png";
import asrock from "@/images/cooperate/asrock.png";
import intel from "@/images/cooperate/intel.png";
import msi from "@/images/cooperate/msi.png";
import pny from "@/images/cooperate/pny.png";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Cooperate = () => {
  const menu = [
    {
      id: 1,
      icon: amdIcon,
    },
    {
      id: 2,
      icon: evga,
    },
    {
      id: 3,
      icon: giga,
    },
    {
      id: 4,
      icon: asus,
    },
    {
      id: 5,
      icon: asrock,
    },
    {
      id: 6,
      icon: intel,
    },
    {
      id: 7,
      icon: msi,
    },
    {
      id: 8,
      icon: pny,
    },
  ];
  return (
    <div className="w-full py-[32px] flex justify-center overflow-hidden">
      <div className="w-[1440px] flex justify-center">
        <Marquee speed={80} className="flex items-center justify-evenly">
          {menu.map((item, index) => {
            return (
              <div className="rounded-[16px] md:p-[24px] p-[8px] flex justify-center borderLineGradient h-[40px] md:h-[72px] mr-[24px]">
                <Image src={item.icon} alt="icon" height={24} />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};
export default Cooperate;
