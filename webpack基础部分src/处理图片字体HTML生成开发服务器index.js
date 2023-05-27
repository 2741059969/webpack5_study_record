//引入包含图片的样式
import './stylefiles/box5_image.css'
//引入包含字体类的样式文件
//引入了html-webpack插件
//引入了开发服务器，当你使用开发服务器时，所有代码都会在内存中编译打包，并不会输出到 dist 目录下。
import './fontsresource/iconfont.css'
let box = document.createElement('div')
box.classList.add('box5')
// box.innerHTML = 'hello world'
document.body.appendChild(box)
//改动js文件会导致页面整体刷新，而改动CSS文件不会导致全部刷新，局部更新，因为style-loader内置了HMR功能
console.log('prod hello')
