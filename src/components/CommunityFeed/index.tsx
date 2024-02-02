import { Icon } from "@iconify/react";
import { useUser } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { Image } from "../../utils/types";
import axios from "axios";
import Card from "../Others/Card";

import ModalImgCard from "../Modal/ModalImgCard";
import { ImageList, ImageListItem, useTheme } from "@mui/material";
import ModalContext from "../../utils/modalContext";

const CommunityFeed = () => {
  const { user }: any = useUser();
  const modalCtx = useContext(ModalContext);
  const [searchKey, setSearchKey] = useState("");
  const [imageData, setImageData] = useState<Image[]>([]);
  const [searchedData, setSearchedData] = useState<Image[]>([]);
  const [searched, setSearched] = useState(false);

  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getAllImages`
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

  useEffect(() => {
    if (imageData.length > 0) return;
    updateLibrary();
  });

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
      <div className="w-full bg-black pt-[29px] flex flex-col">
        <div className="pl-8">
          <span className="font-chakra text-[26px]">Community Feed</span>
        </div>
        <div className="pl-8 pt-8">
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
        </div>

        {/* Images shared with community */}
        <div className="mt-8 border-t border-primary p-3">
          {/* {imageData.length > 0 && (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
              {imageData.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          )} */}

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
