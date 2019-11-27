const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname,'src','index.js'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'main.bundle.js'
  },
  // PLUGINS ,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Focus El Salvador Challenge Solution',
      template: 'src/index.html',
      meta: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        description: 'El Salvador Challenge Solution',
        author: 'Martín Muñoz'
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  
  // CSS PLUGIN CONFIGURATION
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
    ],
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // PATH RESOLVE
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.join(__dirname,'dist'),
    watchContentBase: true,
    liveReload: true
  }
};