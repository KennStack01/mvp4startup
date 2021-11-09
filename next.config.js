const withReactSvg = require("next-react-svg");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";

module.exports = dev
  ? "http://localhost:3000"
  : "https://mvp4startup-api.herokuapp.com";

module.exports = withReactSvg({
  include: path.resolve(__dirname, "public/svg"),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    // images database domain here:
    domains: ["images.unsplash.com"],
  },
});
