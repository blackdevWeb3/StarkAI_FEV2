import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  ImageNumberGroup,
  InputDimensionsGroup,
  ImageDimensionsGroup,
} from "../../utils/constants";

import CollapsibleSection from "./CollapsibleSection";

import { ReactComponent as DocumentSVG } from "../../assets/document.svg";

const ImageGeneration = () => {
  const [isImageOpened, SetIsImageOpened] = useState<boolean>(false);
  const [isDimensionOpened, SetIsDimensionOpened] = useState<boolean>(false);
  const [photoReal, setPhotoReal] = useState<boolean>(false);
  const [alchemy, setAlchemy] = useState<boolean>(false);
  const [promptMagic, setPromptMagic] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedNumber, setSelectedNumber] = useState<number>(1);
  const dimensionsGroup = alchemy ? InputDimensionsGroup : ImageDimensionsGroup;
  const title = alchemy ? "Input Dimensions" : "Image Dimensions";

  const handleRealPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhotoReal(event?.target.checked);
  };

  const handleAlchemyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlchemy(event?.target.checked);
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromptMagic(event.target.checked);
  };

  const handleImageNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const numberValue = parseInt(event.target.value, 10); // Convert the string to a number
    setSelectedNumber(numberValue);
  };

  return (
    <div className="relative w-full">
      <div className="w-full bg-black h-screen pt-[29px] flex flex-col">
        <div className="w-full flex flex-col px-8">
          <span className="text-white font-chakra text-[20px] font-medium">
            AI Image Generation
          </span>
          <div className="flex items-start w-full pt-8 mb-4">
            <div className="relative block mr-2">
              <button className="button-prompt">
                <Icon
                  icon="game-icons:rolling-dices"
                  rotate={2}
                  color="#ff1493"
                  className="w-10 h-9"
                />
              </button>
            </div>
            <textarea
              placeholder="Type a prompt ..."
              maxLength={1000}
              className="textarea-prompt font-chakra"
            />
            <span className="inline-block">
              <button className="button-generate">
                <span className="flex flex-row items-center gap-[10px] justify-center">
                  <span className="font-chakra text-[18px] font-medium">
                    Generate
                  </span>
                  <span className="flex flex-row items-center justify-center gap-1">
                    <Icon icon="game-icons:cash" className="w-5 h-5" />
                    <span className="text-[16px] font-medium">2</span>
                  </span>
                </span>
              </button>
            </span>
          </div>
          <div className="flex items-stretch gap-4 flex-wrap relative">
            <button className="button-model py-2">
              <div className="w-9 h-9 mr-2 flex items-center justify-center">
                <img
                  src="https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ea08719-5fd1-4df7-9adc-5218637cba17/Leonardo_Diffusion_XL_a_brain_suspended_in_midair_bathed_in_a_1.jpg"
                  alt="model"
                  className="w-9 h-9 rounded-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex flex-row items-center">
                  <span className="font-medium text-[12px] leading-[100%] text-[#dbdbdb80]">
                    Fineturned Model
                  </span>
                  <span className="flex items-center ms-6 text-[#dbdbdb80]">
                    <Icon icon="icon-park-outline:direction-adjustment-two" />
                    <span className="text-[12px]">640 * 832</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-white">3D Animation Style</span>
                </div>
              </div>
              <div className="pl-4 flex items-center flex-row ml-auto">
                <span className="">
                  <DocumentSVG />
                </span>
                <Icon icon="bxs:down-arrow" className="w-3 h-3 ml-4" />
              </div>
            </button>
            <div className="model-dropdownmenu">
              <div className="model-menu-board model-visible">
                <button className="model-item">
                  <div className="flex items-center justify-between flex-1">
                    <span>Leonardo Diffusion XL</span>
                    <span className="color-text ml-5">Alchemy V2</span>
                  </div>
                </button>
                <button className="model-item">
                  <div className="flex items-center justify-between flex-1">
                    <span>Leonardo Vision XL</span>
                    <span className="color-text ml-5">Alchemy V2</span>
                  </div>
                </button>
                <button className="model-item">
                  <div className="flex items-center justify-between flex-1">
                    <span>AlbedoBase XL</span>
                    <span className="color-text ml-5">Alchemy V2</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="absolute top-0 left-[-270px] z-10 w-[270px] h-full bg-black pt-[10px] flex flex-col px-4 border-r border-primary">
        <div className="pt-[19px] flex flex-row justify-between items-center">
          <span className="flex flex-row justify-center items-center">
            <h1 className="text-[24px] font-semibold font-chakra text-white">
              STARK.
            </h1>
            <h1 className="text-[24px] font-semibold font-chakra text-deepPink">
              AI
            </h1>
          </span>
          <Link to="/app/">
            <Icon
              icon="ion:return-down-back-sharp"
              className="w-6 h-6 text-fontSecondary"
            />
          </Link>
        </div>
        <div className="mt-10 border-t-[1px] border-b-[1px] border-[#ffffff29] py-3">
          <button
            className="flex flex-row items-center justify-between w-full bg-transparent"
            onClick={() => SetIsImageOpened(!isImageOpened)}
          >
            <span className="font-chakra">Number of Images</span>
            <Icon
              icon={`${
                !isImageOpened ? "charm:chevron-up" : "charm:chevron-down"
              }`}
              rotate={2}
              className="w-4 h-4"
            />
          </button>
          <div
            className={`overflow-visible pt-3 transition-all duration-500 ease-in-out ${
              !isImageOpened
                ? "hidden opacity-0 h-0"
                : "block opacity-100 h-auto"
            }`}
          >
            <div className="pe-0 p-0 overflow-visible">
              <div className="image-board grid-4">
                {ImageNumberGroup.map((option) => (
                  <label key={option}>
                    <input
                      type="radio"
                      name="image-radio-group"
                      value={option}
                      onChange={handleImageNumberChange}
                      className="image-radio"
                    ></input>
                    <div className="image-radio-board">{option}</div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-[1px] border-[#ffffff29] py-3">
          <button className="flex flex-row items-center justify-between w-full bg-transparent">
            <span className="font-chakra">PhotoReal</span>
            <div className="relative inline-block w-[46px] align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="photo"
                checked={photoReal}
                onChange={handleRealPhotoChange}
                id="photo"
                className="toggle-checkbox absolute mt-[2px] ml-[2px] block w-5 h-5 rounded-full bg-white border-1 appearance-none cursor-pointer"
              />
              <label
                htmlFor="photo"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-[#515151] cursor-pointer"
              ></label>
            </div>
          </button>
          {photoReal && (
            <div className="primary-box mt-3">
              <div className="flex flex-col w-full gap-[6px]">
                <div className="flex flex-row justify-between items-center text-[12px] text-fontSecondary">
                  <span>Depth of Field</span>
                  <span className="text-white">Low</span>
                </div>
                <div className="flex flex-row justify-between items-center text-[12px] text-fontSecondary">
                  <span>RAW Mode</span>
                  <span className="text-white uppercase">off</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border-b-[1px] border-[#ffffff29] py-3">
          <button className="flex flex-row items-center justify-between w-full bg-transparent">
            <span className="font-chakra">Alchemy</span>
            <div className="relative inline-block w-[46px] align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="alchemy"
                checked={alchemy}
                onChange={handleAlchemyChange}
                id="alchemy"
                className="toggle-checkbox absolute mt-[2px] ml-[2px] block w-5 h-5 rounded-full bg-white border-1 appearance-none cursor-pointer"
              />
              <label
                htmlFor="alchemy"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-[#515151] cursor-pointer"
              ></label>
            </div>
          </button>
          {alchemy && (
            <div className="primary-box mt-3">
              <div className="flex flex-row justify-between items-center text-[12px] text-fontSecondary">
                <span>Output Resolution</span>
                <span className="text-white">1344 * 896</span>
              </div>
            </div>
          )}
        </div>
        {!alchemy && (
          <div className="border-b-[1px] border-[#ffffff29] py-3">
            <button className="flex flex-row items-center justify-between w-full bg-transparent">
              <span className="font-chakra">Prompt Magic</span>
              <div className="relative inline-block w-[46px] align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  checked={promptMagic}
                  onChange={handlePromptChange}
                  name="promptMagic"
                  id="promptMagic"
                  className="toggle-checkbox absolute mt-[2px] ml-[2px] block w-5 h-5 rounded-full bg-white border-1 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="promptMagic"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-[#515151] cursor-pointer"
                ></label>
              </div>
            </button>
            {promptMagic && (
              <div className="primary-box mt-3">
                <div className="flex flex-col w-full gap-[6px]">
                  <div className="flex flex-row justify-between items-center text-[12px] text-fontSecondary">
                    <span>High Contrast</span>
                    <span className="text-white uppercase">on</span>
                  </div>
                  <div className="flex flex-row justify-between items-center text-[12px] text-fontSecondary">
                    <span>Prompt Strength</span>
                    <span className="text-white">0.4</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="border-b-[1px] border-[#ffffff29] py-3">
          <button className="flex flex-row items-center justify-between w-full bg-transparent">
            <span className="font-chakra">Public Images</span>
            <div className="relative inline-block w-[46px] align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="publicImage"
                id="publicImage"
                className="toggle-checkbox absolute mt-[2px] ml-[2px] block w-5 h-5 rounded-full bg-white border-1 appearance-none cursor-pointer"
              />
              <label
                htmlFor="publicImage"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-[#515151] cursor-pointer"
              ></label>
            </div>
          </button>
        </div>
        <CollapsibleSection
          title={title}
          optionsGroup={dimensionsGroup}
          isDimensionOpened={isDimensionOpened}
          setIsDimensionOpened={SetIsDimensionOpened}
          selectedOption={selectedOption} // Pass this as a prop
          setSelectedOption={setSelectedOption} // Pass this as a prop
        />
      </div>
    </div>
  );
};

export default ImageGeneration;
