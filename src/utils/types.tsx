export interface ImageOptions {
  alchemy: boolean;
  modelId: string;
  num_image: number;
  presetStyle: string;
  prompt: string;
  width: number;
  height: number;
}

export interface Image {
  image: string;
  owner: string;
  created: string;
  data: ImageOptions;
}
