
const result = document.querySelector('.random');
const generated = document.querySelector('.generated');
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const sum = document.querySelector('.sum');
const mean = document.querySelector('.mean');
const mproduct = document.querySelector('.product');

let numbers = [];
function Random() {
    numbers.push(Math.round((Math.random()*10)));
    generated.innerHTML = `Сгенерировано: ${numbers}`;

};

