import {operation, addDecimalPoint} from '../main.js';

// This function doesn't allow more than one decimal point to be added to a number
export default function searchDecimalPoint() {
   let result = addDecimalPoint;
   for (let i = operation.length; i>=0; i--) {
      if (operation[i] == '.') {
         result = false;
         break;
      } else if (operation[i] == '+' || operation[i] == '-' || operation[i] == '*' || operation[i] == '/') {
         result = true;
         break;
      }
   }
   return result;
}