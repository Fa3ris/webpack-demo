const path = require('path');

module.exports = {
  mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader',
              ],
          },
          {
              test: /\.(png|jpg|svg|gif)$/,
              use: [
                  'file-loader',
              ],
          },
          {
              test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                'file-loader',
              ],
          },
      ],
  },
};