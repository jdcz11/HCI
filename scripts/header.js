function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

var homeLink = document.querySelector('a[href="#home"]');
var noticiasLink = document.querySelector('a[href="#noticias"]');
var pokedexLink = document.querySelector('a[href="#pokédex"]');
var contactoLink = document.querySelector('a[href="#contacto"]');

homeLink.addEventListener('click', function () {
    scrollToSection('home');
});

noticiasLink.addEventListener('click', function () {
    scrollToSection('noticias');
});

pokedexLink.addEventListener('click', function () {
    scrollToSection('pokédex');
});

contactoLink.addEventListener('click', function () {
    scrollToSection('contacto');
});
