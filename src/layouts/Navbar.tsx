import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MenuItem from "../components/Others/MenuItem";
import { navbarMenuItems } from "../utils/constants";
import { CloseButton, SelectedMark } from "../assets";
import { Logo } from "../assets";

type CustomNavLinkProps = {
  to: string;
  label: string;
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive ? "gradient-menu-text active" : "gradient-menu-text"
    }
  >
    {({ isActive }) => (
      <>
        {label}
        <div className="flex justify-center w-full items-center">
          <span className="top-[3px] relative">
            {isActive && <SelectedMark />}
          </span>
        </div>
      </>
    )}
  </NavLink>
);

const Navbar = () => {
  const DropDownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="w-full top-9 fixed z-50 bg-transparent px-10 font-kanit">
      <div className="max-w-[1250px] w-full bg-[#333535] rounded-[59px] h-[82px] mx-auto">
        <div className="w-full mx-auto flex flex-row justify-between items-center h-full px-10">
          <div className="flex flex-row items-center gap-2 justify-center">
            <Link
              className="flex flex-row justify-center items-center mb-[14px]"
              to="/"
            >
              <Logo />
            </Link>
          </div>
          <div className="flex flex-row gap-[46px] lg:gap-8 sm:hidden md:hidden">
            <CustomNavLink to="/" label="Home" />
            <CustomNavLink to="/news" label="Blog" />
            <CustomNavLink to="/api" label="API" />
            <CustomNavLink to="/faq" label="Faq" />
            <CustomNavLink to="/stark-news" label="Stark News" />
            <CustomNavLink to="/contact-us" label="Contact Us" />
          </div>
          <div className="flex flex-row gap-3 items-center sm:hidden md:hidden">
            <div className="flex flex-row items-center gap-3"></div>
            <Link to="/login" className="">
              <span className="test-primary-button">Login Now</span>
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
    </div>
  );
};

export default Navbar;
