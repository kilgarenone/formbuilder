const webpack = require("webpack");
const Jarvis = require("webpack-jarvis");

const paths = require("./paths");

module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
    path: paths.outputPath,
    chunkFilename: "[name].js"
  },
  devServer: {
    contentBase: paths.outputPath,
    historyApiFallback: true,
    // compress: true, // gZip compression
    // historyApiFallback: true
    hot: true,
    stats: "minimal"
  },
  // performance: {
  //   hints: "warning",
  //   maxAssetSize: 450000,
  //   maxEntrypointSize: 8500000,
  //   assetFilter: assetFilename =>
  //     assetFilename.endsWith(".css") || assetFilename.endsWith(".js")
  // },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Jarvis({
      port: 1337
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devtool: "cheap-module-eval-source-map"
};
