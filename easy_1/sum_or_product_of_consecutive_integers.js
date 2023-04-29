/*
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
*/

let readline = require("readline-sync");

let int = readline.question("Please enter an integer greater than 0: ");
let operator = readline.question("Enter 's' to compute the sum, or 'p' to compute the product. ");

let totalSum = 0;
let totalProduct = 1;

if (operator === "s") {
  for (let i = 1; i <= int; i += 1) {
    totalSum = totalSum + i;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${totalSum}.`);
} else if (operator === "p") {
  for (let i = 1; i <= int; i += 1) {
    totalProduct = totalProduct * i;
  }
  console.log(`The product of the integers between 1 and ${int} is ${totalProduct}.`);
}