import { Routes, Route } from "react-router-dom";
import AppSlider from "./AppSlider";
import CommunityFeed from "../../components/CommunityFeed";
import PersonalFeed from "../../components/PersonalFeed";
import AppHome from "../../components/AppHome";
import Explore from "../../components/Explore";
import Marketplace from "../../components/Marketplace";
import TextGeneration from "../../components/TextGeneration";
import Settings from "../../components/Settings";
import AppHeader from "./AppHeader";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import ImageGeneration from "../../components/ImageGeneration";

const AppLayout = () => {
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const location = useLocation();

  const sliderHandler = () => {
    setSliderOpen(!sliderOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full bg-[#1C1B1B]">
        <AppSlider
          sliderOpen={sliderOpen}
          setSliderOpen={setSliderOpen}
          sliderHandler={sliderHandler}
          pathname={location.pathname}
        />
        <div className="flex flex-col min-h-screen h-full bg-primaryBackground w-[calc(100vw-334px)] pr-[54px] pt-7">
          {/* <AppHeader sliderOpen={sliderOpen} sliderHandler={sliderHandler} /> */}
          <AppNavbar />
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
