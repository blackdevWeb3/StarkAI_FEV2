import { useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
import { Icon } from "@iconify/react";
import ModalContext from "../../utils/modalContext";
import { useUser } from "../../context/UserContext";
import axios from "axios";

import "react-lazy-load-image-component/src/effects/blur.css";

const Card = (props: any) => {
  const { user }: any = useUser();
  const userObejct = JSON.parse(user === "None" ? "{}" : user);
  const isOwner = props.data.owner === userObejct.email;
  const modalCtx = useContext(ModalContext);
  const [loading, setLoading] = useState(false);
  const [likeImages, setLikeImages] = useState<String[]>([]);

  const handleImgModalOpen = () => {
    modalCtx.setVisible(true);
    modalCtx.setData(props.data);
    modalCtx.setIndex(props.index);
    modalCtx.setImgCount(props.count);
  };

  const handleAddHearMark: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Hello:", props.data);
  };

  const updateLibrary = () => {
    const func = async () => {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_API}/getLikeImages`,
        {email: userObejct.email, imageID: props.data.generationID}
      );
      if (res.status === 200) {
        var tmp = res.data;
        tmp.reverse();
        setLikeImages(tmp);
      } else {
        console.log("Error occurred");
      }
    };
    func();
  };

  return (
    <>
      {props.flag === true ? (
        <div className="group relative cursor-pointer w-full h-[150px] block">
          <div className="absolute flex w-7 h-7 top-[calc(50%-14px)] left-[calc(50%-14px)]">
            <ClipLoader color="white" size={28} />
          </div>
        </div>
      ) : (
        <div
          className="group relative cursor-pointer w-full h-full block"
          onClick={handleImgModalOpen}
        >
          {loading && (
            <div className="absolute flex w-7 h-7 top-[calc(50%-14px)] left-[calc(50%-14px)]">
              <ClipLoader color="white" size={28} />
            </div>
          )}

          {props.data.image.endsWith(".mp4") ? (
            <video autoPlay loop disableRemotePlayback muted>
              <source type="video/mp4" src={props.data.image} />
            </video>
          ) : (
            <LazyLoadImage
              src={props.data.image}
              onLoad={() => setLoading(false)}
              alt="GeneratedImage"
              effect="blur"
              className="rounded-sm"
            />
          )}

          {/* Hovered Image Description */}

          {!props.hideDescription && (
            <div className="absolute w-full h-full top-0 left-0 hover-ground opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
              <div className="flex flex-row justify-between gap-2">
                <div className="flex flex-row items-center gap-1 overflow-hidden">
                  <span className="w-8 h-8 p-3 rounded-full bg-[#1cb578] flex text-center justify-center items-center text-black font-semibold">
                    D
                  </span>
                  <span className="text-ellipsis overflow-hidden text-[12px] ">
                    {props.data.owner}
                  </span>
                </div>
                <button
                  className="flex flex-row items-center rounded-[24px] py-2 px-3 bg-[#63636355] gap-2"
                  onClick={handleAddHearMark}
                  disabled={isOwner}
                >
                  <span className="">0</span>

                  <Icon icon="tdesign:heart" className="w-6 h-6" />
                  <Icon
                    icon="tdesign:heart-filled"
                    className="w-6 h-6"
                    color="red"
                  />
                </button>
              </div>
              <div className="flex flex-col overflow-hidden text-ellipsis text-wrap break-words h-8 text-[12px]">
                {props.data.data.prompt}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Card;
