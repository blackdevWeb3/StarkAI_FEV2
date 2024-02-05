export interface Addresses {
  [chainId: number]: `0x${string}`;
}

export const MarketPlace: Addresses = {
  97: "0x50c79F73F5103882809645aB76035C9F198fD054",
};

export const MarketFactory: Addresses = {
    97: "0x1Ea3907727f5b6003bAFC95ca10B869C4FAFF7a1",
};

export const PUBLIC_NODES : {[chainId: number]: string[]} = {
  56: [
    process.env.NEXT_PUBLIC_NODE_PRODUCTION??'',
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed1.binance.org",
  ],
  97: ["https://bsc-testnet.publicnode.com"],
  1: [
    "https://eth.llamarpc.com",
    "https://cloudflare-eth.com",
  ],
  5: [
    "https://ethereum-goerli.publicnode.com"
  ],
  137: ['https://polygon-pokt.nodies.app']
};

export const getNodeRealUrlV2 = (chainId: number, key?: string) => {
  let host = null;

  switch (chainId) {
    case 1:
      if (key) {
        host = `eth-mainnet.nodereal.io/v1/${key}`;
      }
      break;
    case 5:
      if (key) {
        host = `eth-goerli.nodereal.io/v1/${key}`;
      }
      break;
    case 97:
      if (key) {
        host = `bsc-mainnet.nodereal.io/v1/${key}`;
      }
      break;
    default:
      host = null;
  }

  if (!host) {
    return null;
  }
  const url = `https://${host}`;
  return url;
};
