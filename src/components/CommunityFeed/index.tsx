import { Icon } from "@iconify/react";
import { useUser } from "../../context/UserContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Image } from "../../utils/types";
import axios from "axios";
import Card from "../Others/Card";

import ModalImgCard from "../Modal/ModalImgCard";
import { ImageList, ImageListItem, useTheme, Slider } from "@mui/material";
import ModalContext from "../../utils/modalContext";
import useWindowSize from "../../hooks/useWindowSize";
import SortSelectionButtonGroup from "../Others/SortSelectionButtonGroup";
import { sortOptions } from "../Others/SortSelectionButtonGroup";

type StyleOptions = "All" | "Upscaled" | "Motion";

type SortButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const SortButton: React.FC<SortButtonProps> = ({
  label,
  isSelected,
  onClick,
}) => (
  <button
    className={`sort-button px-5 ${
      isSelected ? "text-white" : ""
    } hover:text-white`}
    onClick={onClick}
  >
    <span className="z-[2] relative">{label}</span>
    <div
      className={`sort-button-cover ${
        isSelected ? "selected opacity-100" : "opacity-0"
      }`}
    />
  </button>
);

const CommunityFeed = () => {
  const { user }: any = useUser();
  const modalCtx = useContext(ModalContext);
  const [searchKey, setSearchKey] = useState("");
  const [imageData, setImageData] = useState<Image[]>([]);
  const [searchedData, setSearchedData] = useState<Image[]>([]);
  const [searched, setSearched] = useState(false);
  const [maxStretch, setMaxStretch] = useState(5);
  const [curVal, setCurVal] = useState(5);
  const [sliderValue, setSliderValue] = useState(5);
  const windowSize = useWindowSize();
  const [selectedStyle, setSelectedStyle] = useState<StyleOptions>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedOption, setSelectedOption] = useState(sortOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    if (imageData.length === 0) {
      updateLibrary();
    }
  }, [imageData]);

  const updateLibrary = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getAllImages`
      );
      if (res.status === 200) {
        setImageData(res.data.reverse());
      } else {
        console.error("Error occurred");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
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

  async function filterImage(data: Image[], extension: string) {
    if (data.length > 0) {
      return data.filter((item) => item.image.includes(extension));
    } else return [];
  }

  const hashtagFilter = (param: StyleOptions) => {
    setSelectedStyle(param);
    const filterKey =
      param === "All" ? "" : param === "Motion" ? ".mp4" : ".jpg";
    const tmp = imageData.filter((item: Image) => {
      return item.image.includes(filterKey);
    });
    setSearchedData(tmp);
    setSearched(true);
  };

  const handleSearch = () => {
    const lowerKey = searchKey.toLowerCase();
    const tmp = imageData.filter((item: Image) => {
      const lowerPrompt = item.data.prompt.toLowerCase();
      return lowerPrompt.includes(lowerKey);
    });
    setSearchedData(tmp);
    setSearched(true);
  };

  useEffect(() => {
    const wid = windowSize;
    if (wid > 1280 && maxStretch !== 5) setMaxStretch(5);
    if (wid > 1024 && wid <= 1280 && maxStretch !== 4) setMaxStretch(4);
    if (wid > 768 && wid <= 1024 && maxStretch !== 3) setMaxStretch(3);
    if (wid > 480 && wid <= 768 && maxStretch !== 2) setMaxStretch(2);
    if (wid <= 480 && maxStretch !== 1) setMaxStretch(1);
  }, [windowSize]);

  useEffect(() => {
    setCurVal(sliderValue < maxStretch ? sliderValue : maxStretch);
  }, [maxStretch]);

  const handleStretch = (event: Event, newValue: number | number[]) => {
    setSliderValue(newValue as number);
    setCurVal(newValue as number);
  };

  return (
    <>
      <div className="w-full bg-black pt-[29px] flex flex-col font-chakra sm:pt-4">
        <div className="pl-8 sm:pl-4">
          <span className="text-[26px]">Community Feed</span>
        </div>
        <div className="top-0 sticky z-10 border-b-[1px] border-primary w-full">
          <div className="px-8 py-8 flex flex-col gap-5 bg-black sm:px-4 sm:py-4">
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
                  onClick={handleSearch}
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
                {/* <div className="block">
                  <hr className="opacity-60 border-[#4A5568] border-[1px] h-8"></hr>
                </div> */}
                <div className="grid-explore block z-[1]">
                  <SortSelectionButtonGroup
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    selectedOption={selectedOption}
                    handleOptionClick={handleOptionClick}
                  />
                  {/* <div className="relative">
             
                    <div
                      className="primary-button rounded-full h-10 flex items-center justify-between w-36"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <Icon icon={selectedOption.icon} />
                      {selectedOption.label}
                      <Icon icon="icon-park-solid:down-one" />
                    </div>
                    {isOpen && (
                      <div className="absolute bg-[#273748] w-full pt-8 pb-2 px-5 border border-[#ffffff29] -translate-y-6 z-[-1] rounded-br-2xl rounded-bl-2xl">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className="flex flex-row items-center text-[16px] gap-3 py-1"
                            onClick={() => handleOptionClick(option)}
                          >
                            <Icon icon={option.icon} className="w-4 h-4" />
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div> */}
                </div>
                <div className="grid-type block">
                  <div className="inline-flex overflow-hidden rounded-full bg-[#0c0f16] items-center">
                    <SortButton
                      label="All"
                      isSelected={selectedStyle === "All"}
                      onClick={() => hashtagFilter("All")}
                    />
                    <SortButton
                      label="Upscaled"
                      isSelected={selectedStyle === "Upscaled"}
                      onClick={() => hashtagFilter("Upscaled")}
                    />
                    <SortButton
                      label="Motion"
                      isSelected={selectedStyle === "Motion"}
                      onClick={() => hashtagFilter("Motion")}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-row px-[1px] relative">
                <button
                  onClick={() => scroll("left")}
                  className="focus:outline-none absolute left-0 z-10 inline-flex items-center justify-center h-full cursor-pointer"
                >
                  &#10094;
                </button>
                <div
                  className="flex flex-row gap-2 overflow-x-auto"
                  ref={scrollContainerRef}
                >
                  <span className="inline-block">
                    <button className="primary-button rounded-full flex items-center justify-center flex-row gap-2">
                      <Icon icon="radix-icons:dashboard" width={20} />
                      <span className="font-semibold">All</span>
                    </button>
                  </span>
                  <button className="hashtag-button gap-2 text-[16px]">
                    <Icon icon="ion:camera-outline" />
                    <span>Photography</span>
                  </button>
                  <button className="hashtag-button gap-2 text-[16px]">
                    <Icon icon="emojione-monotone:pouting-cat-face" />
                    <span>Animals</span>
                  </button>
                  <button className="hashtag-button gap-2 text-[16px]">
                    <Icon icon="lucide:fan" />
                    <span>Anime</span>
                  </button>
                  <button className="hashtag-button gap-2 text-[16px]">
                    <Icon icon="bi:buildings" />
                    <span>Architecture</span>
                  </button>
                  <button className="hashtag-button gap-2 text-[16px]">
                    <Icon icon="icon-park-outline:avatar" />
                    <span>Character</span>
                  </button>
                  <button className="hashtag-button gap-2 text-[16px]">
                    <Icon icon="uil:food" />
                    <span>Food</span>
                  </button>
                  <button className="hashtag-button gap-2 text-[16px]">
                    <Icon icon="streamline:ecology-science-alien-extraterristerial-life-form-space-universe-head" />
                    <span>Sci-Fi</span>
                  </button>
                </div>
                <button
                  onClick={() => scroll("right")}
                  className="focus:outline-none absolute right-0 z-10 inline-flex items-center justify-center h-full cursor-pointer"
                >
                  &#10095;
                </button>
                <div></div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Images shared with community */}
        <div className="border-primary p-3">
          {/* {imageData.length > 0 && (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
              {imageData.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          )} */}

          <ImageList variant="masonry" cols={curVal} gap={8}>
            {(searched ? searchedData : imageData).map((item, index) => (
              <ImageListItem key={index}>
                <Card
                  data={item}
                  index={index}
                  count={imageData.length}
                  key={index}
                />
              </ImageListItem>
            ))}
          </ImageList>
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

export default CommunityFeed;
