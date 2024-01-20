import { Icon } from "@iconify/react";

const CommunityFeed = () => {
  return (
    <div className="w-full bg-black pt-[29px] flex flex-col">
      <div className="pl-8">
        <span className="font-chakra text-[26px]">Community Feed</span>
      </div>
      <div className="pl-8 pt-8">
        <div className="search-panel w-[376px]">
          <span className="search-icon">
            <Icon icon="ic:round-search" className="w-5 h-5" />
          </span>
          <input
            className="search-input font-chakra"
            placeholder="Search gallery"
          ></input>
          <button className="search-button">Search</button>
        </div>
      </div>

      {/* Images shared with community */}
      <div className="mt-8 border-t border-primary p-8"></div>
    </div>
  );
};

export default CommunityFeed;
