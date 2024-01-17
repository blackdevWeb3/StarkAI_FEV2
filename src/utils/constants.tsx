const ImageNumberGroup = [1, 2, 3, 4, 5, 6, 7, 8];
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
    id: "Leonardo Diffusion XL",
    modelType: "Finetuned Model",
    label: "Leonardo Diffusion XL",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ea08719-5fd1-4df7-9adc-5218637cba17/Leonardo_Diffusion_XL_a_brain_suspended_in_midair_bathed_in_a_1.jpg",
  },
  {
    id: "Leonardo Vision XL",
    modelType: "Finetuned Model",
    label: "Leonardo Vision XL",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bc0a7117-ad5e-4754-8648-6412cc554478/Leonardo_Vision_XL_A_gritty_unedited_photograph_perfectly_capt_2.jpg",
  },
  {
    id: "AlbedoBase XL",
    modelType: "Finetuned Model",
    label: "AlbedoBase XL",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/6a441e3f-594d-442f-b70b-0d867a09e589/AlbedoBase_XL_A_sleek_and_menacing_dwarf_his_metallic_body_gle_3.jpg",
  },
  {
    id: "DreamShaper v7",
    modelType: "Finetuned Model",
    label: "DreamShaper v7",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/bff69fae-6e4e-48d1-8a8f-6c75799be511/DreamShaper_v7_an_older_tired_and_battleworn_male_detective_hi_1.jpg",
  }, // Note that this item doesn't have a subLabel
  {
    id: "Absolute Reality v1.6",
    modelType: "Finetuned Model",
    label: "Absolute Reality v1.6",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9d7e2dbe-6dff-4bf5-b487-414dee2a10b9/Absolute_Reality_v16_a_stunning_photo_of_a_woman_with_aztech_t_1.jpg",
  },
  {
    id: "Anime Pastel Dream",
    modelType: "Finetuned Model",
    label: "Anime Pastel Dream",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/8cc624c3-c1ba-40c9-b3cd-21056382728a/AnimePastelDream_fuji_film_candid_portrait_o_a_black_woman_wea_2.jpg",
  },
  {
    id: "3D Animation Style",
    modelType: "Finetuned Model",
    label: "3D Animation Style",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/0e85d140-3ea0-4179-a708-ae95bf9329a3/3D_Animation_Style_a_masterpiece_image_of_an_older_tired_and_b_2.jpg",
  },
  {
    id: "SDXL 0.9",
    modelType: "Finetuned Model",
    label: "SDXL 0.9",
    subLabel: "Alchemy V2",
    imgURI:
      "https://cdn.leonardo.ai/users/384ab5c8-55d8-47a1-be22-6a274913c324/generations/9ed4ccd8-649c-4a59-a7bb-9f5b704a91b1/SDXL_09_a_beautiful_woman_vivid_striking_colors_cinematic_phot_0.jpg",
  },
  {
    id: "Stable Diffusion 1.5",
    modelType: "Stable Diffusion",
    label: "Stable Diffusion 1.5",
    imgURI: "https://app.leonardo.ai/img/leonardo-logo-greyscale.svg",
  },
  {
    id: "Stable Diffusion 2.1",
    modelType: "Stable Diffusion",
    label: "Stable Diffusion 2.1",
    imgURI: "https://app.leonardo.ai/img/leonardo-logo-greyscale.svg",
  },
  { label: "Select Other Model" },
];

const defaultStyle = [{ id: "Leonardo Style" }, { id: "None" }];

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

export {
  ImageDimensionsGroup,
  ImageNumberGroup,
  InputDimensionsGroup,
  ModelItems,
  AlchemyStyle,
  photoRealStyle,
  defaultStyle,
};
