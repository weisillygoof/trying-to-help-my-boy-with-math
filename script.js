const numberOne = document.querySelector('#number1');
const numberTwo = document.querySelector('#number2');
const formula = document.querySelector('#formula');
const mathButton = document.querySelector('#math-button');

mathButton.addEventListener('click', function (event) {
  event.preventDefault();

  const firstNumber = Number(numberOne.value);
  const secondNumber = Number(numberTwo.value);

  if (formula.value === 'add') {
    console.log(firstNumber + secondNumber);
  } else if (formula.value === 'subtract') {
    console.log(firstNumber - secondNumber);
  } else if (formula.value === 'multiply') {
    console.log(firstNumber * secondNumber);
  } else if (formula.value === 'divide') {
    console.log(firstNumber / secondNumber);
  } else {
    console.log('No formula selected');
  }
});
