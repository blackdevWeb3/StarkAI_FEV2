import { Routes, Route } from "react-router-dom";
import AppSlider from "./AppSlider";
import CommunityFeed from "../../components/CommunityFeed";
import PersonalFeed from "../../components/PersonalFeed";
import AppHome from "../../components/AppHome";
import ImageGeneration from "../../components/ImageGeneration";
import Explore from "../../components/Explore";
import Marketplace from "../../components/Marketplace";
import TextGeneration from "../../components/TextGeneration";
import Settings from "../../components/Settings";
import AppHeader from "./AppHeader";
import { useState } from "react";

const AppLayout = () => {
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);

  const sliderHandler = () => {
    setSliderOpen(!sliderOpen);
    console.log("Slider State:", sliderOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full bg-black">
        <AppSlider
          sliderOpen={sliderOpen}
          setSliderOpen={setSliderOpen}
          sliderHandler={sliderHandler}
        />
        <div className="flex flex-col min-h-screen h-full bg-black w-0 flex-1">
          <AppHeader sliderOpen={sliderOpen} sliderHandler={sliderHandler} />
          <Routes>
            <Route path="/" element={<CommunityFeed />} />
            <Route path="personal-feed" element={<PersonalFeed />} />
            <Route path="image-generator" element={<ImageGeneration />} />
            {/* <Route path="text-generator" element={<TextGeneration />} /> */}
            <Route path="settings" element={<Settings />} />
            {/* <Route path="explore" element={<Explore />} /> */}
            {/* <Route path="marketplace" element={<Marketplace />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
