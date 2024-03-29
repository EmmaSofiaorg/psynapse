const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  cssModules: false,
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
