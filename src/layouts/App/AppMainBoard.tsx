import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import Card from "../../components/Others/Card";
import axios from "axios";
import { Image } from "../../utils/types";

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
      {imageData.length > 0 && (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
          {imageData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default AppMainBoard;
