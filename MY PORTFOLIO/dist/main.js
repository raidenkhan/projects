const menuBtn=document.querySelector('.menu-btn');
const navItems=document.querySelectorAll('.navbar__item');
const burger =document.querySelector('.menu-btn__burger');
const nav =document.querySelector('nav')
const navBar =document.querySelector('.navbar')
let isVisible =false;
function toggleMenu(){
    if(!isVisible){
        burger.classList.add('invisible');
        navBar.classList.add('open');
        nav.classList.add('open')
        isVisible=true;
        for(const nav of navItems){
            nav.classList.add('open')
        }
        
    }else{
        burger.classList.remove('invisible');
        navBar.classList.remove('open');
        nav.classList.remove('open')
        isVisible=false;
        for(const nav of navItems){
            nav.classList.remove('open')
        }
        
    }

}
burger.addEventListener('click',toggleMenu);