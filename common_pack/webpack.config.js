const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'pageA': './src/pageA',
    'pageB': './src/pageB',
    'vendor': ['lodash']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // 公共模块代码bundle
      minChunk: 2, // 出现两次及以上的代码进行公共模块打包
      chunks: ['pageA', 'pageB']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'], // 引用组件、类库、框架类代码bundle webpack生成代码bundle
      minChunks: Infinity
    })
  ]
}