const emailInput = document.getElementById('email')
const messageSpan = document.getElementById('messageError')
const nameErrorSpan = document.getElementById('nameError')
const nameInput = document.getElementById('name')
const textareaInput = document.getElementById('textarea')
const textareaErrorSpan = document.getElementById('textareaError')
const form = document.getElementById('myForm')
const phoneInput = document.getElementById('phone')
const phoneErrorSpan = document.getElementById('phoneError')

phoneInput.addEventListener('input', function(event) {
    const phoneValue = event.target.value
    if (phoneValue !== null && /^\+\d+$/.test(phoneValue) && phoneValue.length >= 10 && phoneValue.length <= 13 && phoneValue.includes('+')) {
        phoneErrorSpan.innerText = ''
    } else {
        phoneErrorSpan.style.color = 'red'
        phoneErrorSpan.innerText = 'Here must be 13 characters long and starts with +380'
    }
})

textareaInput.addEventListener('input', function(event) {
    const textareaValue = event.target.value
    if (textareaValue.length <= 5) {
        textareaErrorSpan.style.color = 'red'
        textareaErrorSpan.innerText = 'Here must be more than 5 characters'
    } else {
        textareaErrorSpan.innerText = ''
    }
})

nameInput.addEventListener('input', function(event) {
    const name = event.target.value
    if (name === '') {
        nameErrorSpan.style.color = 'red'
        nameErrorSpan.innerText = 'the name is required'
    } else {
        nameErrorSpan.style.color = ''
        nameErrorSpan.innerText = ''
    }
})

emailInput.addEventListener('input', function (event) {
    const email = event.target.value;
    if (email.includes('@') && email.includes('.')) {
        messageSpan.innerText = '';
    } else {
        messageSpan.style.color = 'red'
        messageSpan.innerText = 'Email must contain . and @'

    }

})

form.addEventListener('submit', function(event) {
    event.preventDefault()

    if (phoneErrorSpan.innerText !== '' || textareaErrorSpan.innerText !== '' || nameErrorSpan.innerText !== '' || messageSpan.innerText !== '') {
        console.log('Form submission prevented due to errors.');
        return;
    }


    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: textareaInput.value
    }
    console.log(formData)
})



