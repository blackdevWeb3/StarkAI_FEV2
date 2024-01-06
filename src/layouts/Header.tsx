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
          <span className="relative px-2">
            <button className="group flex h-full items-center gap-2 peer/anchor flex-row">
              <div className="w-5 h-5 bg-white bg-opacity-25 rounded-full">
                <Icon
                  icon="lets-icons:user-fill"
                  className="w-5 h-5 rounded-full relative top-0.5 overflow-hidden"
                />
              </div>
              <span className="text-white">Sven</span>
              <Icon
                icon="carbon:chevron-up"
                className="text-white opacity-60 group-hover:opacity-100 duration-200"
              />
            </button>
            <ul className="flex-col gap-2.5 absolute top-[calc(100%_+_4px)] right-0 p-4 rounded-[10px] bg-dark-elements shadow-popup min-w-[180px] z-20 flex">
              <li>
                <a href="/profile" className="text-[14px]">
                  Profile
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  className="text-[14px]"
                  rel="noopener noreferrer"
                  href="https://discord.gg/pika"
                >
                  Help
                </a>
              </li>
              <li>
                <a href="/profile" className="text-[14px]">
                  About
                </a>
              </li>
              <li>
                <a href="/profile" className="text-[14px]">
                  Careers
                </a>
              </li>
              <li className="h-px w-full bg-white opacity-20"></li>

              <li className="h-px w-full bg-white opacity-20"></li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
