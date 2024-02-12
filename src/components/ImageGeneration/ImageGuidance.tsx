import React, { RefObject } from "react";
import { Slider } from "@mui/material";
import { Icon } from "@iconify/react";

interface ImageGuidanceProps {
  imageSrc: File | null;
  uploadImgRef: RefObject<HTMLInputElement>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveUpload: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleUpload: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleDensityChange: (event: Event, newValue: number | number[]) => void;
  densityValue: number;
}

const ImageGuidance: React.FC<ImageGuidanceProps> = ({
  imageSrc,
  uploadImgRef,
  handleFileChange,
  handleRemoveUpload,
  handleUpload,
  handleDensityChange,
  densityValue,
}) => {
  return (
    <div className="py-5 font-chakra sm:px-1">
      <div className="flex flex-col w-full bg-[#0b0f17] rounded-md">
        <div className="flex flex-row w-full justify-between items-center px-5 py-3">
          <span className="flex flex-row gap-5 items-center">
            <span className="rounded-md bg-[#181F2F] p-2 text-[12px] w-5 h-5 flex items-center">
              1
            </span>
            <h2 className="">Image Input</h2>
          </span>
        </div>
        <div className="flex flex-col flex-1 py-[10px] px-5 gap-[6px]">
          <span className="flex flex-row gap-1 items-center">
            <span className="text-[14px]">Add an image to get started</span>
            <Icon icon="ph:question-fill" className="w-4 h-4 text-white/30" />
          </span>
          <div className="py-2 flex flex-row items-center justify-center sm:flex-col sm:gap-5 md:flex-col md:gap-7">
            <div
              onClick={handleUpload}
              className={`relative ${
                imageSrc ? "w-3/5 sm:w-full md:w-full" : "w-full"
              } h-[300px] rounded-md bg-[#101622] border border-dashed border-white border-opacity-20 transition-all duration-200 ease-in-out hover:cursor-pointer group hover:bg-[#393b45]`}
            >
              <input
                type="file"
                ref={uploadImgRef}
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
              <div className="flex justify-center items-center w-full h-full">
                {imageSrc && (
                  <img
                    src={URL.createObjectURL(imageSrc)}
                    alt="Uploaded Avatar"
                    className="w-auto h-full object-cover"
                    // Handle onLoad directly here to avoid creating an object URL twice
                    onLoad={(event) => {
                      const target = event.target as HTMLImageElement;
                      URL.revokeObjectURL(target.src); // Revoke the object URL to avoid memory leaks
                    }}
                  />
                )}
                {!imageSrc && (
                  <div className="flex flex-row gap-3 items-center p-3 sm:p-[6px] border-white border border-dotted rounded-md group-hover:text-deepPink group-hover:border-deepPink transition-all duration-200 ease-in-out">
                    <Icon
                      icon="entypo:upload"
                      className="w-8 h-8 sm:w-6 sm:h-6"
                    />
                    <span className="font-semibold sm:text-[14px]">
                      Click here to upload an image
                    </span>
                  </div>
                )}
              </div>
            </div>
            {imageSrc && (
              <div className="w-2/5 sm:w-full md:w-full p-5 h-[300px] rounded-md border border-primary border-dotted ml-5 sm:ml-0 md:ml-0">
                <div className="flex flex-col items-center justify-between w-full h-full gap-3">
                  <div className="flex flex-col gap-1 items-center w-full px-5 py-3 border border-primary border-dotted rounded-md">
                    <div className="flex flex-row justify-between items-center w-full">
                      <span className="flex flex-row gap-1 items-center">
                        <span className="text-[14px]">Strength</span>
                        <Icon
                          icon="ph:question-fill"
                          className="w-4 h-4 text-white/30 mb-[2px]"
                        />
                      </span>
                      <span className="text-[12px] font-semibold py-1 bg-[#181F2F] px-2 rounded-md">
                        {densityValue / 100}
                      </span>
                    </div>
                    <div className="w-full">
                      <Slider
                        aria-label="Volume"
                        value={densityValue}
                        onChange={handleDensityChange}
                      />
                    </div>
                  </div>

                  <div
                    className="group rounded-md border-primary border border-md border-dotted p-5 w-full flex flex-row items-center gap-5 justify-center hover:cursor-pointer hover:bg-[#393b45] sm:p-3"
                    onClick={handleRemoveUpload}
                  >
                    <Icon
                      icon="streamline:recycle-bin-2-solid"
                      className="w-6 h-6"
                    />
                    <span className="text-[18px] font-semibold select-none sm:text-[14px]">
                      Remove Image
                    </span>
                  </div>
                  <div
                    className="group rounded-md border-primary border border-dotted p-5 w-full flex flex-row items-center gap-5 justify-center hover:cursor-pointer hover:bg-[#393b45] sm:p-3"
                    onClick={handleUpload}
                  >
                    <Icon icon="entypo:upload" className="w-6 h-6" />
                    <span className="text-[18px] font-semibold select-none sm:text-[14px]">
                      Upload Image
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default ImageGuidance;
