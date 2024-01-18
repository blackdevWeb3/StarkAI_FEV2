import { useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  visibilitySetter: (visibility: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        visibilitySetter(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    // Remove event listener on cleanup
    return () => window.removeEventListener("click", handleClickOutside);
  }, [ref, visibilitySetter]); // Only re-run if ref or visibilitySetter changes
};

export default useOutsideClick;
