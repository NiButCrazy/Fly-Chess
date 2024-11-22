import {background_svg} from "./background-svg.js";
function is_mobile() {
    // 判断是否为移动设备打开
    return !!(navigator.userAgent.match(/Mobi/i) ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/iPhone/i));
}
// 设定背景图片
const background_container = document.getElementById("background-svg-container");
background_container.innerHTML = background_svg;
// 加载圆圈
const loading_container = document.getElementById("loading");
const iframe_container = document.getElementById("iframe-container");

// 加载完成回调函数
function iframe_onload() {
    document.title = "欢迎游玩";
    background_container.style.bottom = "-100%";
    loading_container.style.opacity = "0";
    loading_container.style.visibility = "hidden";
    iframe_container.style.bottom = "0";
}
const menu_iframe = document.getElementById("iframe-container")
menu_iframe.onload = iframe_onload
// setTimeout(()=>{
//     if (is_mobile()){
//         menu_iframe.src = "menu-mobile.html"
//     }else {
//         menu_iframe.src = "menu-pc.html"
//     }
// },2000)
if (is_mobile()){
    menu_iframe.src = "../html/menu-mobile.html"
}else {
    menu_iframe.src = "../html/menu-pc.html"
}

