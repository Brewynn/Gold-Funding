const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: "cheap-module-source-map",

  entry: {
    app: path.join(__dirname, "./main.js"),
  },

  output: {
    path: path.join(__dirname, "./build"),
    filename: "index.js",
  },

  devServer: {
    inline: true,
    port: 8001,
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },

  resolve: {
    extensions: [".jsx", ".js"],
  },

  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify(dotenv.config().parsed),
      },
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./index.html"),
      hash: true,
    }),
  ],
};
