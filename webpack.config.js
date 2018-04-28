const webpack = require('webpack');
const PrettierPlugin = require('prettier-webpack-plugin');

const config = {
  entry: __dirname + '/src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new PrettierPlugin({
      extensions: [ '.js', '.jsx' ]
    })
  ]
};

module.exports = config;
