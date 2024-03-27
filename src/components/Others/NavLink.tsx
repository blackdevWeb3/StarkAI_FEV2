import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // assuming you are using iconify-react for icons
import {
  CommunityCollections,
  MyCollections,
  MarketPlace,
  CreateArt,
  Settings,
} from "../../assets";
interface NavLinkProps {
  to: string;
  handleSetActiveLink: (link: string) => void;
  activeLink: string;
  icon: string;
  text: string;
  activeState?: boolean;
}

const SvgArray = [
  {
    name: "community-collections",
    logo: <CommunityCollections />,
  },
  {
    name: "my-collections",
    logo: <MyCollections />,
  },
  {
    name: "marketplace",
    logo: <MarketPlace />,
  },
  {
    name: "create-art",
    logo: <CreateArt />,
  },
  {
    name: "settings",
    logo: <Settings />,
  },
];

const NavLink: React.FC<NavLinkProps> = ({
  to,
  handleSetActiveLink,
  activeLink,
  icon,
  text,
  activeState,
}) => {
  const SvgLogo = SvgArray.find((item) => item.name === icon)?.logo || <></>;
  return (
    <Link
      to={to}
      onClick={() => handleSetActiveLink(to)}
      className={`hover:text-white hover:bg-[#474747] h-[61px] rounded-[45px] flex ${
        activeLink === to
          ? "text-white primary-link"
          : "text-fontPrimary bg-[#1C1B1B]"
      }`}
    >
      <div className="flex flex-row gap-[14px] items-center pl-7">
        <>{SvgLogo}</>
        <div>
          <span
            className={`text-[15px] leading-[22.43px] ${
              activeLink === to
                ? "font-normal text-white"
                : "font-[275] text-[#959595]"
            }`}
          >
            {text}
          </span>
          {activeState === false && (
            <span className="text-[8px] text-[#959595] leading-[11.96px] font-[275] ml-[5px]">
              [Coming Soon]
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default NavLink;
