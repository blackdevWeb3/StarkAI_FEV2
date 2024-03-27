import { useState } from "react";
import CommonFeed from "./CommonFeed";
import LikedFeed from "./LikedFeed";
import FollowerFeed from "./FollowerFeed";
import TabButton from "../Others/TabButton";
import MyCollectionItem from "./myCollectionItem";
import MyCollectionBoard from "./myCollectionBoard";

const tabs = [
  { id: "CommonFeed", text: "Your Generations" },
  { id: "followerTab", text: "Followers Feed" },
  { id: "likedTab", text: "Liked Feed" },
];

const PersonalFeed = () => {
  const [activeTab, setActiveTab] = useState("CommonFeed");
  return (
    <>
      <div className="w-full bg-primaryBackground pt-[29px] flex flex-col font-kanit">
        <MyCollectionItem />
        <div className="mt-[37px]">
          <MyCollectionBoard />
        </div>

        {/* <div className="pl-8 sm:pl-4">
          <span className="font-chakra text-[26px]">Personal Feed</span>
        </div>
        <div className="border-b border-gray-800 pl-8 pt-3 sm:pl-4">
 
          <nav className="flex space-x-6">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                tabId={tab.id}
                text={tab.text}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </nav>
        </div>

    
        <div className="flex-1">
          {activeTab === "CommonFeed" && <CommonFeed />}
          {activeTab === "followerTab" && <FollowerFeed />}
          {activeTab === "likedTab" && <LikedFeed />}
        </div> */}
      </div>
    </>
  );
};

export default PersonalFeed;
