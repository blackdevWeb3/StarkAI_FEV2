import { Link } from "react-router-dom";
import { ItemProps } from "../../utils/constants";

const FooterItem: React.FC<{ item: ItemProps }> = ({ item }) => {
  return (
    <>
      <span className="text-white text-[22px] select-none font-medium md:text-[18px]">
        {item.title}
      </span>
      {item.link && (
        <Link to={item.link} className="pt-2 group">
          <span className="text-[#9094a6] group-hover:text-white transition-all duration-300 ease-in-out md:text-[14px]">
            {item.name}
          </span>
        </Link>
      )}
    </>
  );
};

export default FooterItem;
