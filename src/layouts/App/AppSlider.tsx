import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const AppSlider = () => {
  return (
    <>
      <div className="flex flex-col border-r border-primary bg-black w-[270px] min-w-[270px] h-screen pt-[10px]">
        <div className="pt-[19px] flex flex-row justify-center items-center">
          {/* <img src="./favicon.ico" className="w-6 h-6 mr-1" alt="logo" /> */}
          <h1 className="text-[24px] font-semibold font-chakra text-white">
            STARK.
          </h1>
          <h1 className="text-[24px] font-semibold font-chakra text-deepPink">
            AI
          </h1>
        </div>
        <div className="flex flex-col pt-10">
          <Link
            to="/app/"
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
          >
            <span className="flex flex-row gap-2 items-center py-2 px-4">
              <Icon icon="mdi:home-outline" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">Home</span>
            </span>
          </Link>
          <Link
            to="/app/community-feed/"
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
          >
            <span className="flex flex-row gap-[10px] items-center py-2 px-4">
              <Icon icon="heroicons:user-group-solid" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">Community Feed</span>
            </span>
          </Link>
          <Link
            to="/app/personal-feed/"
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
          >
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-4">
              <Icon
                icon="material-symbols:dashboard-outline"
                className="w-6 h-6"
              />
              <span className="text-[15px] font-chakra">Personal Feed</span>
            </span>
          </Link>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>
        <div className="flex flex-col pt-10">
          <span className="px-[14px] pb-2 text-[15px] font-chakra font-semibold text-fontPrimary">
            User Tools
          </span>
          <Link
            to="/app/image-generator/"
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
          >
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-4">
              <Icon icon="prime:images" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">Image Generation</span>
            </span>
          </Link>
          <Link
            to="/app/text-generator/"
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
          >
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-4">
              <Icon icon="f7:pencil-outline" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">
                Texture Generation
              </span>
            </span>
          </Link>
        </div>
        <div className="flex flex-col pt-10">
          <Link
            to="/app/settings/"
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
          >
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-4">
              <Icon icon="mingcute:user-setting-line" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">Settings</span>
            </span>
          </Link>
          <button className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]">
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-4">
              <Icon icon="mynaui:logout" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">Logout</span>
            </span>
          </button>
          <Link to="/app/settings/" className="text-white hover:bg-[#1b1c20]">
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-5">
              <Icon icon="carbon:user-avatar" className="w-7 h-7" />
              <span className="text-[15px] font-semibold font-chakra">
                Username
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppSlider;
