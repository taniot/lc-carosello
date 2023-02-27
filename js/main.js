'use strict';

const imgs = ['01.jpg', '02.jpg', '03.jpg'];
const slider = document.querySelector('.slider');
let active = 0;


let itemsContent = '';

for (let i = 0; i < imgs.length; i++) {
    console.log(imgs[i]);
    itemsContent += `<div class="item"><img src="img/${imgs[i]}" alt=""></div>`
}


//slider.innerHTML += itemsContent;
slider.innerHTML = slider.innerHTML + itemsContent;
// document.querySelector('.item').classList.add('show');

//interattivita

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const items = document.querySelectorAll('.item');
items[active].classList.add('show');

console.log(items);

prev.addEventListener('click', function () {
    if(active > 0){
        items[active].classList.remove('show');
        active--;
        items[active].classList.add('show');
    }
});

next.addEventListener('click', function () {
    if(active < items.length - 1){
        console.log('incremento active');
        items[active].classList.remove('show');
        active++;
        items[active].classList.add('show');
    }
});


