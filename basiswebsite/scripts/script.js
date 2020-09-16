// JavaScript Document

// Variabelen
var hamMenu = document.querySelector('#hamburger_menu');
var header = document.querySelector('#header');
var upperUl = document.querySelector('header nav ul:first-of-type');
var ajaxLogo = document.querySelector('nav ul:first-of-type li:first-of-type img:first-of-type');
var ziggoLogo = document.querySelector('nav ul:first-of-type li:nth-of-type(3) img');
var adidasLogo = document.querySelector('nav ul:first-of-type li:nth-of-type(4) img');
var letterLogo = document.querySelector('nav ul:first-of-type li:first-of-type img:last-of-type'); 
var mainSection = document.querySelector('main section:first-of-type ul');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add('scroll');
      upperUl.classList.add('ulScroll');
      
      ajaxLogo.classList.add('ajaxScroll');
      
      ziggoLogo.classList.add('ziggoScroll');
      
      adidasLogo.classList.add('adidasScroll');
      
      letterLogo.style.borderRight = "0px";
      
      mainSection.style.margin = "6em 0 0";
      
      
    
  } else {
    header.classList.remove('scroll');
    
      upperUl.classList.remove('ulScroll');
      
      ajaxLogo.classList.remove('ajaxScroll');
      
      ziggoLogo.classList.remove('ziggoScroll');
      
      adidasLogo.classList.remove('adidasScroll');
      
      letterLogo.style.borderRight = "1px solid white";
      
      mainSection.style.margin = "9.5em 0 0"
  }
}

// functie voor openen nav
function openMenu() {
    header.classList.toggle("fullpage");
}





hamMenu.addEventListener('click', openMenu);
