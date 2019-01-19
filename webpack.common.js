const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  entry: {
    app: resolveApp("src/index.js")
  },
  output: {
    filename: "[name].[hash].js",
    path: resolveApp("build")
  },
  resolve: {
    alias: {
      css: path.resolve(__dirname, "src/css/"),
      components: path.resolve(__dirname, "src/components/")
    }
  },
  module: {
    rules: [
      // convert ES5+ to ES5 using babel through .babelrc
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      // able to import images in javascript files
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      // able to import fonts in JS files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    // always deletes the dist folder first in each dev or prod run
    new CleanWebpackPlugin(["build"]),
    // make webpack automatically creates index.html with proper hashed
    // style and scripts files for us
    new HtmlWebpackPlugin({
      template: resolveApp("src/index.html") // use our own template
    })
  ]
};
