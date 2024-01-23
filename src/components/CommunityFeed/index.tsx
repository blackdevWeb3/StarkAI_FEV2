import { Icon } from "@iconify/react";
import { useUser } from "../../context/UserContext";
import { useEffect, useState } from "react";
import { Image } from "../../utils/types";
import axios from "axios";
import Card from "../Others/Card";
import ModalImgCard from "../Modal/ModalImgCard";

const CommunityFeed = () => {
  const { user }: any = useUser();
  const [imageData, setImageData] = useState<Image[]>([]);
  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getAllImages`
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
            ></input>
            <button className="search-button">Search</button>
          </div>
        </div>

        {/* Images shared with community */}
        <div className="mt-8 border-t border-primary p-8">
          {imageData.length > 0 && (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
              {imageData.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
      <ModalImgCard onUpdate={updateLibrary} />
    </>
  );
};

export default CommunityFeed;
