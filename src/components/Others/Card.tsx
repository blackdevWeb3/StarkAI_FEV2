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
    modalCtx.giveTitle("Image");
    modalCtx.showImgCard();
    console.log("Modal State:", modalCtx.modal);
  };

  return (
    <div className="relative" onClick={handleImgModalOpen}>
      {loading && (
        <div className="absolute flex w-full h-full justify-center items-center">
          <ClipLoader color="white" size={24} />
        </div>
      )}
      {
        <LazyLoadImage
          src={props.image}
          // src="https://cdn.leonardo.ai/users/90b23a91-bfa5-446f-9f2d-cfcbde716055/generations/c761c439-c6bf-4717-8ede-d6b9629498f8/Leonardo_Creative_An_oil_painting_of_a_cat_1.jpg"
          onLoad={() => setLoading(false)}
          alt="Image"
          effect="blur"
          style={{ borderRadius: "10px" }}
        />
      }
    </div>
  );
};

export default Card;
