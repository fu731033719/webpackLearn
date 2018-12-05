module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
            // presets: [
            //   ['babel-preset-env', {
            //     targets: {browsers: ['> 1%', 'last 2 versions']}  // 指定99%及以上浏览器的最新的2个版本兼容
            //     // targets: {chrome: '52'} //指定chrome5.x版本兼容
            //   }]
            // ]
          // }
        },
        exclude: '/node_modules/' //exclude将node_modules排除到该loader处理范围之外
      }
    ]
  }
}