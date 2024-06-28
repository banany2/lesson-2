let btnContainer = document.querySelector('.btn-container')
btnContainer.addEventListener('click', function() {
    if (event.target.tagName === 'BUTTON') {
        alert(`You clicked: ${event.target.textContent}`)
    }
})


