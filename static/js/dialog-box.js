// noinspection JSUnusedGlobalSymbols

// 警告框默认图标
const warn_dialog_box_default_svg = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>`
// 确认框默认图标
const confirm_dialog_box_default_svg = `<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 62C263.5 62 62 263.5 62 512s201.5 450 450 450 450-201.5 450-450S760.5 62 512 62z m258.1 333.2l-291 291c-15.8 15.9-41.6 16-57.5 0.1l-0.1-0.1L254.4 519c-15.2-16.6-14.2-42.4 2.4-57.6 15.6-14.3 39.6-14.3 55.2 0l138.3 138.5 262.2-262.3c15.2-16.6 41-17.6 57.6-2.4s17.6 41 2.4 57.6c-0.8 0.9-1.6 1.7-2.4 2.4z" fill="#ffffff" class="selected"></path></svg>`
// 提示框默认图标
const prompt_dialog_box_default_svg = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M187.732004 156.526779c-13.330296-13.331627-34.948251-13.331627-48.263899 0-13.335622 13.326301-13.335622 34.937598 0 48.274552l48.263899 48.263899c13.331627 13.331627 34.933604 13.331627 48.269226 0 13.326301-13.326301 13.326301-34.932272 0-48.263899L187.732004 156.526779 187.732004 156.526779 187.732004 156.526779zM836.261339 156.526779l-48.269226 48.274552c-13.326301 13.331627-13.326301 34.937598 0 48.263899 13.315648 13.331627 34.932272 13.331627 48.269226 0l48.258573-48.263899c13.336953-13.336953 13.336953-34.942925 0-48.274552C871.194942 143.200478 849.592966 143.200478 836.261339 156.526779L836.261339 156.526779 836.261339 156.526779zM102.402665 426.66267 34.139994 426.66267C15.28903 426.66267 0.002666 441.945039 0.002666 460.789345c0 18.854958 15.28237 34.137328 34.137328 34.137328l68.262672 0c18.850963 0 34.132002-15.28237 34.132002-34.137328C136.534667 441.945039 121.253629 426.66267 102.402665 426.66267L102.402665 426.66267 102.402665 426.66267zM989.85468 426.66267l-68.264003 0c-18.849632 0-34.137328 15.28237-34.137328 34.126675 0 18.854958 15.286364 34.137328 34.137328 34.137328l68.264003 0c18.849632 0 34.142654-15.28237 34.142654-34.137328C1023.997334 441.945039 1008.704312 426.66267 989.85468 426.66267L989.85468 426.66267 989.85468 426.66267zM477.862672 34.132002l0 68.264003c0 18.854958 15.28237 34.13067 34.132002 34.13067 18.844306 0 34.137328-15.275712 34.137328-34.13067L546.132002 34.132002C546.132002 15.28237 530.838979 0 511.994674 0 493.145042 0 477.862672 15.28237 477.862672 34.132002L477.862672 34.132002 477.862672 34.132002zM273.066668 511.992008c0-131.955413 106.967267-238.928006 238.928006-238.928006 131.960739 0 238.933332 106.972593 238.933332 238.928006 0 131.960739-106.972593 238.937327-238.933332 238.937327C380.033935 750.929335 273.066668 643.951415 273.066668 511.992008L273.066668 511.992008 273.066668 511.992008zM204.803996 511.992008c0 169.675982 137.525348 307.211982 307.190677 307.211982S819.190677 681.667989 819.190677 511.992008c0-169.665329-137.530675-307.190677-307.196004-307.190677S204.803996 342.326679 204.803996 511.992008L204.803996 511.992008 204.803996 511.992008zM443.730671 989.862667c0 18.838979 15.28237 34.137328 34.132002 34.137328l68.269329 0c18.849632 0 34.132002-15.297017 34.132002-34.137328 0-18.860284-15.28237-34.132002-34.132002-34.132002l-68.269329 0C459.01304 955.730665 443.730671 971.002382 443.730671 989.862667L443.730671 989.862667 443.730671 989.862667zM375.467999 887.466662c0 18.834985 15.281038 34.132002 34.126675 34.132002l204.799999 0c18.849632 0 34.132002-15.297017 34.132002-34.132002 0-18.865611-15.28237-34.142654-34.132002-34.142654L409.594674 853.324008C390.743711 853.325339 375.467999 868.601051 375.467999 887.466662L375.467999 887.466662 375.467999 887.466662zM375.467999 887.466662" fill="#ffffff"></path></svg>`
// 警告消息框声音
const warn_dialog_box_sound = document.getElementById('dialog-box-sound')
// 消息框音效
const dialog_box_sound = document.getElementById('hover-sound');
// 警告提示框类
// noinspection DuplicatedCode
export class WarnDialogBox {
    constructor(message = '这是一个警告框', title = '警告', icon = warn_dialog_box_default_svg, buttons = [ '取消', '确定' ], use_mask = true) {
        this.bind_confirm = (callback) => {this._confirm_callback = callback}
        this.bind_cancel = (callback) => {this._cancel_callback = callback}
        // noinspection JSUnusedLocalSymbols
        this._cancel_callback = event => {this.close()}
        // noinspection JSUnusedLocalSymbols
        this._confirm_callback = event => {}
        const warn_dialog_box = document.createElement('div')
        warn_dialog_box.classList.add('warn_dialog_box')

        const warn_dialog_box__header = document.createElement('div')
        warn_dialog_box__header.classList.add('warn_dialog_box__header')
        warn_dialog_box__header.innerHTML = `<div class="warn_dialog_box__icon">${icon}</div><div class="warn_dialog_box__alert">${title}</div>`

        const warn_dialog_box__message = document.createElement('div')
        warn_dialog_box__message.classList.add('warn_dialog_box__message')
        warn_dialog_box__message.innerHTML = message

        const warn_dialog_box__actions = document.createElement('div')
        warn_dialog_box__actions.classList.add('warn_dialog_box__actions')

        const warn_dialog_box__button_cancel = document.createElement('a')
        warn_dialog_box__button_cancel.classList.add('warn_dialog_box__button')
        warn_dialog_box__button_cancel.classList.add('warn_dialog_box__button--cancel')
        warn_dialog_box__button_cancel.innerText = buttons[0]
        warn_dialog_box__button_cancel.addEventListener('click', event => {this._cancel_callback(event)})

        const warn_dialog_box__button_confirm = document.createElement('a')
        warn_dialog_box__button_confirm.classList.add('warn_dialog_box__button')
        warn_dialog_box__button_confirm.classList.add('warn_dialog_box__button--confirm')
        warn_dialog_box__button_confirm.innerText = buttons[1]
        warn_dialog_box__button_confirm.addEventListener('click', event => {this._confirm_callback(event)})
        warn_dialog_box__actions.appendChild(warn_dialog_box__button_confirm)
        warn_dialog_box__actions.appendChild(warn_dialog_box__button_cancel)

        warn_dialog_box.appendChild(warn_dialog_box__header)
        warn_dialog_box.appendChild(warn_dialog_box__message)
        warn_dialog_box.appendChild(warn_dialog_box__actions)

        this.title_Element = warn_dialog_box__header
        this.message_Element = warn_dialog_box__message
        this.icon = icon
        this.cancel_Button_Element = warn_dialog_box__button_cancel
        this.confirm_Button_Element = warn_dialog_box__button_confirm

        // 遮罩蒙版
        this.mask_container = document.createElement('div')
        this.mask_container.classList.add('dialog-mask-container')
        this.mask = document.createElement('div')
        this.mask.classList.add('dialog-mask')
        if (!use_mask){this.mask.style.opacity = '0';this.mask_container.style.pointerEvents = 'none'}
        this.mask_container.appendChild(this.mask)
        this.mask_container.appendChild(warn_dialog_box)

        this.mask.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
        })
        warn_dialog_box.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
        })

        this.Element = warn_dialog_box
        this.mask_container.classList.add('dialog-close')
        document.body.appendChild(this.mask_container)
        setTimeout(() => {this.mask_container.classList.remove('dialog-close');if (warn_dialog_box_sound){warn_dialog_box_sound.play()}}, 50)
    }
    close(){
        this.mask_container.classList.add('dialog-close')
        setTimeout(()=>{this.mask_container.remove();delete this},250)
    }
}


