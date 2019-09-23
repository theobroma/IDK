/* eslint global-require: 0 */
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-flexbugs-fixes'),
    require('css-mqpacker')({
      sort: true,
    }),
    require('postcss-custom-media'),
    require('postcss-media-minmax'),
    require('postcss-fontpath')({
      checkFiles: true,
    }),
  ],
};
