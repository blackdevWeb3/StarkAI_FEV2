import AWS from "aws-sdk";
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserContext";
import Card from "../../components/Card";
import AppFooter from "./AppFooter";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_BUCKET_REGION,
});

const AppMainBoard = () => {
  const s3 = new AWS.S3();
  const { user }: any = useUser();
  const [imageData, setImageData] = useState<string[]>([]);

  const updateLibrary = () => {
    const params: AWS.S3.ListObjectsV2Request = {
      Bucket: process.env.REACT_APP_BUCKET_NAME || "starkmeta-assets",
      Prefix: JSON.parse(user).email,
    };
    s3.listObjectsV2(params, (err, data) => {
      if (!data.Contents) return;
      const images = data.Contents.filter(
        (obj) => obj.LastModified !== undefined
      ).sort((a, b) => {
        const dateA = a.LastModified as Date;
        const dateB = b.LastModified as Date;
        return dateA.getTime() - dateB.getTime();
      });
      // console.log(images);
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
  };

  useEffect(() => {
    if (imageData.length > 0) return;
    updateLibrary();
  });

  return (
    <div className="w-full h-[100vh] bg-black pt-12">
      {imageData.length > 0 && (
        <div className="flex gap-8 p-4">
          {imageData.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </div>
      )}
      <AppFooter onUpdate={updateLibrary} />
    </div>
  );
};

export default AppMainBoard;
