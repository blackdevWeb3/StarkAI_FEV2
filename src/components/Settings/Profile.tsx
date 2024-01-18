import { Icon } from "@iconify/react";
import { useUser } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import React, { useRef, useState } from "react";

const Profile: React.FC = () => {
  const { user, setUser }: any = useUser();
  const [avatarSrc, setAvatarSrc] = useState<string | ArrayBuffer | null>(null);
  const avatarInputRef = useRef<HTMLInputElement>(null);

  if (user === undefined || user === "none") {
    return <Navigate to="/login" />;
  }

  const handleSelectAvatar = () => {
    avatarInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();

      reader.onload = (readEvent) => {
        setAvatarSrc(readEvent.target?.result ?? null);
      };

      reader.readAsDataURL(file);
      console.log("Selected File:", file.name);
    }
  };

  return (
    <div className="w-full bg-darkBackground">
      <div className=" w-full max-w-[1176px] mx-auto pt-8 font-chakra">
        <div className="flex-1 text-white flex flex-col items-center justify-between w-full pt-8 min-h-screen">
          <div className="flex flex-col gap-5 w-full max-w-[18.75rem] mx-auto">
            <div className="flex flex-col items-center gap-2.5">
              <div
                onClick={handleSelectAvatar}
                className="relative w-[5.625rem] h-[5.625rem] rounded-full bg-[#232323] border border-dashed border-white border-opacity-20"
              >
                <input
                  type="file"
                  ref={avatarInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <div className="appearance-none bg-transparent border-none w-full h-full flex justify-center items-center">
                  {avatarSrc ? (
                    <img
                      src={avatarSrc as string}
                      alt="Avatar"
                      className="rounded-full w-full h-full object-cover"
                    />
                  ) : (
                    <Icon
                      icon="mingcute:user-4-fill"
                      className="w-8 h-8 text-white"
                    />
                  )}
                </div>
                {avatarSrc && (
                  <div
                    className="absolute top-[-15px] right-[-18px]"
                    onClick={() => setAvatarSrc(null)}
                  >
                    <Icon icon="streamline:recycle-bin-2" className="w-5 h-5" />
                  </div>
                )}
              </div>
              <label className="text-m-mobile lg:text-m cursor-pointer select-none">
                Upload image
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-s-mobile lg:text-s text-white select-none">
                Name
              </label>
              <input className="rounded-lg px-3.5 py-2.5 bg-dark-elements appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-s-mobile lg:text-s text-white select-none">
                Email
              </label>
              <input className="rounded-lg px-3.5 py-2.5 bg-dark-elements appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"></input>
            </div>
            <div className="flex flex-col gap-2 text-s-mobile lg:text-s">
              <p className="select-none">Discord</p>
              <button className="rounded-md font-extra-thick transition-colors disabled:cursor-not-allowed px-4 gap-2 py-2.5 flex items-center justify-center hover:bg-dark-elements-hover text-light-primary bg-dark-elements">
                <Icon
                  icon="ic:round-discord"
                  className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
                  width="22"
                  height="22"
                />
                <span className="text-light-primary font-extra-thick select-none">
                  Connect Discord
                </span>
              </button>
              <p className="text-white text-opacity-60 select-none">
                To connect Discord, your Discord account should have the same
                email as your StarkMeta account
              </p>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => setUser("none")}
              className="flex items-center gap-2 text-m-mobile lg:text-m mt-7 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Icon
                icon="material-symbols-light:logout-rounded"
                className="w-6 h-6"
              />
              <span className="select-none">Log out</span>
            </button>
          </div>
          <div className="mt-auto pb-6">
            <p className="text-s text-white text-opacity-50 text-center h-[var(--footer-height)] flex items-center justify-center select-none">
              StarkMeta © 2024. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
