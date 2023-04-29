/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet
*/

let readline = require("readline-sync");

let length = Number(readline.question("Please enter the length of the room in meters: "));
let width = Number(readline.question("Please enter the width of the room in meters: "));

let areaInMeter = length * width;
let areaInFeet = areaInMeter * 10.7639;

console.log(`Your room area is: ${areaInMeter.toFixed(2)} square meters and ${areaInFeet.toFixed(2)} square feet.`);