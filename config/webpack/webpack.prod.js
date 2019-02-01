const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const paths = require("./paths");
const rules = require("./rules");

module.exports = {
  mode: "production", // this trigger webpack out-of-box prod optimizations
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader"
        ]
      }
    ]
  },
  plugins: [
    // always deletes the dist folder first in each prod run
    new CleanWebpackPlugin([paths.outputPath.split("/").pop()], {
      root: paths.root
    }),
    // extract css into separate .css files
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].css"
    })
  ],
  devtool: "source-map" // supposedly the ideal type without bloating bundle size
};
