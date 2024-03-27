import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SettingForm = () => {
  const [isFormFocused, setIsFormFocused] = useState(false);

  const handleFormFocus = () => {
    setIsFormFocused(true);
  };

  const handleFormBlur = () => {
    setIsFormFocused(false);
  };
  return (
    <div className="border-[1px] font-kanit border-[#333535] rounded-[15px] flex justify-between pt-[21px] pr-[25px] pb-[35px] pl-[26px] bg-[#1C1B1B] gap-[30px]">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <span className="leading-[65px] text-[26px] font-[500] text-[#FFFFFF] text-center">
          Profile Settings
        </span>
        <div className="w-full flex flex-col gap-y-[17px]">
          <TextField
            sx={{
              "& .MuiInput-underline:before": {
                borderColor: isFormFocused ? "red" : "initial",
              },
              width: "100%",
              border: "1px solid #333535",
              borderRadius: "4px",
            }}
            label="Your Name"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: {
                color: "#B9A5A5",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <DriveFileRenameOutlineIcon
                    fontSize="small"
                    style={{ color: "#B9A5A5" }}
                  />
                </InputAdornment>
              ),
            }}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          />
          <TextField
            sx={{
              "& .MuiInput-underline:before": {
                borderColor: isFormFocused ? "red" : "initial",
              },
              width: "100%",
              border: "1px solid #333535",
              borderRadius: "4px",
            }}
            label="User ID"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: {
                color: "#B9A5A5",
              },
            }}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          />
          <TextField
            sx={{
              "& .MuiInput-underline:before": {
                borderColor: isFormFocused ? "red" : "initial",
              },
              width: "100%",
              border: "1px solid #333535",
              borderRadius: "4px",
            }}
            label="Phone No"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: {
                color: "#B9A5A5",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <DriveFileRenameOutlineIcon
                    fontSize="small"
                    style={{ color: "#B9A5A5" }}
                  />
                </InputAdornment>
              ),
            }}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          />
          <TextField
            sx={{
              "& .MuiInput-underline:before": {
                borderColor: isFormFocused ? "red" : "initial",
              },
              width: "100%",
              border: "1px solid #333535",
              borderRadius: "4px",
            }}
            label="Email Address"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: {
                color: "#B9A5A5",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <DriveFileRenameOutlineIcon
                    fontSize="small"
                    style={{ color: "#B9A5A5" }}
                  />
                </InputAdornment>
              ),
            }}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          />
        </div>
        <button className="w-full rounded-full py-[17px] font-[500] text-[16px] leading-[24px] gradient-bg text-white mt-[17px]">
          Save Info
        </button>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <span className="leading-[65px] text-[26px] font-[500] text-[#FFFFFF] text-center">
          Change Password
        </span>
        <div className="flex flex-col gap-y-[17px] w-full">
          <TextField
            sx={{
              "& .MuiInput-underline:before": {
                borderColor: isFormFocused ? "red" : "initial",
              },
              width: "100%",
              border: "1px solid #333535",
              borderRadius: "4px",
            }}
            label="Current Password"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: {
                color: "#B9A5A5",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon
                    fontSize="small"
                    style={{ color: "#B9A5A5" }}
                  />
                </InputAdornment>
              ),
            }}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          />
          <TextField
            sx={{
              "& .MuiInput-underline:before": {
                borderColor: isFormFocused ? "red" : "initial",
              },
              width: "100%",
              border: "1px solid #333535",
              borderRadius: "4px",
            }}
            label="New Password"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: {
                color: "#B9A5A5",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon
                    fontSize="small"
                    style={{ color: "#B9A5A5" }}
                  />
                </InputAdornment>
              ),
            }}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          />
          <TextField
            sx={{
              "& .MuiInput-underline:before": {
                borderColor: isFormFocused ? "red" : "initial",
              },
              width: "100%",
              border: "1px solid #333535",
              borderRadius: "4px",
            }}
            label="Again Password"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: {
                color: "#B9A5A5",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon
                    fontSize="small"
                    style={{ color: "#B9A5A5" }}
                  />
                </InputAdornment>
              ),
            }}
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          />
        </div>
        <button className="w-full rounded-full py-[17px] font-[500] text-[16px] leading-[24px] gradient-bg text-white mt-[17px]">
          Save Info
        </button>
        <button className="w-full rounded-full py-[17px] font-[500] text-[16px] leading-[24px] bg-[#FF2D2D] text-white mt-[17px]">
          Delete Account
        </button>
      </div>
    </div>
  );
};
export default SettingForm;
