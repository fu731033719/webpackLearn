const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          {
            loader: 'style-loader',
            options: {
              insertInto: '#app',
              singleton: true,
              transform: './css.transform.js'
            }
          },
          'css-loader'
        ]
        // use: [
        //   {
        //     loader: 'style-loader/useable'
        //   },
        //   {
        //     loader: 'css-loader'
        //     // loader: 'file-loader'
        //   }
        // ]
      }
    ]
  }
}