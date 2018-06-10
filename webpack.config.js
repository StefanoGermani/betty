const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './'
  },
};