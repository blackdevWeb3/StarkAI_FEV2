import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[#0b0f17] font-chakra py-16">
        <div className="flex flex-row">
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
        </div>
        <div className="flex flex-row">
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

export default AppFooter;
