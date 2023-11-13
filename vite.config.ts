import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "shared",
      filename: "shared.js",
      exposes: {
        "./SearchBar": "./src/components/SearchBar.tsx",
        "./Wrapper": "./src/components/Wrapper.tsx",
        "./hooks": "./src/hooks/",
        "./reducers": "./src/reducers/",
        "./utils": "./src/utils/",
        "./Loading": "./src/components/Loading.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@reduxjs/toolkit",
        "react-redux",
      ],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
