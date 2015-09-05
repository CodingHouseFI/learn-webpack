module.exports = {
  watch: true,
  developement: true,
  entry: {
    main: "./app.js",
    test: "./test/test.js"
  },
  output: {
    filename: "[name]-bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.sass/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.less/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.coffee/,
        exclude: /node_modules/,
        loader: "coffee-loader"
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}
