const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://mvp4startup-api.herokuapp.com"
  : "https://mvp4startup-api.herokuapp.com";
