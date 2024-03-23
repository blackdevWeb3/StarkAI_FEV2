import { Icon } from "@iconify/react";
import { LeftBGStyle, RightBGStyle } from "../../assets";

import BackgroundImage from "../../assets/Background.svg";

const IntroSection = () => {
  return (
    <>
      <div className="z-20 w-full md:h-full sm:h-full bg-[#1C1B1B] p-8 pt-24 font-kanit relative overflow-hidden">
        <div className="max-w-[1475px] mx-auto w-full pt-[75px]">
          <div className="flex flex-row gap-2">
            <div className="w-1/2 pt-[38px] pl-[32px] pb-[51px] flex flex-col">
              <div className="flex flex-col pl-2 w-full">
                <span className="text-white font-[500] text-[66px] leading-[90px] w-full">
                  Elevate Your Future with{" "}
                  <div
                    className="inline-block leading-none"
                    style={{
                      background:
                        "linear-gradient(transparent 62%, #7064e9 62% 85%, transparent 85%)",
                    }}
                  >
                    StarkMeta.ai
                  </div>
                </span>
                <span className="text-[19px] leading-normal font-[275] text-white">
                  Discover a world of possibilities as we guide you towards a
                  smarter, more efficient future. Join us in shaping the next
                  generation of technology.
                </span>
              </div>
              <div className="ml-2 border mt-[25px] rounded-[59px] border-[#DD00AC] flex flex-row gap-[9px] py-[19px] px-[45px] justify-center items-center w-fit">
                <span className="leading-[24px] text-[15px] font-normal text-[#E1E1E1]">
                  Get Started
                </span>
                <Icon icon="mynaui:arrow-long-right" color="white" width={28} />
              </div>
            </div>
            <div className="w-1/2 flex flex-row relative pb-10">
              <div className="w-[587px] h-[440px] mx-auto">
                <img src={BackgroundImage} alt="background" />
              </div>
            </div>
          </div>
        </div>
        <span className="absolute z-1 top-16 left-[-40px]">
          <LeftBGStyle />
        </span>
        <span className="absolute z-1 bottom-0 right-0">
          <RightBGStyle />
        </span>
      </div>
    </>
  );
};

export default IntroSection;
