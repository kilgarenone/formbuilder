const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/server.js",
  target: "node", // tells webpack not to touch any built-in modules like fs or path.
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  }
};
