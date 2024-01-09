import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ClipLoader } from "react-spinners";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = (props: any) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative">
      {loading && (
        <div className="absolute flex w-[240px] h-[240px] justify-center items-center">
          <ClipLoader color="white" size={24} />
        </div>
      )}
      {
        <LazyLoadImage
          src={props.image}
          onLoad={() => setLoading(false)}
          alt="Image"
          effect="blur"
          width={240}
          height={240}
          style={{ borderRadius: "10px" }}
        />
      }
      {/* <img width={240} height={240} /> */}
    </div>
  );
};

export default Card;
