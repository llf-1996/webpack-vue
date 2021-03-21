const path = require('path')
const webpack = require('webpack')  // 启用热更新第2步
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/main.js'),
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: true,  // 启用热更新第1步
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),  // 启用热更新第3步
    new htmlWebpackPlugin({
      // 模板文件位置
      template: path.join(__dirname, './src/index.html'),
      // 内存中生成的html文件
      filename: 'index.html'
    })
  ],
  // 这个节点用于配置所有第三方模块加载器
  module: {
    // 所有第三方模块的匹配规则
    rules: [
      // 配置处理.css文件的第三方loader规则
      {test: /\.css$/, use: ['style-loader', 'css-loader']},  // 从右到左调用
      // 配置处理.less文件的第三方loader规则
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      // 配置处理.scss文件的第三方loader规则
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
      // 配置处理图片文件的第三方loader规则
      // limit参数表示图片小于8000字节转为base64格式的字符串
      // name参数指定文件名，默认文件名的hash值，使用原始文件名name=[name].[ext]
      {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=8000&name=[hash:8]-[name].[ext]'},
      // 配置处理字体文件的第三方loader规则
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},
      // 处理高级js
      {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
    ]
  },
  resolve: {
    alias: {
      // 设置vue被导入时候的包的路径
      'vue$': 'vue/dist/vue.js'
    }
  }
}
