const HtmlWebPackPlugin = require('html-webpack-plugin');
const BabelLoader = require('babel-loader');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      // babel js parsing
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // html parsing
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: 'body',
    }),
  ],
};
