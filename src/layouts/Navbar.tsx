import { Link } from "react-router-dom";
import { useState } from "react";
import MenuItem from "../components/Others/MenuItem";

const menuItems = [
  { text: "Home", link: "/", delay: 400 },
  { text: "Blog", link: "/news", delay: 500 },
  { text: "FAQ", link: "/faq", delay: 600 },
  { text: "Team", link: "/team", delay: 700 },
  { text: "Affiliate Program", link: "/affiliate-program", delay: 800 },
  { text: "Contact Us", link: "/contact-us", delay: 900 },
  { text: "Support", link: "/support", delay: 900 },
  { text: "Careers", link: "/careers", delay: 1000 },
];

const Navbar = () => {
  const DropDownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="w-full bg-darkBackground fixed top-0 h-16 z-30 font-chakra">
      <div className="w-full mx-auto flex flex-row justify-between items-center h-full px-10">
        <div className="flex flex-row items-center gap-2">
          {/* <img src="./favicon.ico" alt="logo" className="w-[30px]" /> */}
          <div className="flex flex-row">
            <h1 className="text-[26px] font-semibold font-chakra text-primaryColor">
              STARK
            </h1>
            <h1 className="text-[26px] font-semibold font-chakra text-deepPink">
              .AI
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-6 items-center sm:hidden md:hidden">
          <div className="flex flex-row items-center lg:gap-6 gap-10">
            {menuItems.map((item) => (
              <Link
                to={item.link}
                className="text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out lg:text-[14px]"
              >
                {item.text}
              </Link>
            ))}
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
              <svg
                className="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="p-0 relative top-1/2 w-[80%] mx-auto my-0 transform translate-y-[-50%]">
            <li className="fadeInLeft text-center opacity-0 animate-delay-300">
              <a href="#" className="p-0">
                <span className="p-[10px] border-none inline-block">
                  <img src="/favicon.ico" alt="Logo"></img>
                </span>
              </a>
            </li>
            {menuItems.map((item, index) => {
              return (
                <MenuItem
                  link={item.link}
                  key={index}
                  text={item.text}
                  delay={item.delay}
                />
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
