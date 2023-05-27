//webpack不指定模式默认是生产模式，webpack作用是模块化打包工具，只能处理js文件，把es6模块化语法转换成浏览器可识别的
import sum from './sum'
import sub from './sub'
console.log('hello');
let a=document.createElement('a')
a.innerHTML='点击我跳转百度'
a.href="http://www.baidu.com"

document.body.appendChild(a)
console.log(sum(1,2));
console.log(sub(5,1));
