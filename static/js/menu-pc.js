import {PromptDialogBox, InputDialogBox, WarnDialogBox, ConfirmDialogBox} from './dialog-box.js'
const welcome = new PromptDialogBox('欢迎游玩飞行棋','初次见面')
welcome.bind_confirm(event => {
    if (bg_music_state === 'true'){
        bg_music.play()
    }
    welcome.close()
})
// 顶层打开的UI
let top_open_ui = null;
// 按钮hover音效
const hover_sound = document.getElementById('hover-sound');
// 按钮按下音效
const press_sound = document.getElementById('press-sound');
press_sound.volume = 0.2;
// 背景音乐
const bg_music = document.getElementById('bg-music');

bg_music.volume = localStorage.getItem('bg_music_volume') || 0.5;
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
// 关于卡片的容器
const  about_container = document.querySelector('.about-container');
// 关于按钮
const about_btn = document.getElementById('about-btn');
// 绑定一个隐藏关于卡片的函数
function toggle_about_card() {about_container.classList.toggle('hidden');}
about_btn.addEventListener('click', toggle_about_card)
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
const menu_play_container = document.getElementById('menu-play-container');

// 设置按钮
const button_setting = document.getElementById('button-setting');
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
const volume_control = document.getElementById('volume-control');
/**
 * 音量控制
 * @type {HTMLInputElement}
 */
const volume_level = document.getElementById('volume-level');
volume_level.value = JSON.parse(localStorage.getItem('bg_music_volume')) * 100 + "" || '50';
volume_level.addEventListener('input', event=> {
    bg_music.volume = volume_level.value / 100;
})
volume_level.addEventListener('change', event=> {
    const bg_music_volume = volume_level.value / 100 + '';
    localStorage.setItem('bg_music_volume', bg_music_volume);
})

// noinspection JSUnusedLocalSymbols
toggle_bg_music.addEventListener('click', event=> {
    if (toggle_bg_music.checked) {
        bg_music.play();
        volume_control.classList.add('show')
        localStorage.setItem('bg_music', 'true');
    }else {
        bg_music.pause();
        volume_control.classList.remove('show')
        localStorage.setItem('bg_music', 'false');
    }
})
const bg_music_state = localStorage.getItem('bg_music')
if (bg_music_state === 'true'){
    toggle_bg_music.checked = true;
    volume_control.classList.add('show')
}
/**
 * 全屏切换按钮
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
// 获取当前时间
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}
/**
 * 自动夜间模式切换按钮
 * @type {HTMLInputElement}
 */
const toggle_auto_night_btn = document.getElementById('toggle-dark-theme');
// noinspection JSUnusedLocalSymbols
toggle_auto_night_btn.addEventListener('click', event=> {
    if (toggle_auto_night_btn.checked) {
        let auto_dark_time = JSON.parse(localStorage.getItem('auto_dark_time'))
        if (!auto_dark_time){
            auto_dark_time = ['08:00', '20:00']
        }
        const time_selected = new ConfirmDialogBox(
            `<label for="appointment-time">结束</label>
            <input type="time" id="appointment-time1" class="time-selected" name="appointment-time1" value="${auto_dark_time[0]}">
            <br>
            <label for="appointment-time2">开始</label>
            <input type="time" id="appointment-time2" class="time-selected" name="appointment-time2" value="${auto_dark_time[1]}">`,
            '设置持续时间',
            undefined,
            ['取消', '更改']
        )
        time_selected.bind_confirm(event => {
            const setting_auto_dark_time = [
                document.getElementById('appointment-time1').value,
                document.getElementById('appointment-time2').value
            ]
            localStorage.setItem('auto_dark_time', JSON.stringify(setting_auto_dark_time))
            const current_time = getCurrentTime()
            if (current_time >= setting_auto_dark_time[1] || current_time <= setting_auto_dark_time[0]){theme_btn.click()}

            time_selected.close()
        })
        time_selected.bind_cancel(event => {
            toggle_auto_night_btn.checked = false
            time_selected.close()
        })
        localStorage.setItem('is_auto_dark_time', 'true')
    }else {localStorage.setItem('is_auto_dark_time', 'false')}
})

// 自动改变夜间模式
const is_auto_dark_time = localStorage.getItem('is_auto_dark_time')
const theme_btn = document.getElementById('themeToggle');
const auto_dark_time = JSON.parse(localStorage.getItem('auto_dark_time'))
const current_time = getCurrentTime()
if (is_auto_dark_time === 'true'){
    toggle_auto_night_btn.checked = true
    if (auto_dark_time !== null){
        if (current_time >= auto_dark_time[1] || current_time <= auto_dark_time[0]){
            window.addEventListener('load', ()=>{
                theme_btn.click()
            })
        }
    }
}else {
    toggle_auto_night_btn.checked = false
}
/* 名字输入框 */
/** 名字输入框
 * @type {HTMLInputElement} */
const player_name = document.getElementById('player-name')
player_name.value = localStorage.getItem('player_name') || ''
player_name.addEventListener('blur', event=>{
    localStorage.setItem('player_name', player_name.value)
})
