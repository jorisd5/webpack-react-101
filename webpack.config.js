module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "dist/bundle.js"
  },
  devtool: "sourcemap",
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
