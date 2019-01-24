const webpack = require("webpack");
const Jarvis = require("webpack-jarvis");

const paths = require("./paths");

module.exports = {
  mode: "development", // this will trigger some webpack default stuffs for dev
  output: {
    filename: "[name].js",
    path: paths.outputPath,
    chunkFilename: "[name].js"
  },
  devServer: {
    contentBase: paths.outputPath,
    // compress: true, // gZip compression
    // historyApiFallback: true
    hot: true // enable hot module replacement (HMR), no refreshing -> keeps states/variables
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
        test: /\.css$/,
        use: [
          {
            loader: "style-loader" // and finally this
          },
          {
            loader: "css-loader" // then not sure abt this
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map " // one of the source map types. different speed in different type
};
