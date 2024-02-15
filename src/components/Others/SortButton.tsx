export type StyleOptions = "All" | "Upscaled" | "Motion";

type SortButtonProps = {
  label: string;
  isSelected: boolean;
  onClick: () => void;
};

const SortButton: React.FC<SortButtonProps> = ({
  label,
  isSelected,
  onClick,
}) => (
  <button
    className={`sort-button px-5 ${
      isSelected ? "text-white" : ""
    } hover:text-white`}
    onClick={onClick}
  >
    <span className="z-[2] relative">{label}</span>
    <div
      className={`sort-button-cover ${
        isSelected ? "selected opacity-100" : "opacity-0"
      }`}
    />
  </button>
);

export default SortButton;
