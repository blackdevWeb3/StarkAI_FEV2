import React from "react";
import { LockClosed, LockOpened } from "../../assets";
import { Icon } from "@iconify/react";
import { Slider } from "@mui/material";

interface CollapsibleSectionProps {
  title: string;
  optionsGroup: string[];
  isDimensionOpened: boolean;
  setIsDimensionOpened: (isOpen: boolean) => void;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  optionsGroup,
  isDimensionOpened,
  setIsDimensionOpened,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="border-b-[1px] border-[#ffffff29] py-3 font-chakra">
      <button
        className="flex flex-row items-center justify-between w-full bg-transparent"
        onClick={() => setIsDimensionOpened(!isDimensionOpened)}
      >
        <span className="font-chakra">{title}</span>
        <Icon
          icon={`${
            !isDimensionOpened ? "charm:chevron-up" : "charm:chevron-down"
          }`}
          rotate={2}
          className="w-4 h-4"
        />
      </button>
      <div
        className={`overflow-visible pt-3 transition-all duration-500 ease-in-out ${
          !isDimensionOpened
            ? "hidden opacity-0 h-0"
            : "block opacity-100 h-auto"
        }`}
      >
        <div className="pe-0 p-0 overflow-visible">
          <div className="image-board grid-2">
            {optionsGroup.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="image-dimension-group"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => setSelectedOption(option)}
                  className="image-radio"
                ></input>
                <div
                  className={`image-radio-board ${
                    selectedOption === option ? "image-radio-checked" : ""
                  }`}
                >
                  {option}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`relative overflow-hidden h-auto flex flex-col ${
          !isDimensionOpened
            ? "hidden opacity-0 h-0"
            : "block opacity-100 h-auto"
        }`}
      >
        <p>Advanced Controls</p>
        <div className="flex flex-row w-full relative items-center gap-2 pt-3">
          <button className="lock-button">
            <span className="h-3 w-3 flex items-center justify-center">
              <LockClosed />
            </span>
          </button>
          <div className="w-full relative text-[#9094a6] h-fit">
            <select className="select-ratio hover:border-[#7258f2] hover:cursor-pointer"></select>
            <div className="absolute flex w-6 h-full right-2 items-center justify-center top-1/2 text-[#9094a6] translate-y-[-50%] z-[2]">
              <Icon icon="majesticons:chevron-down" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 pt-3">
          <Slider />
          <div className="w-full relative flex isolate items-center">
            <div className="absolute left-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p>W</p>
            </div>
            <input className="input-ratio"></input>
            <div className="absolute right-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p className="text-[#9094a6] text-[14px] mb-1">px</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 pt-3">
          <Slider />
          <div className="w-full relative flex isolate items-center">
            <div className="absolute left-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p>H</p>
            </div>
            <input className="input-ratio"></input>
            <div className="absolute right-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p className="text-[#9094a6] text-[14px] mb-1">px</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CollapsibleSection;
