import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import CollapsibleSection from "./CollapsibleSection";
import { ReactComponent as DocumentSVG } from "../../assets/document.svg";
import TabButton from "../Others/TabButton";
import {
  ImageNumberGroup,
  InputDimensionsGroup,
  ImageDimensionsGroup,
  ModelItems,
  ModelItem,
  defaultStyle,
  AlchemyStyle,
  photoRealStyle,
} from "../../utils/constants";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { Image } from "../../utils/types";

import useOutsideClick from "../../utils/useOutsideClick";
import ModalImgCard from "../Modal/ModalImgCard";
import GenerationHistory from "./GenerationHistory";
import ImageGuidance from "./ImageGuidance";
import { TextareaAutosize } from "@mui/material";

const userSelectedModelItem: ModelItem = {
  id: "1e60896f-3c26-4296-8ecc-53e2afecc132",
  modelType: "Finetuned Model",
  label: "StarkAI Diffusion XL",
  subLabel: "Alchemy V2",
  imgURI:
    "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ea08719-5fd1-4df7-9adc-5218637cba17/Leonardo_Diffusion_XL_a_brain_suspended_in_midair_bathed_in_a_1.jpg",
};

const tabs = [
  { id: "generationHistory", text: "Generation History" },
  { id: "imgGuidance", text: "Image Guidance" },
];

