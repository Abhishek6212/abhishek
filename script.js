document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', function () {
        menuButton.classList.toggle('active');
        menu.classList.toggle('show');
    });
});