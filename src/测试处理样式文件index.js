import "./stylefiles/box.css"
let divbox=document.createElement('div')
divbox.classList.add("box")
document.body.appendChild(divbox)
import "./stylefiles/box1.less"
let divbox1=document.createElement('div')
divbox1.classList.add("box1")
document.body.appendChild(divbox1)

//注意处理sass资源时除了安装并配置sass-loader外还需要安装sass(经过测试只有sass需要额外安装这个),因为sass-loader依赖sass
import "./stylefiles/box2.sass"
let divbox2=document.createElement('div')
divbox2.classList.add("box2")
document.body.appendChild(divbox2)
import "./stylefiles/box3.scss"
let divbox3=document.createElement('div')
divbox3.classList.add("box3")
document.body.appendChild(divbox3)
import "./stylefiles/box4.styl"
let divbox4=document.createElement('div')
divbox4.classList.add("box4")
document.body.appendChild(divbox4)