
const result = document.querySelector('.result');
const firstName = document.querySelector('.first_name');
const secondName = document.querySelector('.second_name');
const thirdName = document.querySelector('.third_name');
const Name = document.getElementById('name').value;
let arrayNew = Name.split(",");
result.addEventListener('click', () => {
    let first = arrayNew [1];
    let second = arrayNew [0];
    let third = arrayNew [2];
    firstName.innerHTML = `Имя: ${first }`;
    secondName.innerHTML = `Фамилия: ${second }`;
    thirdName.innerHTML = `Отчество: ${third}`;
  });



