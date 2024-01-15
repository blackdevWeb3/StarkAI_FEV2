import { useState } from "react";
import TabButton from "./TabButton";

const tabs = [
  { id: "commonTab", text: "Your Generations" },
  { id: "followerTab", text: "Followers Feed" },
  { id: "likedTab", text: "Liked Feed" },
];

const PersonalFeed = () => {
  const [activeTab, setActiveTab] = useState("commonTab");
  return (
    <>
      <div className="w-full bg-black h-screen pt-[29px] flex flex-col">
        <div className="pl-8">
          <span className="font-chakra text-[26px]">Personal Feed</span>
        </div>
        <div className="border-b border-gray-800 pl-8 pt-3">
          {/* Tab navigation */}
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

        {/* Tab content */}
        <div className="flex-1">
          {activeTab === "commonTab" && <div>Content for Tab 1</div>}
          {activeTab === "followerTab" && <div>Content for Tab 2</div>}
          {activeTab === "likedTab" && <div>Content for Tab 3</div>}
        </div>
      </div>
    </>
  );
};

export default PersonalFeed;
