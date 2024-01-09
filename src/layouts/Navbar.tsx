import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-darkBackground fixed top-0 h-16 z-10">
      <div className="w-full max-w-[1176px] mx-auto flex flex-row justify-between items-center h-full px-10">
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
        <div className="flex flex-row gap-6 items-center">
          <div className="flex flex-row items-center gap-10">
            <Link to="/blog">Blog</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/api">API</Link>
            <Link to="/contact-us">Contact us</Link>
          </div>
          <span className="h-10 w-[2px] bg-white opacity-20"></span>
          <Link to="/login">
            <span className="primary-button">Launch App</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
