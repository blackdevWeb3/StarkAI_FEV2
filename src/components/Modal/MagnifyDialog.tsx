import { Icon } from "@iconify/react";
import { Dialog } from "@mui/material";
import { ToastContainer } from "react-toastify";

const MagnifyDialog = ({
  magnifyOpen,
  handleClose,
  Transition,
  imageData,
  handleDownload,
  deleteImageHandler,
}: any) => {
  return (
    <Dialog
      id="MagnifyImage"
      open={magnifyOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
    >
      <ToastContainer containerId={"dialog"} />
      <div className="bg-[#282c34] flex flex-col w-full rounded-lg z-10 h-full sm:h-auto">
        <div className="flex p-0 mt-0 rounded-lg w-auto h-[calc(100%-72px)]">
          <div className="flex justify-center m-auto relative w-auto h-full">
            <div className="flex justify-center w-auto h-full">
              {imageData.image.endsWith(".mp4") ? (
                <video
                  id="videocontainer1"
                  autoPlay
                  loop
                  disableRemotePlayback
                  muted
                >
                  <source
                    id="videosource1"
                    type="video/mp4"
                    src={imageData.image}
                  />
                </video>
              ) : (
                <img
                  className="z-10 relative object-contain w-auto h-full"
                  src={`${imageData.image}_ORIGIN`}
                  alt="imagelogo"
                />
              )}
            </div>
            <button
              className="absolute top-5 right-5 rounded-full bg-[#0000005c] h-8 w-8 flex justify-center items-center z-10 group hover:bg-[#19191950]"
              onClick={handleClose}
            >
              <Icon
                icon="iconamoon:close-light"
                className="w-6 h-6 text-[#CBD5E0] group-hover:text-white"
              />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end ps-6 pe-6 flex-col p-0">
          <div className="flex flex-row z-10 w-full p-4 justify-center">
            <div className="sm:justify-center sm:items-center justify-end items-end gap-2 flex flex-row">
              <div className="sm:justify-center sm:items-center flex flex-end">
                <button
                  onClick={handleDownload}
                  className="group p-3 rounded-full bg-[#19191980] hover:bg-[#19191950] flex flex-row items-center justify-center button-detail"
                >
                  <Icon
                    icon="clarity:download-line"
                    className="w-4 h-4 text-white"
                  />
                </button>
              </div>
              <div className="">
                <button
                  onClick={() => deleteImageHandler(2)}
                  className="group p-3 rounded-full bg-[#19191980] hover:bg-[#19191950] flex flex-row items-center justify-center button-detail"
                >
                  <Icon
                    icon="solar:trash-bin-2-linear"
                    className="w-4 h-4 text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default MagnifyDialog;
