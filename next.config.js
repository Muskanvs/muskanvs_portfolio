// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  output: "export",                   // enables `next export`
  basePath: isProd ? "/muskanvs_portfolio" : "",
  assetPrefix: isProd ? "/muskanvs_portfolio/" : "",
  // trailingSlash: true,            // optional
};