const ImageGeneration = () => {
  const { user }: any = useUser();
  const [activeTab, setActiveTab] = useState("generationHistory");
  const [isImageOpened, SetIsImageOpened] = useState<boolean>(false);
  const [isDimensionOpened, SetIsDimensionOpened] = useState<boolean>(false);
  const [photoReal, setPhotoReal] = useState<boolean>(false);
  const [alchemy, setAlchemy] = useState<boolean>(true);
  const [promptMagic, setPromptMagic] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState("1024 * 768");
  const [selectedNumber, setSelectedNumber] = useState<number>(1);
  const [generationModel, setGenerationModel] = useState<ModelItem | null>(
    userSelectedModelItem
  );
  const [generationStyle, setGenerationStyle] = useState<string>("None");
  const [isModelVisible, setIsModelVisible] = useState(false);
  const [isStyleVisible, setIsStyleVisible] = useState(false);
  const ModelMenuRef = useRef<HTMLDivElement>(null);
  const StyleMenuRef = useRef<HTMLDivElement>(null);
  const [promptText, setPromptText] = useState<string>("");
  const [generating, setGenerating] = useState(false);
  const [imageData, setImageData] = useState<Image[]>([]);
  const [imageSrc, setImageSrc] = useState<File | null>(null);
  const [densityValue, setDensityValue] = useState<number>(50);
  const uploadImgRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    uploadImgRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0)
      setImageSrc(event.target.files[0]);
  };

  const handleRemoveUpload = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevents triggering click on parent element
    setImageSrc(null);
    if (uploadImgRef.current) uploadImgRef.current.value = ""; // Clear the file input
  };

  useOutsideClick(ModelMenuRef, setIsModelVisible);
  useOutsideClick(StyleMenuRef, setIsStyleVisible);

  const dimensionsGroup = alchemy ? InputDimensionsGroup : ImageDimensionsGroup;
  const title = alchemy ? "Input Dimensions" : "Image Dimensions";
  const styleItems = photoReal
    ? photoRealStyle
    : alchemy
    ? AlchemyStyle
    : defaultStyle;
  const handleRealPhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhotoReal(event?.target.checked);
  };

  useEffect(() => {
    if (photoReal) {
      setAlchemy(true);
      setGenerationStyle("Cinematic");
    } else if (!photoReal && alchemy) {
      setGenerationStyle("Dynamic");
    } else if (!photoReal && !alchemy) {
      setGenerationStyle("StarkAI");
    }
  }, [photoReal, alchemy]);

  const handleAlchemyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlchemy(event?.target.checked);
  };

  const handlePromptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPromptMagic(event.target.checked);
  };

  const handleImageNumberChange = (option: number) => {
    const numberValue = option;
    setSelectedNumber(numberValue);
  };

  const handleSelectModelClick = (item: ModelItem) => {
    setGenerationModel(item);
    setIsModelVisible(false);
  };

  const handleSelectStyleClick = (item: any) => {
    setGenerationStyle(item.id);
    setIsStyleVisible(false);
  };

  const handlePromptTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPromptText(event.target.value);
  };

  const handleDensityChange = (event: Event, newValue: number | number[]) => {
    setDensityValue(newValue as number);
  };

  const handleGenerate = async () => {
    setGenerating(true);
    var res;
    if (activeTab === "generationHistory") {
      const data = {
        user: JSON.parse(user).email,
        text: promptText,
        model: generationModel?.id,
        alchemy: alchemy,
        presetStyle: generationStyle,
        numberOfImages: selectedNumber,
        dimension: selectedOption,
      };
      res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/generate/text-to-image`,
        data
      );
    } else {
      const data = new FormData();
      data.append("user", JSON.parse(user).email);
      data.append("text", promptText);
      data.append("model", generationModel?.id || "");
      data.append("alchemy", alchemy ? "true" : "false");
      data.append("presetStyle", generationStyle);
      data.append("numberOfImages", selectedNumber.toString());
      data.append("dimension", selectedOption);
      data.append("density", densityValue.toString());
      data.append("image", imageSrc || "");
      console.log(data);
      res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/generate/image-to-image`,
        data
      );
    }
    if (res.data.message === "Success") {
      console.log("Success");
    } else {
      console.log("Failed");
    }
    setGenerating(false);
    updateLibrary();
  };

  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getImages`,
        { email: JSON.parse(user).email }
      );
      if (res.status === 200) {
        setImageData(res.data);
      } else {
        console.log("Error occurred");
      }
    };
    func();
  };
  useEffect(() => {
    if (imageData.length > 0) return;
    updateLibrary();
  });

  return (
    <>
      <div className="relative w-full">
        <div className="w-full bg-black min-h-[100vh] pt-[29px] flex flex-col">
          <div className="w-full flex flex-col px-8">
            <span className="text-white font-chakra text-[20px] font-medium">
              AI Image Generation
            </span>
            <div className="flex items-start w-full pt-12 mb-4 h-full">
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
              <TextareaAutosize
                className="w-full font-chakra text-[18px] h-10 font-medium leading-5 px-3 py-4 flex flex-col items-center justify-center rounded-md border border-textarea bg-[#101622] hover:bg-[#0b0f17]  text-white focus-visible:bg-transparent focus-visible:outline-none"
                placeholder="Type a comment ..."
                maxLength={1000}
                minRows={1}
                value={promptText}
                onChange={handlePromptTextChange}
              />
              <span className="inline-block">
                <button
                  className="button-generate"
                  disabled={!promptText || generating}
                  onClick={handleGenerate}
                >
                  <span className="flex flex-row items-center gap-[10px] justify-center">
                    <span className="font-chakra text-[18px] font-medium">
                      {generating ? "Generating..." : "Generate"}
                    </span>
                    {!generating && (
                      <span className="flex flex-row items-center justify-center gap-1">
                        <Icon icon="game-icons:cash" className="w-5 h-5" />
                        <span className="text-[16px] font-medium">2</span>
                      </span>
                    )}
                  </span>
                </button>
              </span>
            </div>
            <div className="flex items-stretch gap-4 flex-wrap relative">
              <div className="relative" id="modelSelector" ref={ModelMenuRef}>
                {/* Model Selector Button */}
                <button
                  className={`button-model min-w-80 py-2 ${
                    isModelVisible ? "border-[#9a5cf7]" : "border-[#101622]"
                  }`}
                  onClick={() => setIsModelVisible(!isModelVisible)}
                >
                  <div className="w-9 h-9 mr-2 flex items-center justify-center">
                    <img
                      src={generationModel?.imgURI}
                      alt="model"
                      className="w-9 h-9 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-row items-center">
                      <span className="font-medium text-[12px] leading-[100%] text-[#dbdbdb80]">
                        {generationModel?.modelType}
                      </span>
                      <span className="flex items-center ms-6 text-[#dbdbdb80]">
                        <Icon icon="icon-park-outline:direction-adjustment-two" />
                        <span className="text-[12px]">640 * 832</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white">
                        {generationModel?.label}
                      </span>
                    </div>
                  </div>
                  <div className="pl-4 flex items-center flex-row ml-auto">
                    <span className="">
                      <DocumentSVG />
                    </span>
                    <Icon icon="bxs:down-arrow" className="w-3 h-3 ml-4" />
                  </div>
                </button>

                {/* Model Selection Dropdown Menu */}
                <div
                  className={`model-dropdownmenu transition-all duration-200 ease-in-out ${
                    isModelVisible ? "model-visible" : "model-invisible"
                  }`}
                >
                  <div className="model-menu-board transition-all duration-200 ease-in-out">
                    {ModelItems.map((item, index) => (
                      <button
                        key={index}
                        className="model-item"
                        onClick={() => handleSelectModelClick(item)}
                      >
                        <div className="flex items-center justify-between flex-1">
                          <span>{item.label}</span>
                          {item.subLabel && (
                            <div className="rounded-text-panel">
                              <span className="color-text">
                                {item.subLabel}
                              </span>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Style Selector Button */}
              <div className="relative" id="styleSelector" ref={StyleMenuRef}>
                <button
                  className={`button-model min-w-40 py-2 ${
                    isStyleVisible ? "border-[#9a5cf7]" : "border-[#101622]"
                  }`}
                  onClick={() => setIsStyleVisible(!isStyleVisible)}
                >
                  <div className="flex flex-row w-full items-center justify-between pl-1">
                    <span className="">{generationStyle}</span>
                    <Icon icon="bxs:down-arrow" className="w-3 h-3 ml-4" />
                  </div>
                </button>

                {/* Style Selection Dropdown Menu */}
                <div className="model-dropdownmenu">
                  <div
                    className={`style-menu-board transition-all duration-200 ease-in-out ${
                      isStyleVisible ? "model-visible" : "model-invisible"
                    }`}
                  >
                    {styleItems.map((item, index) => (
                      <button
                        className="style-item"
                        key={index}
                        onClick={() => handleSelectStyleClick(item)}
                      >
                        {item.id}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-800 pl-8 pt-3">
            <nav className="flex space-x-6">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tabId={tab.id}
                  text={tab.text}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-3 border-primary">
            {activeTab === "generationHistory" && (
              <GenerationHistory imageData={imageData} />
            )}
            {activeTab === "imgGuidance" && (
              <ImageGuidance
                imageSrc={imageSrc}
                uploadImgRef={uploadImgRef}
                handleFileChange={handleFileChange}
                handleRemoveUpload={handleRemoveUpload}
                handleUpload={handleUpload}
                densityValue={densityValue}
                handleDensityChange={handleDensityChange}
              />
            )}
          </div>
        </div>

        {/* Left Image Generation Options */}
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
                    <div
                      key={option}
                      className={`image-radio-board ${
                        selectedNumber === option ? "image-radio-checked" : ""
                      }`}
                      onClick={() => handleImageNumberChange(option)}
                    >
                      {option}
                    </div>
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
      <ModalImgCard onUpdate={updateLibrary} />
    </>
  );
};

export default ImageGeneration;
