const typing = document.getElementById('writing').innerHTML
const typingContact = document.getElementById('contact-text').innerHTML
const consoleText = document.getElementById('console-txt').innerHTML
var cursor = true

const typeWriter = (message, container) => {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function load () {
        await timer(200)
        for (var i = 0; i < message.length; i++) {
            document.getElementById(container).innerHTML += message.charAt(i)
            await timer(35)
        }
    }
    load()
}

const typeWriterShow = (message, container, show) => {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function load () {
        await timer(200)
        for (var i = 0; i < message.length; i++) {
            document.getElementById(container).innerHTML += message.charAt(i)
            await timer(35)
            if(i == message.length - 1){
                await timer(200)
                document.getElementById(show).style.display = 'inline'
                document.getElementById(show).classList.add('zoom-in')
            }
        }
    }
    load()
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

const dropdown = () => {
    const dropdown = document.getElementById('dropdown')
    const content = document.getElementById('dropdown-content')
    dropdown.addEventListener('click', () => {
        content.classList.toggle('open')
    })
}

const contact = () => {
    const contact = document.getElementById('contact')
    contact.addEventListener('click', () => {
        const contactContent = document.getElementById('contact-content')
        contactContent.classList.add('display-show')
        document.getElementById('console-txt').innerHTML = consoleText + contactContent.innerHTML
        document.getElementById('console-txt').appendChild(document.getElementById('cursor'))
        document.getElementById('contact-text').innerHTML = ""
        typeWriterShow(typingContact, 'contact-text', 'contact-form')
    })
}

const home = () => {
    const home = document.getElementById('home')
    home.addEventListener('click', () => {
        console.log('Testing home tab')
        window.location.reload()
    })
}

const removeDropdown = () => {
    const dropdown = document.getElementById('dropdown')
    const content = document.getElementById('dropdown-content')
    document.addEventListener('click', function(event) {
        const clickDropdown = dropdown.contains(event.target)
        if (!clickDropdown) {
            content.classList.remove('open')
        }
    })
}

window.onload = () => {
    document.getElementById('writing').innerHTML = ""
    typeWriter(typing, 'writing')
    cursorBlink()
    dropdown()
    removeDropdown()
    contact()
    home()
}