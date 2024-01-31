import { Link } from "react-router-dom";
import { Icon } from "@iconify/react"; // assuming you are using iconify-react for icons

interface NavLinkProps {
  to: string;
  handleSetActiveLink: (link: string) => void;
  activeLink: string;
  icon: string;
  text: string;
  activeState?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  handleSetActiveLink,
  activeLink,
  icon,
  text,
  activeState,
}) => (
  <Link
    to={to}
    onClick={() => handleSetActiveLink(to)}
    className={`hover:text-white font-chakra hover:bg-[#1b1c20] ${
      activeLink === to ? "text-white bg-[#1b1c20]" : "text-fontPrimary"
    }`}
  >
    <span className="flex flex-row gap-2 items-center py-2 px-4">
      <Icon icon={icon} className="w-6 h-6" />
      <span className="text-[15px]">{text}</span>
      {activeState === false && (
        <span className="rounded-full px-2 py-1 text-[8px] bg-slate-600 text-white">
          Coming Soon
        </span>
      )}
    </span>
  </Link>
);

export default NavLink;
