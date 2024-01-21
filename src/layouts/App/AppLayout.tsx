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
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ModalImgCard from "../../components/Modal/ModalImgCard";

const AppLayout = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <AppSlider />
      <>
        <div className="fixed top-6 right-10 z-10" id="walletConnect">
          <ConnectButton />
        </div>
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
        <ModalImgCard />
      </>
    </div>
  );
};

export default AppLayout;
