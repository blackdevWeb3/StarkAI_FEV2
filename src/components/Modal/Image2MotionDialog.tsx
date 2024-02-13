import { Dialog, Slider } from "@mui/material";
import { IconMotion } from "../../assets";
import { Icon } from "@iconify/react";

const Image2MotionDialog = ({
  motionOpen,
  Transition,
  imageData,
  densityValue,
  activeButton,
  handleDensityChange,
  handleClose,
  setActiveButton,
  handleImage2Motion,
}: any) => {
  return (
    <Dialog
      id="Image2Motion"
      open={motionOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          padding: "0px !important",
          maxWidth: "600px !important",
        },
      }}
    >
      <div className="p-8" style={{ borderBottom: "solid 1px gray" }}>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <IconMotion width={36} />
            <p className="text-white text-2xl">Image2Movie</p>
          </div>
          <Icon
            icon="carbon:close-outline"
            width="32"
            height="32"
            style={{ color: "white" }}
          />
        </div>
      </div>
      <div className="p-8 overflow-y-auto">
        <div>
          <div className="flex justify-between">
            <p className="text-white">Source Image</p>
            <p className="text-gray-400">
              {imageData.data.width} x {imageData.data.height}
            </p>
          </div>
          <img
            src={imageData.image}
            style={{
              width: "620px",
              padding: "20px",
              borderRadius: "40px",
            }}
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-1 w-full px-5 py-3 bg-[#0d0e11] rounded-md text-white">
          <div className="flex flex-row justify-between items-center w-full">
            <span className="flex flex-row gap-1 items-center">
              <span>Motion Strength</span>
            </span>
            <div className="flex gap-4 items-center text-[12px] font-semibold py-1 px-2 rounded-md w-2/3">
              <Slider
                aria-label="Volume"
                value={densityValue}
                onChange={handleDensityChange}
                min={1}
                max={10}
              />
              <p className="w-[40px] text-center py-2 bg-gray-700 rounded-md">
                {densityValue}
              </p>
            </div>
          </div>
          <p className="text-gray-500">
            Determines the amount of movement added.
          </p>
        </div>
        <div className="flex flex-col gap-1 w-full mt-4 px-5 py-3 bg-[#0d0e11] rounded-md text-white">
          <div className="flex flex-row justify-between items-center w-full">
            <span className="flex flex-row gap-1 items-center">
              <span>Visibility</span>
            </span>
            <div className="flex items-center text-[12px] font-semibold rounded-md bg-gray-700">
              <button
                className={`button-item w-[116px] ${
                  activeButton ? "active" : ""
                }`}
                onClick={() => setActiveButton(true)}
              >
                <span className="font-chakra relative z-10 button-font">
                  Private
                </span>
                <div className="button-cover"></div>
              </button>
              <button
                className={`button-item w-[116px] ${
                  !activeButton ? "active" : ""
                }`}
                onClick={() => setActiveButton(false)}
              >
                <span className="font-chakra relative z-10 button-font">
                  Public
                </span>
                <div className="button-cover"></div>
              </button>
            </div>
          </div>
          <p className="text-gray-500">
            Whether generated video can be seen by other users on the platform
          </p>
        </div>
      </div>
      <div className="flex text-white justify-between px-4">
        <button className="w-1/2">Close</button>
        <button className="w-1/2 button-generate" onClick={handleImage2Motion}>
          <span className="flex flex-row items-center gap-[10px] justify-center">
            <span className="font-chakra text-[18px] font-medium">
              Generate
            </span>
            <span className="flex flex-row items-center justify-center gap-1">
              <Icon icon="game-icons:cash" className="w-5 h-5" />
              <span className="text-[16px] font-medium">25</span>
            </span>
          </span>
        </button>
      </div>
    </Dialog>
  );
};

export default Image2MotionDialog;
