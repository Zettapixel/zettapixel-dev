var i = 0
var consoleText = document.getElementById('writing').innerHTML
var cursor = true

function typeWriter() {
    if (i < consoleText.length) {
        document.getElementById('writing').innerHTML += consoleText.charAt(i)
        i++
        setTimeout(typeWriter, 35)
    }
}

const cursorBlink = () => {
    setInterval(() => {
        if(cursor) {
            document.getElementById('cursor').style.opacity = 0
            cursor = false
        }else {
            document.getElementById('cursor').style.opacity = 1
            cursor = true
        }
    }, 400)
}

window.onload = () => {
    document.getElementById('writing').innerHTML = ""
    typeWriter()
    cursorBlink()
}