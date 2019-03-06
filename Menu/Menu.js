
const toggleMenu = () => {
menu.classList.toggle('menu--open');
console.log('menu toggle');
  
 };  

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);

