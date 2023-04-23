let toggle = document.querySelector('#toggle');
let box = document.querySelectorAll('.box');
let box2 = document.querySelectorAll('.box2');
let label = document.querySelector('label');

toggle.addEventListener('click', () => {
    $("body").toggleClass('lightMode');
    $(box).toggleClass('lightMode');
    $(box2).toggleClass('lightMode');
    
    $(label).toggleClass('active');
    $(label).toggleClass('lightMode');
})