'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const navBar = document.querySelector('.nav_bar');
  const menuBtns = document.querySelector('.menu_btns');
  const open = document.getElementById('open');
  const close = document.getElementById('close');

  const openMenu = () => {
    open.style.display = 'none';
    close.style.display = 'block';
    main.classList.add('modal');
    footer.classList.add('modal');
    navBar.classList.add('active');
  }
  const closeMenu = () => {
    open.style.display = 'block';
    close.style.display = 'none';
    main.classList.remove('modal');
    footer.classList.remove('modal');
    navBar.classList.remove('active');
  }

  menuBtns.addEventListener('click', () => {
    if (navBar.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  let resizing = null;
  window.onresize = () => {
    resizing = true;
  }
  setInterval(() => {
    if (navBar.classList.contains('active') && resizing && window.innerWidth >= 780) {
      resizing = false;
      closeMenu();
    };
  }, 300);

  window.onclick = (event) => {
    if (event.target.closest('.modal')) {
      closeMenu();
    }
  };

});