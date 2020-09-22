module.exports = {
  entry: { main: "./src/index.js" },
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.html$/, use: "html-loader" },
      {
        test: /\.(svg|jpg|png|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name][hash][ext]",
            outputPath: "imgs",
          },
        },
      },
    ],
  },
};
