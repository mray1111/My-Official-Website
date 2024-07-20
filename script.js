const navLinks = document.querySelector('.nav-links');
function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    if (navLinks.style.top === '10%') {
        navLinks.style.top = '-100%';
    } else {
        navLinks.style.top = '10%';
    }
}