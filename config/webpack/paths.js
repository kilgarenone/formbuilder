const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../", "../"),
  outputPath: path.resolve(__dirname, "../", "../", "build"),
  nodeModulesPath: path.resolve(__dirname, "../", "../", "build"),
  entryPath: path.resolve(__dirname, "../", "../", "src/index.js"),
  templatePath: path.resolve(__dirname, "../", "../", "src/index.html"),
  jsFolder: "js"
  // imagesFolder: "images",
  // fontsFolder: "fonts",
  // cssFolder: "css",
};
