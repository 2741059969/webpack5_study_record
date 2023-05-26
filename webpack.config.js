const path = require('path')
//引入eslint插件
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    //输出文件夹
    path: path.resolve(__dirname, 'dist'),
    //输出文件名，可在前面指定文件夹
    filename: 'main.js',
    //  filename:"test/hello.js",
    //每次生成输出文件时删除之前的所有文件
    clean: true
  },
  mode: 'production',
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, 'src')
    })
  ],

  module: {
    rules: [
      //配置css loader,处理css资源，使其支持模块化导入
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.s[ac]ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'] },

      //处理js文件，高级语法编译
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: 'babel-loader'
      }
    ]
  }
}
