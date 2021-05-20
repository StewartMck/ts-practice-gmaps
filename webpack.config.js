const path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    open: true,
    watchContentBase: true,
    index: "index.html",
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log("Listening on port:", port);
    },
  },
  plugins: [
    new Dotenv()
  ]
};
