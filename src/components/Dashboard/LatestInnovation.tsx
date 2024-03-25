import Marquee from "react-fast-marquee";
import { LeftBGStyle } from "../../assets";

const primary_images = [
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/200a139c-e682-41e2-a2e5-2e612e5f9949-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/14b2337d-2b94-43b4-bbb5-a3bc8ff7b152-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/1d543fb4-5fa6-4176-96c8-67b4a16a86c0-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/e39b79a4-e145-4067-85ee-2752c486ed15-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/c19771fe-cb24-47bf-9399-978374bcd8cc-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/97f6d458-313f-4222-99bb-a79134cfe966-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/119a62cb-e2b4-46f8-a297-61ddbcd9879d-0.png",
];
const secondary_images = [
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/c9d96ade-ff46-4075-aa7b-43b7ffd6ca68-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/142e7171-5c07-4166-8877-8895c339a926-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/ee4125ab-461b-493e-86f3-19f8035014d4-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/e39b79a4-e145-4067-85ee-2752c486ed15-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/61a116ba-8a9f-46f6-a7e2-14326e6c9534-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/09984349-0b5a-4db8-a932-dbb8b7f3675f-0.png",
  "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/de7c4f7b-8c16-4a14-89cf-293afafadff1-0.png",
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
