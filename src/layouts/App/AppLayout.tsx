import { Routes, Route } from "react-router-dom";
import AppSlider from "./AppSlider";
import CommunityFeed from "../../components/CommunityFeed";
import PersonalFeed from "../../components/PersonalFeed";
import AppHome from "../../components/AppHome";

const AppLayout = () => {
  return (
    <div className="flex flex-row w-full">
      <AppSlider />
      <Routes>
        <Route path="/" element={<AppHome />} />
        <Route path="community-feed" element={<CommunityFeed />} />
        <Route path="personal-feed" element={<PersonalFeed />} />
        <Route path="image-generator" element={<CommunityFeed />} />
        <Route path="text-generator" element={<CommunityFeed />} />
        <Route path="settings" element={<CommunityFeed />} />
      </Routes>
    </div>
  );
};

export default AppLayout;
