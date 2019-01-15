const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development", // this will trigger some webpack default stuffs for dev
  devServer: {
    hot: true // enable hot module replacement (HMR), no refreshing -> keeps states/variables
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devtool: "inline-source-map ", // one of the source map types. different speed in different type
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
  }
});
