import React, { useState } from "react";
import PackageCard from "./PackageCard";
import SettingForm from "./SettingForm";

const SettingPackage = () => {
  const [buttonState, setButtonState] = useState(true);
  return (
    <div className="flex flex-col justify-center w-full pt-9 font-kanit">
      <SettingForm />
      <div className="px-5 py-[25px] gap-[22px] rounded-[15px] border-[#333535] border-[1px]  flex flex-row justify-between font-kanit bg-[#1C1B1B] mt-[21px]">
        <div className="w-1/2 flex flex-col gap-[21px]">
          <div className="w-full flex justify-center items-center">
            <p className="font-[500] text-[26px] leading-[65px] text-white">
              Monthly Subscription Package
            </p>
          </div>
          <PackageCard
            onClick={() => setButtonState(!buttonState)}
            pressedBtn={buttonState}
            title={"Monthly Package"}
            subTitle={"Innovator's Pass"}
            value={29.9}
            flag={false}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-[21px]">
          <div className="w-full flex justify-center items-center">
            <p className="font-[500] text-[26px] leading-[65px] text-white">
              Yearly Subscription Package
            </p>
          </div>
          <PackageCard
            onClick={() => setButtonState(!buttonState)}
            pressedBtn={!buttonState}
            title={"Yearly Package"}
            subTitle={"Visionary Membership"}
            value={201.9}
            flag={true}
          />
        </div>
      </div>
    </div>
  );
};
export default SettingPackage;
