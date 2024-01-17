import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import Card from "../../components/Card";
import AppFooter from "./AppFooter";
import axios from "axios";

const AppMainBoard = () => {
  const { user }: any = useUser();
  const [imageData, setImageData] = useState<string[]>([]);

  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getImages`,
        { email: JSON.parse(user).email }
      );
      if (res.status === 200) {
        setImageData(res.data.map((item: any) => item.image));
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
    <div className="w-full bg-black pt-12">
      {imageData.length > 0 && (
        <div className="flex flex-wrap gap-8 p-4 justify-center">
          {imageData.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AppMainBoard;
