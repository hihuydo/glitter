const editorialSection = document.querySelector('section.editorial')
const editorialTag = document.querySelector('section.editorial h2')
const editorialCopyTag = document.querySelector('section.editorial div.copy')

editorialTag.addEventListener('click', function () {
    if (editorialSection.classList.contains('expand')) {
        editorialTag.innerHTML = 'Editorial'
        editorialSection.classList.remove('expand')
        editorialCopyTag.classList.remove('show')
    } else {
        editorialSection.classList.add('expand')
        editorialCopyTag.classList.add('show')
        editorialTag.innerHTML = 'Schliessen'
    }
    
})

const aboutSection = document.querySelector('section.about')
const aboutTag = document.querySelector('section.about h2')
const aboutCopyTag = document.querySelector('section.about div.copy')

aboutTag.addEventListener('click', function () {
    if (aboutSection.classList.contains('expand')) {
        aboutTag.innerHTML = 'Über Glitter'
        aboutSection.classList.remove('expand')
        aboutCopyTag.classList.remove('show')
    } else {
        aboutSection.classList.add('expand')
        aboutCopyTag.classList.add('show')
        aboutTag.innerHTML = 'Schliessen'
    }
    
})