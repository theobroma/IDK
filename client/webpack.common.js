const webpack = require('webpack'); // eslint-disable-line
const path = require('path'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {};
config.entry = `${__dirname}/src/app/app.jsx`;

config.output = {
  path: `${__dirname}/dist`,
  // filename: '[name].[hash].js',
  filename: '[name].js',
};

config.resolve = {
  extensions: ['.js', '.jsx', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png', '.svg'],
  alias: {
    images: path.resolve(__dirname, 'src/app/assets/images'),
    types: path.resolve(__dirname, 'src/app/types'),
    components: path.resolve(__dirname, 'src/app/components'),
    containers: path.resolve(__dirname, 'src/app/containers'),
    actions: path.resolve(__dirname, 'src/app/actions'),
    reducers: path.resolve(__dirname, 'src/app/reducers'),
    constants: path.resolve(__dirname, 'src/app/constants'),
    helpers: path.resolve(__dirname, 'src/app/helpers'),
    api: path.resolve(__dirname, 'src/app/api'),
  },
  modules: [path.resolve(__dirname), 'node_modules'],
};

config.module = {
  rules: [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader?cacheDirectory',
        // options: {
        //   presets: ['env', 'react', 'stage-0']
        // }
      },
      exclude: /node_modules/,
    },
    // {
    //   test: /\.jsx?$/,
    //   exclude: /node_modules/,
    //   use: ['babel-loader', 'eslint-loader'],
    // },
    // ======================================================
    // {
    //   test: /\.(sass|scss|css)$/,
    //   use: ExtractTextPlugin.extract({
    //     fallback: 'style-loader',
    //     use: [
    //       { loader: 'css-loader' },
    //       //{ loader: 'css-loader', options: { minimize: true } },
    //       { loader: 'postcss-loader' },
    //       { loader: 'sass-loader' },
    //     ],
    //   }),
    // },
    {
      test: /\.(sass|scss|css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
    },
    // ======================================================
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file-loader?context=src/app/assets/images/&name=images/[path][name].[ext]',
        {
          // TODO: remove it to prod build
          // images loader
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: [0.75, 0.9],
              speed: 3,
            },
          },
        },
      ],
      exclude: /node_modules/,
      include: __dirname,
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name][hash].[ext]',
        },
      },
    },
  ],
};

// config.externals = {
//   react: 'React',
//   'react-dom': 'ReactDOM',
// };

config.performance = {
  hints: false,
};

config.optimization = {
  splitChunks: {
    cacheGroups: {
      commons: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' },
    },
  },
};

config.plugins = [
  new HtmlWebpackPlugin({
    template: `${__dirname}/src/public/index.html`,
    inject: 'body',
  }),
  new CopyWebpackPlugin([
    {
      from: `${__dirname}/src/public`,
    },
  ]),
  // new ExtractTextPlugin({ filename: 'css/[name].css' }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css',
  }),
];

module.exports = config;
