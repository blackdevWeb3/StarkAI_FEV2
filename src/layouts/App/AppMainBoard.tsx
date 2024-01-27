import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import Card from "../../components/Others/Card";
import axios from "axios";
import { Image } from "../../utils/types";
import ModalImgCard from "../../components/Modal/ModalImgCard";
import { ImageList, ImageListItem } from "@mui/material";

const AppMainBoard = () => {
  const { user }: any = useUser();
  const [imageData, setImageData] = useState<Image[]>([]);
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

  return (
    <>
      {imageData.length > 0 && (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
          {imageData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      )}

      {/* <ImageList variant="masonry" cols={4} gap={8}>
        {imageData.map((item, index) => (
          <ImageListItem key={index}>
            <Card data={item} key={index} />
          </ImageListItem>
        ))}
      </ImageList> */}

      <ModalImgCard onUpdate={updateLibrary} />
    </>
  );
};

export default AppMainBoard;
