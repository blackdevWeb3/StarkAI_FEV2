import { Link } from "react-router-dom";
import FooterItem from "../../components/Others/FooterItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Features } from "../../utils/constants";
import { constants_SocialLink } from "../../utils/constants";

const AppFooterSecondary = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#0b0f17] font-chakra py-10">
        <div className="flex flex-row max-w-[1180px] mx-auto border-b-[1px] w-full border-primary justify-evenly">
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
          <div className="flex flex-col pb-5">
            {Features.map((item, index) => (
              <FooterItem item={item} key={index} />
            ))}
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[22px] select-none font-medium">
              Get the App
            </span>
            <Link to="/" className="pt-4 hover:opacity-85">
              <img src="/assets/img/appstore.svg" alt="playstore" />
            </Link>
            <Link to="/" className="pt-4 hover:opacity-85">
              <img src="/assets/img/playstore.svg" alt="playstore" />
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="px-5 pb-0">
              <h4 className="text-[22px] text-white font-semibold">
                Contact Information:
              </h4>
            </div>
            <div className="pb-5 pt-[13px] px-5">
              <div className="w-full flex flex-row items-center justify-start">
                <div className="mr-3 w-6">
                  <span className="w-6 h-6 text-[24px]">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ color: "#00FFAC" }}
                    />
                  </span>
                </div>
                <div className="h-full text-[14px] leading-[2]">
                  <p>Singapore, Singapore</p>
                </div>
              </div>
            </div>
            <div className="pl-2 py-4 sm:pt-0 sm:pb-5 w-full flex sm:justify-center">
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
        <div className="flex flex-row pt-5">
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">Legal Notice</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">DMCA</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] border-r-[1px] border-primary text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">Terms of Service</span>
          </Link>
          <Link
            to="/"
            className="px-[18px] text-[#9094a6] hover:text-white transition-all duration-300 ease-in-out"
          >
            <span className="">Cookie Policy</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppFooterSecondary;
