import { ChainConfig } from "./types";
import {
  AllChainColor,
  AllChainDefault,
  BitcoinColor,
  BitcoinDefault,
  EthereumColor,
  EthereumDefault,
  PolygonColor,
  PolygonDefault,
  SolanaColor,
  SolanaDefault,
} from "../assets";

const ImageNumberGroup = [1];
const ImageDimensionsGroup = [
  "512 * 512",
  "768 * 768",
  "512 * 1024",
  "768 * 1024",
  "1024 * 768",
  "1024 * 1024",
];
const InputDimensionsGroup = [
  "512 * 768",
  "768 * 512",
  "1024 * 768",
  "768 * 1024",
  "1360 * 768",
  "768 * 1360",
];

export interface ModelItem {
  id?: string;
  modelType?: string;
  label: string;
  subLabel?: string;
  imgURI?: string;
}

const ModelItems: ModelItem[] = [
  {
    id: "1e60896f-3c26-4296-8ecc-53e2afecc132",
    modelType: "Finetuned Model",
    label: "StarkAI XL v1",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ea08719-5fd1-4df7-9adc-5218637cba17/Leonardo_Diffusion_XL_a_brain_suspended_in_midair_bathed_in_a_1.jpg",
  },
  {
    id: "5c232a9e-9061-4777-980a-ddc8e65647c6",
    modelType: "Finetuned Model",
    label: "StarkAl XL v2",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bc0a7117-ad5e-4754-8648-6412cc554478/Leonardo_Vision_XL_A_gritty_unedited_photograph_perfectly_capt_2.jpg",
  },
  {
    id: "2067ae52-33fd-4a82-bb92-c2c55e7d2786",
    modelType: "Finetuned Model",
    label: "StarkAl bedo XL v1",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/6a441e3f-594d-442f-b70b-0d867a09e589/AlbedoBase_XL_A_sleek_and_menacing_dwarf_his_metallic_body_gle_3.jpg",
  },
  {
    id: "ac614f96-1082-45bf-be9d-757f2d31c174",
    modelType: "Finetuned Model",
    label: "Stark DreamS v8",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bff69fae-6e4e-48d1-8a8f-6c75799be511/DreamShaper_v7_an_older_tired_and_battleworn_male_detective_hi_1.jpg",
  }, // Note that this item doesn't have a subLabel
  {
    id: "e316348f-7773-490e-adcd-46757c738eb7",
    modelType: "Finetuned Model",
    label: "Abso Real v1.8",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9d7e2dbe-6dff-4bf5-b487-414dee2a10b9/Absolute_Reality_v16_a_stunning_photo_of_a_woman_with_aztech_t_1.jpg",
  },
  {
    id: "1aa0f478-51be-4efd-94e8-76bfc8f533af",
    modelType: "Finetuned Model",
    label: "Anime Pastel v1",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8cc624c3-c1ba-40c9-b3cd-21056382728a/AnimePastelDream_fuji_film_candid_portrait_o_a_black_woman_wea_2.jpg",
  },
  {
    id: "d69c8273-6b17-4a30-a13e-d6637ae1c644",
    modelType: "Finetuned Model",
    label: "3D Animation v1",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/0e85d140-3ea0-4179-a708-ae95bf9329a3/3D_Animation_Style_a_masterpiece_image_of_an_older_tired_and_b_2.jpg",
  },
  {
    id: "b63f7119-31dc-4540-969b-2a9df997e173",
    modelType: "Finetuned Model",
    label: "SDXL v0.9",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ed4ccd8-649c-4a59-a7bb-9f5b704a91b1/SDXL_09_a_beautiful_woman_vivid_striking_colors_cinematic_phot_0.jpg",
  },
];

const defaultStyle = [{ id: "StarkAI" }, { id: "None" }];

const photoRealStyle = [
  { id: "Cinematic" },
  { id: "Creative" },
  { id: "Vibrant" },
  { id: "None" },
];

