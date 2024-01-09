import { Link } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="h-screen w-full bg-darkPrimary">
      <div className="w-full max-w-[1400px] mx-auto flex flex-row h-full">
        <div className="w-1/2 h-full bg-darkPrimary">
          <div className="items-center justify-center flex flex-col w-full h-full gap-2">
            <span className="w-full h-[200px] text-white text-center font-semibold text-[24px] z-10 flex items-center justify-center">
              A canvas of Infinite creativity for unique creators
            </span>
            <span className="z-[5] mt-[-30px] p-10 flex flex-col justify-center items-center gap-3 rounded-md">
              <Link to="/login" className="primary-button z-10">
                Create Account
              </Link>
              <span className="">No credit card needed</span>
            </span>
          </div>
        </div>
        <div className="w-1/2 items-center justify-center flex flex-col pt-5">
          <img src="./assets/characters/lion.png" alt="character01" />
        </div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
