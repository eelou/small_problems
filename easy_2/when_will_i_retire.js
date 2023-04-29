/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.
*/

const readline = require("readline-sync");

let age = Number(readline.question("What is your age? "));
let retireAge = Number(readline.question("At what age would you like to retire? "));

let currentYear = (new Date()).getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + retireAge - age}.`);
console.log(`You have only ${retireAge - age} years of work to go!`);