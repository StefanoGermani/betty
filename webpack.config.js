const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'assets/js/'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    contentBase: './',
    index: 'index.htm',
    watchContentBase: true,
    publicPath: '/assets/js/'
  },
  devtool: "source-map",
};