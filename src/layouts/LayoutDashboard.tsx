import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { BGStyle } from "../assets";
import { useEffect, useState } from "react";

const imagePaths = [
  "https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_1.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/eeaa4d5f-84d4-43f9-8f17-535895ef4c36/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/1ae53528-22c1-43e0-b6ca-ded8f79fce16/Default_Imagine_a_mesmerizing_scene_where_a_golden_grizzly_bea_3.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/6a7cfb39-5a37-4212-877f-e46eb15f4ebc/Default_cute_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/0c7d9083-14e5-4d8a-afe9-705a73b556b1/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_3.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/bc506d34-9763-49ef-8ec2-f88ef4477e09/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/f539aa23-b601-4d7b-9cfa-92fe4438bf33/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_3.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/1a4890b7-9ac1-42f0-9bcd-217c1b09c497/Default_A_fiercely_proud_Nordic_girl_stands_her_presence_exudi_0.jpg",
];

const LayoutDashboard = () => {
  const [randomImagePath, setRandomImagePath] = useState<string>("");

  useEffect(() => {
    const getRandomIndex = () => Math.floor(Math.random() * imagePaths.length);
    setRandomImagePath(imagePaths[getRandomIndex()]);
  }, []);

  return (
    <div className="h-screen w-full md:h-full sm:h-full bg-black p-8 pt-24 font-chakra relative overflow-hidden">
      <div className="w-full h-full rounded-lg">
        <div className="w-full flex flex-row h-full mx-auto min-w-[1000px] md:min-w-full sm:min-w-full relative items-center justify-evenly md:flex-col sm:flex-col gap-5 md:gap-10 sm:gap-12 overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="flex flex-col sm:w-full">
              <span className="text-white text-left font-semibold text-[30px] z-10 lg:text-[26px] md:text-[22px]">
                Welcome to our exciting generative <br></br>
                AI Web3 social
                <span className="text-[#9013ce] px-2">STARK AI</span>!
              </span>
              <span className="z-20 pl-0 p-10 flex flex-col gap-3 rounded-md w-48">
                <Link to="/login" className="primary-button z-20">
                  Join now
                </Link>
              </span>
              <div className="flex flex-row items-center gap-5 sm:gap-2 pt-14 text-[12px] sm:text-[10px] justify-evenly sm:max-w-[400px] sm:flex-wrap">
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
                <div className="border-[4px] rounded-full border-[#9013ce] p-3 sm:p-[6px]">
                  <div className="bg-[#9013ce] text-white rounded-full p-3 w-20 h-20 sm:w-16 sm:h-16 flex flex-col items-center justify-center">
                    <span className="">Mining</span>
                    <span className="">Reward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[830px] max-h-[623px] w-auto flex items-center justify-center flex-col sm:w-auto sm:h-auto md:p-10">
            {randomImagePath && (
              <img src={randomImagePath} alt="random" className="rounded-lg" />
            )}
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
