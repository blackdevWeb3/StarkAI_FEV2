import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./context/UserContext";
import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, bsc, goerli, bscTestnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import "react-toastify/dist/ReactToastify.min.css";
import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { PUBLIC_NODES } from "./config/const";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

// get most configs chain nodes length
const mostNodesConfig = Object.values(PUBLIC_NODES).reduce((prev, cur) => {
  return cur.length > prev ? cur.length : prev
}, 0)

const { chains, publicClient } = configureChains(
  [mainnet, goerli, bsc, bscTestnet, polygon] as any,
  // [
  //   alchemyProvider({
  //     apiKey:
  //       process.env.REACT_APP_ALCHEMY_API_KEY ||
  //       "ekZhZsGjfWuK39pYW_YXSEcRKDN8amSN",
  //   }),
  //   publicProvider(),
  // ]
  Array.from({ length: mostNodesConfig })
    .map((_, i) => i)
    .map((i) => {
      return jsonRpcProvider({
        rpc: (chain) => {
          const id = chain.id;
          return PUBLIC_NODES[id]?.[i]
            ? {
                http: PUBLIC_NODES[chain.id][i],
              }
            : null
        },
      })
    }),
  {
    batch: {
      multicall: {
        batchSize: 1024 * 200,
      },
    },
  },
);

const { connectors } = getDefaultWallets({
  appName: process.env.REACT_APP_NAME || "StarkMeta AI",
  projectId:
    process.env.REACT_APP_PROJECT_ID || "fe62b424c4ab666f47d64744e0b3dca0",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider coolMode theme={darkTheme()} chains={chains}>
        <UserProvider>
          <GoogleOAuthProvider clientId="229159616238-4nkmtiq6ar6t44lgif12bve7vv1bmavm.apps.googleusercontent.com">
            <ToastContainer containerId={"main"} />
            <App />
          </GoogleOAuthProvider>
        </UserProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

reportWebVitals();
