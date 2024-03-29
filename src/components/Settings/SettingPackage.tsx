import React, { useState } from "react";
import PackageCard from "./PackageCard";
import SettingForm from "./SettingForm";

const SettingPackage = () => {
  const [btnStatus, setBtnStatus] = useState(true);
  const ClkBtn = () => {
    if (btnStatus) setBtnStatus(false);
    else setBtnStatus(true);
  };
  return (
    <div className="max-w-[1057px] flex flex-col justify-center">
      <SettingForm />
      <div className="px-[20px] py-[25px] gap-[22px] rounded-[15px] border-[#333535] border-[1px]  flex flex-row justify-between font-kanit bg-[#1C1B1B] mt-[21px]">
        <div className="w-1/2">
          <div className="w-full flex justify-center items-center">
            <p className="font-[500] text-[26px] leading-[65px] text-white">
              Monthly Subscription Package
            </p>
          </div>
          <div className="mt-[21px]">
            <PackageCard
              onClick={() => ClkBtn()}
              pressedBtn={btnStatus}
              title={"Monthly Package"}
              stitle={"Innovator's Pass"}
              value={29.9}
              flag={false}
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full flex justify-center items-center">
            <p className="font-[500] text-[26px] leading-[65px] text-white">
              Yearly Subscription Package
            </p>
          </div>
          <div className="mt-[21px]">
            <PackageCard
              onClick={() => ClkBtn()}
              pressedBtn={!btnStatus}
              title={"Yearly Package"}
              stitle={"Visionary Membership"}
              value={201.9}
              flag={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingPackage;
