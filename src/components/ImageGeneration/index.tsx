import CreateArtBoard from "./CreateArtBoard";
import CreateArtItem from "./CreateArtItem";

const ImageGeneration = () => {
  return (
    <>
      <div className="w-full bg-primaryBackground pt-[29px] flex flex-col font-kanit">
        <div className="">
          <CreateArtItem />
        </div>
        <div className="mt-5">
          <CreateArtBoard />
        </div>
      </div>
    </>
  );
};

export default ImageGeneration;
