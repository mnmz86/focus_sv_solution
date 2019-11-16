const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname,'src','index.js'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'main.bundle.js'
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // PATH RESOLVE
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.join(__dirname,'src')
  }
};