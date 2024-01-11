import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import { useUser } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const AppHeader = () => {
  const { user, setUser }: any = useUser();
  const [dropState, SetDropState] = useState(false);

  const dropDownHandler = () => {
    SetDropState(!dropState);
  };

  const CommunityFeedHandler = () => {
    alert("Community Feed Button Clicked");
  };

  const PersonalFeedHandler = () => {
    alert("Personal Feed Button Clicked");
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !dropdownButtonRef.current?.contains(event.target as Node)
      ) {
        SetDropState(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    console.log("State:", dropState);
  }, [dropState]);

  if (user === undefined || user === "none") {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    setUser("none");
  };

  return (
    <div className="px-4 md:px-6 lg:px-14 xl:px-[calc((100vw-var(--max-width))/2)] fixed top-0 bg-darkBackground z-20 w-full border-b border-white border-opacity-10">
      <div className="w-full max-w-[1176px] mx-auto flex justify-between items-center h-12 gap-5">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row">
            <h1 className="text-[28px] font-semibold font-chakra text-primaryColor">
              STARK.
            </h1>
            <h1 className="text-[28px] font-semibold font-chakra text-deepPink">
              AI
            </h1>
          </div>
        </div>

        <div className="flex flex-row gap-8 justify-center items-center">
          <button
            className="flex flex-row gap-1 items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            onClick={CommunityFeedHandler}
          >
            <Icon icon="mdi:users-group-outline" className="w-6 h-6" />
            <span className="text-[14px]">Community Feed</span>
          </button>
          <button
            onClick={PersonalFeedHandler}
            className="flex flex-row gap-1 items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <Icon icon="ic:outline-dashboard" className="w-6 h-6" />
            <span className="text-[14px]">Personal Feed</span>
          </button>
          <a href="https://twitter.com/Starkmetagame">
            <Icon
              icon="ri:twitter-x-fill"
              className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
              width="22"
              height="22"
            />
          </a>
          <a href="https://discord.com/invite/starkmeta">
            <Icon
              icon="ic:round-discord"
              className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
              width="22"
              height="22"
            />
          </a>
          <span className="relative px-2">
            <button
              id="dropDownButton"
              className="group flex h-full items-center gap-2 peer/anchor flex-row"
              ref={dropdownButtonRef}
              onClick={() => SetDropState(!dropState)}
            >
              <div className="w-5 h-5 bg-white bg-opacity-25 rounded-full">
                <Icon
                  icon="lets-icons:user-fill"
                  className="w-5 h-5 rounded-full relative top-0.5 overflow-hidden"
                />
              </div>
              <span className="text-white">{JSON.parse(user).username}</span>
              <Icon
                icon={`carbon:chevron-${dropState ? "up" : "down"}`}
                className="text-white opacity-60 group-hover:opacity-100 duration-200"
              />
            </button>
            {dropState && (
              <div
                className="flex-col gap-2.5 absolute top-[40px] right-0 p-4 rounded-[10px] bg-dark-elements shadow-popup min-w-[180px] z-20 flex"
                id="dropMenu"
                ref={dropdownRef}
              >
                <span>
                  <a href="/app/profile" className="text-[14px]">
                    Profile
                  </a>
                </span>
                <span>
                  <a
                    target="_blank"
                    className="text-[14px]"
                    rel="noopener noreferrer"
                    href="https://discord.gg/pika"
                  >
                    Help
                  </a>
                </span>
                <span>
                  <a href="/profile" className="text-[14px]">
                    About
                  </a>
                </span>
                <span>
                  <a href="/profile" className="text-[14px]">
                    Careers
                  </a>
                </span>
                <span className="h-px w-full bg-white opacity-20"></span>
                <span>
                  <a
                    className="flex flex-row gap-2 text-[14px] items-center cursor-pointer"
                    onClick={handleLogout}
                  >
                    <Icon icon="mynaui:logout" className="w-6 h-6" />
                    Log out
                  </a>
                </span>
                <span className="h-px w-full bg-white opacity-20"></span>
              </div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
