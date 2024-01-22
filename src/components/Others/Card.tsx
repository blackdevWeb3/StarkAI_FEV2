import { useState, useContext, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
import { Icon } from "@iconify/react";
import Modal from "../Modal";
import ModalContext from "../../utils/modalContext";

import "react-lazy-load-image-component/src/effects/blur.css";

const Card = (props: any) => {
  const modalCtx = useContext(ModalContext);
  const [loading, setLoading] = useState(true);

  const handleImgModalOpen = () => {
    modalCtx.setVisible(true);
    modalCtx.setData(props.data);
  };

  useEffect(() => {
    console.log("Data:", props.data);
  }, []);

  return (
    <div
      className="group relative cursor-pointer w-full h-full block"
      onClick={handleImgModalOpen}
    >
      {loading && (
        <div className="absolute flex w-7 h-7 top-[calc(50%-14px)] left-[calc(50%-14px)]">
          <ClipLoader color="white" size={28} />
        </div>
      )}
      {
        <LazyLoadImage
          src={props.data.image}
          onLoad={() => setLoading(false)}
          alt="GeneratedImage"
          effect="blur"
          style={{ borderRadius: "10px" }}
        />
      }

      <div className="absolute w-full h-full top-0 left-0 hover-ground opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-start gap-10">
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-row items-center gap-1 overflow-hidden">
            <span className="w-8 h-8 p-3 rounded-full bg-[#1cb578] flex text-center justify-center items-center text-black font-semibold">
              D
            </span>
            <span className="text-ellipsis overflow-hidden text-[12px] ">
              {props.data.owner}
            </span>
          </div>
          <div className="flex flex-row items-center rounded-[24px] py-2 px-3 bg-[#63636355] gap-2">
            <span className="">0</span>
            <Icon icon="ph:heart" className="w-6 h-6" />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden text-ellipsis">
          <span className="flex overflow-hidden text-ellipsis text-[14px]">
            {props.data.data.prompt}
          </span>
          <span className=""></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
