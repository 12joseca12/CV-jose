const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('neon-effect');
    });

    link.addEventListener('mouseout', () => {
        link.classList.
        remove('neon-effect');
    });
});
