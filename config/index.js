const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://mvp4startup-api.herokuapp.com/api/v1"
  : "https://mvp4startup-api.herokuapp.com/api/v1";
