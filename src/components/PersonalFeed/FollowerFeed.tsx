// import { Icon } from "@iconify/react";
// import { useContext, useEffect, useState } from "react";
// import { ImageList, ImageListItem, Slider } from "@mui/material";
// import { useUser } from "../../config/context/UserContext";
// import ModalContext from "../../config/context/modalContext";
// import { Image } from "../../utils/types";
// import Card from "../Others/Card";
// import ModalImgCard from "../Modal/ModalImgCard";
// import useWindowSize from "../../hooks/useWindowSize";
// import { sortOptions } from "../Others/SortSelectionButtonGroup";
// import SortSelectionButtonGroup from "../Others/SortSelectionButtonGroup";
// import SortButton from "../Others/SortButton";
// import { StyleOptions } from "../Others/SortButton";
// import SplashScreen from "../Others/SplashScreen";
// import {
// import LikedFeed from './FollowerFeed';

//   getFollowerImageAction,
// } from "../../actions/followAction";

// const LikedFeed = () => {
//   const windowSize = useWindowSize();
//   const [searchKey, setSearchKey] = useState("");
//   const { user }: any = useUser();
//   const userObject = JSON.parse(user === "None" ? "{}" : user);
//   const modalCtx = useContext(ModalContext);
//   const [imageData, setImageData] = useState<Image[]>([]);
//   const [searchedData, setSearchedData] = useState<Image[]>([]);
//   const [searched, setSearched] = useState(false);
//   const [maxStretch, setMaxStretch] = useState(5);
//   const [curVal, setCurVal] = useState(5);
//   const [sliderValue, setSliderValue] = useState(5);
//   const [selectedOption, setSelectedOption] = useState(sortOptions[1]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedStyle, setSelectedStyle] = useState<StyleOptions>("All");
//   const [showSplashScreen, setShowSplashScreen] = useState(true);

//   const hashtagFilter = (param: StyleOptions) => {
//     setSelectedStyle(param);
//     const filterKey =
//       param === "All" ? "" : param === "Motion" ? ".mp4" : ".jpg";
//     const tmp = imageData.filter((item: Image) => {
//       return item.image.includes(filterKey);
//     });
//     setSearchedData(tmp);
//     setSearched(true);
//   };

//   const handleStretch = (event: Event, newValue: number | number[]) => {
//     setSliderValue(newValue as number);
//     setCurVal(newValue as number);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   const handleSearch = () => {
//     const lowerKey = searchKey.toLowerCase();
//     const tmp = imageData.filter((item: Image) => {
//       const lowerPrompt = item.data.prompt.toLowerCase();
//       return lowerPrompt.includes(lowerKey);
//     });
//     setSearchedData(tmp);
//     setSearched(true);
//   };

//   const updateLibrary = async () => {
//     try {
//       let response = await getFollowerAction({ email: userObject.email });
//       const imageDataPromises = response.followers.map(
//         async (follower: string) => {
//           console.log("Follower:", follower);
//           return getFollowerImageAction({
//             email: userObject.email,
//             creator: follower,
//           });
//         }
//       );

//       const allImageData: Image[] = await Promise.all(imageDataPromises);
//       let temp_ImageData = allImageData?.flat() ?? [];
//       setImageData(temp_ImageData);
//     } catch (error) {
//       console.error("An error occurred while fetching like images:", error);
//     } finally {
//       setShowSplashScreen(false);
//     }
//   };

//   useEffect(() => {
//     if (imageData.length > 0) return;
//     updateLibrary();
//   }, []);

//   const onNextImage = () => {
//     const ind = modalCtx.index;
//     modalCtx.setData(imageData[ind + 1]);
//     modalCtx.setIndex(ind + 1);
//   };

//   const onPrevImage = () => {
//     const ind = modalCtx.index;
//     modalCtx.setData(imageData[ind - 1]);
//     modalCtx.setIndex(ind - 1);
//   };

//   useEffect(() => {
//     const wid = windowSize;
//     if (wid > 1280 && maxStretch !== 5) setMaxStretch(5);
//     if (wid > 1024 && wid <= 1280 && maxStretch !== 4) setMaxStretch(4);
//     if (wid > 768 && wid <= 1024 && maxStretch !== 3) setMaxStretch(3);
//     if (wid > 480 && wid <= 768 && maxStretch !== 2) setMaxStretch(2);
//     if (wid <= 480 && maxStretch !== 1) setMaxStretch(1);
//   }, [windowSize]);

//   useEffect(() => {
//     setCurVal(sliderValue < maxStretch ? sliderValue : maxStretch);
//   }, [maxStretch]);

//   return (
//     <>
//       {showSplashScreen ? (
//         <>
//           <SplashScreen />
//         </>
//       ) : (
//         <>
//           <div className="relative">
//             {/* TabView Settings */}
//             <div className="sticky z-10 w-full bg-black pt-4 top-0">
//               <div className="px-8 sm:px-4">
//                 <div className="flex flex-col w-full gap-5">
//                   <div className="flex flex-wrap justify-between gap-4">
//                     <div className="search-panel w-[376px]">
//                       <span className="search-icon">
//                         <Icon icon="ic:round-search" className="w-5 h-5" />
//                       </span>
//                       <input
//                         className="search-input font-chakra"
//                         placeholder="Search gallery"
//                         value={searchKey}
//                         onChange={(ev) => setSearchKey(ev.target.value)}
//                       ></input>
//                       <button
//                         onClick={handleSearch}
//                         className="search-button h-8"
//                       >
//                         Search
//                       </button>
//                     </div>
//                     <div className="flex flex-row z-50">
//                       <SortSelectionButtonGroup
//                         isOpen={isOpen}
//                         setIsOpen={setIsOpen}
//                         selectedOption={selectedOption}
//                         handleOptionClick={handleOptionClick}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex flex-row justify-between gap-4 flex-wrap">
//                     <div className="inline-flex overflow-hidden rounded-full bg-[#0c0f16] items-center font-chakra">
//                       <SortButton
//                         label="All"
//                         isSelected={selectedStyle === "All"}
//                         onClick={() => hashtagFilter("All")}
//                       />
//                       <SortButton
//                         label="Upscaled"
//                         isSelected={selectedStyle === "Upscaled"}
//                         onClick={() => hashtagFilter("Upscaled")}
//                       />
//                       <SortButton
//                         label="Motion"
//                         isSelected={selectedStyle === "Motion"}
//                         onClick={() => hashtagFilter("Motion")}
//                       />
//                     </div>
//                     <div className="w-[200px] h-[31px] sm:hidden flex">
//                       <Slider
//                         aria-label="Volume"
//                         min={1}
//                         max={maxStretch}
//                         valueLabelDisplay="auto"
//                         value={sliderValue}
//                         onChange={handleStretch}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className=""></div>
//               </div>
//               <hr className=" border-gray-800 mt-7" />
//             </div>

//             {/* TabView Content */}

//             <ImageList
//               variant="masonry"
//               cols={curVal}
//               gap={8}
//               sx={{ padding: "12px" }}
//             >
//               {(searched ? searchedData : imageData).map((item, index) => (
//                 <ImageListItem key={index}>
//                   <Card
//                     data={item}
//                     index={index}
//                     count={imageData.length}
//                     key={index}
//                   />
//                 </ImageListItem>
//               ))}
//             </ImageList>

//             <ModalImgCard
//               onUpdate={updateLibrary}
//               onNextImage={onNextImage}
//               onPrevImage={onPrevImage}
//             />
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default LikedFeed;

const LikedFeed = () => {
  return <></>;
};

export default LikedFeed;
