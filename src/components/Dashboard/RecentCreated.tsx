const RecentCreated = () => {
  return (
    <div className="rounded-[6px] bg-[#333535] px-[12px] py-[15px] max-w-[371px]">
      <div className="rounded-[8px]">
        <img
          src="/assets/img/Rectangle 71.svg"
          alt="image"
          className="bg-auto"
        ></img>
      </div>
      <div className="flex justify-between py-[11px] border-b-[0.5px] border-b-gray-200">
        <div className="flex flex-wrap gap-[8px]">
          <div>
            <img
              src="/assets/img/Ellipse 9.svg"
              alt="avatar"
              className=""
            ></img>
          </div>
          <div className="py-[5px]">
            <div className="font-kanit text-[12px]"> Jossie Smith</div>
            <div className="font-kanit font-extralight text-[10px]">
              Creator
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="rounded-full bg-[#211B20] hover:bg-[#211B20]/40 hover:cursor-pointer py-[11px] px-[26px]">
            <div className="flex flex-wrap gap-[4px]">
              <img src="/assets/img/user.png" alt="image"></img>
              <span className="font-kanit text-[8px]">Follow</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[10px] border-b-[0.5px] border-b-gray-200">
        <div className="flex justify-between">
          <div className="rounded-full bg-[#211B20] hover:bg-[#211B20]/40 hover:cursor-pointer py-[11px] px-[26px]">
            <div className="flex flex-wrap gap-[4px]">
              <img src="/assets/img/prompt.png" alt="image"></img>
              <span className="font-kanit text-[8px]">Prompt</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[10px]">
            <div>
              <img src="/assets/img/vector2.png" alt="vector"></img>
            </div>
            <div>
              <img src="/assets/img/cloud.png" alt="cloud"></img>
            </div>
            <div>
              <img src="/assets/img/heart.png" alt="heart"></img>
            </div>
          </div>
        </div>
        <div className="pt-[7px]">
          <div className="font-kanit text-[11px] font-extralight">
            create a very complex city with purple dogs everywhere that live
            there and work in the city. they are all very rich. signs saying
            "DUKO" everywhere
          </div>
        </div>
      </div>
      <div className="py-[11px] border-b-[0.5px] border-b-gray-200">
        <div className="flex justify-between">
          <div>
            <div className="font-kanit font-extralight text-[8px] text-[#BEBCBC]">
              Input Resolution
            </div>
            <div className="font-kanit text-[14px] text-white">
              1024 x 768px
            </div>
          </div>
          <div>
            <div className="font-kanit font-extralight text-[8px] text-[#BEBCBC]">
              Created
            </div>
            <div className="font-kanit text-[14px] text-white">10/03/24</div>
          </div>
          <div>
            <div className="font-kanit font-extralight text-[8px] text-[#BEBCBC]">
              Input Resolution
            </div>
            <div className="font-kanit text-[14px] text-white">
              1024 x 768px
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-[16px]">
          <div>
            <div className="font-kanit font-extralight text-[8px] text-[#BEBCBC]">
              Pipeline
            </div>
            <div className="font-kanit text-[14px] text-white">Alchemy V2</div>
          </div>
          <div>
            <div className="font-kanit font-extralight text-[8px] text-[#BEBCBC]">
              Seed
            </div>
            <div className="font-kanit text-[14px] text-white">318540544</div>
          </div>
          <div>
            <div className="font-kanit font-extralight text-[8px] text-[#BEBCBC]">
              Preset
            </div>
            <div className="font-kanit text-[14px] text-white">CINEMATIC</div>
          </div>
        </div>
      </div>
      <div className="py-[11px] "></div>
      <div className="rounded-full border-gray-200 border-solid border-[2px] hover:bg-[#FFFFFF]/10 hover:cursor-pointer px-[86px] py-[18px]">
        <img src="/assets/img/createmodel.png" alt="image"></img>
      </div>
    </div>
  );
};
export default RecentCreated;
