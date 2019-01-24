module.exports = [
  // convert ES5+ to ES5 using babel through .babelrc
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader"
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
];
