import { Icon } from "@iconify/react";

export const sortOptions = [
  { label: "Trending", icon: "icon-park-solid:fire" },
  { label: "New", icon: "ph:spinner-light" },
  { label: "Top", icon: "game-icons:needle-drill" },
];

interface SortOption {
  label: string;
  icon: string;
}

interface SortSelectionButtonGroupProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  selectedOption: SortOption;
  handleOptionClick: (option: SortOption) => void;
}

const SortSelectionButtonGroup: React.FC<SortSelectionButtonGroupProps> = ({
  setIsOpen,
  isOpen,
  selectedOption,
  handleOptionClick,
}) => {
  return (
    <>
      <div className="relative font-chakra">
        {/* Make relative for absolute positioning inside */}
        <div
          className="primary-button rounded-full h-10 flex items-center justify-between w-36"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={selectedOption.icon} />
          {selectedOption.label}
          <Icon icon="icon-park-solid:down-one" />
        </div>
        {isOpen && (
          <div className="absolute bg-[#273748] w-full pt-8 pb-2 px-5 border border-[#ffffff29] -translate-y-6 z-[-1] rounded-br-2xl rounded-bl-2xl">
            {sortOptions.map((option, index) => (
              <button
                key={index}
                className="flex flex-row items-center text-[16px] gap-3 py-1"
                onClick={() => handleOptionClick(option)}
              >
                <Icon icon={option.icon} className="w-4 h-4" />
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SortSelectionButtonGroup;
