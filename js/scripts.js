const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const password = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const msgTextarea = document.querySelector("#message")

const invalido = document.querySelector(".invalido")
const span = document.querySelector("span")

nameInput.addEventListener('keyup', () => {
    if (nameInput.value.length <= 2) {
        nameInput.setAttribute('style', 'border-color: red')
        span.className = span.className.replace('invalido', '')
        invalido.setAttribute('style', 'color: red')
    } else {
        nameInput.setAttribute('style', 'border-color: green')
        span.className = span.className.replace('', 'invalido')
    }
})

emailInput.addEventListener('keyup', () => {
    if (!isEmailValid(emailInput.value)) {
        emailInput.setAttribute('style', 'border-color: red')
    } else {
        emailInput.setAttribute('style', 'border-color: green')
    }
})
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{1,}$/
    )
    if (emailRegex.test(email)) {
        return true
    }

    return false;
}