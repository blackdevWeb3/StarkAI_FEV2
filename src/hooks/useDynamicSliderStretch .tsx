import { useState, useEffect } from "react";

const useDynamicSliderStretch = (windowWidth: number): number => {
  const [maxStretch, setMaxStretch] = useState<number>(1);

  useEffect(() => {
    if (windowWidth > 1280) setMaxStretch(5);
    else if (windowWidth > 1024) setMaxStretch(4);
    else if (windowWidth > 768) setMaxStretch(3);
    else if (windowWidth > 480) setMaxStretch(2);
    else setMaxStretch(1);
  }, [windowWidth]);

  return maxStretch;
};

export default useDynamicSliderStretch;
