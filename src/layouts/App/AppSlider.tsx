import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useUser } from "../../config/context/UserContext";
import NavLink from "../../components/Others/NavLink";
import { Navigate } from "react-router-dom";
import { Logout } from "../../assets";

interface AppSliderProps {
  sliderOpen: boolean;
  setSliderOpen: (open: boolean) => void;
  sliderHandler: () => void;
  pathname: string;
}

const AppSlider = ({
  sliderOpen,
  setSliderOpen,
  sliderHandler,
  pathname,
}: AppSliderProps) => {
  const { user, setUser }: any = useUser();

  if (user === undefined || user === "None") {
    return <Navigate to="/" />;
  }

  const userObject = JSON.parse(user === "None" ? "{}" : user);

  const handleSetActiveLink = (path: string) => {
    setSliderOpen(false);
  };

  const handleLogout = () => setUser("None");

  return (
    <>
      <div
        className={`flex flex-col z-50 bg-[#333535] font-kanit rounded-[25px] mt-[23px] mx-[31px] mb-[37px] w-[267px] min-w-[267px] px-[10px] pt-[17px] pb-[10px] transition-all duration-300 ease-in-out ${
          sliderOpen
            ? "sm:w-full sm:max-w-full fixed min-h-screen h-full"
            : "sm:hidden"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-row justify-between w-full items-center pl-[25px]">
            <Link to="/" className="flex flex-row justify-center items-center">
              <img
                src="/starkMeta_logo.svg"
                alt="logo"
                className="w-[153px] h-[37px]"
              />
            </Link>
            {sliderOpen && (
              <button className="hover:opacity-70" onClick={sliderHandler}>
                <Icon icon="lets-icons:close-round" width={24} />
              </button>
            )}
          </div>
          <div className="flex flex-col pt-9 gap-[11px]">
            <NavLink
              to="/app"
              handleSetActiveLink={handleSetActiveLink}
              activeLink={pathname}
              icon="community-collections"
              text="Community Collections"
            />
            <NavLink
              to="/app/personal-feed"
              handleSetActiveLink={handleSetActiveLink}
              activeLink={pathname}
              icon="my-collections"
              text="My Collections"
            />
            <NavLink
              to="#"
              handleSetActiveLink={() => {}}
              activeLink={""}
              icon="marketplace"
              text="Marketplace"
              activeState={false}
            />
            <NavLink
              to="/app/image-generator"
              handleSetActiveLink={handleSetActiveLink}
              activeLink={pathname}
              icon="create-art"
              text="Create Art"
            />
            <NavLink
              to="/app/settings"
              handleSetActiveLink={handleSetActiveLink}
              activeLink={pathname}
              icon="settings"
              text="Settings"
            />
          </div>
        </div>
        <button
          className="text-[#959595] bg-[#1C1B1B] h-[61px] rounded-[45px] hover:text-white hover:bg-[#1b1c20] flex flex-row items-center pl-[29px]"
          onClick={handleLogout}
        >
          <Logout />
          <span className="flex flex-row gap-[10px] items-center pl-[14px] px-4">
            <span className="text-[15px] leading-[22.43px] font-[275]">
              Logout
            </span>
          </span>
        </button>

        {/* <Link
            to="/app/settings"
            className="text-white hover:bg-[#1b1c20]"
            onClick={() => handleSetActiveLink("/app/settings/")}
          >
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-5">
              {userObject?.avatar ? (
                <img
                  src={userObject?.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <Icon icon="carbon:user-avatar" className="w-7 h-7" />
              )}
              <span className="text-[15px] font-medium ">
                {userObject?.username || "User"}
              </span>
            </span>
          </Link> */}
      </div>
    </>
  );
};

export default AppSlider;
