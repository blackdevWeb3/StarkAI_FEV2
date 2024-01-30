import Card from "../Others/Card";
import { Image } from "../../utils/types";
import { ImageList, ImageListItem, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface GenerationHistoryProps {
  imageData: Image[];
  tmpCards: number;
}

const GenerationHistory: React.FC<GenerationHistoryProps> = ({
  imageData,
  tmpCards,
}) => {
  const theme = useTheme();

  const colsXl = useMediaQuery(theme.breakpoints.up("xl")) ? 5 : null;
  const colsLg = useMediaQuery(theme.breakpoints.between("lg", "xl"))
    ? 4
    : null;
  const colsMd = useMediaQuery(theme.breakpoints.between("md", "lg"))
    ? 3
    : null;
  const colsSm = useMediaQuery(theme.breakpoints.down("sm")) ? 2 : null;
  const cols = colsXl || colsLg || colsMd || colsSm || 2;

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
