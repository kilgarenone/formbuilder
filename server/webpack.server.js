const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    server: "./server/server.js",
    client: "./src/lib/client.js"
  },
  target: "node", // tells webpack not to touch any built-in modules like fs or path.
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server_build"),
    filename: chunkData =>
      chunkData.chunk.name === "server" ? "index.js" : "../public/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    // always deletes the server-build folder first in each dev or prod run
    new CleanWebpackPlugin(["server_build"])
  ]
};
