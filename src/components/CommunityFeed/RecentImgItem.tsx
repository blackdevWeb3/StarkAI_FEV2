import { Icon } from "@iconify/react";
import { CreateArt, GradientCreateArt } from "../../assets";

const RecentImgItem = () => {
  return (
    <div className="rounded-[6px] bg-[#333535] pl-[14px] pr-[12px] py-[15px] max-w-[371px] min-w-[371px] font-kanit w-full h-full">
      <div className="rounded-[8px] max-w-[343px] max-h-[258px]">
        <img
          src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/generations/14b2337d-2b94-43b4-bbb5-a3bc8ff7b152-0.png"
          alt="imageRectangle"
          className="bg-auto rounded-[8px]"
        />
      </div>
      <div className="flex justify-between py-[11px] border-b-[0.5px] border-b-[#606060]">
        <div className="flex flex-wrap gap-[8px]">
          <div className="w-[41px] h-[41px] rounded-full bg-transparent">
            <img
              src="/assets/img/Ellipse 9.svg"
              alt="avatar"
              className="w-[41px] h-[41px] rounded-full"
            />
          </div>
          <div className="py-[5px]">
            <div className=" text-[12px]"> Jossie Smith</div>
            <div className=" font-[275] text-[10px]">Creator</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-[30px] bg-[#211B20] hover:bg-[#211B20]/40 hover:cursor-pointer pt-2 pb-[9px] px-[26px] gap-1 flex flex-row items-center">
            <Icon icon="uil:user-plus" width={12} />
            <span className="text-[8px]">Follow</span>
          </div>
        </div>
      </div>
      <div className="py-[10px] border-b-[0.5px] border-b-[#606060]">
        <div className="flex justify-between">
          <div className="rounded-[30px] bg-[#211B20] hover:bg-[#211B20]/40 hover:cursor-pointer py-2 px-6 flex flex-row gap-1 items-center">
            <Icon icon="humbleicons:prompt" className="w-3 h-[10.8px]" />
            <span className="text-[8px] font-normal leading-normal">
              Prompt
            </span>
          </div>
          <div className="flex flex-row justify-between items-center gap-[10px]">
            <button className="group">
              <Icon
                icon="uiw:share"
                width={24}
                className="text-[#C1B6B6] group-hover:text-white"
              />
            </button>
            <button className="group">
              <Icon
                icon="bi:cloud-download"
                width={24}
                className="text-[#C1B6B6] group-hover:text-white"
              />
            </button>
            <button className="group">
              <Icon
                icon="solar:heart-linear"
                width={24}
                className="text-[#C1B6B6] group-hover:text-white"
              />
            </button>
          </div>
        </div>
        <div className="pt-[7px]">
          <div className=" text-[11px] font-[275] leading-normal">
            create a very complex city with purple dogs everywhere that live
            there and work in the city. they are all very rich. signs saying
            "DUKO" everywhere
          </div>
        </div>
      </div>
      <div className="py-[11px] border-b-[0.5px] border-[#606060]">
        <div className="flex justify-between flex-row">
          <div className="w-1/3">
            <div className="font-[275] text-[8px] text-[#BEBCBC]">
              Input Resolution
            </div>
            <div className="text-[14px] text-white">1024 x 768px</div>
          </div>
          <div className="w-1/3">
            <div className="font-[275] text-[8px] text-[#BEBCBC]">Created</div>
            <div className="text-[14px] text-white">10/03/24</div>
          </div>
          <div className="w-1/3">
            <div className="font-[275] text-[8px] text-[#BEBCBC]">
              Input Resolution
            </div>
            <div className="text-[14px] text-white">1024 x 768px</div>
          </div>
        </div>
        <div className="flex flex-row justify-between pt-4 w-full">
          <div className="w-1/3">
            <div className="font-[275] text-[8px] text-[#BEBCBC]">Pipeline</div>
            <div className="text-[14px] text-white">Alchemy V2</div>
          </div>
          <div className="w-1/3">
            <div className="font-[275] text-[8px] text-[#BEBCBC]">Seed</div>
            <div className="text-[14px] text-white">318540544</div>
          </div>
          <div className="w-1/3 flex flex-col justify-end">
            <div className="font-[275] text-[8px] text-[#BEBCBC]">Preset</div>
            <div className="text-[14px] text-white">CINEMATIC</div>
          </div>
        </div>
      </div>
      <button className="rounded-full border-[#DD00AC] border px-[80px] py-[18px] mt-[11px] flex flex-row gap-[11px] items-center">
        <span className="w-[22px] h-[22px]">
          <GradientCreateArt />
        </span>
        <span className="gradient-text">Create with this Model</span>
      </button>
    </div>
  );
};
export default RecentImgItem;
