import { createContext, useState, FC } from "react";
import { Image } from "./types";

interface ModalContextType {
  imageData: Image;
  visible: boolean;
  setVisible: (flag: boolean) => void;
  setData: (data: any) => void;
}

const init: Image = {
  image: "",
  owner: "",
  created: "",
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
  setVisible: () => {},
  setData: () => {},
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

  const handleVisible = (flag: boolean) => {
    setVisible(flag);
  };

  const handleData = (data: any) => {
    setImageData(data);
  };
  // Use the defined functions directly without creating inline ones
  const modalContext: ModalContextType = {
    imageData,
    visible,
    setVisible: handleVisible, // Use the defined function directly
    setData: handleData,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
