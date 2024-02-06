import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BGStyle } from "../assets";

const LayoutDashboard = () => {
  return (
    <div className="h-screen w-full md:h-full sm:h-full bg-black p-8 pt-24 font-chakra relative overflow-hidden">
      <div className="w-full h-full rounded-lg">
        <div className="w-full flex flex-row h-full mx-auto min-w-[1000px] md:min-w-full sm:min-w-full relative items-center justify-evenly md:flex-col sm:flex-col gap-5 md:gap-10 sm:gap-12">
          <div className="w-auto flex items-center justify-center">
            <div className="flex flex-col">
              <span className="text-white text-left font-semibold text-[30px] z-10 lg:text-[26px] md:text-[22px]">
                Welcome to our exciting generative <br></br>
                AI Web3 social
                <span className="text-[#9013ce] px-2">STARK.AI</span>!
              </span>
              <span className="z-20 pl-0 p-10 flex flex-col gap-3 rounded-md w-48">
                <Link to="/login" className="primary-button z-20">
                  Join now
                </Link>
              </span>
              <div className="flex flex-row items-center gap-5 pt-14 text-[12px] sm:text-[10px] sm:justify-center">
                <div className="border-[4px] rounded-full border-[#9013ce] p-3 sm:p-[6px]">
                  <div className="bg-[#9013ce] text-white rounded-full p-3 w-20 h-20 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
                    <span className="">Generate</span>
                    <span className="">AI</span>
                  </div>
                </div>
                <Icon
                  icon="ic:baseline-double-arrow"
                  className="w-12 h-12 anim-color sm:w-8 sm:h-8"
                />
                <div className=" border-[4px] rounded-full border-[#9013ce] p-3 sm:p-[6px]">
                  <div className="bg-[#9013ce] text-white rounded-full p-3 w-20 h-20 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
                    <span className="">Minting</span>
                    <span className="">NFT</span>
                  </div>
                </div>
                <Icon
                  icon="ic:baseline-double-arrow"
                  className="w-12 h-12 anim-color animate-delay-200 sm:w-8 sm:h-8"
                />
                <div className=" border-[4px] rounded-full border-[#9013ce] p-3 sm:p-[6px]">
                  <div className="bg-[#9013ce] text-white rounded-full p-3 w-20 h-20 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
                    <span className="">Mining</span>
                    <span className="">Reward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <img
              src="./assets/characters/lion.jpg"
              alt="lion"
              className="rounded-lg h-[750px] w-[560px] sm:w-[480px] sm:h-auto"
            />
          </div>
        </div>
      </div>
      <span className="absolute z-10 top-0 left-0">
        <BGStyle />
      </span>
      <div className="bg_blur"></div>
    </div>
  );
};

export default LayoutDashboard;
