const change = document.getElementById('change')
const changeMenu = document.getElementById('changeButton')
const changeStyle = document.getElementById('changeStyle').children
let setColor = document.getElementById('color')
let setFont = document.getElementById('font')
let setWidth = document.getElementById('width')
let setHeight = document.getElementById('height')
let Font = document.getElementById('F')
let width = document.getElementById('W')
let height = document.getElementById('H')
let Options = document.getElementById('options')
let changedColor
let changedSize
let changedSizeH
let changedSizeW
let selectedOption


changeMenu.addEventListener('contextmenu', function (e) {
    e.preventDefault()
})
setColor.addEventListener('input', function () {
    changedColor = this.value
})
setFont.addEventListener('input', function () {
    Font.innerHTML = changedSize = this.value + 'px'
})
setWidth.addEventListener('input', function () {
    width.innerHTML = changedSizeW = this.value + 'px'
})
setHeight.addEventListener('input', function () {
    height.innerHTML = changedSizeH = this.value + 'px'
})
Options.addEventListener("change", function() {
    selectedOption = this.value
})


// зміна кольору тексту
tagsChange(changeStyle);
function tagsChange(elem){
    for (let j = 0; j < elem.length; j++) {
        const a = document.querySelectorAll(elem[j].innerHTML)
        elem[j].onclick = function () {
            a.forEach(i => {
                //CheckboxText.checked ? i.style.fontSize = RandomSize() : i.style.color = RandomColor()
                setStyle(i, selectedOption, 1)
            })
        }
        elem[j].addEventListener('contextmenu', function () {
            a.forEach(i => {
                //CheckboxText.checked ? i.style.fontSize = changedSize : i.style.color = changedColor
                setStyle(i, selectedOption)
            })
        })
    }
}
// функція для генерації рандомного кольору
function RandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// функція для зміни стилів
function setStyle(element, option, c) {
    if (c === 1) {
        switch (option) {
            case 'SizeText':
                return redact(element, 'fontSize', RandomSize())
            case 'TextColor':
                return redact(element, 'color', RandomColor())
            case 'BackgroundColor':
                return redact(element, 'background', RandomColor())
            case 'SizeElement':
                return redact(element, 'cssText', `width: ${RandomSize()}; height: ${RandomSize()};` )
        }
    }
    else {
        switch (option) {
            case 'SizeText':
                return redact(element, 'fontSize', changedSize)
            case 'TextColor':
                return redact(element, 'color', changedColor)
            case 'BackgroundColor':
                return redact(element, 'background', changedColor)
            case 'SizeElement':
                return redact(element, 'cssText', `width: ${changedSizeW}; height: ${changedSizeH};`)
        }
    }
}
// функція для зміни стилів
function redact (element, option, value) {
    return element.style[option] = value
}
function RandomSize(){
    return Math.floor(Math.random() * 52) + 'px'
}
// кнопка активації меню зміни
const changeName = change.innerHTML
change.ondblclick = function() {
    changeMenu.style.display = 'flex'
    change.innerHTML = "click to close"
}
change.onclick = function() {
    changeMenu.style.display = 'none'
    change.innerHTML = changeName
}




