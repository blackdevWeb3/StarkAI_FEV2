import { Link } from "react-router-dom";

import { useUser } from "../../config/context/UserContext";
import { HandIcon } from "../../assets";
import { useEffect } from "react";

const AppNavbar = () => {
  const { user, setUser }: any = useUser();
  const userObject = JSON.parse(user === "None" ? "{}" : user);
  return (
    <>
      <div className="flex flex-row justify-between items-center font-kanit">
        <div className="flex flex-row gap-[18px] items-center">
          <span className="w-[41px] h-[41px]">
            <HandIcon />
          </span>
          <span className="text-[48px] font-medium leading-[65px] text-center text-white">
            Welcome back!
          </span>
        </div>
        <div className="flex flex-row items-center gap-[19px]">
          <button className="w-[209px] h-[63px] rounded-[48px] button-color leading-normal font-medium text-[15px]">
            Connect Wallet
          </button>
          <Link to="/settings" className="w-[63px] h-[63px] rounded-full">
            {userObject && (
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocJ_o9U7FcGfeTzkoyvlt0lKUdLrcifCGo1PlIB_WCxt=s96-c"
                className="w-[63px] h-[63px] rounded-full"
                alt="profileAvatar"
              />
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppNavbar;
