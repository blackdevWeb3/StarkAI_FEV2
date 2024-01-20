import { useContext } from "react";
import ModalContext from "../../utils/modalContext";
import Modal from ".";

export default function ModalImgCard() {
  const modalCtx = useContext(ModalContext);

  const handleHideImgCard = () => {
    modalCtx.hideModal();
  };
  return (
    <Modal
      open={modalCtx.modal === "ImgCard"}
      onClose={modalCtx.modal === "ImgCard" ? handleHideImgCard : () => {}}
    >
      <h2 className="">Hello</h2>
    </Modal>
  );
}
