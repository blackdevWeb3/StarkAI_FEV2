import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = (props: any) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative">
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
