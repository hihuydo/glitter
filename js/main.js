const infoButton = document.querySelector('.header__info')
const infoBox = document.querySelector('.info-open')

infoButton.addEventListener('click', function () {
    if (infoBox.classList.contains('close')) {
        infoBox.classList.remove('close')
        infoButton.innerHTML = 'Info'
    } else {
        infoBox.classList.add('close')
        infoButton.innerHTML = 'Schließen'
    }
})



const editorialThirdButton = document.querySelector('a.editorial-third-btn')
const overlayThird = document.querySelector('.overlay__third')

editorialThirdButton.addEventListener('click', function(event) {
    if (overlayThird.classList.contains('open')) {
        overlayThird.classList.remove('open')
        editorialThirdButton.textContent = 'Editorial'
    } else {
        overlayThird.classList.add('open')
        editorialThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})

const nameThirdButton = document.querySelector('a.name-third-btn')

nameThirdButton.addEventListener('click', function(event) {
    if (overlayThird.classList.contains('open')) {
        overlayThird.classList.remove('open')
        nameThirdButton.textContent = 'Mit Texten von'
    } else {
        overlayThird.classList.add('open')
        nameThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})










const editorialSecondButton = document.querySelector('a.second-btn')
const secondOverlay = document.querySelector('.overlay__second')

editorialSecondButton.addEventListener('click', function(event) {
    if (secondOverlay.classList.contains('open')) {
        secondOverlay.classList.remove('open')
        editorialSecondButton.textContent = 'Editorial'
    } else {
        secondOverlay.classList.add('open')
        editorialSecondButton.textContent = 'Schließen'
    }

    event.preventDefault();
})

const editorialFirstButton = document.querySelector('a.first-btn')
const firstOverlay = document.querySelector('.overlay__first')

editorialFirstButton.addEventListener('click', function(event) {
    if (firstOverlay.classList.contains('open')) {
        firstOverlay.classList.remove('open')
        editorialFirstButton.textContent = 'Editorial'
    } else {
        firstOverlay.classList.add('open')
        editorialFirstButton.textContent = 'Schließen'
    }

    event.preventDefault();
})

