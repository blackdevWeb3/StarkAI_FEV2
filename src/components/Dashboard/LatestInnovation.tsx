import Marquee from "react-fast-marquee";
import { LeftBGStyle } from "../../assets";

const primary_images = [
  "https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_1.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/eeaa4d5f-84d4-43f9-8f17-535895ef4c36/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/1ae53528-22c1-43e0-b6ca-ded8f79fce16/Default_Imagine_a_mesmerizing_scene_where_a_golden_grizzly_bea_3.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/lindascherer02/8df97c21-2dce-4723-b2e2-eb53286a1a56/Default_create_an_image_of_a_grandmother_walking_with_her_grow_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/lindascherer02/86d7cee5-c697-4ee9-b2b3-b411dc551272/Default_create_an_image_of_a_mother_walking_with_her_grown_dau_0.jpg",
];
const secondary_images = [
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/6a7cfb39-5a37-4212-877f-e46eb15f4ebc/Default_cute_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/dev2024/1a8aa3ad-5953-426d-bd93-c4f63bce3f8c/Default_monkey_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/0c7d9083-14e5-4d8a-afe9-705a73b556b1/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_3.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/bc506d34-9763-49ef-8ec2-f88ef4477e09/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/f539aa23-b601-4d7b-9cfa-92fe4438bf33/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_3.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/1ae53528-22c1-43e0-b6ca-ded8f79fce16/Default_Imagine_a_mesmerizing_scene_where_a_golden_grizzly_bea_3.jpg",
  "https://d2zitdfpdrkol8.cloudfront.net/candyman201700/1a4890b7-9ac1-42f0-9bcd-217c1b09c497/Default_A_fiercely_proud_Nordic_girl_stands_her_presence_exudi_0.jpg",
];

const LatestInnovation = () => {
  return (
    <>
      <div className="w-full bg-[#1C1B1B] py-7 font-kanit relative">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <span className="text-white text-[48px] font-medium leading-[65px] text-center">
              Latest Innovations
            </span>
            <span className="text-white pt-2 text-[17px] max-w-[672px] mx-auto font-[275] leading-normal text-center">
              Explore our most recent creations where AI meets real-world
              applications. Each project showcases the power of our technology
              and the breadth of possibilities.
            </span>
            <div className="flex flex-row justify-center items-center mt-[17px] gap-[27px]">
              <button className="w-[164px] h-[52px] rounded-[36px] filter-button-color active transition-all duration-300 ease-in-out">
                All Work
              </button>
              <button className="w-[164px] h-[52px] rounded-[36px] filter-button-color transition-all duration-300 ease-in-out">
                Illustrations
              </button>
              <button className="w-[164px] h-[52px] rounded-[36px] filter-button-color transition-all duration-300 ease-in-out">
                3D Model
              </button>
              <button className="w-[164px] h-[52px] rounded-[36px] filter-button-color transition-all duration-300 ease-in-out">
                NFT Style
              </button>
            </div>
          </div>
          <div className="mt-[54px] w-full flex flex-col gap-4">
            <Marquee>
              {primary_images.map((each, index) => (
                <div key={index} className="h-[300px] p-[0.2em]">
                  <img className="h-full rounded-[9px]" src={each} alt="img" />
                </div>
              ))}
            </Marquee>
            <Marquee direction="right">
              {secondary_images.map((each, index) => (
                <div key={index} className="h-[300px] p-[0.2em]">
                  <img className="h-full rounded-[9px]" src={each} alt="img" />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
        <span className="absolute z-1 bottom-[-300px] left-0">
          <LeftBGStyle />
        </span>
        <span className="absolute z-1 w-[80px] h-[280px] bg-[#DD00AC] rounded-[281px] blur-[168px] right-20 top-[-120px]"></span>
      </div>
    </>
  );
};

export default LatestInnovation;
