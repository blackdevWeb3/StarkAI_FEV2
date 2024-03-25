import { Icon } from "@iconify/react";
import { useUser } from "../../config/context/UserContext";
import { Link, Navigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import { updateUserInfo } from "../../actions/authActions";

const Profile: React.FC = () => {
  const { user, setUser }: any = useUser();
  const user_string = JSON.parse(user === "None" ? "{}" : user);
  const [avatarSrc, setAvatarSrc] = useState<string | ArrayBuffer | null>(
    user_string?.avatar || ""
  );
  const [username, setUserName] = useState<string>(user_string?.username || "");
  const [email, setEmail] = useState<string>(user_string?.email || "");
  const [password, setPassword] = useState<string>("");
  const avatarInputRef = useRef<HTMLInputElement>(null);

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
      console.log("Selected File:", file);
    }
  };

  const handleAvatarSrcRemove = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setAvatarSrc(null);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleLogout = () => {
    setUser("None");
  };

  const handleSaveChange = () => {
    updateUserInfo({ username: username, email: email, avatar: avatarSrc });
    // setUser({ username: username, email: email, avatar: avatarSrc });
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  if (user === "None" || user === undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-full bg-darkBackground">
      <div className=" w-full max-w-[1176px] mx-auto pt-8 font-chakra">
        <div className="flex-1 text-white flex flex-col items-center justify-between w-full pt-8 min-h-screen">
          <div className="flex flex-col gap-5 w-full max-w-[18.75rem] mx-auto">
            <div className="flex flex-col items-center gap-2.5">
              <div
                onClick={handleSelectAvatar}
                className="relative w-[5.625rem] h-[5.625rem] rounded-full bg-[#232323] border border-dashed border-white border-opacity-20 hover:cursor-pointer"
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
                    onClick={handleAvatarSrcRemove}
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
              <input
                className="rounded-lg px-3.5 py-2.5 bg-dark-elements appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"
                value={username}
                onChange={handleUsernameChange}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-s-mobile lg:text-s text-white select-none">
                Email
              </label>
              <input
                value={email}
                onChange={handleEmailChange}
                className="rounded-lg px-3.5 py-2.5 bg-dark-elements appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"
                disabled
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-s-mobile lg:text-s text-white select-none">
                Password
              </label>
              <input
                value={password}
                type="password"
                onChange={handlePasswordChange}
                className="rounded-lg px-3.5 py-2.5 bg-dark-elements appearance-none outline-none invalid:focus:border-danger-primary placeholder:text-light-secondary text-white disabled:text-opacity-60 disabled:cursor-not-allowed"
              ></input>
            </div>
            <div className="flex flex-col gap-2 text-s-mobile lg:text-s">
              <p className="select-none">Discord</p>
              <Link
                to="https://discord.com/invite/starkmeta"
                className="rounded-md font-extra-thick transition-colors disabled:cursor-not-allowed px-4 gap-2 py-2.5 flex items-center justify-center hover:bg-dark-elements-hover text-light-primary bg-dark-elements hover:bg-[#171717]"
              >
                <Icon
                  icon="ic:round-discord"
                  className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
                  width="22"
                  height="22"
                />
                <span className="text-light-primary font-extra-thick select-none">
                  Connect Discord
                </span>
              </Link>
              <p className="text-white text-opacity-60 select-none">
                To connect Discord, your Discord account should have the same
                email as your StarkMeta account
              </p>
            </div>
          </div>
          <div className="py-7">
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-m-mobile lg:text-md opacity-60 hover:opacity-100 transition-opacity"
            >
              <Icon
                icon="material-symbols-light:logout-rounded"
                className="w-6 h-6"
              />
              <span className="select-none">Log out</span>
            </button>
          </div>
          <button
            onClick={handleSaveChange}
            className="rounded-md font-extra-thick transition-colors disabled:cursor-not-allowed px-7 gap-2 py-2.5 flex items-center justify-center hover:bg-dark-elements-hover text-light-primary bg-dark-elements hover:bg-[#171717]"
          >
            Save Changes
          </button>
          <div className="mt-auto pb-6">
            <p className="text-white text-sm text-opacity-50 text-center h-[var(--footer-height)] flex items-center justify-center select-none">
              StarkMeta © 2024. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
