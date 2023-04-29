/*
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/

const readline = require("readline-sync");

const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1 * num2;
const quotient = (num1, num2) => Math.floor(num1 / num2);
const remainder = (num1, num2) => num1 % num2;
const power = (num1, num2) => num1 ** num2;

let num1 = Number(readline.question("Enter the first number: "));
let num2 = Number(readline.question("Enter the second number: "));

let operation = [addition(num1,num2), subtraction(num1,num2), product(num1,num2), quotient(num1,num2), remainder(num1,num2), power(num1,num2)]

operation.forEach(ele => console.log(ele));