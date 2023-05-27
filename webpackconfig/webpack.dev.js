const path = require('path')
//引入eslint插件
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
//引入html插件自动生成html文件并引入js
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  //入口文件不需要改，因为相对路径是根据运行命令的
  entry: './src/index.js',
  output: {
    //输出文件夹,开发模式没有打包输出目录可以省略
    // path: path.resolve(__dirname, '../dist'),
    path: undefined,
    //输出文件名，可在前面指定文件夹
    filename: 'static/js/main.js'
    //  filename:"test/hello.js",
    //开发模式没有输出目录不需要清除
    // //每次生成输出文件时删除之前的所有文件
    // clean: true
  },
  //生产模式下这个配置没有用,开发模式下才有用且注意运行指令发生了变化，加上serve,不加serve则不会启动服务器，而是以开发模式打包生成
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '3000', // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    hot: true // 开启HMR功能（只能用于开发环境，生产环境不需要了）这个没啥用还是不能支持jsHMR，而css自动支持了
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, '../src')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    })
  ],

  module: {
    rules: [
      {
        oneOf: [
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
          },
          //处理图片资源
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
              }
            },
            generator: {
              // 将图片文件输出到 static/imgs 目录中
              // 将图片文件命名 [hash:8][ext][query]
              // [hash:8]: hash值取8位
              // [ext]: 使用之前的文件扩展名
              // [query]: 添加之前的query参数
              filename: 'static/imgs/[hash:8][ext][query]'
            }
          },
          //处理字体资源视频资源
          {
            test: /\.(ttf|woff2?|map4|map3|avi)$/,
            type: 'asset/resource',
            //设置生成的字体文件资源所在目录，不设置默认是直接在dist下面,图片资源也类似。
            generator: {
              filename: 'static/media/[hash:8][ext][query]'
            }
          }
        ]
      }
    ]
  }
}
