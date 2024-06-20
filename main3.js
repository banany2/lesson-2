const btnForce = document.getElementById('btn')
let newColor = false
btnForce.addEventListener('click', () => {
    if(newColor) {
        btnForce.style.color = 'red'
    } else {
        btnForce.style.color = 'green'
    }
    newColor = !newColor
})