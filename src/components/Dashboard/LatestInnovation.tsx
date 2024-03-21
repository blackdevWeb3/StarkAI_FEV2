import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const LatestInnovation = () => {
  return (
    <>
      <div className="w-full bg-[#1C1B1B] py-7 font-kanit">
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
          <div className="mt-[54px] w-full">
            <Carousel
              autoPlay
              infiniteLoop={true}
              transitionTime={3000}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
            >
              <div className="w-full h-[318px] flex flex-row gap-2">
                <img
                  src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_0.jpg"
                  alt="img"
                ></img>
                <img src="https://d2zitdfpdrkol8.cloudfront.net/candyman201700/1ae53528-22c1-43e0-b6ca-ded8f79fce16/Default_Imagine_a_mesmerizing_scene_where_a_golden_grizzly_bea_3.jpg"></img>
                <img src="https://d2zitdfpdrkol8.cloudfront.net/candyman201700/eeaa4d5f-84d4-43f9-8f17-535895ef4c36/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg"></img>
                <img src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_1.jpg"></img>
              </div>
              <div className="w-full h-[318px] flex flex-row gap-2">
                <img src="https://d2zitdfpdrkol8.cloudfront.net/candyman201700/eeaa4d5f-84d4-43f9-8f17-535895ef4c36/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg"></img>
                <img src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_1.jpg"></img>
                <img
                  src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_0.jpg"
                  alt="img"
                ></img>
              </div>
            </Carousel>
            <div className="mt-[41px]">
              <Carousel
                autoPlay
                infiniteLoop={true}
                transitionTime={3000}
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
              >
                <div className="w-full h-[318px] flex flex-row gap-2">
                  <img
                    src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_0.jpg"
                    alt="img"
                  ></img>
                  <img src="https://d2zitdfpdrkol8.cloudfront.net/candyman201700/1ae53528-22c1-43e0-b6ca-ded8f79fce16/Default_Imagine_a_mesmerizing_scene_where_a_golden_grizzly_bea_3.jpg"></img>
                  <img src="https://d2zitdfpdrkol8.cloudfront.net/candyman201700/eeaa4d5f-84d4-43f9-8f17-535895ef4c36/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg"></img>
                  <img src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_1.jpg"></img>
                </div>
                <div className="w-full h-[318px] flex flex-row gap-2">
                  <img src="https://d2zitdfpdrkol8.cloudfront.net/candyman201700/eeaa4d5f-84d4-43f9-8f17-535895ef4c36/Default_Vivid_colors_pick_color_a_beautiful_and_happy_woman_an_0.jpg"></img>
                  <img src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_1.jpg"></img>
                  <img
                    src="https://d2zitdfpdrkol8.cloudfront.net/ryanniit0x902/5ab5093a-35a8-4c95-a733-6e862b47a0d4/Default_Lexus_Car_0.jpg"
                    alt="img"
                  ></img>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestInnovation;
