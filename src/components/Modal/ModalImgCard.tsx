import { useContext, useEffect, useRef, useState } from "react";
import React from "react";
import AWS from "aws-sdk";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { format, parseISO } from "date-fns";
import axios from "axios";
import io from "socket.io-client";
import ModalContext from "../../config/context/modalContext";
import Modal from ".";
import useOutsideClick from "../../utils/useOutsideClick";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide/Slide";
import { useUser } from "../../config/context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import { ModelItem, ModelItems } from "../../utils/constants";
import { Image } from "../../utils/types";
import { useAccount, useNetwork } from "wagmi";
import { writeContract, waitForTransaction } from "@wagmi/core";
import { NFTStorage } from "nft.storage";
import { MarketFactory, MarketPlace } from "../../config/const";
import MarketplaceABI from "../../config/marketplace.json";
import MarketFactoryABI from "../../config/MarketFactory.json";
import { zeroAddress, decodeEventLog, DecodeEventLogParameters } from "viem";

// import
import MagnifyDialog from "./MagnifyDialog";
import Image2MotionDialog from "./Image2MotionDialog";
import MotionConfirmDialog from "./MotionConfirmDialog";
import {
  handleFollowAction,
  getFollowerAction,
} from "../../actions/followAction";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

AWS.config.update({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_BUCKET_REGION,
});

const socket = io(process.env.REACT_APP_SOCKET_API || "http://localhost:5001");
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
    negative_prompt: "",
  },
};

