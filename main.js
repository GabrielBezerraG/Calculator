import calculateResult from "./js modules/calculateResult.js";
import searchDecimalPoint from "./js modules/searchDecimalPoint.js";
import checkLastCharacter from "./js modules/checkLastCharacter.js";
import convertOperators from "./js modules/convertOperators.js";

// Exports
export {operation, addDecimalPoint, screen};

// Inputs
const screen = document.querySelector('[data-screen]');
const equal = document.querySelector('[data-equal]');
const dot = document.querySelector('[data-dot]');
const clear = document.querySelector('[data-clear]');
const operators = document.querySelectorAll('[data-operator]');
const buttons = document.querySelectorAll('[data-button]');

// Operation Variables
let operation = [];
let addDecimalPoint = true;

// Event Listeners
buttons.forEach(button => {
   button.addEventListener('click', ()=> {

      const number = Number(button.value);
            
      operation.push(number);
      screen.value = operation.join('');
   })
});

operators.forEach((operator, index)=> {
   operator.addEventListener('click', ()=> {
      let convertedOperator = convertOperators(index);
      checkLastCharacter();

      if(typeof operation[0] == "number") {
         operation.push(convertedOperator);
         addDecimalPoint = true;
      }
      screen.value = operation.join('');
   })
})

dot.addEventListener('click', ()=> {
   checkLastCharacter();

   addDecimalPoint = searchDecimalPoint();

   if(typeof operation[0] == "number" && addDecimalPoint == true) {
      operation.push(dot.value);
   }
   screen.value = operation.join('');
})

clear.addEventListener('click', ()=> {
   operation = [];
   screen.value = operation;
   addDecimalPoint = true;
});

equal.addEventListener('click', ()=> {
   checkLastCharacter();
   calculateResult();
});