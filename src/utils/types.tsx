import React from "react";

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

export type ChainConfig = {
  name: string;
  key: string;
  ColorIcon: React.FC;
  DefaultIcon: React.FC;
};

export interface BlockchainButtonProps {
  selectedChain: string;
  handleSelectChain: (chainkey: string) => void;
}