const ModalImgCard = ({ onPrevImage, onNextImage, onUpdate }: any) => {
  const s3 = new AWS.S3();
  const { user }: any = useUser();
  const userObject = JSON.parse(user === "None" ? "{}" : user);
  const modalCtx = useContext(ModalContext);
  const [createdDate, setCreatedDate] = useState("");
  const ImgModalRef = useRef<HTMLDivElement>(null);
  const [magnifyOpen, setMagnifyOpen] = useState<boolean>(false);
  const [motionOpen, setMotionOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [modelNum, setModelNum] = useState(0);
  const [title, setTitle] = useState("");
  const [imageData, setImageData] = useState<Image>(init);
  const [isMe, setMe] = useState(false);
  const { address, isConnected } = useAccount();
  const [isMinting, setMinting] = useState(false);
  const [nftName, setNftName] = useState("");
  const [nftType, setNftType] = useState("");
  const [description, setDescription] = useState("");
  const [densityValue, setDensityValue] = useState(5);
  const [activeButton, setActiveButton] = useState(true);
  const [srcType, setSrcType] = useState("image");
  const [followerState, setFollowerState] = useState<boolean>(false);

  const [IsMoreVisible, setIsMoreVisible] = useState<boolean>(false);
  const MoreFunctionRef = useRef<HTMLDivElement>(null);
  useOutsideClick(MoreFunctionRef, setIsMoreVisible);
  const { chain } = useNetwork();

  const handleFollow = async () => {
    const followObject = {
      email: userObject.email,
      creator: imageData.owner,
    };
    const result = await handleFollowAction(followObject);
    setFollowerState(!followerState);
    onUpdate();
  };

  const handleMagnifyImage = () => {
    setMagnifyOpen(true);
    handleHideImgCard();
  };

  const handleMotionOpen = () => {
    setMotionOpen(true);
    handleHideImgCard();
  };

  const handleConfirmOpen = () => {
    setMotionOpen(false);
    setConfirmOpen(true);
    handleHideImgCard();
  };

  const handleClose = () => {
    setMotionOpen(false);
    setMagnifyOpen(false);
    setConfirmOpen(false);
    modalCtx.setVisible(true);
  };

  const handleHideImgCard = () => {
    console.log("-------------close Handle hide img---------");
    modalCtx.setVisible(false);
  };

  const deleteImageHandler = async (type: number) => {
    if (userObject?.email !== imageData.owner) {
      toast.error("Only Owner can delete image", {
        autoClose: 1500,
        containerId: type === 1 ? "modal" : "dialog",
      });
      return;
    }
    const data = {
      image: imageData.image,
    };
    await axios.post(`${process.env.REACT_APP_BACKEND_API}/deleteImage`, data);
    modalCtx.setVisible(false);
    onUpdate();
  };

  const mintNFT = async () => {
    if (!isMe) {
      toast.error("Only Owner can mint NFT", {
        autoClose: 1500,
        containerId: "modal",
      });
      return;
    }
    if (!isConnected) {
      toast.error("Please connect wallet!", {
        autoClose: 1500,
        containerId: "modal",
      });
      return;
    }

    const storage = new NFTStorage({
      token: process.env.NEXT_PUBLIC_API_NFTSTORAGE as any,
    });

    let id = toast.loading("Uploading metadata....");
    let id2;
    setMinting(true);

    let imgUrl;

    try {
      const url = imageData.image;
      const params = {
        Bucket: process.env.REACT_APP_BUCKET_NAME || "starkmeta-assets",
        Key: url.substring(52),
      };
      const tmpUrl = await s3.getSignedUrlPromise("getObject", params);
      const res = await fetch(tmpUrl);
      if (res.status !== 200) {
        toast.update(id, {
          render: "Something went wrong in Uploading Metadata",
          type: "error",
        });
        setMinting(false);
        return;
      }
      const blob = await res.blob();
      console.log("----------blob--------", blob);

      imgUrl = await storage.store({
        name: nftName,
        description: description,
        image: blob,
        type: nftType,
        // tags: tags,
        // subCategory: subType,
        // properties: _.reduce(
        //   property,
        //   (acc, { type, name }) => ({ ...acc, [type]: name }),
        //   {}
        // ),
      });

      toast.update(id, {
        render: "Upload in Success!",
        type: "success",
      });
      id2 = toast.loading("Creating NFT....");
    } catch (e) {
      toast.update(id, {
        render: "Something went wrong in Uploading Metadata",
        type: "error",
      });
      setMinting(false);
      return;
    }

    const now = Date.now();
    const tokenId = Math.round(Math.random() * 10000) * 1000000000000 + now;
    try {
      const chainId = chain ? chain.id : 56;
      let tx = await writeContract({
        address: MarketPlace[chainId],
        abi: MarketplaceABI,
        functionName: "mint",
        // args: [MarketFactory[chainId], "imgUrl.url", 3],
        args: [zeroAddress, "imgUrl.url", 3, tokenId],
      });

      const data: any = await waitForTransaction(tx);
      console.log(data);

      setMinting(false);
      return;
    } catch (e) {
      console.log(e);
      toast.update(id2, {
        render: "Fail in Creating",
        type: "error",
      });
    }
    try {
      const chainId = chain ? chain.id : 56;
      const data = {
        collectionId: MarketFactory[chainId],
        chainId: chainId,
        category: nftType,
        // subCategory: subType,
        // tags: tags,
        metadata: imgUrl.url,
        tokenId: String(tokenId),
        // socials: {telegram: tg, twitter: tw, Discord: ds}
        maker: address,
      };

      const result = await axios.post(
        `${process.env.REACT_APP_MARKETPLACE_API_ENDPOINT}/addItem`,
        data
      );

      toast.update(id2, {
        render: "Creating Item",
        type: "success",
      });
    } catch (e) {
      console.log(e);
      toast.update(id2, {
        render: "Fail to create",
        type: "error",
      });
    }
    setMinting(false);
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

    if (modalCtx.visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalCtx.visible]);

  const handleDownload = async () => {
    const url = `${imageData.image}_ORIGIN`;
    const tmpUrl = await axios.post(
      `${process.env.REACT_APP_BACKEND_API}/getSignedUrl`,
      { url: url }
    );
    console.log(tmpUrl.data);
    try {
      const res = await axios.get(tmpUrl.data, {
        responseType: "blob",
      });
      // console.log(p);
      // const res = await fetch(tmpUrl.data);
      const pos = url.lastIndexOf("/");
      let name = url.substring(pos + 1);
      name = name.replace(".jpg_ORIGIN", ".jpg");
      console.log(name);
      if (res.status === 200) {
        // const blob = await res.blob();
        console.log("----------blob--------", res.data);
        const blobUrl = URL.createObjectURL(res.data);

        // Create a temporary anchor element and trigger a download
        const anchor = document.createElement("a");
        anchor.href = blobUrl;
        anchor.download = name;
        document.body.appendChild(anchor); // Attach to the document so it can be clicked
        anchor.click();

        // Clean up: revoke the object URL and remove the anchor element
        URL.revokeObjectURL(blobUrl);
        document.body.removeChild(anchor);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleShare = async () => {
    await navigator.clipboard.writeText(imageData.image);
  };

  useEffect(() => {
    if (
      imageData.image.endsWith(".mp4") &&
      modalCtx.imageData.image.endsWith(".mp4")
    ) {
      const videocontainer = document.getElementById(
        "videocontainer"
      ) as HTMLVideoElement;
      const videosource = document.getElementById(
        "videosource"
      ) as HTMLVideoElement;
      videocontainer?.pause();
      videosource?.setAttribute("src", modalCtx.imageData.image);
      videocontainer?.load();
      videocontainer?.play();
    }
    setImageData(modalCtx.imageData);
    if (modalCtx.imageData.image.endsWith(".mp4")) setSrcType("video");
    else setSrcType("image");
    const res = ModelItems.findIndex(
      (item: ModelItem) => item.id === modalCtx.imageData.data.modelId
    );
    if (res !== -1) setModelNum(res);
    const prompt = modalCtx.imageData.data.prompt;
    if (prompt.length > 30) setTitle(prompt.slice(0, 30) + "...");
    else setTitle(prompt);

    setCreatedDate(
      format(
        parseISO(modalCtx.imageData.created.toString()),
        "dd/MM/yy 'at' h:mm a"
      )
    );

    if (userObject?.email !== modalCtx.imageData.owner) {
      setMe(false);
    } else {
      setMe(true);
    }
    getFollower();
  }, [modalCtx.imageData, user, followerState]);

  const getFollower = async () => {
    const followData = {
      email: userObject.email,
    };
    const result = await getFollowerAction(followData);
    if (
      result.followers &&
      result.followers.length > 0 &&
      result.followers.indexOf(modalCtx.imageData.owner) !== -1
    ) {
      setFollowerState(true);
    } else {
      setFollowerState(false);
    }
  };

  const handleDensityChange = (event: Event, newValue: number | number[]) => {
    setDensityValue(newValue as number);
  };

  const handleImage2Motion = () => {
    handleConfirmOpen();
    const tmpData: Image = {
      ...imageData,
      owner: userObject?.email,
    };
    const data = {
      imageId: imageData.generationID,
      strength: densityValue,
      imageData: tmpData,
    };
    socket.emit("image-to-motion", data);
  };

  useEffect(() => {
    socket.on("Motion Saved", (data) => {
      console.log(data);
    });
  }, [socket]);
  console.log("-----");
  return (
    <Modal
      open={modalCtx.visible}
      onClose={modalCtx.visible ? handleHideImgCard : () => {}}
    >
      <div ref={ImgModalRef}>
        {modalCtx.index > 0 && (
          <div
            className="absolute left-[30px] top-1/2 cursor-pointer z-[1000] sm:hidden md:hidden"
            onClick={onPrevImage}
          >
            <Icon
              icon="teenyicons:left-circle-solid"
              color="white"
              width="24"
            />
          </div>
        )}
        {modalCtx.index < modalCtx.imgCount - 1 && (
          <div
            className="absolute right-[30px] top-1/2 cursor-pointer z-[1000] sm:hidden md:hidden"
            onClick={onNextImage}
          >
            <Icon
              icon="teenyicons:right-circle-solid"
              color="white"
              width="24"
            />
          </div>
        )}
        {/* <ToastContainer containerId={"modal"} /> */}
        <div className="flex-1 px-8 py-5 bg-modalBackground border-primary font-Inter relative w-full max-w-[1000px] rounded-md">
          <div className="flex flex-col items-center relative">
            <div className="flex flex-row space-x-5 space-y-0 sm:space-y-5 sm:space-x-0 sm:flex-col">
              {/* left */}
              <div className="sm:w-full w-1/2">
                <div
                  className="flex relative flex-col min-w-0 rounded-lg p-0 cursor-pointer"
                  onClick={handleMagnifyImage}
                >
                  <div className="rounded-lg flex justify-center items-center">
                    {srcType === "video" ? (
                      <video
                        id="videocontainer"
                        autoPlay
                        loop
                        disableRemotePlayback
                        muted
                        className="rounded-lg"
                      >
                        <source
                          id="videosource"
                          type="video/mp4"
                          src={modalCtx.imageData.image}
                        />
                      </video>
                    ) : (
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={modalCtx.imageData.image}
                        alt="imgCard"
                      />
                    )}
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-row justify-between gap-2 w-full pt-5 flex-wrap">
                  {srcType === "image" && (
                    <button className="border-primary border rounded-lg h-[30px] min-w-[165px] px-4 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45] w-1/3">
                      <Icon
                        icon="streamline:ai-science-spark"
                        className="w-[14px] h-[14px]"
                      />
                      <p>Alchemy Refiner</p>
                    </button>
                  )}
                  <button
                    className="border-primary border rounded-lg h-[30px] px-2 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45]"
                    onClick={handleDownload}
                  >
                    <Icon
                      icon="bytesize:download"
                      className="w-[14px] h-[14px]"
                    />
                    <span className="text-[14px]">Download</span>
                  </button>
                  {/* <a
                    className="border-primary border rounded-lg h-[30px] px-2 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45]"
                    href="/starkMeta_logo.png"
                    download
                  >
                    Download
                  </a> */}
                  <button
                    className="border-primary border rounded-lg h-[30px] px-2 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45]"
                    onClick={handleShare}
                  >
                    <Icon
                      icon="mdi:share-variant-outline"
                      className="w-[14px] h-[14px]"
                    />
                    <span className="text-[14px]">Share</span>
                  </button>
                  {srcType === "image" && (
                    <div
                      ref={MoreFunctionRef}
                      className="border-primary border hover:cursor-pointer rounded-lg h-[30px] px-2 py-2 flex flex-row text-white text-[14px] bg-[#171717] gap-2 items-center justify-center transition-all duration-200 ease-in-out hover:bg-[#393b45] relative"
                      onClick={() => setIsMoreVisible(!IsMoreVisible)}
                    >
                      <Icon icon="ri:more-fill" className="w-[14px] h-[14px]" />
                      {IsMoreVisible && (
                        <div className="model-dropdownmenu dropdown-more-param transition-all duration-200 ease-in-out model-visible">
                          <div className="model-menu-board transition-all duration-200 ease-in-out">
                            <button
                              className="model-item item-bg"
                              onClick={() => deleteImageHandler(1)}
                            >
                              <span className="">
                                <Icon icon="fluent:delete-12-filled" />
                              </span>
                              <span className="">Delete Original Image</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {/* {isMe && (
                  <div className="flex flex-col space-y-2 p-2 border rounded-[7.2px] bg-[#202020] border-primary mt-2">
                    <div className="flex flex-row sm:flex-col space-x-2 sm:space-x-0">
                      <div className="mb-3 w-full rounded-[5.4px]">
                        <input
                          className="font-light text-[13px] font-Inter focus-visible:outline-0 text-[#fefefe] bg-[#171717] p-2 rounded-[6px]"
                          placeholder="NFT name"
                          value={nftName}
                          onChange={(e) => setNftName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3 w-full rounded-[5.4px]">
                        <input
                          className="font-light text-[13px] font-Inter focus-visible:outline-0 text-[#fefefe] bg-[#171717] p-2 rounded-[6px]"
                          placeholder="NFT type"
                          value={nftType}
                          onChange={(e) => setNftType(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-3 w-full rounded-[5.4px]">
                      <textarea
                        className="resize-none h-20 w-full font-light text-[13px] font-Inter focus-visible:outline-0 text-[#fefefe] bg-[#171717] p-2 rounded-[6px]"
                        placeholder="Description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                )} */}

                {/* {isMe && (
                  <button
                    className="button-color py-2 px-4 text-[14px] flex justify-center items-center rounded-md text-white font-[530] flex-row gap-1 mt-2"
                    onClick={mintNFT}
                  >
                    <span className="">
                      <Icon icon="fluent:layer-20-filled" className="w-4 h-4" />
                    </span>
                    <span className=" select-none">Mint NFT</span>
                  </button>
                )} */}
              </div>

              {/* right */}
              <div className="flex flex-col gap-2 font-Inter sm:w-full w-1/2 min-w-[390px]">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-1">
                    <div className="flex flex-row items-center">
                      <div className="rounded-full">
                        {/* <img
                          src=""
                          alt="Avatar"
                          className="rounded-full w-full h-full object-cover"
                        /> */}
                        <Icon
                          icon="mingcute:user-4-fill"
                          className="w-8 h-8 text-white"
                        />
                      </div>
                      <div className="min-w-[auto] text-fontSecondary leading-[1] sm:text-[12px] font-semibold px-1 select-none">
                        {imageData.owner}
                      </div>
                    </div>
                    <button
                      onClick={handleFollow}
                      className="flex flex-row items-center justify-center font-normal gap-1 border-primary rounded-[16px] border px-4 py-1 transition-all duration-200 ease-in-out hover:bg-[#393b45]"
                    >
                      <Icon
                        icon={
                          followerState
                            ? "emojione:star"
                            : "emojione-monotone:star"
                        }
                        className="w-[14px] h-[14px] text-white"
                      />
                      <span className="text-white text-[12px] sm:hidden">
                        {followerState ? "Unfollow" : "Follow"}
                      </span>
                    </button>
                  </div>
                  <span className="text-white font-semibold text-[18px] mt-2 text-ellipsis overflow-hidden">
                    {title}
                  </span>
                  <hr className="border-primary border-t mb-2" />
                </div>
                <h2 className="text-white font-Inter text-[12.6px] leading-[1.2] font-medium">
                  Prompt details
                </h2>
                <div className="p-2 border rounded-[7.2px] bg-[#202020] block border-primary">
                  <div className="w-full rounded-[5.4px]">
                    <div className="block">
                      <p className="font-light text-[13px] font-Inter text-[#fefefe] bg-[#171717] p-2 rounded-[6px]">
                        {imageData.data.prompt}
                      </p>
                    </div>
                  </div>
                  {srcType === "image" && (
                    <div className="flex flex-row sm:flex-wrap items-center justify-start sm:justify-start gap-2 sm:gap-1 mt-3 flex-wrap">
                      <div className="block">
                        <button className="inline-flex rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle h-8 py-2 px-3 button-detail">
                          <span className="self-center inline-flex flex-shrink-[0] me-[6px]">
                            <Icon
                              icon="emojione-v1:film-frames"
                              className="w-4 h-4"
                            />
                          </span>
                          <span
                            className="text-[12.6px]"
                            onClick={handleMotionOpen}
                          >
                            Image2Movie
                          </span>

                          <Image2MotionDialog
                            motionOpen={motionOpen}
                            Transition={Transition}
                            imageData={imageData}
                            densityValue={densityValue}
                            activeButton={activeButton}
                            handleDensityChange={handleDensityChange}
                            handleClose={handleClose}
                            setActiveButton={setActiveButton}
                            handleImage2Motion={handleImage2Motion}
                          />

                          <MotionConfirmDialog
                            confirmOpen={confirmOpen}
                            Transition={Transition}
                            handleClose={handleClose}
                          />
                        </button>
                      </div>
                      <div className="block">
                        <button className="inline-flex rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle h-8 py-2 px-3 button-detail">
                          <span className="self-center inline-flex flex-shrink-[0] me-[6px]">
                            <Icon
                              icon="fluent:layer-20-filled"
                              className="w-4 h-4"
                            />
                          </span>
                          <span className="text-[12.6px]">Image Transform</span>
                        </button>
                      </div>
                      <div className="block col-span-1">
                        <button className="inline-flex w-full rounded-[4px] items-center justify-center select-none relative whitespace-nowrap align-middle h-8 py-2 px-3 button-detail">
                          <span className="self-center inline-flex flex-shrink-[0] me-[6px]">
                            <Icon icon="raphael:magic" className="w-4 h-4" />
                          </span>
                          <span className="text-[12.6px]">Remake</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Negative Prompt */}
                {imageData.data.negative_prompt !== undefined &&
                  imageData.data.negative_prompt !== null &&
                  imageData.data.negative_prompt !== "" && (
                    <>
                      <h2 className="text-white font-Inter text-[12.6px] leading-[1.2] font-medium pt-3">
                        Negative Prompt Details
                      </h2>

                      <div className="p-2 border rounded-[7.2px] bg-[#202020] block border-primary">
                        <div className="w-full rounded-[5.4px]">
                          <div className="block">
                            <p className="font-light text-[13px] font-Inter text-[#fefefe] bg-[#171717] p-2 rounded-[6px]">
                              {imageData.data?.negative_prompt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                {/* negative prompt */}
                <hr className="border-primary border-t mt-2"></hr>
                <div className="flex flex-wrap gap-2">
                  <div className="w-[48%] pr-2 mb-3">
                    <span className="text-[#9094a6] text-[12px]">
                      {srcType === "image" ? "Input Resolution" : "Resolution"}
                    </span>
                    <div className="w-full flex items-center text-white text-[14px] font-medium">
                      {imageData.data.width} x {imageData.data.height}px
                    </div>
                  </div>
                  <div className="w-[48%] pr-2 mb-3">
                    <span className="text-[#9094a6] text-[12px]">Created</span>
                    <div className="w-full flex items-center text-white text-[14px]">
                      {createdDate}
                    </div>
                  </div>
                  {srcType === "video" ? (
                    <div className="w-[48%] pr-2 mb-3">
                      <span className="text-[#9094a6] text-[12px]">
                        Base Model
                      </span>
                      <div className="w-full flex items-center text-white text-[14px]">
                        Stark Movie
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="w-[48%] pr-2 mb-3">
                        <span className="text-[#9094a6] text-[12px]">
                          Pipeline
                        </span>
                        <div className="w-full flex items-center text-white text-[14px]">
                          Alchemy V2
                        </div>
                      </div>
                      <div className="w-[48%] pr-2 mb-3">
                        <span className="text-[#9094a6] text-[12px]">Seed</span>
                        <div className="w-full flex items-center text-white text-[14px]">
                          318540544
                        </div>
                      </div>
                      <div className="w-[48%] pr-2 mb-3">
                        <span className="text-[#9094a6] text-[12px]">
                          Preset
                        </span>
                        <div className="w-full flex items-center text-white text-[14px]">
                          {imageData.data.presetStyle}
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
                    </>
                  )}
                  {/* <div className="w-[48%] pr-2 mb-3">
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
                  </div> */}
                </div>
                <div className="w-full h-auto">
                  <div className="flex flex-col p-2 gap-2 rounded-lg bg-[#202020]">
                    {srcType === "video" && (
                      <div className="text-center text-white pt-1">
                        Original image created with
                      </div>
                    )}
                    <div className="flex justify-between p-2 rounded-lg bg-[#171717]">
                      <div className="flex items-stretch gap-[14px]">
                        <div className="w-[42px] h-[42px] overflow-hidden rounded-md">
                          <img
                            className="object-cover w-full h-full"
                            src={ModelItems[modelNum].imgURI}
                            alt="ImageCard"
                          ></img>
                        </div>
                        <div className="flex flex-col justify-between">
                          <span className="font-medium text-[14px] leading-[100%] text-[#dbdbdb80] pt-[2px]">
                            {ModelItems[modelNum].modelType}
                          </span>
                          <div className="flex items-center">
                            <span className="text-white text-[14px] pb-[2px]">
                              {ModelItems[modelNum].label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="button-color py-2 text-[14px] h-8 flex justify-center items-center rounded-md text-white font-[530] flex-row gap-1">
                      <span className="">
                        <Icon icon="raphael:magic" className="w-4 h-4" />
                      </span>
                      <span className=" select-none">
                        Generate with this model
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="absolute top-0 right-[-22px] rounded-full bg-[#0000005c] h-8 w-8 flex justify-center items-center"
              onClick={handleHideImgCard}
            >
              <Icon
                icon="iconamoon:close-light"
                className="w-6 h-6 text-[#CBD5E0] hover:text-white"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Magnify Dialog */}
      <MagnifyDialog
        magnifyOpen={magnifyOpen}
        handleClose={handleClose}
        Transition={Transition}
        imageData={imageData}
        handleDownload={handleDownload}
        deleteImageHandler={deleteImageHandler}
      />
    </Modal>
  );
};

export default ModalImgCard;
