import { useState } from "react";
import { Icon } from "@iconify/react";
import { FilterIcon } from "../../assets";
import SortButton from "../Others/SortButton";

type ButtonProps = {
  label: string;
};

const buttons: ButtonProps[] = [
  { label: "All" },
  { label: "Videos" },
  { label: "Trending" },
];

const TopCollectibles = () => {
  const [selected, setSelected] = useState<string>("All");

  const handleButtonClick = (label: string) => {
    setSelected(label);
  };

  return (
    <div className="flex flex-col gap-[21px] font-kanit">
      <div className="flex flex-row justify-between items-center">
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
          {buttons.map((each, index) => (
            <SortButton
              key={index}
              label={each.label}
              isSelected={selected === each.label}
              onClick={() => handleButtonClick(each.label)}
            />
          ))}
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
    </div>
  );
};

export default TopCollectibles;
