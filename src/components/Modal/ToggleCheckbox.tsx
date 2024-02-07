import { ChangeEvent } from "react";

interface ToggleCheckBoxProps {
  name: string;
  id: string;
  checked?: boolean;
  changeHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ToggleCheckBox: React.FC<ToggleCheckBoxProps> = ({
  id,
  name,
  checked,
  changeHandler,
}) => {
  return (
    <div className="relative inline-block w-[46px] align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={changeHandler}
        className="toggle-checkbox absolute mt-[2px] ml-[2px] block w-5 h-5 rounded-full bg-white border-1 appearance-none cursor-pointer"
      />
      <label
        htmlFor={id}
        className="toggle-label block overflow-hidden h-6 rounded-full bg-[#515151] cursor-pointer"
      ></label>
    </div>
  );
};

export default ToggleCheckBox;
