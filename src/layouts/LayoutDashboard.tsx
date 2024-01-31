import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BGStyle } from "../assets";

const LayoutDashboard = () => {
  return (
    <div className="h-screen w-full bg-black p-8 pt-24 font-chakra relative overflow-hidden">
      <div className="w-full h-full rounded-lg">
        <div className="w-full flex flex-row h-full mx-auto min-w-[1000px] relative items-center justify-evenly">
          <div className="w-auto flex items-center justify-center">
            <div className="flex flex-col">
              <span className="text-white text-left font-semibold text-[30px] z-10 lg:text-[26px] md:text-[22px]">
                Welcome to our exciting generative <br></br>
                AI Web3 social
                <span className="text-[#9013ce] px-2">STARK.AI</span>!
              </span>
              <span className="z-[5] pl-0 p-10 flex flex-col gap-3 rounded-md w-48">
                <Link to="/login" className="primary-button z-10">
                  Join now
                </Link>
              </span>
              <div className="flex flex-row items-center gap-5 pt-14">
                <div className=" border-[4px] rounded-full border-[#9013ce] p-3">
                  <div className="bg-[#9013ce] text-white rounded-full p-3 w-20 h-20 flex flex-col items-center justify-center">
                    <span className="text-[12px]">Generate</span>
                    <span className="text-[12px]">AI</span>
                  </div>
                </div>
                <Icon
                  icon="ic:baseline-double-arrow"
                  className="w-12 h-12 anim-color"
                />
                <div className=" border-[4px] rounded-full border-[#9013ce] p-3">
                  <div className="bg-[#9013ce] text-white rounded-full p-3 w-20 h-20 flex flex-col items-center justify-center">
                    <span className="text-[12px]">Minting</span>
                    <span className="text-[12px]">NFT</span>
                  </div>
                </div>
                <Icon
                  icon="ic:baseline-double-arrow"
                  className="w-12 h-12 anim-color animate-delay-200"
                />
                <div className=" border-[4px] rounded-full border-[#9013ce] p-3">
                  <div className="bg-[#9013ce] text-white rounded-full p-3 w-20 h-20 flex flex-col items-center justify-center">
                    <span className="text-[12px]">Mining</span>
                    <span className="text-[12px]">Reward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto pl-10">
            <img
              src="./assets/characters/lion.jpg"
              alt="lion"
              className="rounded-lg h-[750px] w-[560px]"
            />
          </div>
        </div>
      </div>
      <span className="absolute z-10 top-0 left-0">
        <BGStyle />
      </span>
      <div className="bg-blur"></div>
    </div>
  );
};

export default LayoutDashboard;
