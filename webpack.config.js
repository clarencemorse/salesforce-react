const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './HelloBase/src/index.js',
  output: {
    path: path.resolve(__dirname, 'force-app/main/default/staticresources/HelloBase'),
    filename: 'App.bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'] // Loads .babelrc
      },
      {
        test:/.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.(png|svg|ico|jpg|jpeg|gif|pdf)$/,
        use: [{
          loader: 'url-loader',
        }, {
          loader: 'image-webpack-loader',
        }]
      }
    ]
  },
  stats: {
    colors: true
  }
  //devtool: 'inline-source-map' // Comment when in production
}