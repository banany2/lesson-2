let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')

btn1.addEventListener('click', function() {
    let newLink = prompt('Enter a new link')
    if (newLink) {
        newLinkSaved = newLink;
        alert('The link is saved');
    }
})

btn2.addEventListener('click', function() {
    if(newLinkSaved) {
        window.open(newLinkSaved)
    } else {
        alert('Enter a link.')
    }
})