import { Icon } from "@iconify/react";
import { GradientCreateArt } from "../../assets";
const MyCollectionItem = () => {
  return (
    <div className="flex justify-between rounded-[15px] border-solid border-[0.5px] border-[#333535] overflow-hidden font-kanit bg-[#1C1B1B] max-w-[1057px] mx-auto">
      <div className="w-1/2 pt-[30px] pr-[28px] pl-[18px] pb-[19px] flex flex-col">
        <span className="text-[24px] leading-[36px] text-center font-[500] max-w-[400px] text-ellipsis overflow-hidden whitespace-nowrap">
          A huge blue dragon that splash screen alt tab okay enter citizen hello
          world
        </span>

        <div className="bg-[#333535] px-[10px] py-[10px] rounded-[8px] mb-[17px] mt-2">
          <div className="flex justify-between">
            <div className="rounded-[30px] bg-[#211B20] hover:bg-[#211B20]/40 hover:cursor-pointer py-2 px-6 flex flex-row gap-1 items-center">
              <Icon icon="humbleicons:prompt" className="w-[16px] h-[15px]" />
              <span className="text-[10px] font-[400] leading-[15px]">
                Prompt
              </span>
            </div>
            <div className="flex flex-row justify-between items-center gap-[10px]">
              <button className="group">
                <Icon
                  icon="uiw:share"
                  width={16}
                  className="text-[#C1B6B6] group-hover:text-white"
                />
              </button>
              <button className="group">
                <Icon
                  icon="bi:cloud-download"
                  width={16}
                  className="text-[#C1B6B6] group-hover:text-white"
                />
              </button>
              <button className="group">
                <Icon
                  icon="solar:heart-linear"
                  width={16}
                  className="text-[#C1B6B6] group-hover:text-white"
                />
              </button>
            </div>
          </div>
          <p className="leading-normal text-[10px] font-[275] mt-[8px]">
            A huge blue dragon that splashes the water as it rises from the
            lake, has Bitcoin engraved on its chest, and emits red lasers from
            its eyes. A scene shot instantly with a 4K, high-performance Nikon
            camera.
          </p>
        </div>
        <div className="py-[17px] border-t-[1px] border-t-[#606060] border-b-[1px] border-b-[#606060]">
          <div className="flex justify-between flex-row">
            <div className="w-1/3">
              <div className="font-[275] text-[10px] text-[#BEBCBC] leading-[15px]">
                Input Resolution
              </div>
              <div className="text-[16px] font-[400] text-white leading-[24px]">
                1024 x 768px
              </div>
            </div>
            <div className="w-1/3">
              <div className="font-[275] text-[10px] text-[#BEBCBC] leading-[15px]">
                Created
              </div>
              <div className="text-[16px] text-white font-[400] leading-[24px]">
                10/03/24
              </div>
            </div>
            <div className="w-1/3">
              <div className="font-[275] text-[10px] text-[#BEBCBC] leading-[15px]">
                Input Resolution
              </div>
              <div className="text-[16px] text-white font-[400] leading-[24px]">
                1024 x 768px
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between pt-4 w-full">
            <div className="w-1/3">
              <div className="font-[275] leading-[15px] text-[10px] text-[#BEBCBC]">
                Pipeline
              </div>
              <div className="text-[16px] font-[400] leading-[24px] text-white">
                Alchemy V2
              </div>
            </div>
            <div className="w-1/3">
              <div className="font-[275] text-[10px] leading-[15px] text-[#BEBCBC]">
                Seed
              </div>
              <div className="text-[16px] text-white font-[400] leading-[24px]">
                318540544
              </div>
            </div>
            <div className="w-1/3 flex flex-col justify-end">
              <div className="font-[275] text-[10px] leading-[15px] text-[#BEBCBC]">
                Preset
              </div>
              <div className="text-[16px] leading-[24px] font-[400] text-white">
                CINEMATIC
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="rounded-full border-[#DD00AC] border py-[23px] mt-[17px] flex flex-row gap-[11px] items-center w-full justify-center">
            <span className="w-[26px] h-[24px]">
              <GradientCreateArt />
            </span>
            <span className="gradient-text1">Create with this Model</span>
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img
          src="/assets/img/hdragon.svg"
          alt="MyItem"
          className="ml-[6px]"
        ></img>
      </div>
    </div>
  );
};
export default MyCollectionItem;
