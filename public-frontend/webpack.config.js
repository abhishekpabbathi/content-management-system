const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

module.exports = (env, argv) => {
  const mode = argv.mode || "development";
  const envFile = mode === "production" ? ".env.production" : ".env";
  dotenv.config({ path: envFile });

  return {
    mode,
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/"
    },
    resolve: { extensions: [".js", ".jsx"] },
    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
        { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"] }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./index.html" }),
      new webpack.DefinePlugin({
        "process.env.API_URL": JSON.stringify(process.env.API_URL)
      })
    ],
    devServer: { port: 3002, historyApiFallback: true }
  };
};
