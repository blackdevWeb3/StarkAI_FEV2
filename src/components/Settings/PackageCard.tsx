import React, { useState } from "react";
const PackageCard = ({ value, title, stitle, flag, pressedBtn, onClick }) => {
  const checkedItems = [1, 2, 3, 4, 5, 6];
  const checkContents = [
    "Unlimited AI-generated art creation",
    "Priority processing for NFT minting",
    "Exclusive monthly insights into AI and market trends",
    "24/7 customer support with a dedicated helpdesk",
    "Access to high-resolution download options",
    "5% discount on marketplace transaction fees",
  ];

  return (
    <div className="rounded-[10px] w-full bg-[#333535] px-[24px] py-[24px] font-kanit max-w-[496px]">
      <span className="font-[500] text-[20px] leading-[30px] text-white">
        {title}
      </span>
      <div className="flex flex-row gap-[9px]">
        <span className="font-[400] text-[49px] leading-[73px] text-white">
          {value}$
        </span>
        <div className="flex items-end pb-[10px]">
          <span className="font-[300] text-[20px] leading-[30px] text-white ">
            {stitle}
          </span>
        </div>
      </div>
      <div className="w-full h-[6px] gradient-bg mt-[14px]"></div>
      <p className="font-[500] my-[11px] text-[26px] leading-[39px] w-full">
        Features
      </p>
      <div className="flex flex-col gap-y-[21px] mt-[11px]">
        {checkedItems.map((key, index) => (
          <div className="flex flex-row gap-[16px]">
            {key > 3 && flag !== true ? (
              <img
                src="/assets/img/uncheck.svg"
                alt="image"
                className="w-[20px] h-[20px]"
              />
            ) : (
              <img
                src="/assets/img/check.svg"
                alt="image"
                className="w-[20px] h-[20px]"
              />
            )}

            <div className="flex items-center">
              <p className="font-[275] text-[17px] leading-[20px] text-white">
                {checkContents[index]}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={
          pressedBtn
            ? "w-full py-[17px] flex justify-center items-center rounded-full gradient-bg font-[500] text-[17px] border-[1px] border-[#DD00AC] text-white mt-[17px] leading-[25px]"
            : "w-full py-[17px] flex justify-center items-center rounded-full  font-[500] text-[17px] border-[1px] border-[#DD00AC] text-[#DD00AC] mt-[17px] leading-[25px]"
        }
        onClick={onClick}
      >
        Get Started
      </button>
    </div>
  );
};
export default PackageCard;
