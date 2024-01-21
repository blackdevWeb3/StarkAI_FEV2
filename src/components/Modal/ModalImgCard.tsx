import { useContext } from "react";
import { Icon } from "@iconify/react";
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
      <div
        className="flex-1 p-5 ps-6 pe-6 mt-0 bg-modalBackground border-primary w-[790px]"
        id="imgModalContent"
      >
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-2 gap-x-5">
            {/* left */}
            <div className="">
              <div className="flex relative flex-col min-w-0 rounded-lg p-0 cursor-pointer">
                <div className="rounded-lg">
                  <img
                    className="h-auto max-w-full"
                    src="https://cdn.leonardo.ai/users/fc1da50b-6def-4d10-9716-906daad43333/generations/ae11900e-8553-432f-bfe8-7dac54b607f5/variations/Default_Silhouette_of_a_Nordic_cat_filled_with_a_forest_doubl_3_ae11900e-8553-432f-bfe8-7dac54b607f5_1.jpg?w=512"
                    alt="imgCard"
                  ></img>
                </div>
              </div>
              <div className=""></div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-2 font-Inter">
              <div className=""></div>
              <h2 className="text-white font-Inter text-[12.6px] leading-[1.2] font-medium">
                Prompt details
              </h2>
              <div className="p-2 border rounded-[7.2px] bg-[#202020] mt-2 block border-primary">
                <div className="p-[10px] mb-3 w-full rounded-[5.4px] bg-[#202020]">
                  <span>
                    <p className="font-light text-[11.34px] font-Inter text-[#fefefe]">
                      Sketchbook Style, Iron Man.Sketch book, hand drawn, dark,
                      gritty, realistic sketch, Rough sketch, mix of bold dark
                      lines and loose lines, bold lines, on paper, turnaround
                      character sheet, a short fat mechanic in steampunk world,
                      Full body, arcane symbols, runes, dark theme, Perfect
                      composition golden ratio, masterpiece, best quality, 4k,
                      sharp focus. Better hand, perfect anatomy. by Sonic
                    </p>
                  </span>
                </div>
                <div className="grid grid-rows-1 grid-cols-3 gap-2">
                  <div className="block">
                    <button className="inline-flex rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle h-8 py-2 ps-[6px] pe-[6px] button-detail">
                      <span className="self-center inline-flex flex-shrink-[0] me-[6px]">
                        <Icon
                          icon="emojione-v1:film-frames"
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="text-[12.6px]">Image2Motion</span>
                    </button>
                  </div>
                  <div className="block">
                    <button className="inline-flex rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle h-8 py-2 ps-[6px] pe-[6px] button-detail">
                      <span className="self-center inline-flex flex-shrink-[0] me-[6px]">
                        <Icon
                          icon="fluent:layer-20-filled"
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="text-[12.6px]">Image2Image</span>
                    </button>
                  </div>
                  <div className="block col-span-1">
                    <button className="inline-flex w-full rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle h-8 py-2 ps-[6px] pe-[6px] button-detail">
                      <span className="self-center inline-flex flex-shrink-[0] me-[6px]">
                        <Icon icon="raphael:magic" className="w-4 h-4" />
                      </span>
                      <span className="text-[12.6px]">Remix</span>
                    </button>
                  </div>
                </div>
              </div>
              <hr className="border-primary border-t mt-2"></hr>
              <div className="flex flex-wrap gap-2">
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">
                    Input Resolution
                  </span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    512 x 984px
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
