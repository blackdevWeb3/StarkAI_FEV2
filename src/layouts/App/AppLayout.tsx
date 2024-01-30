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
import ChainHeader from "../../components/Others/ChainHeader";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row w-full bg-black">
        <AppSlider />
        <div className="flex flex-col min-h-screen h-full bg-black w-full">
          <ChainHeader />
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="community-feed" element={<CommunityFeed />} />
            <Route path="personal-feed" element={<PersonalFeed />} />
            <Route path="image-generator" element={<ImageGeneration />} />
            <Route path="text-generator" element={<TextGeneration />} />
            <Route path="settings" element={<Settings />} />
            <Route path="explore" element={<Explore />} />
            <Route path="marketplace" element={<Marketplace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
