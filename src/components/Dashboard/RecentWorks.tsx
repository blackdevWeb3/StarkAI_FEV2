import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ImageList, ImageListItem } from "@mui/material";
import { Image } from "../../utils/types";
import { useUser } from "../../context/UserContext";
import Card from "../Others/Card";

const RecentWorks = () => {
  const [imageData, setImageData] = useState<Image[]>([]);
  const { user }: any = useUser();

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
      <div className="w-full max-w-[1124px] mx-auto flex flex-col justify-center items-center gap-4 px-5">
        <span className="text-[22px] font-semibold">Recent works</span>
        {/* Recent Generated Images */}
        {/* <ImageList
          variant="masonry"
          cols={4}
          gap={8}
          sx={{ padding: "12px" }}
          style={{ overflow: "hidden" }}
        >
          {imageData.map((item, index) => (
            <ImageListItem key={index}>
              <Link to="/login">
                <Card
                  data={item}
                  index={index}
                  count={imageData.length}
                  key={index}
                />
              </Link>
            </ImageListItem>
          ))}
        </ImageList> */}
          {imageData.length > 0 && (
            <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
            
              {imageData.map((item, index) => (
                <ImageListItem key={index}>
                  <Card key={index} data={item} flag={false} />
                </ImageListItem>
              ))}
            </div>
          )}
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default RecentWorks;
