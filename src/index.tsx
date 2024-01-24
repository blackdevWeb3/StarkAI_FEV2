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
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "@rainbow-me/rainbowkit/styles.css";
import "./index.css";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({
      apiKey:
        process.env.REACT_APP_ALCHEMY_API_KEY ||
        "ekZhZsGjfWuK39pYW_YXSEcRKDN8amSN",
    }),
    publicProvider(),
  ]
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
            <ToastContainer />
            <App />
          </GoogleOAuthProvider>
        </UserProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
