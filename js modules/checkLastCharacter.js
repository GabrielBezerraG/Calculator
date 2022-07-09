import { operation } from "../main.js";

export default function checkLastCharacter() {
   const lastCharacter = operation[operation.length - 1];
   if (lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/' || lastCharacter == '.') {
      operation.pop();
   };
}