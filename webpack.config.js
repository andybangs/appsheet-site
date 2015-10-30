var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app/app.js'),
  output: {
    path: path.resolve(ROOT_PATH, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: 'node_modules',
        loader: 'babel'
      }
    ]
  }
};
