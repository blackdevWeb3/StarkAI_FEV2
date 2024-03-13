import React from "react";
import { LockClosed, LockOpened } from "../../assets";
import { Icon } from "@iconify/react";
import { Slider } from "@mui/material";

const ratios = [
  { label: "Aspect Ratio", value: 0 },
  { label: "1:1", value: 1 },
  { label: "1:2", value: 1 / 2 },
  { label: "2:3", value: 2 / 3 },
  { label: "3:2", value: 3 / 2 },
  { label: "3:4", value: 3 / 4 },
  { label: "4:3", value: 4 / 3 },
  { label: "9:16", value: 9 / 16 },
  { label: "16:9", value: 16 / 9 },
  { label: "2.39:1", value: 2.39 },
];

interface CollapsibleSectionProps {
  title: string;
  optionsGroup: string[];
  isDimensionOpened: boolean;
  setIsDimensionOpened: (isOpen: boolean) => void;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
  sliderWidthDimension: number;
  sliderHeightDimension: number;
  handleSliderChange: (event, newValue) => void;
  handleDimensionInputChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleInputBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lockOpened: boolean;
  dimensionRatio: string;
  handleLockOpenedState: () => void;
  handleDRatioChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  convertWH: () => void;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  optionsGroup,
  isDimensionOpened,
  setIsDimensionOpened,
  selectedOption,
  setSelectedOption,
  sliderWidthDimension,
  sliderHeightDimension,
  handleSliderChange,
  handleDimensionInputChange,
  handleInputBlur,
  lockOpened,
  handleLockOpenedState,
  dimensionRatio,
  handleDRatioChange,
  convertWH,
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
      {/* <div
        className={`relative overflow-hidden h-auto flex flex-col ${
          !isDimensionOpened
            ? "hidden opacity-0 h-0"
            : "block opacity-100 h-auto"
        }`}
      >
        <p>Advanced Controls</p>
        <div className="flex flex-row w-full relative items-center gap-2 pt-3">
          <button className="lock-button" onClick={handleLockOpenedState}>
            {lockOpened ? (
              <span className="h-3 w-3 flex items-center justify-center">
                <LockOpened />
              </span>
            ) : (
              <span className="h-3 w-3 flex items-center justify-center">
                <LockClosed />
              </span>
            )}
          </button>
          <div className="w-full relative text-[#9094a6] h-fit">
            <select
              className="select-ratio hover:border-[#7258f2] hover:cursor-pointer"
              disabled={!lockOpened}
              value={dimensionRatio}
              onChange={handleDRatioChange}
            >
              {ratios.map((ratio) => (
                <option key={ratio.value} value={ratio.value}>
                  {ratio.label}
                </option>
              ))}
            </select>
            <div className="absolute flex w-6 h-full right-2 items-center justify-center top-1/2 text-[#9094a6] translate-y-[-50%] z-[2]">
              <Icon icon="majesticons:chevron-down" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 pt-3 w-full">
          <div className="pl-2 w-1/2 flex items-center">
            <Slider
              min={512}
              max={1536}
              name="width"
              onChange={handleSliderChange}
              value={sliderWidthDimension}
              disabled={!lockOpened}
            />
          </div>
          <div className="w-1/2 relative flex isolate items-center">
            <div className="absolute left-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p>W</p>
            </div>
            <input
              type="number"
              className="input-ratio text-[14px]"
              name="width"
              value={sliderWidthDimension}
              onChange={handleDimensionInputChange}
              onBlur={handleInputBlur}
              disabled={!lockOpened}
            ></input>
            <div className="absolute right-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p className="text-[#9094a6] text-[14px] mb-1">px</p>
            </div>
            <button
              className="absolute bottom-0 left-[calc(50%-18px)] translate-y-[14px] z-10 bg-[#0b0f17] px-3 py-1 border-[#242C3E] border rounded-full hover:border-[#7258F2] hover:bg-[#1E1644]"
              onClick={convertWH}
              disabled={!lockOpened}
            >
              <Icon icon="iconamoon:swap-thin" className="w-3 h-3" />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 pt-3 w-full">
          <div className="pl-2 w-1/2 flex items-center">
            <Slider
              min={512}
              max={1536}
              name="height"
              onChange={handleSliderChange}
              value={sliderHeightDimension}
              disabled={!lockOpened}
            />
          </div>
          <div className="w-1/2 relative flex isolate items-center">
            <div className="absolute left-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p>H</p>
            </div>
            <input
              type="number"
              className="input-ratio text-[14px]"
              name="height"
              value={sliderHeightDimension}
              onChange={handleDimensionInputChange}
              onBlur={handleInputBlur}
              disabled={!lockOpened}
            />
            <div className="absolute right-0 w-10 h-10 z-[2] flex items-center justify-center top-0 bottom-0 m-auto pointer-events-none">
              <p className="text-[#9094a6] text-[14px] mb-1">px</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default CollapsibleSection;
