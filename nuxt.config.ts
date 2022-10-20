import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  serverMiddleware: [
    // Will register file from project server-middleware directory to handle /server-api/* requests
    { path: "/api", handler: "~/api/index.ts" },
  ],
  css: ["~/assets/scss/style.scss"],
  plugins: ["~/plugins/bootstrap.client"],
  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },
});
