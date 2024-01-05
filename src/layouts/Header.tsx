import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className="px-4 md:px-6 lg:px-14 xl:px-[calc((100vw-var(--max-width))/2)] fixed top-0 bg-darkBackground z-20 w-full">
      <div className="w-full flex justify-between items-center border-b border-white border-opacity-10 h-12 gap-5 px-10">
        <span className="">
          <h2 className="text-white font-semibold text-[32px]">Spark AI</h2>
        </span>
        <div className="flex flex-row gap-8">
          <span>
            <Icon
              icon="ri:twitter-x-fill"
              className="text-white"
              width="22"
              height="22"
            />
          </span>
          <span>
            <Icon
              icon="ic:round-discord"
              className="text-white dark:text-darkIconColor"
              width="22"
              height="22"
            />
          </span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
