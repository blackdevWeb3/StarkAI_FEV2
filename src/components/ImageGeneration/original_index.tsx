import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import { useUser } from "../../config/context/UserContext";
import axios from "axios";
import { Image } from "../../utils/types";

import useOutsideClick from "../../utils/useOutsideClick";
import ModalImgCard from "../Modal/ModalImgCard";
import ImageGuidance from "./ImageGuidance";
import { TextareaAutosize } from "@mui/material";

import io from "socket.io-client";
import { toast } from "react-toastify";
import ModalContext from "../../config/context/modalContext";
import ToggleCheckBox from "../Modal/ToggleCheckbox";
import { useAccount, useNetwork } from "wagmi";
import { MarketPlace } from "../../config/const";
import MarketPlaceABI from "../../config/marketplace.json";
import ERC20ABI from "../../config/ERC20.json";
import { writeContract, readContract, waitForTransaction } from "@wagmi/core";
import CreatedImageItem from "./CreatedImageItem";
import { deleteImageAction } from "../../actions/imageAction";

// const socket = io("http://localhost:5001");
const socket = io(process.env.REACT_APP_SOCKET_API || "http://localhost:5001");

const userSelectedModelItem: ModelItem = {
  id: "1e60896f-3c26-4296-8ecc-53e2afecc132",
  modelType: "Finetuned Model",
  label: "StarkAI XL v1",
  subLabel: "Alchemy V2",
  imgURI:
    "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ea08719-5fd1-4df7-9adc-5218637cba17/Leonardo_Diffusion_XL_a_brain_suspended_in_midair_bathed_in_a_1.jpg",
};

const tabs = [
  { id: "generationHistory", text: "Generation History" },
  { id: "imgGuidance", text: "Image Guidance" },
];

