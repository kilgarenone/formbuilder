const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const paths = require("./paths");
const rules = require("./rules");

// Understanding the path.resolve traversing.
// Path.resolve build absolute path from right to left arguments,
// starting from the current directory where its run, in this case of 'webpack.common.js',
// it starts from ROOT/config/webpack
module.exports = {
  entry: {
    app: paths.entryPath
  },
  module: {
    rules
  },
  plugins: [
    // load variables from .env files based on current environment.
    // accessible from the process.env object
    // Note: 'process.env.NODE_ENV' is set in package.json scripts section eg. NODE_ENV="development"
    new Dotenv({
      path: path.resolve(__dirname, "..", "..", `.env.${process.env.NODE_ENV}`)
    }),
    new webpack.ProgressPlugin(),
    // make webpack automatically creates index.html with proper hashed
    // style and scripts files for us
    new HtmlWebpackPlugin({
      template: paths.templatePath, // use our own template!
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
