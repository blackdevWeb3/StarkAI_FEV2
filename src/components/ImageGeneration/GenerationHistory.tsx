import Card from "../Others/Card";
import { Image } from "../../utils/types";
import { ImageList, ImageListItem } from "@mui/material";
import CreatedImageItem from "./CreatedImageItem";

interface GenerationHistoryProps {
  imageData: Image[];
}

const GenerationHistory: React.FC<GenerationHistoryProps> = ({ imageData }) => {
  return (
    <>
      {imageData.map((item, index) => (
        <CreatedImageItem imageData={item} key={index} />
      ))}
    </>
  );
};

export default GenerationHistory;
