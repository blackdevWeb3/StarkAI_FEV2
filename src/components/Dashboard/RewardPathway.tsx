import PartialBg from "../../assets/partial_background.svg";

const RewardPathway = () => {
  return (
    <div className="w-full h-full min-h-[calc(100vh-414px)] pt-16">
      <div
        className="w-full h-full bg-black bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${PartialBg})` }}
      >
        <div className="text-center text-white text-[48px] font-medium font-kanit pt-[57px]">
          AI Creation to Reward Pathway{" "}
        </div>
        <div className="text-center text-white text-[17px] font-extralight font-kanit">
          Embrace the StarkMeta.ai process, starting with AI-driven generation,
          transitioning through
          <br />
          NFT minting, and culminating in earning rewards. A streamlined path
          from innovation to
          <br /> income.
        </div>
        <div className="w-full sm:pt-[30px] sm:pb-[60px] sm:px-5 md:pb-[40px] lg:px-[100px] pt-0 pb-[71px] mt-[24px]">
          <div className="max-w-[1174px] mx-auto">
            <div className="flex flex-row justify-between m-auto sm:hidden w-full gap-7 ">
              <div className="w-1/3 rounded-[9px] bg-black pt-[130px] px-[34px] pb-[34px] relative">
                <img
                  src="/assets/img/Vector.png"
                  alt="image"
                  className="absolute top-[12px] left-[34px]"
                />
                <img
                  src="/assets/img/Layer_1.png"
                  alt="image"
                  className="absolute top-[45px] left-[71px]"
                />
                <img
                  src="/assets/img/01.png"
                  alt="image"
                  className="absolute top-[25px] right-[24px]"
                />

                <div className="text-[26px] font-medium font-kanti text-white">
                  Generate AI
                </div>
                <div className="text-[16px] font-extralight font-kanit text-white">
                  Embrace the StarkMeta.ai process, starting
                  <br />
                  with AI-driven generation, transitioning
                  <br />
                  through NFT minting, and culminating in
                  <br />
                  earning rewards. A streamlined path from
                  <br />
                  innovation to income.
                </div>
              </div>
              <div className="rounded-[9px] bg-black pt-[130px] px-[34px] pb-[34px] relative w-[366px]">
                <div className="flex flex-row">
                  <div className="vector-background">
                    <img
                      src="/assets/img/Layer_1.png"
                      alt="image"
                      className="absolute top-[45px] left-[71px] z-10"
                    />
                  </div>
                  {/* <img
                    src="/assets/img/Vector.png"
                    alt="image"
                    className="relative"
                  /> */}

                  <img
                    src="/assets/img/01.png"
                    alt="image"
                    className="absolute top-[25px] right-[24px]"
                  />
                </div>

                <div className="text-[26px] font-medium font-kanti text-white">
                  Minting NFT AI:
                </div>
                <div className="text-[16px] font-extralight font-kanit text-white">
                  Embrace the StarkMeta.ai process, starting
                  <br />
                  with AI-driven generation, transitioning
                  <br />
                  through NFT minting, and culminating in
                  <br />
                  earning rewards. A streamlined path from
                  <br />
                  innovation to income.
                </div>
              </div>
              <div className="w-1/3 rounded-[9px] bg-black pt-[130px] px-[34px] pb-[34px] relative">
                <img
                  src="/assets/img/Vector.png"
                  alt="image"
                  className="absolute top-[12px] left-[34px]"
                />
                <img
                  src="/assets/img/Layer_1.png"
                  alt="image"
                  className="absolute top-[45px] left-[71px]"
                />
                <img
                  src="/assets/img/01.png"
                  alt="image"
                  className="absolute top-[25px] right-[24px]"
                />

                <div className="text-[26px] font-medium font-kanti text-white">
                  Mining Reward:
                </div>
                <div className="text-[16px] font-extralight font-kanit text-white">
                  Embrace the StarkMeta.ai process, starting
                  <br />
                  with AI-driven generation, transitioning
                  <br />
                  through NFT minting, and culminating in
                  <br />
                  earning rewards. A streamlined path from
                  <br />
                  innovation to income.
                </div>
              </div>
              <div className="cw-1/3 sm:w-full flex flex-col items-center gap-2 rounded-9 bg-black">
                <div className="relative">
                  <img
                    src="/assets/img/Vector.png"
                    alt="image"
                    className="absolute top-20 left-30 object-cover"
                  />
                </div>
              </div>
              <div className="cw-1/3 sm:w-full flex flex-col items-center gap-2 rounded-9 bg-black">
                <div className="relative">
                  <img
                    src="/assets/img/Vector.png"
                    alt="image"
                    className="absolute top-20 left-30"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardPathway;
