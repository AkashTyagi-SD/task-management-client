const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const alias = require(`./src/pathalias/aliases.tsx`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    path.resolve(__dirname, value),
  ])
);

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    resolve: {
      mainFiles: ["index", "Index"],
      extensions: [".js", ".ts", ".tsx"],
      alias: resolvedAliases,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: { name: "/public/[name].[ext]" },
            },
          ],
        },
      ],
    },
    devServer: {
      inline: true,
      port: 8000,
      historyApiFallback: true, //This is used for open screen directly by matching url
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "Application name",
        template: path.join(__dirname, "public", "index.html"),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
        path: `./.env${argv.mode ? `.${argv.mode}` : ""}`,
      }),
    ],
  };
};
