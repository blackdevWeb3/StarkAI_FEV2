import { Icon } from "@iconify/react";
import { ScrollDown } from "../../assets";

const CreateArtBoard = () => {
  return (
    <>
      <div className="flex flex-col gap-[21px] font-kanit">
        <span className="text-white text-[24px] font-medium leading-normal">
          Previous Feed
        </span>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-[13px] lg:gap-[4px]">
            <button className="px-[30px] rounded-[42px] h-[42px] min-w-[98px] border border-[#505050] text-[#CBC3C3] leading-normal font-light text-[12px]">
              All
            </button>
            <button className="px-[30px] rounded-[42px] h-[42px] min-w-[98px] border border-[#505050] text-[#CBC3C3] leading-normal font-light text-[12px]">
              Images
            </button>
            <button className="px-[30px] rounded-[42px] h-[42px] min-w-[98px] border border-[#505050] text-[#CBC3C3] leading-normal font-light text-[12px]">
              Videos
            </button>
          </div>
          <div className="relative inline-flex flex-row items-center">
            <input
              placeholder="Search category"
              className="flex flex-row bg-primaryBackground rounded-[40px] h-[42px] w-[245px] border border-[#505050] justify-between items-center text-[#CBC3C3] pl-[21px] text-[12.5px] font-[300]"
            ></input>
            <span className="absolute right-4">
              <Icon icon="iconamoon:search-thin" color="#B3B3B3" />
            </span>
          </div>
        </div>
        <div className="w-full rounded-[6px] bg-[#333535] px-[13px] py-[14px] flex flex-col gap-[14px]">
          <div className=""></div>
          <div className="flex items-center justify-center">
            <button className="h-[57px] w-[194px] gap-2 border border-[#DD00AC] rounded-[40px] flex flex-row items-center justify-center">
              <ScrollDown />
              <span className="leading-normal font-medium text-[14px] gradient-text">
                Scroll More
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateArtBoard;
