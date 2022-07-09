export default function convertOperators(index) {
   return index == 0 ? "+"
   : index == 1 ? "-"
   : index == 2 ? "*"
   : index == 3 ? "/"
   : console.log("Error");
};