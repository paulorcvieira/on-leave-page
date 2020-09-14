const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'on-leave-page.min.js',
    libraryTarget: 'umd',
    library: 'OnLeavePage'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, 'exemple'), path.join(__dirname, 'lib')]
  }
}
