import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from "@mui/material";

import { useUser } from "../../context/UserContext";
import ModalContext from "../../utils/modalContext";
import { Image } from "../../utils/types";
import Card from "../Others/Card";
import ModalImgCard from "../Modal/ModalImgCard";

const CommonFeed = () => {
  const [activeButton, setActiveButton] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const { user }: any = useUser();
  const modalCtx = useContext(ModalContext);
  const [imageData, setImageData] = useState<Image[]>([]);
  const [searchedData, setSearchedData] = useState<Image[]>([]);
  const [searched, setSearched] = useState(false);

  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getImages`,
        { email: JSON.parse(user).email }
      );
      if (res.status === 200) {
        var tmp = res.data;
        tmp.sort((a: Image, b: Image) => {
          const dateA = new Date(a.created).getTime();
          const dateB = new Date(b.created).getTime();
          return dateB - dateA;
        });
        setImageData(tmp);
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

  const onNextImage = () => {
    const ind = modalCtx.index;
    console.log(modalCtx);
    modalCtx.setData(imageData[ind + 1]);
    modalCtx.setIndex(ind + 1);
  };

  const onPrevImage = () => {
    const ind = modalCtx.index;
    console.log(modalCtx);
    modalCtx.setData(imageData[ind - 1]);
    modalCtx.setIndex(ind - 1);
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

  return (
    <>
      <div className="relative">
        {/* TabView Settings */}
        <div className="sticky z-10 w-full bg-black pt-4">
          <div className="px-8">
            <div className="flex flex-col w-full gap-5">
              <div className="flex flex-wrap justify-between gap-4">
                <div className="search-panel w-[376px]">
                  <span className="search-icon">
                    <Icon icon="ic:round-search" className="w-5 h-5" />
                  </span>
                  <input
                    className="search-input font-chakra"
                    placeholder="Search gallery"
                    value={searchKey}
                    onChange={(ev) => setSearchKey(ev.target.value)}
                  ></input>
                  <button onClick={handleSearch} className="search-button">
                    Search
                  </button>
                </div>
                <div className="flex flex-row w-[364px]">
                  <div className="button-group border-primary">
                    <button className="button-element">
                      <span className="button-icon">
                        <Icon icon="ri:fire-fill" className="w-4 h-4" />
                      </span>
                      <span className="button-title">Trending</span>
                    </button>
                    <button className="button-element">
                      <span className="button-icon">
                        <Icon
                          icon="mynaui:spinner"
                          rotate={3}
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="button-title">New</span>
                      <span className="button-selected"></span>
                    </button>
                    <button className="button-element">
                      <span className="button-icon">
                        <Icon icon="ri:fire-fill" className="w-4 h-4" />
                      </span>
                      <span className="button-title">Top</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <div className="flex bg-[#0c0f16] overflow-hidden rounded-lg">
                  <button
                    className={`button-item w-[116px] ${
                      activeButton ? "active" : ""
                    }`}
                    onClick={() => setActiveButton(true)}
                  >
                    <span className="font-chakra relative z-10 button-font">
                      All
                    </span>
                    <div className="button-cover"></div>
                  </button>
                  <button
                    className={`button-item w-[116px] ${
                      !activeButton ? "active" : ""
                    }`}
                    onClick={() => setActiveButton(false)}
                  >
                    <span className="font-chakra relative z-10 button-font">
                      Upscaled
                    </span>
                    <div className="button-cover"></div>
                  </button>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <hr className=" border-gray-800 mt-7" />
        </div>

        {/* TabView Content */}

        <ImageList variant="masonry" cols={4} gap={8}>
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

        <ModalImgCard
          onUpdate={updateLibrary}
          onNextImage={onNextImage}
          onPrevImage={onPrevImage}
        />
      </div>
    </>
  );
};

export default CommonFeed;
