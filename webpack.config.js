const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true
  },
  //loaders
  module: {
    rules: [
      //assets loader
      {
        test:/\.(svg|ico|webp|png|jpg|gif|jpeg)$/,
        type: 'asset/resource'
      },
      //js files loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      //scss loader
      {
        test: /\.css|\.s(c|a)ss$/,
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: true, // defaults to false
            },
          }, 'extract-loader', 'css-loader', 'sass-loader'
        ],
      }
    ],
  },
  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lit App Boilerplate',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
};