
const toggleMenu = () => {
menu.classList.toggle('menu--open');
console.log('menu toggle');
  
 };  

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu,);

const menuItems = document.querySelectorAll('li');
menuItems.forEach((currentValue) => {
  currentValue.addEventListener('mouseover', function(e){
      currentValue.style.color = "white";
      e.stopPropagation();
  })
  currentValue.addEventListener('mouseleave', function(e){
       currentValue.style.color = ("");   
  })
  
  });
  