import { Link } from "react-router-dom";
import { ItemProps } from "../../utils/constants";

const FooterItem: React.FC<{ item: ItemProps }> = ({ item }) => {
  return (
    <>
      <span className="text-white text-[22px] select-none font-medium md:text-[18px]">
        {item.title}
      </span>
      {item.link &&
        (item.name === "Home" ? (
          <Link to={item.link} className="pt-2 group">
            <span className="text-[white] text-[19px] sm:text-[14px] font-normal leading-[29px] group-hover:text-[#cb8ae9] transition-all duration-300 ease-in-out">
              {item.name}
            </span>
          </Link>
        ) : (
          <span className="pt-2 group">
            <span className="text-[#9013ce] text-[19px] font-normal leading-[29px] cursor-not-allowed transition-all duration-300 ease-in-out sm:text-[14px]">
              {item.name}
            </span>
          </span>
        ))}
    </>
  );
};

export default FooterItem;