// 输入框
export class InputDialogBox {
    constructor(message = '这是输入说明', title = '输入框标题', buttons = [ '确定', '提交' ], options = { type: 'text', placeholder: '请输入', value: '' }, use_mask = true) {
        this.bind_submit = (callback) => {this._submit_callback = callback}
        // noinspection JSUnusedLocalSymbols
        this._submit_callback = event => {}
        const input_dialog_box = document.createElement('div')
        input_dialog_box.classList.add('input_dialog_box')

        const input_dialog_box__title = document.createElement('span')
        input_dialog_box__title.classList.add('input_dialog_box__title')
        input_dialog_box__title.innerText = title

        const input_dialog_box__content = document.createElement('p')
        input_dialog_box__content.classList.add('input_dialog_box__content')
        input_dialog_box__content.innerHTML = message

        const input_dialog_box__form = document.createElement('span')
        input_dialog_box__form.classList.add('input_dialog_box__form')

        const input_dialog_box__input = document.createElement('input')
        input_dialog_box__input.setAttribute('type', options.type)
        input_dialog_box__input.setAttribute('placeholder', options.placeholder)
        input_dialog_box__input.setAttribute('value', options.value)

        const input_dialog_box__button = document.createElement('button')
        input_dialog_box__button.classList.add('input_dialog_box__button')
        input_dialog_box__button.innerText = buttons[0]
        input_dialog_box__button.setAttribute('data-button-text', buttons[1])
        input_dialog_box__button.addEventListener('click', event => {this._submit_callback(event)})

        input_dialog_box__form.appendChild(input_dialog_box__input)
        input_dialog_box__form.appendChild(input_dialog_box__button)
        input_dialog_box.appendChild(input_dialog_box__title)
        input_dialog_box.appendChild(input_dialog_box__content)
        input_dialog_box.appendChild(input_dialog_box__form)

        this.title_Element = input_dialog_box__title
        this.message_Element = input_dialog_box__content
        this.input_Element = input_dialog_box__input
        this.button_Element = input_dialog_box__button

        // 遮罩蒙版
        this.mask_container = document.createElement('div')
        this.mask_container.classList.add('dialog-mask-container')
        this.mask = document.createElement('div')
        this.mask.classList.add('dialog-mask')
        this.mask_container.appendChild(this.mask)
        this.mask_container.appendChild(input_dialog_box)
        // 默认右键关闭自己
        this.mask.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
            this.close()
        })
        input_dialog_box.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
            this.close()
        })
        if (!use_mask){this.mask.style.opacity = '0';this.mask_container.style.pointerEvents = 'none'}
        this.Element = input_dialog_box
        this.mask_container.classList.add('dialog-close')
        setTimeout(() => {this.mask_container.classList.remove('dialog-close');if (dialog_box_sound){dialog_box_sound.play()}}, 50)
        document.body.appendChild(this.mask_container)
    }
    close(){
        this.mask_container.classList.add('dialog-close')
        setTimeout(()=>{this.mask_container.remove()},250)
    }
}

