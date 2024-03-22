import { Link } from "react-router-dom";
import FooterItem from "../components/Others/FooterItem";
import { Features } from "../utils/constants";
import { constants_SocialLink } from "../utils/constants";
import { Icon } from "@iconify/react";

const TestFooter = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#0b0f17] font-chakra py-10">
        <div className="flex flex-row max-w-[1180px] mx-auto border-b-[1px] w-full border-primary justify-evenly sm:flex-col">
          <div className="flex flex-col items-center gap-2">
            <Link to="/" className="pr-1">
              <img src="/favicon.ico" alt="logo" />
            </Link>
            <Link to="/">
              <span className="text-[20px] font-semibold">Stark</span>
              <span className="text-[20px] font-semibold text-deepPink pl-1">
                AI
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
              <Link
                to="/"
                className="bg-black mt-3 rounded-[12px] w-52 md:w-40 sm:w-auto py-1 px-5 border-[#9013ce] flex flex-row gap-2 border-[1px] hover:cursor-pointer hover:opacity-90"
              >
                <span className="">
                  <Icon icon="mdi:apple" width={32} />
                </span>
                <div className="flex flex-col justify-center hover:opacity-85">
                  <span className="text-[12px] md:text-[8px]">
                    Download on the{" "}
                  </span>
                  <div className="flex flex-row mt-[-5px] md:mt-0 gap-1 md:gap-0 items-center">
                    <span className=" tracking-normal font-medium md:text-[10px]">
                      App Store
                    </span>
                    <span className="md:text-[8px] md:mt-[1.5px]">
                      &nbsp;(soon)
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                to="/"
                className="bg-black mt-3 rounded-[12px] py-1 px-5 border-[#9013ce] flex flex-row gap-2 border-[1px] hover:cursor-pointer hover:opacity-90"
              >
                <span className="px-1">
                  <img
                    src="/assets/img/playstore.svg"
                    alt="playstore"
                    className="w-6 h-8"
                  />
                </span>
                <div className="flex flex-col justify-center hover:opacity-85">
                  <span className="text-[12px] md:text-[8px]">
                    Google Play on
                  </span>
                  <div className="flex flex-row mt-[-5px] md:mt-0 gap-1 md:gap-0 items-center">
                    <span className=" tracking-normal font-medium md:text-[10px]">
                      Coming
                    </span>
                    <span className="md:text-[8px] md:mt-[1.5px]">
                      &nbsp;(soon)
                    </span>
                  </div>
                </div>
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
        <div className="pt-5 flex flex-col gap-5 items-center">
          <div className="flex flex-row md:text-[14px] sm:text-[12px]">
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
          <div className="flex flex-row gap-2 sm:text-[12px] md:text-[14px]">
            <span>Copyright©</span>
            <span className="text-deepPink">STARK AI</span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestFooter;
