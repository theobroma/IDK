const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

const config = {};

config.devtool = 'none';
// turn off minimize and to see pretty output bundle
config.optimization = {
  minimize: true,
  minimizer: [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ],
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
  new OptimizeCSSAssets(),
];

module.exports = merge(common, config);
