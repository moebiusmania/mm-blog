const isProd = process.env.NODE_ENV === "production";

module.exports = {
  exportTrailingSlash: true,
  reactStrictMode: true,
  assetPrefix: isProd ? "/mm-blog/" : "",
  basePath: isProd ? "/mm-blog" : "",
};
