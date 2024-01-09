import Footer from "./Footer";
import AWS from "aws-sdk";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import Card from "../../components/Card";

const MainBoard = () => {
  const { user }: any = useUser();
  const [imageData, setImageData] = useState<string[]>([]);

  AWS.config.update({
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    region: process.env.REACT_APP_BUCKET_REGION,
  });

  useEffect(() => {
    if (imageData.length > 0) return;
    const s3 = new AWS.S3();

    const params = {
      Bucket: process.env.REACT_APP_BUCKET_NAME || "starkmeta-assets",
      Prefix: JSON.parse(user).email,
    };

    s3.listObjectsV2(params, (err, data) => {
      const images = data.Contents;
      let tmp: string[] = [];
      images?.forEach((element) => {
        const imageParams = {
          Bucket: process.env.REACT_APP_BUCKET_NAME || "starkmeta-assets",
          Key: element.Key,
        };
        s3.getSignedUrl("getObject", imageParams, function (err, url) {
          if (err) {
            console.log(err);
          } else {
            tmp.push(url);
          }
        });
      });

      setImageData(tmp);
    });
  });

  return (
    <div className="w-full h-[100vh] bg-black pt-12">
      {imageData.length > 0 && (
        <div className="flex gap-8 p-4">
          {imageData.map((image) => (
            <Card image={image} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainBoard;
