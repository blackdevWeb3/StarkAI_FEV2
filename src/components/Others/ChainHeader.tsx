import { Icon } from "@iconify/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const ChainHeader = () => {
  return (
    <>
      <div className="bg-black flex-col relative w-full">
        <div className="items-end right-8 top-2 absolute" id="walletConnect">
          <ConnectButton />
        </div>
        <div className="border-primary h-10 border-t border-b mt-[55px] flex flex-row items-center gap-5">
          <button className="px-2 flex flex-row gap-2 items-center">
            <Icon icon="ri:shapes-fill" className="w-6 h-6" />
            All Chains
          </button>
          <button className="px-2">
            <Icon icon="simple-icons:solana" className="w-5 h-5" />
          </button>
          <button className="px-2">
            <Icon icon="simple-icons:ethereum" className="w-5 h-5" />
          </button>
          <button className="px-2">
            <Icon icon="simple-icons:bitcoin" className="w-5 h-5" />
          </button>
          <button className="px-2">
            <Icon icon="simple-icons:polygon" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChainHeader;
