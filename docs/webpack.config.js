// npm install --save-dev style-loader css-loader html-webpack-plugin
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/Main.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      favicon: "./favicon.ico"
    }),
  ],
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
     {
       test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
       type: 'asset/resource',
     },
     {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
     },
    ],
  },
};