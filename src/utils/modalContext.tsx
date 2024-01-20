import { createContext, useState, FC } from "react";

interface ModalContextType {
  modal: string;
  title: string;
  showImgCard: () => void;
  giveTitle: (title: string) => void; // Updated to reflect that it accepts a string argument
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  // Specify the type for the context
  modal: "",
  title: "",
  showImgCard: () => {},
  giveTitle: () => {}, // This stays as is because the default value doesn't need arguments
  hideModal: () => {},
});

// Define props for ModalContextProvider component
interface ModalContextProviderProps {
  children: React.ReactNode;
}

export const ModalContextProvider: FC<ModalContextProviderProps> = ({
  children,
}) => {
  const [modal, setModal] = useState("");
  const [title, setTitle] = useState("");

  const giveTitle = (newTitle: string) => {
    setTitle(newTitle);
  };
  const showImgCard = () => {
    setModal("ImgCard");
  };
  const hideModal = () => {
    setModal("");
  };

  // Use the defined functions directly without creating inline ones
  const modalContext: ModalContextType = {
    modal,
    title,
    showImgCard, // Use the defined function directly
    giveTitle, // Use the defined function directly
    hideModal, // Use the defined function directly
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
