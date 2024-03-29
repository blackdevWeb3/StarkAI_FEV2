import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import ModalContext from "../../config/context/modalContext";
import { useUser } from "../../config/context/UserContext";
import { Image } from "../../utils/types";
import Card from "../Others/Card";
import ModalImgCard from "../Modal/ModalImgCard";
import { ImageList, ImageListItem, Slider } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import SortSelectionButtonGroup, {
  sortOptions,
} from "../Others/SortSelectionButtonGroup";
import SortButton from "../Others/SortButton";
import { getFilterKey } from "../../utils/getFilterKey";
import useDynamicSliderStretch from "../../hooks/useDynamicSliderStretch ";
import { hashtag_buttons } from "../../utils/constants";
import SplashScreen from "../Others/SplashScreen";
import CarouselContent from "./CarouselContent";
import RecentImgItem from "./RecentImgItem";
import TopCollectibles from "./TopCollectibles";
import { ScrollDown } from "../../assets";
import { StyledOptions } from "@emotion/styled";

const CommunityFeed = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const modalCtx = useContext(ModalContext);
  const [searchKey, setSearchKey] = useState("");
  const [imageData, setImageData] = useState<Image[]>([]);
  const [searchedData, setSearchedData] = useState<Image[]>([]);
  const [searched, setSearched] = useState(false);
  const [curVal, setCurVal] = useState(5);
  const [sliderValue, setSliderValue] = useState(5);
  const windowSize = useWindowSize();
  // const [selectedStyle, setSelectedStyle] = useState<StyledOptions>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState(sortOptions[1]);
  const [isOpen, setIsOpen] = useState(false);
  const maxStretch = useDynamicSliderStretch(windowSize);
  const [hashTagSelected, setHashTagSelected] = useState("All");
  const [isFetching, setIsFetching] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -200 : 200; // adjust the value as needed
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const fetchImage = async () => {
    try {
      setIsFetching(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getAllImages`
      );
      setImageData(response.data.reverse());
      setShowSplashScreen(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsFetching(false);
    }
  };

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

  // const handleMultipleSearch = (): void => {
  //   const filterKey = getFilterKey(selectedStyle).toLowerCase();
  //   const searchKeyLower = searchKey.toLowerCase();

  //   const filteredData = imageData.filter((item: Image) => {
  //     return (
  //       item.image.includes(filterKey) &&
  //       item.data.prompt.toLowerCase().includes(searchKeyLower)
  //     );
  //   });

  //   setSearchedData(filteredData);
  //   setSearched(true);
  // };

  // const ImageTypeFilter = (param: StyleOptions) => {
  //   setSelectedStyle(param);
  // };

  const handleStretch = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
    setCurVal(newValue as number);
  };

  useEffect(() => {
    setCurVal(sliderValue < maxStretch ? sliderValue : maxStretch);
  }, [maxStretch]);

  // useEffect(() => {
  //   handleMultipleSearch();
  // }, [selectedStyle, imageData]);

  useEffect(() => {
    if (imageData.length === 0 && !isFetching) {
      fetchImage();
    }
  }, [imageData, isFetching]);

  return (
    <>
      <>
        <div className="w-full bg-[#1C1B1B] pt-[29px] flex flex-col font-kanit sm:pt-4 pb-[37px]">
          <CarouselContent />
          <div className="flex flex-row justify-between gap-[26px] mt-[27px]">
            <div className="w-full">
              <TopCollectibles />

              <div className="w-full rounded-[6px] bg-[#333535] px-[13px] py-[14px] flex flex-col gap-[14px]">
                <div className="">
                  <div className="h-[calc(100vh-276px)] overflow-auto">
                    <div className="overflow-y-scroll">
                      <div className="border-primary p-3">
                        <ImageList variant="masonry" cols={curVal} gap={8}>
                          {(searched ? searchedData : imageData).map(
                            (item, index) => (
                              <ImageListItem key={index}>
                                <Card
                                  data={item}
                                  index={index}
                                  count={imageData.length}
                                  key={index}
                                />
                              </ImageListItem>
                            )
                          )}
                        </ImageList>
                      </div>
                    </div>
                  </div>
                </div>
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
            <div className="flex flex-col gap-[22px]">
              <span className="text-white text-[23px] font-medium leading-normal">
                Recent Created
              </span>
              <RecentImgItem />
              <RecentImgItem />
            </div>
          </div>
          {/* <div className="top-0 sticky z-10 border-b-[1px] border-primary w-full">
              <div className="px-8 py-8 flex flex-col gap-5 bg-[#1C1B1B] sm:px-4 sm:py-4">
                <div className="flex flex-row justify-between flex-wrap gap-4">
                  <div className="search-panel w-[376px]">
                    <span className="search-icon">
                      <Icon icon="ic:round-search" className="w-5 h-5" />
                    </span>
                    <input
                      className="search-input"
                      placeholder="Search gallery"
                      value={searchKey}
                      onChange={(ev) => setSearchKey(ev.target.value)}
                    ></input>
                    <button
                      onClick={handleMultipleSearch}
                      className="search-button h-8 sm:h-7"
                    >
                      Search
                    </button>
                  </div>
                  <div className="w-[200px] flex sm:hidden">
                    <Slider
                      aria-label="Volume"
                      min={1}
                      max={maxStretch}
                      valueLabelDisplay="auto"
                      value={sliderValue}
                      onChange={handleStretch}
                    />
                  </div>
                </div>
                <div className="flex items-start gap-3 justify-start text-[18px] flex-col w-full relative">
                  <div className="flex flex-row gap-4 items-center flex-wrap">
                    <div className="grid-explore block z-[20]">
                      <SortSelectionButtonGroup
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        selectedOption={selectedOption}
                        handleOptionClick={handleOptionClick}
                      />
                    </div>
                    <div className="grid-type block">
                      <div className="inline-flex overflow-hidden rounded-full bg-[#0c0f16] items-center">
                        <SortButton
                          label="All"
                          isSelected={selectedStyle === "All"}
                          onClick={() => ImageTypeFilter("All")}
                        />
                        <SortButton
                          label="Upscaled"
                          isSelected={selectedStyle === "Upscaled"}
                          onClick={() => ImageTypeFilter("Upscaled")}
                        />
                        <SortButton
                          label="Motion"
                          isSelected={selectedStyle === "Motion"}
                          onClick={() => ImageTypeFilter("Motion")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row px-[1px] relative w-full">
                    <button
                      onClick={() => scroll("left")}
                      className="text-[10px] flex justify-center items-center bg-black border border-white rounded-full w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 z-10"
                    >
                      &#10094;
                    </button>
                    <div
                      className="flex flex-row space-x-2 overflow-x-auto"
                      id="hashtagbutton-group"
                      ref={scrollContainerRef}
                    >
                      <span className="inline-block">
                        <button
                          className={`hashtag-button flex items-center justify-center flex-row gap-2 ${
                            hashTagSelected === "All" ? "selected-color" : ""
                          }`}
                          onClick={() => setHashTagSelected("All")}
                        >
                          <Icon icon="radix-icons:dashboard" width={20} />
                          <span className="font-semibold">All</span>
                        </button>
                      </span>
                      {hashtag_buttons.map((button, index) => (
                        <button
                          key={index}
                          className={`hashtag-button gap-2 text-[16px] ${
                            hashTagSelected === button.label
                              ? "selected-color"
                              : ""
                          }`}
                          onClick={() => setHashTagSelected(button.label)}
                        >
                          <Icon icon={button.icon} />
                          <span>{button.label}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => scroll("right")}
                      className="text-[10px] flex justify-center items-center bg-black border border-white rounded-full w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    >
                      &#10095;
                    </button>
                    <div></div>
                  </div>
                </div>
              </div>
            </div> */}

          {/* Images shared with community */}
        </div>
        <ModalImgCard
          onUpdate={fetchImage}
          onNextImage={onNextImage}
          onPrevImage={onPrevImage}
        />
      </>
    </>
  );
};

export default CommunityFeed;
