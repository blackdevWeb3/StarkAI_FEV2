import { Icon } from "@iconify/react";
import { useState } from "react";
import AppMainBoard from "../../layouts/App/AppMainBoard";

const CommonFeed = () => {
  const [activeButton, setActiveButton] = useState(true);
  return (
    <>
      <div className="relative">
        {/* TabView Settings */}
        <div className="sticky z-10 w-full bg-black pt-4">
          <div className="px-8">
            <div className="flex flex-col w-full gap-5">
              <div className="flex flex-wrap justify-between gap-4">
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
                <div className="flex flex-row w-[364px]">
                  <div className="button-group border-primary">
                    <button className="button-element">
                      <span className="button-icon">
                        <Icon icon="ri:fire-fill" className="w-4 h-4" />
                      </span>
                      <span className="button-title">Trending</span>
                    </button>
                    <button className="button-element">
                      <span className="button-icon">
                        <Icon
                          icon="mynaui:spinner"
                          rotate={3}
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="button-title">New</span>
                      <span className="button-selected"></span>
                    </button>
                    <button className="button-element">
                      <span className="button-icon">
                        <Icon icon="ri:fire-fill" className="w-4 h-4" />
                      </span>
                      <span className="button-title">Top</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <div className="flex bg-[#0c0f16] overflow-hidden rounded-lg">
                  <button
                    className={`button-item w-[116px] ${
                      activeButton ? "active" : ""
                    }`}
                    onClick={() => setActiveButton(true)}
                  >
                    <span className="font-chakra relative z-10 button-font">
                      All
                    </span>
                    <div className="button-cover"></div>
                  </button>
                  <button
                    className={`button-item w-[116px] ${
                      !activeButton ? "active" : ""
                    }`}
                    onClick={() => setActiveButton(false)}
                  >
                    <span className="font-chakra relative z-10 button-font">
                      Upscaled
                    </span>
                    <div className="button-cover"></div>
                  </button>
                </div>
                <div className=""></div>
              </div>
            </div>
            <div className=""></div>
          </div>
          <hr className=" border-gray-800 mt-7" />
        </div>

        {/* TabView Content */}
        <AppMainBoard />
      </div>
    </>
  );
};

export default CommonFeed;