// 提示框
// noinspection DuplicatedCode
export class PromptDialogBox {
    constructor(message = '这是一个提示框', title = '提示', icon = prompt_dialog_box_default_svg, buttons = [ '确定' ], use_mask = true) {

        this.bind_confirm = (callback) => {this._confirm_callback = callback}
        // noinspection JSUnusedLocalSymbols
        this._confirm_callback = event => {this.close()}
        const warn_dialog_box = document.createElement('div')
        warn_dialog_box.classList.add('warn_dialog_box')

        const warn_dialog_box__header = document.createElement('div')
        warn_dialog_box__header.classList.add('warn_dialog_box__header')
        warn_dialog_box__header.innerHTML = `<div class="warn_dialog_box__icon">${icon}</div><div class="warn_dialog_box__alert">${title}</div>`

        const warn_dialog_box__message = document.createElement('div')
        warn_dialog_box__message.classList.add('warn_dialog_box__message')
        warn_dialog_box__message.innerHTML = message

        const warn_dialog_box__actions = document.createElement('div')
        warn_dialog_box__actions.classList.add('warn_dialog_box__actions')

        const warn_dialog_box__button_confirm = document.createElement('a')
        warn_dialog_box__button_confirm.classList.add('warn_dialog_box__button')
        warn_dialog_box__button_confirm.classList.add('warn_dialog_box__button--confirm')
        warn_dialog_box__button_confirm.classList.add('confirm-box')
        warn_dialog_box__button_confirm.innerText = buttons[0]
        warn_dialog_box__button_confirm.addEventListener('click', event => {this._confirm_callback(event)})
        warn_dialog_box__actions.appendChild(warn_dialog_box__button_confirm)

        warn_dialog_box.appendChild(warn_dialog_box__header)
        warn_dialog_box.appendChild(warn_dialog_box__message)
        warn_dialog_box.appendChild(warn_dialog_box__actions)

        this.title_Element = warn_dialog_box__header
        this.message_Element = warn_dialog_box__message
        this.icon = icon
        this.confirm_Button_Element = warn_dialog_box__button_confirm

        // 遮罩蒙版
        this.mask_container = document.createElement('div')
        this.mask_container.classList.add('dialog-mask-container')
        this.mask = document.createElement('div')
        this.mask.classList.add('dialog-mask')
        if (!use_mask){this.mask.style.opacity = '0';this.mask_container.style.pointerEvents = 'none'}
        this.mask_container.appendChild(this.mask)
        this.mask_container.appendChild(warn_dialog_box)

        this.mask.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
        })
        warn_dialog_box.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
        })

        this.Element = warn_dialog_box
        this.mask_container.classList.add('dialog-close')
        setTimeout(() => {this.mask_container.classList.remove('dialog-close');if (dialog_box_sound){dialog_box_sound.play()}}, 50)
        document.body.appendChild(this.mask_container)
    }
    close(){
        this.mask_container.classList.add('dialog-close')
        setTimeout(()=>{this.mask_container.remove()},250)
    }
}
// 确认框
// noinspection DuplicatedCode
export class ConfirmDialogBox {
    constructor(message = '这是一个确认框', title = '确认吗', icon = confirm_dialog_box_default_svg, buttons = [ '取消', '确定' ], use_mask = true) {

        this.bind_confirm = (callback) => {this._confirm_callback = callback}
        this.bind_cancel = (callback) => {this._cancel_callback = callback}
        // noinspection JSUnusedLocalSymbols
        this._cancel_callback = event => {this.close()}
        // noinspection JSUnusedLocalSymbols
        this._confirm_callback = event => {}
        const warn_dialog_box = document.createElement('div')
        warn_dialog_box.classList.add('warn_dialog_box')

        const warn_dialog_box__header = document.createElement('div')
        warn_dialog_box__header.classList.add('warn_dialog_box__header')
        warn_dialog_box__header.innerHTML = `<div class="warn_dialog_box__icon">${icon}</div><div class="warn_dialog_box__alert">${title}</div>`

        const warn_dialog_box__message = document.createElement('div')
        warn_dialog_box__message.classList.add('warn_dialog_box__message')
        warn_dialog_box__message.innerHTML = message

        const warn_dialog_box__actions = document.createElement('div')
        warn_dialog_box__actions.classList.add('warn_dialog_box__actions')

        const warn_dialog_box__button_cancel = document.createElement('a')
        warn_dialog_box__button_cancel.classList.add('warn_dialog_box__button')
        warn_dialog_box__button_cancel.classList.add('warn_dialog_box__button--cancel')
        warn_dialog_box__button_cancel.classList.add('confirm-box')
        warn_dialog_box__button_cancel.innerText = buttons[0]
        warn_dialog_box__button_cancel.addEventListener('click', event => {this._cancel_callback(event)})

        const warn_dialog_box__button_confirm = document.createElement('a')
        warn_dialog_box__button_confirm.classList.add('warn_dialog_box__button')
        warn_dialog_box__button_confirm.classList.add('warn_dialog_box__button--confirm')
        warn_dialog_box__button_confirm.classList.add('confirm-box')
        warn_dialog_box__button_confirm.innerText = buttons[1]
        warn_dialog_box__button_confirm.addEventListener('click', event => {this._confirm_callback(event)})

        warn_dialog_box__actions.appendChild(warn_dialog_box__button_confirm)
        warn_dialog_box__actions.appendChild(warn_dialog_box__button_cancel)

        warn_dialog_box.appendChild(warn_dialog_box__header)
        warn_dialog_box.appendChild(warn_dialog_box__message)
        warn_dialog_box.appendChild(warn_dialog_box__actions)

        this.title_Element = warn_dialog_box__header
        this.message_Element = warn_dialog_box__message
        this.icon = icon
        this.cancel_Button_Element = warn_dialog_box__button_cancel
        this.confirm_Button_Element = warn_dialog_box__button_confirm
        // 遮罩蒙版
        this.mask_container = document.createElement('div')
        this.mask_container.classList.add('dialog-mask-container')
        this.mask = document.createElement('div')
        this.mask.classList.add('dialog-mask')
        if (!use_mask){this.mask.style.opacity = '0';this.mask_container.style.pointerEvents = 'none'}
        this.mask_container.appendChild(this.mask)
        this.mask_container.appendChild(warn_dialog_box)
        this.mask.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
        })
        warn_dialog_box.addEventListener('contextmenu', event => {
            event.preventDefault()
            event.stopPropagation()
        })

        this.Element = warn_dialog_box
        this.mask_container.classList.add('dialog-close')
        document.body.appendChild(this.mask_container)
        setTimeout(() => {this.mask_container.classList.remove('dialog-close');if (dialog_box_sound){dialog_box_sound.play()}}, 50)
    }
    close(){
        this.mask_container.classList.add('dialog-close')
        setTimeout(()=>{this.mask_container.remove()},250)
    }
}
// 单择框

// 多择框