const AlchemyStyle = [
  { id: "Anime" },
  { id: "Cinematic" },
  { id: "Creative" },
  { id: "Dynamic" },
  { id: "Environment" },
  { id: "General" },
  { id: "Illustration" },
  { id: "Photography" },
  { id: "Raytraced" },
  { id: "3D Render" },
  { id: "Sketch B/W" },
  { id: "Sketch Color" },
  { id: "Vibrant" },
  { id: "None" },
];

export const typeItems = [
  { id: "Character" },
  { id: "Photography" },
  { id: "Environment" },
  { id: "Animals" },
  { id: "Anime" },
  { id: "Future World" },
  { id: "Art" },
  { id: "Cinematic" },
];

const chains: ChainConfig[] = [
  {
    name: "All Chains",
    key: "all",
    ColorIcon: AllChainColor,
    DefaultIcon: AllChainDefault,
  },
  {
    name: "Solana",
    key: "sol",
    ColorIcon: SolanaColor,
    DefaultIcon: SolanaDefault,
  },
  {
    name: "Ethereum",
    key: "eth",
    ColorIcon: EthereumColor,
    DefaultIcon: EthereumDefault,
  },
  {
    name: "Bitcoin",
    key: "bit",
    ColorIcon: BitcoinColor,
    DefaultIcon: BitcoinDefault,
  },
  {
    name: "Polygon",
    key: "poly",
    ColorIcon: PolygonColor,
    DefaultIcon: PolygonDefault,
  },
  // Add more chains as necessary...
];
// const PhotoReal = "b9d4a72d-2dea-4473-9be5-caf645a3b67e";

export interface ItemProps {
  title?: string;
  name?: string;
  link?: string;
}

const Features = [
  { name: "Home", link: "/" },
  { name: "Protocol", link: "/protocol" },
  { name: "Security", link: "/security" },
  { name: "Stark News", link: "/stark-news" },
];

const constants_SocialLink = [
  {
    src: "discord.svg",
    link: "https://discord.gg/starkmeta",
  },
  {
    src: "twitter.svg",
    link: "https://twitter.com/Starkmetagame",
  },
  {
    src: "youtube.svg",
    link: "https://www.youtube.com/@GameStarkMeta",
  },
  // {
  //   src: "instagram.svg",
  //   link: "https://www.instagram.com/starkmetagame",
  // },
  // {
  //   src: "tiktok.svg",
  //   link: "https://www.tiktok.com/@starkmeta",
  // },
];

const navbarMenuItems = [
  { text: "Home", link: "/", delay: 400 },
  { text: "Blog", link: "/news", delay: 500 },
  { text: "API", link: "/api", delay: 600 },
  { text: "FAQ", link: "/faq", delay: 700 },
  { text: "Contact Us", link: "/contact-us", delay: 800 },
];

type HashtagItem = {
  name: string;
};

const const_hashtags: HashtagItem[] = [
  { name: "All" },
  { name: "Case Studies" },
  { name: "Community Events" },
  { name: "HowTo" },
  { name: "Releases" },
  { name: "Uncategorized" },
];

export const hashtag_buttons = [
  { icon: "icon-park-outline:avatar", label: "Character" },
  { icon: "ion:camera-outline", label: "Photography" },
  { icon: "bi:buildings", label: "Environment" },
  { icon: "emojione-monotone:pouting-cat-face", label: "Animals" },
  { icon: "lucide:fan", label: "Anime" },
  { icon: "icon-park-outline:future-build-one", label: "Future World" },
  { icon: "map:art-gallery", label: "Art" },
  {
    icon: "material-symbols:cinematic-blur-outline",
    label: "Cinematic",
  },
];

export {
  ImageDimensionsGroup,
  ImageNumberGroup,
  InputDimensionsGroup,
  ModelItems,
  AlchemyStyle,
  photoRealStyle,
  defaultStyle,
  chains,
  Features,
  constants_SocialLink,
  navbarMenuItems,
  const_hashtags,
};
