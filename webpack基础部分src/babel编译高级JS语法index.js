//babel编译，把高级语法编译成低级语法兼容浏览器版本
//需要安装以下：
// npm i babel-loader @babel/core @babel/preset-env -D
let foo = () => {
  console.log('hello')
  let aa = (arr) => {
    return arr.reduce((p, c) => p + c, 0)
  }
  console.log(aa([3, 4, 1, 9]))
}

foo()
