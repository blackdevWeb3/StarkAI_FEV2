import React from "react";

// Define the Props type for the Button component
interface ButtonProps {
  label: string;
  isSelected?: boolean;
  onClick: () => void;
}

// Define the Button component
const SortButton: React.FC<ButtonProps> = ({ label, isSelected, onClick }) => {
  return (
    <button
      className={`px-[30px] rounded-[42px] h-[42px] min-w-[98px]
                  border text-[12px] leading-normal font-light
                  hover:bg-[#2d2f2b] ${
                    isSelected ? "border-[#DD00AC]" : "border-[#505050]"
                  }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SortButton;
