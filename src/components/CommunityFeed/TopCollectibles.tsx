import { FilterIcon, ScrollDown } from "../../assets";

const TopCollectibles = () => {
  return (
    <div className="flex flex-col gap-[21px] font-kanit">
      <div className="flex flex-row justify-between">
        <span className="text-white text-[24px] font-medium leading-normal">
          Top Collectibles
        </span>
        <div className="flex flex-row gap-2 text-[#B7B7B7] text-[15px] font-[300] leading-normal">
          <span className="">
            <FilterIcon />
          </span>
          Filters
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[13px] lg:gap-[4px]">
          <button className="rounded-[42px] h-[42px] w-[98px] border border-[#505050] text-[#CBC3C3] leading-normal font-light text-[12px]">
            All
          </button>
          <button className="rounded-[42px] h-[42px] w-[98px] border border-[#505050] text-[#CBC3C3] leading-normal font-light text-[12px]">
            Videos
          </button>
          <button className="rounded-[42px] h-[42px] w-[98px] border border-[#505050] text-[#CBC3C3] leading-normal font-light text-[12px]">
            Trending
          </button>
        </div>
        <div className="flex flex-row rounded-[40px] h-[42px] w-[245px] border border-[#505050] justify-between items-center text-[#CBC3C3] pl-[21px] text-[10px] font-[300]">
          Search catgory
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
  );
};

export default TopCollectibles;
