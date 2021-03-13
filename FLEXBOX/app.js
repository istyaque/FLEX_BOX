const btn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav-links');

btn.addEventListener('click', function(){
    nav.classList.toggle('showNav');
})