import { createContext, useState, FC } from "react";
import { Image } from "../../utils/types";

interface ModalContextType {
  imageData: Image;
  index: number;
  imgCount: number;
  visible: boolean;
  setVisible: (flag: boolean) => void;
  setData: (data: any) => void;
  setIndex: (ind: number) => void;
  setImgCount: (count: number) => void;
}

const init: Image = {
  image: "",
  owner: "",
  created: "2024-01-25T13:50:09.666+00:00",
  generationID: "",
  data: {
    alchemy: false,
    modelId: "",
    num_image: 1,
    presetStyle: "1",
    prompt: "1",
    width: 1024,
    height: 1024,
  },
};

const ModalContext = createContext<ModalContextType>({
  // Specify the type for the context
  imageData: init,
  visible: false,
  index: 0,
  imgCount: 0,
  setVisible: () => {},
  setData: () => {},
  setIndex: () => {},
  setImgCount: () => {},
});

// Define props for ModalContextProvider component
interface ModalContextProviderProps {
  children: React.ReactNode;
}

export const ModalContextProvider: FC<ModalContextProviderProps> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false);
  const [imageData, setImageData] = useState<Image>(init);
  const [index, setIndex] = useState(0);
  const [imgCount, setImgCount] = useState(0);

  // Use the defined functions directly without creating inline ones
  const modalContext: ModalContextType = {
    imageData,
    visible,
    index,
    imgCount,
    setVisible, // Use the defined function directly
    setData: setImageData,
    setIndex,
    setImgCount,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
