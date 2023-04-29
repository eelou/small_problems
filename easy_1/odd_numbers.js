/*
Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

Repeat this exercise with a technique different from the one that you used, and different from the one provided. Also consider adding a way for the user to specify the limits of the odd numbers logged to the console.
*/
const readline = require("readline-sync");

let lowerNumber = Number(readline.question("Enter the lower bound number (inclusive): "));
let upperNumber = Number(readline.question("Enter the upper bound number (inclusive): "));

if (lowerNumber % 2 === 1) {
  lowerNumber = lowerNumber;
} else {
  lowerNumber = lowerNumber + 1;
}

for (let i = lowerNumber; i < upperNumber + 1; i += 2) {
  console.log(i);
}