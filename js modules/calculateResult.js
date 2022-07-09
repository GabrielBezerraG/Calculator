import { operation, screen } from "../main.js";

export default function calculateResult() {
   if (operation.length != 0) {
      const result = String(eval(operation.join('')));
      const resultArray = result.split('');

      operation.splice(0, operation.length);
      
      resultArray.forEach(item=> {
         if (item == '.') {
            operation.push(item);
         } else {
            operation.push(Number(item));
         }
      })
     
      screen.value = operation.join('');
   }
}