const numberOne = document.querySelector('#number1');
const numberTwo = document.querySelector('#number2');
const formula = document.querySelector('#formula');
const mathButton = document.querySelector('#math-button');
const product = document.querySelector('#product')

mathButton.addEventListener('click', function (event) {
  event.preventDefault();

  const firstNumber = Number(numberOne.value);
  const secondNumber = Number(numberTwo.value);

  if (formula.value === 'add') {
     product.textContent = 'Product: ' + (firstNumber + secondNumber);
  } else if (formula.value === 'subtract') {
     product.textContent = 'Product: ' + (firstNumber - secondNumber);
  } else if (formula.value === 'multiply') {
     product.textContent = 'Product: ' + (firstNumber * secondNumber);
  } else if (formula.value === 'divide') {
     product.textContent = 'Product: ' + (firstNumber / secondNumber);
  }
  //  else {
  //    product.textContent = 'No formula selected';
  // } -------- Tok ut dette siden det ikkje blir relevant når det er umulig å ikkje ha formula selected --------

});



