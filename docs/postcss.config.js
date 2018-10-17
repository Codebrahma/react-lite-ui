module.exports = {
  plugins: {
    "postcss-preset-env": {},
    cssnano: process.env === "production" ? {} : false
  }
};
