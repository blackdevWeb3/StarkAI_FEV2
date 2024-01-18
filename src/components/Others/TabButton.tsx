type TabButtonProps = {
  tabId: string;
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  text: string;
};

const TabButton: React.FC<TabButtonProps> = ({
  tabId,
  activeTab,
  setActiveTab,
  text,
}) => {
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`py-2 font-chakra text-[14px] ${
        activeTab === tabId
          ? "text-white border-b-2 tab-border"
          : "text-gray-400"
      }`}
    >
      {text}
    </button>
  );
};

export default TabButton;
