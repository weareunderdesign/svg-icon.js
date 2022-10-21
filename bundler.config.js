const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/svg-icon.js',
  output: {
    filename: 'svg-icon.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};