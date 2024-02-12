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
        <ImageList
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
        </ImageList>
        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default RecentWorks;
