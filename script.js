let h1 = document.createElement('h1')


let text = prompt('ismingizni kiriting')
let textcolor = prompt('Text rangini kiriting')
let backgroundC = prompt('fon rangini kiriting')

let body = document.querySelector('body')  

body.appendChild(h1)


h1.textContent = text
h1.style.color = textcolor
body.style.backgroundColor = backgroundC
h1.style.marginLeft = '50%'
h1.style.marginTop = '50vh'

