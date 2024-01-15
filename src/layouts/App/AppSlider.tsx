import { Link } from "react-router-dom";

const AppSlider = () => {
  return (
    <>
      <div className="flex flex-col border-r border-primary bg-black w-[320px] h-screen pt-[10px]">
        <div className="pt-[19px] flex flex-row justify-center items-center">
          <img src="./favicon.ico" className="w-8 h-8 mr-1" alt="logo" />
          <h1 className="text-[28px] font-semibold font-chakra text-primaryColor">
            STARK.
          </h1>
          <h1 className="text-[28px] font-semibold font-chakra text-deepPink">
            AI
          </h1>
        </div>
        <div className="flex flex-col pt-[19px] text-fontPrimary">
          <Link to="/app"></Link>
          <Link to="/app/community-feed"></Link>
          <Link to="/app/personal-feed"></Link>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>
      </div>
    </>
  );
};

export default AppSlider;
