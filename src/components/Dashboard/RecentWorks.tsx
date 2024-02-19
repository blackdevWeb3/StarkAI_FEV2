import { useEffect, useState } from "react";
import axios from "axios";
import { ImageList, ImageListItem } from "@mui/material";
import { Image } from "../../utils/types";
import useResponsiveSlider from "../../utils/useResponsiveSlider";
import useWindowSize from "../../hooks/useWindowSize";
import React from "react";

const RecentWorks = () => {
  const [imageData, setImageData] = useState<Image[]>([]);
  const windowSize = useWindowSize();

  const [curVal] = useResponsiveSlider({
    sliderValue: 5,
    windowWidth: windowSize,
  });

  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getRecentImages`
      );
      if (res.status === 200) {
        var tmp = res.data;
        tmp.reverse();
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
    <div className="w-full bg-black py-14">
      <div className="w-full max-w-[1124px] mx-auto flex flex-col justify-center items-center gap-4 px-5 md:px-16 sm:px-8">
        <span className="text-[22px] font-semibold">Recent works</span>
        {imageData.length > 0 && (
          <div className="py-8">
            <ImageList variant="masonry" cols={curVal} gap={10}>
              {imageData.map((item, index) => (
                <React.Fragment key={index}>
                  {item.image.endsWith(".jpg") && (
                    <ImageListItem>
                      <img src={item.image} alt="recent" loading="lazy" />{" "}
                      {/* Added alt attribute for accessibility */}
                    </ImageListItem>
                  )}
                </React.Fragment>
              ))}
            </ImageList>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentWorks;
