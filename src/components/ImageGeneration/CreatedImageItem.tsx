import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { Icon } from "@iconify/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { changeDateFormat } from "../../utils/changeDateFormat";
import { ModelItems } from "../../utils/constants";
import { Alchemy } from "../../assets";

interface CreatedImageItemProps {
  imageData: any;
  PromptHandler: (param1: string, param2: string) => void;
  deleteImage: (image: string) => void;
}

const CreatedImageItem: React.FC<CreatedImageItemProps> = ({
  imageData,
  PromptHandler,
  deleteImage,
}) => {
  const Image = imageData;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCopied, setIsCopied] = useState("");

  const handleCopy = (target: string) => {
    setIsCopied(target);
  };

  const currentModel = ModelItems.find(
    (ModelItem) => ModelItem.id === Image.data.modelId
  );

  return (
    <div className="pt-5 font-chakra">
      <div className="w-full flex flex-col gap-3">
        <span className="w-full text-center py-3 text-[#494E5B]">
          {changeDateFormat(Image.created)}
        </span>
        <div className="flex flex-row w-full flex-wrap gap-1">
          <div className="flex flex-row w-1/2">
            <div className="flex flex-col">
              <span className="text-white">{Image.data.prompt}</span>
              {Image.data.negative_prompt && (
                <div className="flex flex-row items-center">
                  <span className="text-[#797C86]">
                    Negative Prompt: {Image.data.negative_prompt}
                  </span>
                  <CopyToClipboard
                    text={Image.data.negative_prompt}
                    onCopy={() => handleCopy("negative_prompt")}
                  >
                    <span className="pl-2">
                      <Tooltip title="Copy Negative Prompt" arrow>
                        <Icon
                          icon={`${
                            isCopied === "negative_prompt"
                              ? "noto-v1:check-mark"
                              : "ion:copy"
                          }`}
                          color="#797C86"
                          width={18}
                          className="hover:cursor-pointer"
                        />
                      </Tooltip>
                    </span>
                  </CopyToClipboard>
                </div>
              )}
            </div>
            <div className="pl-5 flex flex-row items-center gap-2">
              <CopyToClipboard
                text={Image.data.prompt}
                onCopy={() => handleCopy("prompt")}
              >
                <Tooltip title="Copy Prompt" arrow>
                  <Icon
                    icon={`${
                      isCopied === "prompt" ? "noto-v1:check-mark" : "ion:copy"
                    }`}
                    color="#797C86"
                    width={18}
                    className="hover:cursor-pointer"
                  />
                </Tooltip>
              </CopyToClipboard>
              <Tooltip title="Reuse Prompts" arrow>
                <button
                  className="w-7 h-7 flex justify-center items-center rounded-md border border-[#242c3e] bg-[#ffffff14] hover:bg-[#ffffff29]"
                  onClick={() =>
                    PromptHandler(
                      Image.data.prompt,
                      Image.data?.negative_prompt
                    )
                  }
                >
                  <Icon icon="ci:arrow-up-sm" width={18} />
                </button>
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-row gap-5 text-[#ffffffeb]">
            <div className="flex flex-row items-center gap-2">
              <img
                className="w-[18px] h-[18px] rounded-sm"
                src={currentModel.imgURI}
                alt={currentModel.subLabel}
              />
              <span className="text-[14px]">{currentModel.label}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Alchemy />
              <span className="text-[14px] lowercase">
                {Image.data.presetStyle}
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span>
                <Icon icon="ph:images-fill" />
              </span>
              <span className="text-[14px]">{Image.data.num_images}</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span>
                <Icon icon="streamline:arrow-move-solid" width={14} />
              </span>
              <span className="text-[14px]">
                {Image.data.width} x {Image.data.height}
              </span>
            </div>
            <div
              className="flex flex-row items-center gap-1 hover:cursor-pointer"
              onClick={() => deleteImage(Image.image)}
            >
              <span>
                <Icon icon="iconamoon:trash-fill" width={16} />
              </span>
              <span className="text-[14px]">Delete</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 pt-2 relative min-h-[380px]">
          {!isLoaded && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-300 rounded-lg">
              Loading...
            </div>
          )}
          {Image.image.endsWith(".mp4") ? (
            <>
              <video
                loop
                disableRemotePlayback
                muted
                className="rounded-md"
                onLoadedData={() => setIsLoaded(false)}
                onError={() => setIsLoaded(false)}
              >
                <source type="video/mp4" src={Image.image} />
              </video>
            </>
          ) : (
            <img
              className={`rounded-lg ${!isLoaded ? "hidden" : ""}`}
              src={Image.image}
              alt={Image.image}
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatedImageItem;
