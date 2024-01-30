import { Link } from "react-router-dom";
import { ItemProps } from "../../utils/constants";

const FooterItem: React.FC<{ item: ItemProps }> = ({ item }) => {
  return (
    <>
      <span className="text-white text-[22px] select-none font-medium">
        {item.title}
      </span>
      {item.link && (
        <Link to={item.link} className="pt-2 group">
          <span className="text-[#9094a6] group-hover:text-white transition-all duration-300 ease-in-out">
            {item.name}
          </span>
        </Link>
      )}
    </>
  );
};

export default FooterItem;
