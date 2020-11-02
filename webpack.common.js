const path = require("path");

module.exports = {
  entry: { main: "./src/index.js" },
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      { test: /\.html$/, use: "html-loader" },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        include: [path.resolve(__dirname, "src", "assets")],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][hash][ext]",
              outputPath: "imgs",
            },
          },
          // {
          //   loader: "url-loader",
          //   options: {
          //     limit: 8192,
          //   },
          // },
        ],
      },
    ],
  },
};
