import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="px-4 md:px-6 lg:px-14 xl:px-[calc((100vw-var(--max-width))/2)] fixed top-0 bg-darkBackground z-20 w-full">
      <div className="w-full max-w-[1176px] mx-auto flex justify-between items-center border-b border-white border-opacity-10 h-12 gap-5">
        <h2 className="text-white font-semibold font-Overpass text-[32px] select-none">
          STARK AI
        </h2>
        <div className="flex flex-row gap-8">
          <a href="/">
            <Icon
              icon="ri:twitter-x-fill"
              className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
              width="22"
              height="22"
            />
          </a>
          <a href="/">
            <Icon
              icon="ic:round-discord"
              className="text-white opacity-60 hover:opacity-100 transition-opacity duration-300"
              width="22"
              height="22"
            />
          </a>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
