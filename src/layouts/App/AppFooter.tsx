import { Link } from "react-router-dom";
import FooterItem from "../../components/Others/FooterItem";
import { Features } from "../../utils/constants";
import { constants_SocialLink } from "../../utils/constants";
import { Icon } from "@iconify/react";

const AppFooter = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#0b0f17] font-chakra py-10">
        <div className="flex flex-row max-w-[1180px] mx-auto border-b-[1px] w-full border-primary justify-evenly sm:flex-col">
          <div className="flex flex-col items-center gap-2">
            <Link to="/starkmeta.ai" className="pr-1">
              <img src="/favicon.ico" alt="logo" />
            </Link>
            <Link to="/starkmeta.ai">
              <span className="text-[20px] font-semibold">StarkMeta</span>
              <span className="text-[20px] font-semibold text-deepPink pl-1">
                .Ai
              </span>
            </Link>
          </div>
          <div className="flex flex-row sm:justify-evenly md:justify-evenly justify-between w-1/3 sm:w-full sm:pt-5">
            <div className="flex flex-col pb-5">
              {Features.map((item, index) => (
                <FooterItem item={item} key={index} />
              ))}
            </div>

            <div className="flex flex-col md:pl-3">
              <span className="text-white text-[22px] md:text-[18px] select-none font-medium">
                Get the App
              </span>
              <Link to="/" className="pt-4 hover:opacity-85">
                <img src="/assets/img/appstore.svg" alt="playstore" />
              </Link>
              <Link to="/" className="pt-4 hover:opacity-85">
                <img src="/assets/img/playstore.svg" alt="playstore" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:w-full w-1/3 sm:justify-center sm:items-center sm:pt-2">
            <div className="px-5 pb-0">
              <h4 className="text-[22px] text-white font-medium md:text-[18px]">
                Contact Information:
              </h4>
            </div>
            <div className="pb-3 pt-5 px-5">
              <div className="w-full flex flex-row items-center justify-start">
                <div className="mr-3 w-6">
                  <span className="w-6 h-6 text-[24px]">
                    <Icon icon="ion:location-sharp" color="00FFAC" />
                  </span>
                </div>
                <div className="h-full text-[14px] leading-[2]">
                  <p>390 Orchard Rd, Singapore 238871</p>
                </div>
              </div>
            </div>
            <div className="px-[14px] py-4 sm:pt-0 sm:pb-5 w-full flex sm:justify-center">
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
          </div>
        </div>
        <div className="flex flex-row pt-5 md:text-[14px] sm:text-[12px]">
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out sm:px-3"
          >
            <span className="">Legal Notice</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out sm:px-3"
          >
            <span className="">DMCA</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out sm:px-3"
          >
            <span className="">Terms of Service</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out sm:px-3"
          >
            <span className="">Cookie Policy</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppFooter;
