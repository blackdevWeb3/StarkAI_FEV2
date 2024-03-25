import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useUser } from "../../config/context/UserContext";
import NavLink from "../../components/Others/NavLink";
import { Navigate } from "react-router-dom";

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
        className={`flex flex-col z-50 border-r border-primary bg-black w-[267px] min-w-[267px] pt-[10px] transition-all duration-300 ease-in-out ${
          sliderOpen
            ? "sm:w-full sm:max-w-full fixed min-h-screen h-full"
            : "sm:hidden"
        }`}
      >
        <div className="pt-[19px] flex flex-row justify-between w-full items-center px-10">
          <Link to="/" className="flex flex-row justify-center items-center">
            <h1 className="text-[24px] font-semibold font-chakra text-white">
              STARK&nbsp;
            </h1>
            <h1 className="text-[24px] font-semibold font-chakra text-deepPink">
              AI
            </h1>
          </Link>
          {sliderOpen && (
            <button className="hover:opacity-70" onClick={sliderHandler}>
              <Icon icon="lets-icons:close-round" width={24} />
            </button>
          )}
        </div>
        <div className="flex flex-col pt-10">
          <NavLink
            to="/app"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={pathname}
            icon="heroicons:user-group-solid"
            text="Community Collections"
          />
          <NavLink
            to="/app/personal-feed"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={pathname}
            icon="material-symbols:dashboard-outline"
            text="My Collections"
          />
          <NavLink
            to="#"
            handleSetActiveLink={() => {}}
            activeLink={""}
            icon="simple-icons:shopify"
            text="Marketplace"
            activeState={false}
          />
        </div>
        <div className="flex flex-col pt-10">
          <span className="px-[14px] pb-2 text-[15px] font-chakra font-semibold text-fontPrimary">
            User Tools
          </span>
          <NavLink
            to="/app/image-generator"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={pathname}
            icon="prime:images"
            text="Create Art"
          />
        </div>
        <div className="flex flex-col pt-10">
          <NavLink
            to="/app/settings"
            handleSetActiveLink={handleSetActiveLink}
            activeLink={pathname}
            icon="mingcute:user-setting-line"
            text="Settings"
          />
          <button
            className="text-fontPrimary hover:text-white hover:bg-[#1b1c20]"
            onClick={handleLogout}
          >
            <span className="flex flex-row gap-[10px] items-center py-[10px] px-4">
              <Icon icon="mynaui:logout" className="w-6 h-6" />
              <span className="text-[15px] font-chakra">Logout</span>
            </span>
          </button>

          <Link
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
              <span className="text-[15px] font-medium font-chakra">
                {userObject?.username || "User"}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AppSlider;
