module.exports = {
  entry: { main: "./src/index.js" },
  module: {
    rules: [
      { test: /\.svg$/, use: "svg-inline-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: { compact: false },
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
      { test: /\.html$/, use: "html-loader" },
      {
        test: /\.(svg|jpg|png|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name][hash][ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};
