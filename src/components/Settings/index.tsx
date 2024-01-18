import { useState } from "react";
import TabButton from "../Others/TabButton";
import Profile from "./Profile";
import Payment from "./Payment";
import AccountManagement from "./AccountManagement";

const tabs = [
  { id: "Profile", text: "Profile" },
  { id: "Payment", text: "Payment" },
  { id: "AccountManagement", text: "Account Management" },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  return (
    <>
      <div className="w-full bg-black pt-[29px] flex flex-col">
        <div className="pl-8">
          <span className="font-chakra text-[26px]">Settings</span>
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
          {activeTab === "Profile" && <Profile />}
          {activeTab === "Payment" && <Payment />}
          {activeTab === "AccountManagement" && <AccountManagement />}
        </div>
      </div>
    </>
  );
};

export default Settings;
