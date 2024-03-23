import { Link } from "react-router-dom";
import { useState } from "react";
import MenuItem from "../components/Others/MenuItem";
import { navbarMenuItems } from "../utils/constants";
import { CloseButton } from "../assets";

const TestNavbar = () => {
  const DropDownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="w-full bg-darkBackground fixed top-0 h-16 z-30 font-chakra">
      <div className="w-full mx-auto flex flex-row justify-between items-center h-full px-10">
        <div className="flex flex-row items-center gap-2">
          {/* <img src="./favicon.ico" alt="logo" className="w-[30px]" /> */}
          <Link className="flex flex-row" to="/">
            <h1 className="text-[26px] font-semibold font-chakra text-primaryColor">
              STARK&nbsp;
            </h1>
            <h1 className="text-[26px] font-semibold font-chakra text-deepPink">
              AI
            </h1>
          </Link>
        </div>
        <div className="flex flex-row gap-6 items-center sm:hidden md:hidden">
          <div className="flex flex-row items-center gap-10">
            {navbarMenuItems.map((item, index) =>
              item.text === "API" || item.text === "FAQ" ? (
                <span
                  key={index}
                  className={`transition-all duration-300 ease-in-out text-deepPink cursor-not-allowed`}
                >
                  {item.text}
                </span>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  className={`hover:text-white transition-all duration-300 ease-in-out text-[#9094a6]`}
                >
                  {item.text}
                </Link>
              )
            )}
            <div className="social-links">
              <a href="https://discord.gg/starkmeta">
                <img
                  src="/assets/img/discord.svg"
                  alt="discord"
                  className="w-[18px]"
                />
              </a>
            </div>
          </div>
          <span className="h-10 w-[2px] bg-white opacity-20"></span>
          <Link to="/login">
            <span className="primary-button">Launch App</span>
          </Link>
        </div>
        <div
          id="hamburger_menu"
          className="hidden flex-end sm:flex md:flex"
          onClick={DropDownMenu}
        >
          <div className="space-y-[6px] cursor-pointer">
            <span className="block w-[30px] h-[3px] bg-white rounded"></span>
            <span className="block w-[30px] h-[3px] bg-white rounded"></span>
            <span className="block w-[30px] h-[3px] bg-white rounded"></span>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="z-[100] fixed top-0 w-full bg-[#060c0e] overflow-hidden transition-all duration-3000 ease-in-out anim-height">
          <div className="absolute right-8 top-12">
            <button
              type="button"
              onClick={DropDownMenu}
              className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-white focus:outline-none"
            >
              <CloseButton />
            </button>
          </div>
          <ul className="p-0 relative top-1/2 w-[80%] mx-auto my-0 transform translate-y-[-50%]">
            <li className="fadeInLeft text-center opacity-0 animate-delay-300">
              <Link to="/" className="p-0">
                <span className="p-[10px] border-none inline-block">
                  <img src="/favicon.ico" alt="Logo"></img>
                </span>
              </Link>
            </li>
            {navbarMenuItems.map((item, index) => {
              return (
                <MenuItem
                  link={item.link}
                  key={index}
                  text={item.text}
                  delay={item.delay}
                />
              );
            })}
            <Link to="/login" className="flex flex-row justify-center">
              <span className="primary-button mt-7 fadeInLeft text-center opacity-0 animate-delay-900 w-[140px]">
                Launch App
              </span>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestNavbar;
