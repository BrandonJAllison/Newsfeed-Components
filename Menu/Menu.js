
const toggleMenu = () => {
menu.classList.toggle('menu--open');
console.log('menu toggle');
  
 };  

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu,);


  

  class ListItem {
    constructor(li) {
      this.li = li;
      this.li.addEventListener('mouseover',this.grow.bind(this));
      
      
      this.li.addEventListener('mouseout', this.normal.bind(this));
  
      
    }
    grow() {
      TweenMax.to(this.li, 2, {x:20, ease:Bounce.easeOut});
    }
    normal() {
      TweenMax.to(this.li, 2, { x:-20, ease:Bounce.easeOut});
    }
  }
  
  let menuLists = document.querySelectorAll('.menu ul li');
  //console.log(menuLists);
  
  menuLists.forEach(function(li){
    return new ListItem(li);
  });