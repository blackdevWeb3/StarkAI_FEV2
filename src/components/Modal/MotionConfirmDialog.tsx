import { Dialog } from "@mui/material";
import { IconMotion } from "../../assets";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const MotionConfirmDialog = ({ confirmOpen, Transition, handleClose }: any) => {
  return (
    <Dialog
      id="ConfirmDialog"
      open={confirmOpen}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        ".css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
          padding: "0px !important",
          width: "600px !important",
          height: "240px !important",
        },
      }}
    >
      <div className="flex justify-between items-center p-8">
        <div className="flex gap-2 items-center">
          <IconMotion width={36} />
          <p className="text-white text-2xl">Generating Motion...</p>
        </div>
        <Icon
          icon="carbon:close-outline"
          width="32"
          height="32"
          style={{ color: "white" }}
        />
      </div>
      <div className="px-8 text-center text-white">
        View your video generation status on the{" "}
        <Link to="/app/image-generator" className="gradient-text">
          AI Gen page
        </Link>{" "}
        or in the{" "}
        <Link to="/app/personal-feed/" className="gradient-text">
          Personal feed
        </Link>{" "}
        when complete.
      </div>
      <div className="flex w-full justify-center gap-16 mt-4">
        <Link
          to="/app/image-generator"
          className="w-48 inline-flex rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle py-2 button-detail"
        >
          View Generations
        </Link>
        <button
          onClick={handleClose}
          className="w-48 inline-flex rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle py-2 button-detail"
        >
          Close
        </button>
      </div>
    </Dialog>
  );
};

export default MotionConfirmDialog;
