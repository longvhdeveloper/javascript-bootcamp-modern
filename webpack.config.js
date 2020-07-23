const path = require('path')
module.exports = {
  entry: {
    index: ['babel-polyfill', './boilerplate/src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, './boilerplate/public/scripts'),
    filename: '[name]-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './boilerplate/public'),
    publicPath: '/scripts/',
  },
  devtool: 'source-map',
}
