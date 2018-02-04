const webpack = require("webpack");
require('dotenv').config();
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const {serverPlugins, clientPlugins} = require('./webpack_plugins/optimize_plugins.js')(webpack);
const ClientS3Plugins = require('./webpack_plugins/s3_plugin.js');

const sourceAliases = {
  stylesheet: path.resolve(__dirname, 'src/shared/styles'),
  container: path.resolve(__dirname, 'src/shared/containers'),
  component: path.resolve(__dirname, 'src/shared/components'),
  constants: path.resolve(__dirname, 'src/shared/constants'),
  helpers: path.resolve(__dirname, 'src/shared/helpers'),
  pages: path.resolve(__dirname, 'src/shared/pages')
}

const StylesLoader = {
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true,
          importLoaders: 1,
          modules: false,
          minimize: process.env.NODE_ENV === 'production'
        }
      }, {
        loader: require.resolve('postcss-loader'),
        options: {
          indent: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'
              ],
              flexbox: 'no-2009'
            })
          ]
        }
      }
    ]
  })
}

const browserConfig = {
  entry: {
    app_bundle: "./src/browser/index.js"
  },
  output: {
    path: __dirname,
    filename: "public/[name].js"
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
    alias: sourceAliases
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [
          /\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/
        ],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, "")
        }
      },
      StylesLoader, {
        test: [
          /\.js$/, /\.jsx$/
        ],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react-app"]
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "public/css/[name].css"}),
    new webpack.optimize.ModuleConcatenationPlugin()
  ].concat(clientPlugins, ClientS3Plugins)
};

const serverConfig = {
  entry: {
    app_bundle: "./src/server/index.js"
  },
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: "react_pages.js",
    libraryTarget: "commonjs2"
  },
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
    alias: sourceAliases
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: [
          /\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/
        ],
        loader: "file-loader",
        options: {
          name: "public/media/[name].[ext]",
          publicPath: url => url.replace(/public/, ""),
          emit: false
        }
      },
      StylesLoader,
      {
        test: [
          /\.js$/, /\.jsx$/
        ],
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react-app"]
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: "public/css/[name].css"}),
    new webpack.optimize.ModuleConcatenationPlugin()
  ].concat(serverPlugins)
};

module.exports = [browserConfig, serverConfig];
