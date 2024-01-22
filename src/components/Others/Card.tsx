import { useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
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

  return (
    <div
      className="relative cursor-pointer w-full h-full block"
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
    </div>
  );
};

export default Card;
