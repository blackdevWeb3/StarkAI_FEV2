import { Link } from "react-router-dom";
import FooterItem from "../components/Others/FooterItem";
import { Features } from "../utils/constants";
import { constants_SocialLink } from "../utils/constants";
import { FooterGround } from "../assets";

const Footer = () => {
  return (
    <>
      <div className="overflow-hidden w-full flex flex-col items-center bg-[#1c1b1b] font-kanit py-10 relative z-30">
        <div className="flex flex-row max-w-[1180px] mx-auto w-full justify-evenly sm:flex-col md:flex-col">
          <div className="flex flex-col items-left max-w-[461px] sm:w-full md:w-full sm:mx-auto md:mx-auto">
            <Link to="/" className="pr-1">
              <FooterGround />
            </Link>
            <span className="mt-[14px] max-w-[461px] leading-[24px] text-[15px] font-[275]">
              Unleashing Potential with Artificial Intelligence - Stark AI leads
              the charge in pioneering AI solutions that redefine the boundaries
              of technology and innovation. Join us in crafting the future.
            </span>
            <div className="mt-[39px] flex flex-row gap-3">
              <Link to="/" className="hover:opacity-80">
                <img
                  src="/assets/img/playstore.png"
                  className="w-[214px] h-[60px]"
                  alt="playStore"
                />
              </Link>
              <Link to="/" className="hover:opacity-80">
                <img
                  src="/assets/img/appstore.png"
                  alt="appStore"
                  className="w-[214px] h-[60px]"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-row font-Poppins sm:justify-evenly md:justify-between md:px-20 justify-between w-1/2 sm:w-full sm:pt-10 md:pt-10 md:w-full">
            <div className="flex flex-col">
              <span className="text-[#7064E9] text-[21px] sm:text-[18px] font-semibold md:text-[18px] select-none leading-[24px]">
                Quick links
              </span>
              <div className="pt-3 flex flex-col">
                {Features.map((item, index) => (
                  <FooterItem item={item} key={index} />
                ))}
              </div>
            </div>
            <div className="flex flex-col md:pl-3">
              <span className="text-[#7064E9] text-[21px] font-semibold sm:text-[18px] select-none leading-[24px]">
                News
              </span>
              <div className="mt-[17px] flex flex-col gap-3">
                <Link
                  to="/news"
                  className="text-white text-[19px] sm:text-[14px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
                >
                  Blog
                </Link>
                <Link
                  to="/faq"
                  className="text-white text-[19px] sm:text-[14px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
                >
                  FAQ
                </Link>
                <Link
                  to="/api"
                  className="text-white text-[19px] sm:text-[14px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
                >
                  API
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#7064E9] text-[21px] sm:text-[18px] font-semibold md:text-[18px] select-none leading-[24px]">
                Others
              </span>
              <div className="mt-[17px] flex flex-col gap-3">
                <Link
                  to="/news"
                  className="text-white text-[19px] sm:text-[14px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
                >
                  How it Works?
                </Link>
                <Link
                  to="/faq"
                  className="text-white text-[19px] sm:text-[14px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
                >
                  Why Free trial?
                </Link>
                <Link
                  to="/api"
                  className="text-white text-[19px] sm:text-[14px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
                >
                  Benefits with Hive
                </Link>
              </div>
              <div className="pt-[49.8px] sm:pt-3 sm:pb-5 w-full flex sm:justify-center justify-end ml-[-4px]">
                <div className="social-links">
                  {constants_SocialLink.map((item, index) => (
                    <a key={index} href={item.link}>
                      <img
                        src={`/assets/img/${item.src}`}
                        alt={item.src}
                        className="w-[18px] sm:w-[16px]"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="font-Poppins flex flex-col justify-start items-start sm:w-full w-1/3 sm:justify-center sm:items-center sm:pt-2">
            <span className="text-[#7064E9] text-[21px] font-semibold md:text-[18px] select-none leading-[24px]">
              Others
            </span>
            <div className="mt-[17px] flex flex-col gap-3">
              <Link
                to="/news"
                className="text-white text-[19px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
              >
                How it Works?
              </Link>
              <Link
                to="/faq"
                className="text-white text-[19px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
              >
                Why Free trial?
              </Link>
              <Link
                to="/api"
                className="text-white text-[19px] font-normal leading-[29px] hover:text-[#6a62c0] transition-all ease-in-out duration-300"
              >
                Benefits with Hive
              </Link>
            </div>
            <div className="pt-[49.8px] sm:pt-0 sm:pb-5 w-full flex sm:justify-center ml-[-4px]">
              <div className="social-links">
                {constants_SocialLink.map((item, index) => (
                  <a key={index} href={item.link}>
                    <img
                      src={`/assets/img/${item.src}`}
                      alt={item.src}
                      className="w-[18px]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div> */}
        </div>
        <div className="pt-[15px] flex flex-row max-w-[1180px] mx-auto items-center justify-between w-full font-Poppins md:px-20 px-10">
          <span className="flex flex-row gap-2 sm:text-[12px] md:text-[14px] leading-[24px] font-[200] text-[16px]">
            Copyright © 2022. All rights reserved.
          </span>
          <div className="flex flex-row md:text-[14px] sm:text-[12px] leading-[24px] font-[400] text-[16px]">
            <Link
              to="/"
              className="px-[18px] text-[#C4C4C4] hover:text-white transition-all duration-300 ease-in-out sm:px-3"
            >
              <span className="">Term & Condition</span>
            </Link>

            <Link
              to="/"
              className="px-[18px] text-[#C4C4C4] hover:text-white transition-all duration-300 ease-in-out sm:px-3"
            >
              <span className="">Privacy Policy</span>
            </Link>
            <Link
              to="/"
              className="px-[18px] text-[#C4C4C4] hover:text-white transition-all duration-300 ease-in-out sm:px-3"
            >
              <span className="">Cookie Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
