import { Icon } from "@iconify/react";

const ImageGeneration = () => {
  return (
    <>
      <div className="w-full bg-black h-screen pt-[29px] flex flex-col">
        <div className="w-full flex flex-col px-8">
          <span className="text-white font-chakra text-[20px] font-medium">
            AI Image Generation
          </span>
          <div className="flex items-start w-full pt-8 mb-4">
            <div className="relative block">
              <button className="button-prompt">
                <Icon
                  icon="game-icons:rolling-dices"
                  rotate={2}
                  color="#ff1493"
                  className="w-10 h-9"
                />
              </button>
            </div>
            <textarea
              placeholder="Type a prompt ..."
              maxLength={1000}
              className="textarea-prompt font-chakra"
            ></textarea>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
};

export default ImageGeneration;
