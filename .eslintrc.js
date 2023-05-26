module.exports = {
  // 解析选项
  parserOptions: {
    ecmaVersion: 6, // ES 语法版本
    sourceType: 'module' // ES 模块化
    // ecmaFeatures: { // ES 其他特性
    //   jsx: true // 如果是 React 项目，就需要开启 jsx 语法
    // }
  },
  // 具体检查规则
  rules: {},
  // 继承其他规则
  extends: ['eslint:recommended'],
  env: {
    node: true, // 启用node中全局变量
    browser: true // 启用浏览器中全局变量
  }
}
