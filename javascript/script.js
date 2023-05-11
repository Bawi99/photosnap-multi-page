'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const navBar = document.querySelector('.nav_bar');
    const menuBtns = document.querySelector('.menu_btns');
    const open = document.getElementById('open');
    const close = document.getElementById('close');

    menuBtns.addEventListener('click', (event) => {
        if (navBar.classList.contains('active')) {
            open.style.display = 'block';
            close.style.display = 'none';
            navBar.classList.remove('active');
        } else {
            open.style.display = 'none';
            close.style.display = 'block';
            navBar.classList.add('active');
        }
    });


});