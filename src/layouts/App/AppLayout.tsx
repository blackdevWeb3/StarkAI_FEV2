import { Routes, Route } from "react-router-dom";
import AppSlider from "./AppSlider";
import CommunityFeed from "../../components/CommunityFeed";
import PersonalFeed from "../../components/PersonalFeed";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import ImageGeneration from "../../components/ImageGeneration";
import SettingPackage from "../../components/Settings/SettingPackage";

const AppLayout = () => {
  const [sliderOpen, setSliderOpen] = useState<boolean>(false);
  const location = useLocation();

  const sliderHandler = () => {
    setSliderOpen(!sliderOpen);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row w-full bg-[#1C1B1B] pb-[37px]">
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
            <Route path="settings" element={<SettingPackage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
