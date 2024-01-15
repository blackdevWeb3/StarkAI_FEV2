import { useState } from "react";

const PersonalFeed = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <div className="w-full bg-black h-screen pt-[29px] flex flex-col">
        <div className="pl-8">
          <span className="font-chakra text-[26px]">Personal Feed</span>
        </div>
        <div className="border-b border-gray-800 pl-8 pt-3">
          {/* Tab navigation */}
          <nav className="flex space-x-6">
            <button
              onClick={() => setActiveTab("tab1")}
              className={`py-2 ${
                activeTab === "tab1"
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-400"
              }`}
            >
              Your Generations
            </button>
            <button
              onClick={() => setActiveTab("tab2")}
              className={`py-2 ${
                activeTab === "tab2"
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-400"
              }`}
            >
              Followers Feed
            </button>
            <button
              onClick={() => setActiveTab("tab3")}
              className={`py-2 ${
                activeTab === "tab3"
                  ? "text-white border-b-2 border-blue-500"
                  : "text-gray-400"
              }`}
            >
              Liked Feed
            </button>
          </nav>
        </div>

        {/* Tab content */}
        <div className="flex-1">
          {activeTab === "tab1" && <div>Content for Tab 1</div>}
          {activeTab === "tab2" && <div>Content for Tab 2</div>}
          {activeTab === "tab3" && <div>Content for Tab 3</div>}
        </div>
      </div>
    </>
  );
};

export default PersonalFeed;
