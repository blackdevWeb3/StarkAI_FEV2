import { Icon } from "@iconify/react";

const Profile = () => {
  return (
    <div className="w-full bg-darkBackground">
      <div className=" w-full max-w-[1176px] mx-auto">
        <div className="flex-1 text-white flex flex-col items-center justify-between w-full pt-8 min-h-screen">
          <a
            className="flex gap-2 items-center mb-auto self-start group mt-12"
            href="/"
          >
            <Icon icon="mdi-light:arrow-left" className="w-5 h-6" />
            <span>Back</span>
          </a>
          <div className="flex flex-col gap-5 w-full max-w-[18.75rem] mx-auto">
            <div className="flex flex-col items-center gap-2.5">
              <div className="relative w-[5.625rem] h-[5.625rem] rounded-full bg-[#232323] border border-dashed border-white border-opacity-20">
                <button className="appearance-none bg-transparent border-none w-full h-full flex justify-center items-center">
                  <Icon icon="mingcute:user-4-fill" className="w-8 h-8" />
                </button>
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
            <button className="flex items-center gap-2 text-m-mobile lg:text-m mt-7 opacity-60 hover:opacity-100 transition-opacity">
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
