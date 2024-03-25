import { useState } from "react";
import { BlockchainButtonProps } from "../../utils/types";
import { chains } from "../../utils/constants";
import { MoreSVG } from "../../assets";

interface AppHeaderProps {
  sliderOpen: boolean;
  sliderHandler: () => void;
}

const BlockchainButtons: React.FC<BlockchainButtonProps> = ({
  selectedChain,
  handleSelectChain,
}) => {
  return (
    <div className="flex flex-row font-chakra">
      {chains.map(({ name, key, ColorIcon, DefaultIcon }) => {
        const isSelected = selectedChain === key;
        return (
          <button
            key={key}
            className={`px-5 sm:px-4 h-10 flex items-center gap-2 ${
              isSelected ? "text-blue-500 bg-[#40324e]" : ""
            }`}
            onClick={() => handleSelectChain(key)}
          >
            {isSelected ? (
              <>
                <ColorIcon />
                <span className="text-white/90 text-[14px] font-semibold leading-4">
                  {name}
                </span>
              </>
            ) : (
              <>
                <DefaultIcon />
              </>
            )}
          </button>
        );
      })}
    </div>
  );
};

const AppHeader = ({ sliderOpen, sliderHandler }: AppHeaderProps) => {
  const [selectedChain, setSelectedChain] = useState<string>("all");

  const handleSelectChain = (chain: string) => {
    setSelectedChain(chain);
  };

  return (
    <>
      <div className="flex-col relative w-full">
        {/* <div className="items-center right-5 top-2 absolute flex flex-row gap-2 sm:right-3">
          <div id="walletConnect">
            <ConnectButton />
          </div>
          <button
            onClick={sliderHandler}
            className="border-[#242c3e] border bg-[#0b0f17] w-9 h-9 rounded-[6px] sm:flex hidden justify-center items-center hover:bg-[#131926] hover:border-[#242c3e]"
          >
            <MoreSVG />
          </button>
        </div>
        <div className="border-primary h-10 border-t border-b mt-[55px] flex flex-row items-center gap-3">
          <BlockchainButtons
            selectedChain={selectedChain}
            handleSelectChain={handleSelectChain}
          />
        </div> */}
        <div className="items-center right-5 top-2 absolute flex flex-row gap-2 sm:right-3 z-20">
          <button
            onClick={sliderHandler}
            className="border-[#242c3e] border bg-[#0b0f17] w-9 h-9 rounded-[6px] sm:flex hidden justify-center items-center hover:bg-[#131926] hover:border-[#242c3e]"
          >
            <MoreSVG />
          </button>
        </div>
      </div>
    </>
  );
};

export default AppHeader;
