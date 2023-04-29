/*
This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.
*/

function isLeapYear (year) {
  if (year >= 1752){
    if (year % 4 === 0) {
      if (year % 400 === 0) {
        return console.log(true);
      } else if (year % 100 === 0) {
        return console.log(false);
      }
      return console.log(true);
    }
    return console.log(false);
  } else {
    if (year % 4 === 0) {
      return console.log(true);
    }
    return console.log(false);
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true