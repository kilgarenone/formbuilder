const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const paths = require("./paths");
const rules = require("./rules");

module.exports = {
  entry: {
    app: paths.entryPath
  },
  resolve: {
    alias: {
      css: path.resolve(__dirname, "..", "..", "src/css"),
      components: path.resolve(__dirname, "..", "..", "src/components")
    }
  },
  module: {
    rules
  },
  plugins: [
    new webpack.ProgressPlugin(),
    // always deletes the dist folder first in each dev or prod run
    // new CleanWebpackPlugin(["build"]),
    // make webpack automatically creates index.html with proper hashed
    // style and scripts files for us
    new HtmlWebpackPlugin({
      // use our own template
      template: paths.templatePath,
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyURLs: true,
        removeComments: true
        // removeAttributeQuotes: true
      }
    })
  ]
};
