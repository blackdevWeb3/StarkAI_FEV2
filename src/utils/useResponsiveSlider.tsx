import { useState, useEffect } from "react";

// Define the type for your custom hook's arguments if not already done
type UseResponsiveSliderArgs = {
  sliderValue: number;
  windowWidth: number;
};

const useResponsiveSlider = ({
  sliderValue,
  windowWidth,
}: UseResponsiveSliderArgs) => {
  const [maxStretch, setMaxStretch] = useState(4);
  const [curVal, setCurVal] = useState(sliderValue);

  useEffect(() => {
    let newMaxStretch: number;
    if (windowWidth > 1280) newMaxStretch = 4;
    else if (windowWidth > 1024) newMaxStretch = 4;
    else if (windowWidth > 768) newMaxStretch = 3;
    else if (windowWidth > 480) newMaxStretch = 2;
    else newMaxStretch = 1;

    if (newMaxStretch !== maxStretch) {
      setMaxStretch(newMaxStretch);
    }

    setCurVal(Math.min(sliderValue, newMaxStretch));
  }, [windowWidth, sliderValue, maxStretch]);

  return [maxStretch, curVal];
};

export default useResponsiveSlider;
