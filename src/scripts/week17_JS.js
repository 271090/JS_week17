function check() {
  const result = document.querySelector('.result');

  const firstName = document.querySelector('.first_name');
  const secondName = document.querySelector('.second_name');
  const thirdName = document.querySelector('.third_name');
  const Name = document.getElementById('name').value;
  let low = Name.toLowerCase();

  let arrayNew = low.split(" ");
  let first = arrayNew[1];
  let second = arrayNew[0];
  let third = arrayNew[2];

  first = first[0].toUpperCase() + first.slice(1, );
  second = second[0].toUpperCase() + second.slice(1, );
  third = third[0].toUpperCase() + third.slice(1, );
  

  firstName.innerHTML = `Имя: ${first}`;
  secondName.innerHTML = `Фамилия: ${second}`;
  thirdName.innerHTML = `Отчество: ${third}`;

}