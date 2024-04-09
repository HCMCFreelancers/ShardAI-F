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
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-[80px] pt-[40px] pb-[24px] flex justify-center">
        <div className="w-full max-w-[509px] gap-[24px] flex flex-col items-center">
          <div className="w-[60px] h-[60px]">
            <Image src={logo} alt="logo" objectFit="cover" />
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <div className="text-[#fff] text-[48px] leading-[48px] tracking-[-1px] font-bold">
              Contact us
            </div>
            <div className="w-full text-center text-[16px] font-normal leading-[24px] tracking-[-0.2px] text-[#A5ABB6]">
              We share thoughts on design, tools, and productivity. If you don't
              want to miss them, subscribe to our newsletter on Substack.
            </div>
          </div>
          <div className="flex justify-center w-full gap-[24px]">
            {listSocial.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="w-[56px] h-[56px] rounded-[40px] border-[1px] border-solid border-[#E7E7E7] p-[8px]"
                >
                  <Image src={item.icon} alt="icon" objectFit="cover" />
                </div>
              );
            })}
          </div>
          <div className="text-[#676D79] text-[16px] font-normal leading-[24px] py-[16px]">
            © AI Gen 2024, All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
