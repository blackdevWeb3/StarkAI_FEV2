import { useContext, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import ModalContext from "../../utils/modalContext";

import Modal from ".";
import { Link } from "react-router-dom";

export default function ModalImgCard() {
  const modalCtx = useContext(ModalContext);

  const ImgModalRef = useRef<HTMLDivElement>(null);

  const handleHideImgCard = () => {
    modalCtx.hideModal();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ImgModalRef.current &&
        !ImgModalRef.current.contains(event.target as Node)
      ) {
        handleHideImgCard();
      }
    };

    if (modalCtx.modal === "ImgCard") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalCtx.modal]);

  return (
    <Modal
      open={modalCtx.modal === "ImgCard"}
      onClose={modalCtx.modal === "ImgCard" ? handleHideImgCard : () => {}}
    >
      <div
        className="flex-1 p-5 ps-6 pe-6 mt-0 bg-modalBackground border-primary w-[876px] font-Inter"
        ref={ImgModalRef}
      >
        <div className="flex flex-col items-center relative">
          <div className="grid grid-cols-2 gap-x-5">
            {/* left */}
            <div className="">
              <div className="flex relative flex-col min-w-0 rounded-lg p-0 cursor-pointer">
                <div className="rounded-lg">
                  <img
                    className="h-auto max-w-full rounded-md"
                    src="https://cdn.leonardo.ai/users/fc1da50b-6def-4d10-9716-906daad43333/generations/ae11900e-8553-432f-bfe8-7dac54b607f5/variations/Default_Silhouette_of_a_Nordic_cat_filled_with_a_forest_doubl_3_ae11900e-8553-432f-bfe8-7dac54b607f5_1.jpg?w=512"
                    alt="imgCard"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between gap-2 w-full pt-5 flex-wrap">
                <button className="border-primary border rounded-lg h-[30px] px-4 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45]">
                  <Icon
                    icon="streamline:ai-science-spark"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="text-[14px] break-words">
                    Alchemy Refiner
                  </span>
                </button>
                <button className="border-primary border rounded-lg h-[30px] px-4 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45]">
                  <Icon
                    icon="bytesize:download"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="text-[14px]">Download</span>
                </button>
                <button className="border-primary border rounded-lg h-[30px] px-4 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45]">
                  <Icon
                    icon="mdi:share-variant-outline"
                    className="w-[14px] h-[14px]"
                  />
                  <span className="text-[14px]">Share</span>
                </button>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-2 font-Inter">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <Link to="/" className="flex flex-row items-center">
                    <div className="rounded-full"></div>
                    <div className=" min-w-[auto] text-fontSecondary leading-[1] font-medium">
                      Lekrot
                    </div>
                  </Link>
                  <button className="flex flex-row items-center justify-center font-normal gap-1 border-primary rounded-[16px] border px-4 py-1 transition-all duration-200 ease-in-out hover:bg-[#393b45]">
                    <Icon
                      icon="ph:star"
                      className="w-[14px] h-[14px] text-white"
                    />
                    <span className="text-white text-[12px]">Follow</span>
                  </button>
                </div>
                <span className="text-white font-semibold text-[18px]">
                  Flat design
                </span>
                <hr className="border-primary border-t mb-2" />
              </div>
              <h2 className="text-white font-Inter text-[12.6px] leading-[1.2] font-medium">
                Prompt details
              </h2>
              <div className="p-2 border rounded-[7.2px] bg-[#202020] block border-primary">
                <div className="mb-3 w-full rounded-[5.4px]">
                  <div className="block">
                    <p className="font-light text-[11.34px] font-Inter text-[#fefefe] bg-[#171717] p-2 rounded-[6px]">
                      Sketchbook Style, Iron Man.Sketch book, hand drawn, dark,
                      gritty, realistic sketch, Rough sketch, mix of bold dark
                      lines and loose lines, bold lines, on paper, turnaround
                      character sheet, a short fat mechanic in steampunk world,
                      Full body, arcane symbols, runes, dark theme, Perfect
                      composition golden ratio, masterpiece, best quality, 4k,
                      sharp focus. Better hand, perfect anatomy. by Sonic
                    </p>
                  </div>
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
                  <div className="w-full flex items-center text-white text-[14px] font-medium">
                    512 x 984px
                  </div>
                </div>
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">Created</span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    512 x 984px
                  </div>
                </div>
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">Pipeline</span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    512 x 984px
                  </div>
                </div>
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">Seed</span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    318540544
                  </div>
                </div>
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">Preset</span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    Dynamic
                  </div>
                </div>
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">
                    Prompt Magic
                  </span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    -
                  </div>
                </div>
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">
                    Init Strength
                  </span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    No init image
                  </div>
                </div>
                <div className="w-[48%] pr-2 mb-3">
                  <span className="text-[#9094a6] text-[12px]">
                    High Contrast
                  </span>
                  <div className="w-full flex items-center text-white text-[14px]">
                    -
                  </div>
                </div>
              </div>
              <div className="w-full h-auto">
                <div className="flex flex-col p-2 gap-2 rounded-lg bg-[#202020]">
                  <div className="flex justify-between p-2 rounded-lg bg-[#171717]">
                    <div className="flex items-stretch gap-[14px]">
                      <div className="w-[42px] h-[42px] overflow-hidden rounded-md">
                        <img
                          className="object-cover w-full h-full"
                          src="https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bc0a7117-ad5e-4754-8648-6412cc554478/Leonardo_Vision_XL_A_gritty_unedited_photograph_perfectly_capt_2.jpg?w=256"
                          alt="ImageCard"
                        ></img>
                      </div>
                      <div className="flex flex-col justify-between">
                        <span className="font-medium text-[14px] leading-[100%] text-[#dbdbdb80] pt-[2px]">
                          Finetuned Model
                        </span>
                        <div className="flex items-center">
                          <span className="text-white text-[14px] pb-[2px]">
                            Leonardo Vision XL
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="button-color py-2 text-[14px] h-8 flex justify-center items-center rounded-md text-white font-[530] flex-row gap-1">
                    <span className="">
                      <Icon icon="raphael:magic" className="w-4 h-4" />
                    </span>
                    <span className="">Generate with this model</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-0 right-0 rounded-full bg-[#0000005c] h-8 w-8 flex justify-center items-center"
            onClick={handleHideImgCard}
          >
            <Icon
              icon="iconamoon:close-light"
              className="w-6 h-6 text-[#CBD5E0] hover:text-white"
            />
          </button>
        </div>
      </div>
    </Modal>
  );
}
