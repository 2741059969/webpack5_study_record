console.log('hello webpack 高级部分')
//提升开发体验方便查找代码出错位置
import './box.css'
function hel() {
  console.log(123)
}
let btn = document.getElementById('btn')
btn.addEventListener('click', function () {
  hel()
})