const ImageGenerationOrigin = () => {
  const { user }: any = useUser();
  const modalCtx = useContext(ModalContext);
  const [activeTab, setActiveTab] = useState("generationHistory");
  const [isImageOpened, SetIsImageOpened] = useState<boolean>(false);
  const [isDimensionOpened, SetIsDimensionOpened] = useState<boolean>(false);
  const [photoReal, setPhotoReal] = useState<boolean>(false);
  const [alchemy, setAlchemy] = useState<boolean>(true);
  const [promptMagic, setPromptMagic] = useState<boolean>(false);
  const [negativePrompt, setNegativePrompt] = useState<boolean>(false);
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
  const [negativePromptText, setNegativePromptText] = useState<
    string | undefined
  >("");
  const [generating, setGenerating] = useState(false);
  const [imageData, setImageData] = useState<Image[]>([]);
  const [imageSrc, setImageSrc] = useState<File | null>(null);
  const [densityValue, setDensityValue] = useState<number>(50);
  const uploadImgRef = useRef<HTMLInputElement>(null);
  const [imgData, setImgData] = useState<any>(null);
  const { isConnected } = useAccount();
  const [sliderWidthDimension, setSliderWidthDimension] = useState<number>(512);
  const [sliderHeightDimension, setSliderHeightDimension] =
    useState<number>(512);
  const [lockOpened, setLockOpened] = useState<boolean>(false);
  const [dimensionRatio, setDimensionRatio] = useState<string>("");

  const deleteImage = async (image) => {
    const result = await deleteImageAction(image);
    if (result) {
      updateLibrary();
    }
    console.log("result:", result);
  };

  const PromptHandler = (param1, param2) => {
    setPromptText(param1);
    setNegativePromptText(param2);
    if (param2) setNegativePrompt(true);
  };

  const convertWH = () => {
    const currentWidth = sliderWidthDimension;
    const currentHeight = sliderHeightDimension;
    setSliderWidthDimension(currentHeight);
    setSliderHeightDimension(currentWidth);
  };

  useEffect(() => {
    if (sliderWidthDimension === 0) return;
    const _ratio = sliderWidthDimension / sliderHeightDimension;
    if (_ratio > 0.45 && _ratio < 0.5125) setDimensionRatio(String(1 / 2));
    else if (_ratio < 0.6125 && _ratio >= 0.5125)
      setDimensionRatio(String(9 / 16));
    else if (_ratio < 0.717 && _ratio >= 0.617)
      setDimensionRatio(String(2 / 3));
    else if (_ratio >= 0.7 && _ratio < 0.8) setDimensionRatio(String(3 / 4));
    else if (_ratio > 0.95 && _ratio < 1.05) setDimensionRatio("1");
    else if (_ratio > 1.28 && _ratio < 1.38) setDimensionRatio(String(4 / 3));
    else if (_ratio > 1.45 && _ratio < 1.55) setDimensionRatio(String(3 / 2));
    else if (_ratio > 1.72 && _ratio < 1.82) setDimensionRatio(String(16 / 9));
    else if (_ratio > 2.34 && _ratio < 2.44) setDimensionRatio("2.39");
    else setDimensionRatio("0");
  }, [sliderWidthDimension, sliderHeightDimension]);

  const handleDRatioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    // Check if the value contains ':' or '/' indicating it's a ratio and needs evaluation
    if (Number(selectedValue) !== 0) {
      const _height = Math.max(
        512,
        Math.min(1536, Math.trunc(sliderWidthDimension / Number(selectedValue)))
      );
      const _width = Math.trunc(_height * Number(selectedValue));
      setSliderHeightDimension(_height);
      setSliderWidthDimension(_width);
      setDimensionRatio(event.target.value);
    } else {
      setDimensionRatio(parseFloat(selectedValue).toString());
      setDimensionRatio(event.target.value);
    }
  };

  const handleLockState = () => {
    setLockOpened(!lockOpened);
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "width":
        setSliderWidthDimension(
          Math.max(512, Math.min(1536, sliderWidthDimension))
        );
        break;
      case "height":
        setSliderHeightDimension(
          Math.max(512, Math.min(1536, sliderHeightDimension))
        );
        break;
      default:
    }
  };

  const handleDimensionInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.valueAsNumber;
    if (event.target.name === "width") {
      setSliderWidthDimension(inputValue);
    } else if (event.target.name === "height") {
      setSliderHeightDimension(inputValue);
    }
  };

  const handleSliderChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: number | number[]
  ) => {
    if (typeof newValue === "number") {
      const target = event.target;
      switch (target.name) {
        case "width":
          setSliderWidthDimension(Math.max(512, Math.min(1536, newValue)));
          break;
        case "height":
          setSliderHeightDimension(Math.max(512, Math.min(1536, newValue)));
          break;
        default:
      }
    }
  };

  const handleUpload = () => {
    uploadImgRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImageSrc(event.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        const tmp = reader.result;
        setImgData(tmp);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
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

  const handleNegativePrompt = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNegativePrompt(event.target.checked);
  };

  const handleImageNumberChange = (option: number) => {
    const numberValue = option;
    const tmp = selectedOption.split("*");
    if (option > 4 && (parseInt(tmp[0]) > 768 || parseInt(tmp[1]) > 768)) {
      toast.warning(
        "If either width or height is over 768, must be between 1 and 4.",
        {
          autoClose: 2000,
          containerId: "main",
        }
      );
      setSelectedNumber(4);
    } else setSelectedNumber(numberValue);
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

  const handleNegativePromptTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNegativePromptText(event.target.value);
  };

  const handleDensityChange = (event: Event, newValue: number | number[]) => {
    setDensityValue(newValue as number);
  };

  useEffect(() => {
    socket.on("Image Saved", (data) => {
      console.log(data);
    });

    socket.on("Generation Complete", (data) => {
      console.log(data);
    });

    socket.on("Save Complete", (data) => {
      console.log(data);
      updateLibrary();
      setGenerating(false);
    });

    socket.on("Motion Saved", (data) => {
      console.log("Motion Saved", data);
    });
  }, [socket]);

  useEffect(() => {
    const tmp = selectedOption.split("*");
    if (
      selectedNumber > 4 &&
      (parseInt(tmp[0]) > 768 || parseInt(tmp[1]) > 768)
    ) {
      toast.warning(
        "If either width or height is over 768, must be between 1 and 4.",
        {
          autoClose: 2000,
          containerId: "main",
        }
      );
      setSelectedNumber(4);
    } else setSelectedNumber(selectedNumber);
  }, [selectedOption]);

  const { chain } = useNetwork();

  const handleGenerate = async () => {
    // if (!isConnected) {
    //   toast.warning("Connect wallet first!", {
    //     autoClose: 2000,
    //     containerId: "main",
    //   });
    //   return;
    // }
    setGenerating(true);
    // const chainId = chain ? chain.id : 97;
    // const tradeToken: any = await readContract({
    //   address: MarketPlace[chainId],
    //   abi: MarketPlaceABI,
    //   functionName: "tradeToken",
    // });
    // const generateImageFee: any = await readContract({
    //   address: MarketPlace[chainId],
    //   abi: MarketPlaceABI,
    //   functionName: "generateImageFee",
    // });

    try {
      // let tx = await writeContract({
      //   address: tradeToken,
      //   abi: ERC20ABI,
      //   functionName: "approve",
      //   args: [MarketPlace[chainId], generateImageFee],
      // });
      // console.log(tx);
      // let data = await waitForTransaction(tx);
      // console.log("-------data-------", data);
      // tx = await writeContract({
      //   address: MarketPlace[chainId],
      //   abi: MarketPlaceABI,
      //   functionName: "generateImage",
      // });
      // data = await waitForTransaction(tx);
      // console.log("-------data-2------", data);
      if (activeTab === "generationHistory") {
        const data = {
          user: JSON.parse(user).email,
          text: promptText,
          model: generationModel?.id,
          alchemy: alchemy,
          presetStyle: generationStyle,
          numberOfImages: selectedNumber,
          dimension: lockOpened
            ? `${sliderWidthDimension} * ${sliderHeightDimension}`
            : selectedOption,
          negative_prompt: negativePromptText,
        };
        socket.emit("text-to-image", data);
      } else {
        const data = {
          user: JSON.parse(user).email,
          text: promptText,
          model: generationModel?.id || "",
          alchemy: alchemy ? "true" : "false",
          presetStyle: generationStyle,
          numberOfImages: selectedNumber.toString(),
          dimension: lockOpened
            ? `${sliderWidthDimension} * ${sliderHeightDimension}`
            : selectedOption,
          density: densityValue.toString(),
          image: imgData,
          negative_prompt: negativePromptText,
        };
        socket.emit("image-to-image", data);
      }
    } catch (e) {
      setGenerating(false);
      return;
    }
  };

  const updateLibrary = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getImages`,
        { email: JSON.parse(user).email }
      );
      setImageData(res.data.images);
    } catch (error) {
      console.error("An error occurred while fetching images:", error);
    }
  };

  useEffect(() => {
    if (imageData.length === 0) {
      updateLibrary();
    }
  }, []);

  const onNextImage = () => {
    const ind = modalCtx.index;
    modalCtx.setData(imageData[ind + 1]);
    modalCtx.setIndex(ind + 1);
  };

  const onPrevImage = () => {
    const ind = modalCtx.index;
    modalCtx.setData(imageData[ind - 1]);
    modalCtx.setIndex(ind - 1);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="w-full bg-black min-h-[100vh] pt-[29px] flex flex-col">
          <div className="w-full flex flex-col px-8 sm:px-4">
            <span className="text-white font-chakra text-[20px] font-medium">
              AI Image Generation
            </span>
            <div className="flex items-start w-full pt-12 pb-4 h-full">
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
                className="w-full font-chakra text-[18px] h-10 font-medium leading-5 px-5 py-4 flex flex-col items-center justify-center rounded-md border border-textarea bg-[#101622] hover:bg-[#0b0f17]  text-white focus-visible:bg-transparent focus-visible:outline-none"
                placeholder="Type a comment ..."
                maxLength={1000}
                minRows={1}
                value={promptText}
                onChange={handlePromptTextChange}
              />
              <span className="inline-block sm:hidden md:hidden">
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
            <div
              className={`w-full pb-4 overflow-hidden ${
                negativePrompt
                  ? "opacity-100 h-auto block"
                  : "h-0 hidden opacity-0"
              }`}
            >
              <TextareaAutosize
                className="w-full font-chakra text-[18px] h-10 font-medium leading-5 px-5 py-4 flex flex-col items-center justify-center rounded-md border border-textarea bg-[#101622] hover:bg-[#0b0f17]  text-white focus-visible:bg-transparent focus-visible:outline-none"
                placeholder="Type what you don’t want to see in the image (a negative prompt)..."
                maxLength={1000}
                minRows={1}
                value={
                  negativePromptText !== null ? negativePromptText : undefined
                }
                onChange={handleNegativePromptTextChange}
              />
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

              {/* Negative Prompt Switch */}
              <div className="flex flex-row gap-2 items-center">
                <ToggleCheckBox
                  name="negativePrompt"
                  id="negativePrompt"
                  checked={negativePrompt}
                  changeHandler={handleNegativePrompt}
                />
                <span className="text-[14px]">Add Negative Prompt</span>
              </div>
            </div>
            <span className="hidden sm:inline-block md:inline-block mt-6">
              <button
                className="button-generate ml-0 w-full"
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

          {/* Tab Navigation */}
          <div className="border-b border-gray-800 pl-8 pt-3 sm:pl-4">
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
          <div className="border-primary sm:px-4 px-8 sm:mt-3 mt-5">
            {activeTab === "generationHistory" &&
              imageData.map((item, index) => (
                <CreatedImageItem
                  imageData={item}
                  PromptHandler={PromptHandler}
                  deleteImage={deleteImage}
                  key={index}
                />
              ))}
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
        <div className="absolute top-0 left-[-270px] z-50 w-[270px] h-full bg-black pt-[10px] flex flex-col px-4 border-r border-primary">
          <div className="pt-[19px] flex flex-row justify-between items-center">
            <span className="flex flex-row justify-center items-center">
              <h1 className="text-[24px] font-semibold font-chakra text-white">
                STARK&nbsp;
              </h1>
              <h1 className="text-[24px] font-semibold font-chakra text-deepPink">
                AI
              </h1>
            </span>
            <Link to="/app">
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
              <ToggleCheckBox
                name="photo"
                checked={photoReal}
                changeHandler={handleRealPhotoChange}
                id="photo"
              />
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
              <ToggleCheckBox
                name="alchemy"
                checked={alchemy}
                changeHandler={handleAlchemyChange}
                id="alchemy"
              />
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
                <ToggleCheckBox
                  name="promptMagic"
                  checked={promptMagic}
                  changeHandler={handlePromptChange}
                  id="promptMagic"
                />
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
              <ToggleCheckBox name="publicImage" id="publicImage" />
            </button>
          </div>
          <CollapsibleSection
            title={title}
            optionsGroup={dimensionsGroup}
            isDimensionOpened={isDimensionOpened}
            setIsDimensionOpened={SetIsDimensionOpened}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            sliderWidthDimension={sliderWidthDimension}
            sliderHeightDimension={sliderHeightDimension}
            handleSliderChange={handleSliderChange}
            handleDimensionInputChange={handleDimensionInputChange}
            handleInputBlur={handleInputBlur}
            lockOpened={lockOpened}
            handleLockOpenedState={handleLockState}
            dimensionRatio={dimensionRatio}
            handleDRatioChange={handleDRatioChange}
            convertWH={convertWH}
          />
        </div>
      </div>
      <ModalImgCard
        onUpdate={updateLibrary}
        onNextImage={onNextImage}
        onPrevImage={onPrevImage}
      />
    </>
  );
};

export default ImageGenerationOrigin;
