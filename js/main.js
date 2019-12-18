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
const editorialThird = document.querySelector('.overlay__third')

editorialThirdButton.addEventListener('click', function(event) {
    if (editorialThird.classList.contains('open')) {
        editorialThird.classList.remove('open')
        nameThird.classList.remove('open')
        editorialThirdButton.textContent = 'Editorial'
    } else {
        editorialThird.classList.add('open')
        nameThird.classList.remove('open')
        // editorialThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})

const nameThirdButton = document.querySelector('a.name-third-btn')
const nameThird = document.querySelector('.names-third')

nameThirdButton.addEventListener('click', function(event) {
    if (nameThird.classList.contains('open')) {
        nameThird.classList.remove('open')
        editorialThird.classList.remove('open')
        // nameThirdButton.textContent = 'Mit Texten von'
    } else {
        nameThird.classList.add('open')
        editorialThird.classList.remove('open')
        // nameThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})


const editorialSecondButton = document.querySelector('a.editorial-second-btn')
const editorialSecond = document.querySelector('.overlay__second')

editorialSecondButton.addEventListener('click', function(event) {
    if (editorialSecond.classList.contains('open')) {
        editorialSecond.classList.remove('open')
        nameSecond.classList.remove('open')
        // editorialSecond.textContent = 'Editorial'
    } else {
        editorialSecond.classList.add('open')
        nameSecond.classList.remove('open')
        // editorialThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})

const nameSecondButton = document.querySelector('a.name-second-btn')
const nameSecond = document.querySelector('.names-second')

nameSecondButton.addEventListener('click', function(event) {
    if (nameSecond.classList.contains('open')) {
        nameSecond.classList.remove('open')
        editorialSecond.classList.remove('open')
        // nameSecondButton.textContent = 'Mit Texten von'
    } else {
        nameSecond.classList.add('open')
        editorialSecond.classList.remove('open')
        // nameThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})


const editorialFirstButton = document.querySelector('a.editorial-first-btn')
const editorialFirst = document.querySelector('.overlay__first')

editorialFirstButton.addEventListener('click', function(event) {
    if (editorialFirst.classList.contains('open')) {
        editorialFirst.classList.remove('open')
        nameFirst.classList.remove('open')
        // editorialSecond.textContent = 'Editorial'
    } else {
        editorialFirst.classList.add('open')
        nameFirst.classList.remove('open')
        // editorialThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})

const nameFirstButton = document.querySelector('a.name-first-btn')
const nameFirst = document.querySelector('.names-first')

nameFirstButton.addEventListener('click', function(event) {
    if (nameFirst.classList.contains('open')) {
        nameFirst.classList.remove('open')
        editorialFirst.classList.remove('open')
        // nameSecondButton.textContent = 'Mit Texten von'
    } else {
        nameFirst.classList.add('open')
        editorialFirst.classList.remove('open')
        // nameThirdButton.textContent = 'Schließen'
    }

    event.preventDefault();  
})

