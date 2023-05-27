const path = require('path')
//引入eslint插件
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
//引入html插件自动生成html文件并引入js
const HtmlWebpackPlugin = require('html-webpack-plugin')
//引入提取css为单独文件并通过link标签引入的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//引入压缩CSS的插件
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const TerserPlugin = require('terser-webpack-plugin')

//提取公共部分为函数
const getStyleLoaders = function (processor) {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      //处理CSS兼容问题
      options: {
        postcssOptions: {
          plugins: [
            'postcss-preset-env' // 能解决大多数样式兼容性问题
          ]
        }
      }
    },
    processor
  ].filter((v) => v)
}
module.exports = {
  entry: './src/index.js',
  output: {
    //输出文件夹
    path: path.resolve(__dirname, '../dist'),
    //输出文件名，可在前面指定文件夹
    filename: 'static/js/main.js',
    //  filename:"test/hello.js",
    //每次生成输出文件时删除之前的所有文件
    clean: true
  },
  mode: 'production',
  // devtool: 'source-map',
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, '../src')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    //提取成单独文件
    new MiniCssExtractPlugin({
      // 定义输出CSS文件名和目录
      filename: 'static/css/main.css'
    }),
    // css压缩
    new CssMinimizerPlugin()
  ],

  module: {
    rules: [
      //配置css loader,处理css资源，使其支持模块化导入
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders('sass-loader')
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders('stylus-loader')
      },

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
}
