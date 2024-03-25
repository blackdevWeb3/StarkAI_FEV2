import PartialBg from "../../assets/partial_background.svg";
import HeartBg from "../../assets/Vector.png";

const RewardPathway = () => {
  return (
    <div className="w-full h-full min-h-[calc(100vh-414px)]">
      <div
        className="w-full h-full bg-black bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${PartialBg})` }}
      >
        <div className="text-center text-white text-[48px] md:text-[36px] sm:text-[24px] font-medium font-kanit pt-[57px]">
          AI Creation to Reward Pathway
        </div>
        <div className="text-center text-white text-[17px] md:text-[14px] sm:text-[11px] font-extralight font-kanit">
          Embrace the StarkMeta.ai process, starting with AI-driven generation,
          transitioning through
          <br />
          NFT minting, and culminating in earning rewards. A streamlined path
          from innovation to
          <br /> income.
        </div>
        <div className="w-full sm:pt-[30px] sm:pb-[60px] sm:px-5 md:pb-[40px] lg:px-[90px] md:px-[70px]  pt-[20px] pb-[56px] mt-[24px]">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-row justify-between m-auto sm:hidden w-full gap-[70px] lg:gap-[50px] md:gap-[30px]">
              <div className="w-1/3 rounded-[9px] bg-black px-[34px] lg:px-[28px] md:px-[22px] pt-[20px] pb-[34px] lg:pb-[24px] md:pb-[14px]">
                <div className=" flex justify-between items-center ">
                  <div
                    className="flex bg-no-repeat justify-center items-centers bg-cover px-[27px] py-[25px] mb-[8px]"
                    style={{ backgroundImage: `url(${HeartBg})` }}
                  >
                    <img
                      src="/assets/img/Layer_1.png"
                      alt="image"
                      className="w-[54px] h-[54px] lg:w-[40px] lg:h-[40px] md:w-[26px] md:h-[26px]"
                    />
                  </div>

                  <span className="font-kanit text-[66px] lg:text-[54px] md:text-[42px] font-medium text-right text-[#343333]">
                    01
                  </span>
                </div>

                <div className="text-[26px] lg:text-[25px] md:text-[24px] font-medium font-kanti text-white">
                  Generate AI
                </div>
                <div className="text-[16px] lg:text-[15px] md:text-[14px] font-extralight font-kanit text-white">
                  Embrace the StarkMeta.ai process, starting with AI-driven
                  generation, transitioning through NFT minting, and culminating
                  in earning rewards. A streamlined path from innovation to
                  income.
                </div>
              </div>
              <div className="w-1/3 rounded-[9px] bg-black px-[34px] lg:px-[28px] md:px-[22px] pt-[20px] pb-[34px] lg:pb-[24px] md:pb-[14px]">
                <div className=" flex justify-between items-center ">
                  <div
                    className="flex bg-no-repeat justify-center items-centers bg-cover px-[27px] py-[25px] mb-[8px]"
                    style={{ backgroundImage: `url(${HeartBg})` }}
                  >
                    <img
                      src="/assets/img/outline.png"
                      alt="image"
                      className="w-[54px] h-[54px] lg:w-[40px] lg:h-[40px] md:w-[26px] md:h-[26px]"
                    />
                  </div>

                  <span className="font-kanit text-[66px] lg:text-[54px] md:text-[42px] font-medium text-right text-[#343333]">
                    02
                  </span>
                </div>

                <div className="text-[26px] lg:text-[25px] md:text-[24px] font-medium font-kanti text-white">
                  Minting NFT AI:
                </div>
                <div className="text-[16px] lg:text-[15px] md:text-[14px] font-extralight font-kanit text-white">
                  Enjoy the security and authenticity that blockchain technology
                  provides, ensuring your work remains exclusively yours and is
                  ready for the world.
                </div>
              </div>
              <div className="w-1/3 rounded-[9px] bg-black px-[34px] lg:px-[28px] md:px-[22px] pt-[20px] pb-[34px] lg:pb-[24px] md:pb-[14px]">
                <div className=" flex justify-between items-center ">
                  <div
                    className="flex bg-no-repeat justify-center items-centers bg-cover px-[27px] py-[25px] mb-[8px]"
                    style={{ backgroundImage: `url(${HeartBg})` }}
                  >
                    <img
                      src="/assets/img/Vector (1).png"
                      alt="image"
                      className="w-[54px] h-[54px] lg:w-[40px] lg:h-[40px] md:w-[26px] md:h-[26px]"
                    />
                  </div>

                  <span className="font-kanit text-[66px] lg:text-[54px] md:text-[42px] font-medium text-right text-[#343333]">
                    03
                  </span>
                </div>

                <div className="text-[26px] lg:text-[25px] md:text-[24px] font-medium font-kanti text-white">
                  Mining Reward:
                </div>
                <div className="text-[16px] lg:text-[15px] md:text-[14px] font-extralight font-kanit text-white">
                  Benefit from the ecosystem designed for value generation.
                  Engage in the mining process to receive rewards that reflect
                  the worth of your innovations, turning creative ventures into
                  tangible gains.
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
