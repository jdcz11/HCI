const sections = document.querySelectorAll('section');
const navMenu = document.querySelector('.nav-menu');

function updateActiveMenuItem() {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const top = section.offsetTop - 50;

        if (scrollPosition >= top && scrollPosition < top + section.offsetHeight) {
            const menuItems = document.querySelectorAll('.nav-menu a');
            menuItems.forEach(item => {
                item.classList.remove('active');
                item.style.backgroundColor = '';
            });

            const currentTheme = getCurrentTheme();
            const themeColor = getThemeColor(currentTheme);

            menuItems[index].classList.add('active');
            menuItems[index].style.backgroundColor = themeColor;
        }
    });
}

function getCurrentTheme() {
    const body = document.body;
    if (body.classList.contains('tema-oscuro')) {
        return 'oscuro';
    } else if (body.classList.contains('tema-claro')) {
        return 'claro';
    } else {
        return 'predeterminado';
    }
}

function getThemeColor(theme) {
    if (theme === 'oscuro') {
        return 'darkorange';
    } else if (theme === 'claro') {
        return '#4682B4';
    } else {
        return '#778899';
    }
}

function resetMenuColors() {
    const menuItems = document.querySelectorAll('.nav-menu a');
    menuItems.forEach(item => {
        item.classList.remove('active');
        item.style.backgroundColor = '';
    });
}

function updateColorsOnThemeChange() {
    updateActiveMenuItem();
    setTimeout(resetMenuColors, 50); // Agregamos un pequeño retraso para dar tiempo a que se actualice el tema.
}

window.addEventListener('scroll', updateActiveMenuItem);
window.addEventListener('load', updateActiveMenuItem);

cambiarTemaBtn.addEventListener('click', updateColorsOnThemeChange);
