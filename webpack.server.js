const path = require("path");
const nodeExternals = require("webpack-node-externals");

console.log("damnson", path.resolve("src/css"));
module.exports = {
  entry: {
    server: "./src/server.js",
    client: "./src/lib/client.js"
  },
  target: "node", // tells webpack not to touch any built-in modules like fs or path.
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-build"),
    filename: "index.js"
  },
  resolve: {
    alias: {
      css: path.resolve("src/css"),
      components: path.resolve("src/components")
    }
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
