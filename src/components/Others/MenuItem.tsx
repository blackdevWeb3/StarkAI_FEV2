type MenuItemProps = {
  link: string;
  text: string;
  delay: string | number; // Assuming delay can be either a string representing a classname suffix or a number
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, delay }) => (
  <li className={`text-center fadeInLeft opacity-0 animate-delay-${delay}`}>
    <a href={link} className="p-0">
      <span className="p-[10px] border-none inline-block hover:text-white text-[#4D546C] font-medium h-full items-center hover:border-b-2 border-b-[#45DFAC] select-none transition-color duration-100 ease-in">
        {text}
      </span>
    </a>
  </li>
);

export default MenuItem;
