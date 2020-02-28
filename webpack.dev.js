const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    main: "./src/main.js"
  },
  devtool: "source-map",
  devServer: {
    writeToDisk: false
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            // On development we want to see where the file is coming from, hence we preserve the [path]
            name: "[path][name].[ext]?hash=[hash:20]",
            esModule: false,
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
      favicon: "./src/images/favicon.png"
    }),
    new HtmlWebpackPlugin({
      template: "./src/main.html",
      inject: true,
      chunks: ["main"],
      filename: "main.html",
      favicon: "./src/images/favicon.png"
    })
  ]
};
