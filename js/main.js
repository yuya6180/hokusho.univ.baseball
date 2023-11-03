'use strict'

{
    window.onload = function () {
        var nav = document.getElementById('nav-wrapper');
        var hamburger = document.getElementById('js-hamburger');
        var blackBg = document.getElementById('js-black-bg');
    
        hamburger.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
        blackBg.addEventListener('click', function () {
            nav.classList.remove('open');
        });
    };

// tabumenu

const  menuItems=document.querySelectorAll('.menu li a');
const  contents=document.querySelectorAll('.content');

menuItems.forEach(clickedItem=>{
clickedItem.addEventListener('click',e=>{
    e.preventDefault();

      menuItems.forEach(item=>{
      item.classList.remove('active');
});
    clickedItem.classList.add('active');

    contents.forEach(content=>{
        content.classList.remove('active');
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
});
});
}