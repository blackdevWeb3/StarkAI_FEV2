import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { BlockchainButtonProps } from "../../utils/types";
import { chains } from "../../utils/constants";

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
            className={`px-5 h-10 flex items-center gap-2 ${
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

const ChainHeader = () => {
  const [selectedChain, setSelectedChain] = useState<string>("all");

  const handleSelectChain = (chain: string) => {
    setSelectedChain(chain);
  };

  return (
    <>
      <div className="bg-black flex-col relative w-full">
        <div className="items-end right-8 top-2 absolute" id="walletConnect">
          <ConnectButton />
        </div>
        <div className="border-primary h-10 border-t border-b mt-[55px] flex flex-row items-center gap-3">
          <BlockchainButtons
            selectedChain={selectedChain}
            handleSelectChain={handleSelectChain}
          />
        </div>
      </div>
    </>
  );
};

export default ChainHeader;
