const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "example/src/index.html"),
  filename: "./index.html",
  reject: true,
});

module.exports = {
  mode: "production",
  entry: "./example/src/index.js",
  module: {
    rules: [{
        test: /\.(js|jsx)/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "example/dist"),
    filename: "bundle.js",
  },
  plugins: [htmlWebpackPlugin],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, 'example/src'), "node_modules"]
  },
  devServer: {
    port: 3001,
  },
};