import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselContent = () => {
  return (
    <div className="bg-[#7064E9] w-full pt-[19px] font-kanit pl-[24px] pr-[33px] pb-[10px] rounded-[10px]">
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div className="flex flex-row gap-[57px] justify-between">
          <div className="flex flex-col w-[541px]">
            <span className="text-white text-[31px] font-[500] text-left leading-[40px]">
              How can I mint my digital creations as NFTs on StarkMeta.ai?
            </span>
            <span className="font-[300] text-[14px] text-left leading-[25px]">
              With StarkMeta.ai, minting your digital artwork, music, or any
              other form of creative media as an NFT is straightforward. Simply
              use our 'Minting NFT' feature, which guides you through the
              process of uploading your work, setting your parameters, and
              securely registering your asset on the blockchain for authenticity
              and tradeability.
            </span>
          </div>

          <div>
            <img
              src="/assets/img/carouselImage1.svg"
              alt="carouselImage"
              className="w-full"
            ></img>
          </div>
        </div>
        <div>
          <span className="text-black">
            How can I mint my digital creations as NFTs on StarkMeta.ai?
          </span>
        </div>
        <div>
          <span className="text-black">
            How can I mint my digital creations as NFTs on StarkMeta.ai?
          </span>
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselContent;
