import {ConfirmDialogBox, PromptDialogBox, InputDialogBox, WarnDialogBox} from './dialog-box.js'
new PromptDialogBox('欢迎游玩飞行棋','首次见面')
// 顶层打开的UI
let top_open_ui = null;
// 按钮hover音效
const hover_sound = document.getElementById('hover-sound');
// 按钮按下音效
const press_sound = document.getElementById('press-sound');
press_sound.volume = 0.2;
// 背景音乐
const bg_music = document.getElementById('bg-music');

bg_music.volume = 0.5;
// 版本号
const prompt = document.getElementById('prompt');
// 更新日志容器
const about_title = document.getElementById('about-title');
fetch('../../CHANGELOG.md')
    .then(response => response.text())
    .then(text => {
        // 使用 marked 解析 Markdown 文本
        // 将解析后的 HTML 插入到容器中
        // noinspection JSUnresolvedReference
        const new_html = marked.parse(text);
        // 使用正则表达式匹配第一个版本格式的字符串
        prompt.innerHTML = new_html.match(/\[(.*?)]/)[1]
        // noinspection JSUnresolvedReference
        about_title.innerHTML = new_html
    })
    .catch(error => {
        console.error('Error fetching or parsing the Markdown file:', error);
        about_title.innerHTML = '获取日志失败';
    });

// 硬性滚动内容
const canvas_container = document.querySelector('.canvas');
canvas_container.addEventListener('wheel', event=> {about_title.scrollTop += event.deltaY;})

const  about_container = document.querySelector('.about-container');
// 绑定一个隐藏关于卡片的函数
function toggle_about_card() {about_container.classList.toggle('hidden');}
// noinspection JSUnusedLocalSymbols
about_container.addEventListener('click', event=> {toggle_about_card()})

// 窗口检测鼠标右键
window.addEventListener('contextmenu', event=> {
    // 阻止默认菜单
    event.preventDefault();
    if (top_open_ui){
        top_open_ui.click();
        top_open_ui = null
    }
})

// 开始游戏按钮
const button_play = document.getElementById('button-play');
// 设置按钮
const button_setting = document.getElementById('button-setting');
const menu_play_container = document.getElementById('menu-play-container');
const menu_setting_container = document.getElementById('menu-setting-container');
// noinspection JSUnusedLocalSymbols
button_play.addEventListener('click', event=> {
    menu_play_container.classList.toggle('hidden');
    button_setting.classList.toggle('no-event')
    button_play.classList.toggle('selected');
    if (button_play.classList.contains('selected')){
        top_open_ui = button_play;
        press_sound.play()
    }else {
        top_open_ui = null
    }
})
// noinspection JSUnusedLocalSymbols
button_play.addEventListener('mouseenter', event=> {hover_sound.play()})
// noinspection JSUnusedLocalSymbols
button_setting.addEventListener('click', event=> {
    menu_setting_container.classList.toggle('hidden');
    button_play.classList.toggle('no-event');
    button_setting.classList.toggle('selected');
    top_open_ui = button_setting;
    if (button_setting.classList.contains('selected')){
        press_sound.play()
        top_open_ui = button_setting;
    }else {
        top_open_ui = null
    }
})
// noinspection JSUnusedLocalSymbols
button_setting.addEventListener('mouseenter', event=> {hover_sound.play()})

// 音乐切换按钮
const toggle_bg_music = document.getElementById('toggle-bg-music');
// noinspection JSUnusedLocalSymbols
toggle_bg_music.addEventListener('click', event=> {
    if (toggle_bg_music.checked) {
        bg_music.play();
    }else {
        bg_music.pause();
    }
})

/**
 * 背景音乐
 * @type {HTMLInputElement}
 */
const  toggle_fullscreen = document.getElementById('toggle-fullscreen');
// noinspection JSUnusedLocalSymbols
toggle_fullscreen.addEventListener('click', event=> {
    toggleFullscreen(document.body)
})

// 定义全屏切换函数
function toggleFullscreen(element) {
    if (!document.fullscreenElement && toggle_fullscreen.checked) {
        // 请求全屏
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else { // noinspection JSUnresolvedReference
            if (element.mozRequestFullScreen) { // Firefox
                element.mozRequestFullScreen();
            } else { // noinspection JSUnresolvedReference
                if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
                    element.webkitRequestFullscreen();
                } else { // noinspection JSUnresolvedReference
                    if (element.msRequestFullscreen) { // IE/Edge
                        element.msRequestFullscreen();
                    }
                }
            }
        }
    } else {
        // 退出全屏
        if (document.exitFullscreen) {
            // noinspection JSIgnoredPromiseFromCall
            document.exitFullscreen();
        } else { // noinspection JSUnresolvedReference
            if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else { // noinspection JSUnresolvedReference
                if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
                } else { // noinspection JSUnresolvedReference
                    if (document.msExitFullscreen) { // IE/Edge
                        document.msExitFullscreen();
                    }
                }
            }
        }
    }
}

