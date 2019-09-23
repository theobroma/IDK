const path = require('path');
const webpack = require('webpack');

const assetsPath = path.resolve(__dirname, './dist/dll');

module.exports = {
  mode: 'development',
  entry: {
    vendor: [path.join(__dirname, 'vendors.js')],
  },
  output: {
    filename: '[name].bundle.js',
    path: assetsPath,
    library: '[name]_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      path: `${assetsPath}/[name]-manifest.json`,
      name: '[name]_lib',
    }),
  ],
};
