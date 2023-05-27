//减小代码体积
// Tree Shaking
// #为什么
// 开发时我们定义了一些工具函数库，或者引用第三方工具函数库或组件库。
// 如果没有特殊处理的话我们打包时会引入整个库，但是实际上可能我们可能只用上极小部分的功能。
// 这样将整个库都打包进来，体积就太大了。
// #是什么
// Tree Shaking 是一个术语，通常用于描述移除 JavaScript 中的没有使用上的代码。
// 注意：它依赖 ES Module。
// #怎么用
// Webpack 已经默认开启了这个功能，无需其他配置。

// #Babel
// 为什么
// Babel 为编译的每个文件都插入了辅助代码，使代码体积过大！
// Babel 对一些公共方法使用了非常小的辅助代码，比如 _extend。默认情况下会被添加到每一个需要它的文件中。
// 你可以将这些辅助代码作为一个独立模块，来避免重复引入。
// #是什么
// @babel/plugin-transform-runtime: 禁用了 Babel 自动对每个文件的 runtime 注入，而是引入 @babel/plugin-transform-runtime 并且使所有辅助代码从这里引用。
// #怎么用
// npm i @babel/plugin-transform-runtime -D
console.log('webpack 高级 减小代码体积')
