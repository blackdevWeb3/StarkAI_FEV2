import Card from "../Others/Card";
import { Image } from "../../utils/types";
import { ImageList, ImageListItem } from "@mui/material";

interface GenerationHistoryProps {
  imageData: Image[];
  tmpCards: number;
}

const GenerationHistory: React.FC<GenerationHistoryProps> = ({
  imageData,
  tmpCards,
}) => {
  const tmpCardsArray = [];
  for (let i = 0; i < tmpCards; i++) {
    tmpCardsArray.push(<Card key={`temp-${i}`} flag={true} />);
  }
  return (
    <>
      {/* {imageData.length > 0 && (
        <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 grid-cols-1 gap-4 py-6 px-4 md:px-8 sm:px-4 justify-start">
          {tmpCardsArray}
          {imageData.map((item, index) => (
            <Card key={index} data={item} flag={false} />
          ))}
        </div>
      )} */}
      {tmpCardsArray}
      <ImageList variant="masonry" cols={4} gap={8}>
        {imageData.map((item, index) => (
          <ImageListItem key={index}>
            <Card data={item} key={index} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default GenerationHistory;
