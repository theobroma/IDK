const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const common = require('./webpack.common.js');

const assetsPath = path.resolve(__dirname, './dist');

const config = {};

config.devServer = {
  contentBase: assetsPath,
  historyApiFallback: true,
  open: true,
  overlay: true,
  stats: 'minimal',
};

// config.devtool = 'cheap-module-eval-source-map';
config.devtool = 'source-map';

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
    },
  }),
  new webpack.DllReferencePlugin({
    context: '.',
    manifest: require(path.join(assetsPath, '/dll/vendor-manifest.json')),
  }),
  new WriteFilePlugin(),
];

module.exports = merge(common, config);
