let number1 = 10;
let number2 = 20;
let number3 = "10";
let number4 = 20;
let name1 = "miftah";
let name2 = "sarah";

// Operators
// Addition
let addition = 0;

addition = number1 + number2; // addtion = 10 + 20

// shorthand

addition += 50; // addition = addition(30) + 50

console.log(addition, "addition");

// subtract

let subtract = 0;

subtract = number1 - number2;
subtract2 = number3 - 10;

subtract -= 30; // subtract = subtract(10) - 30

console.log(subtract, "subtract");
console.log(subtract2, "subtract2");

// divison

let division = 0;

division = number3 / 2;

console.log(division, "division");

// modulus

let modulus = 0;

modulus = number1 % 2;

console.log(modulus, "modulus");

// increment

let increment = 0;

increment++; // increment + 1

console.log(increment, "increment");

// Comparisons

console.log(number1 == number2, "equal to");
console.log(number1 > number2, "greater than");
console.log(number2 > number4, "greater than 20");
console.log(number2 >= number4, "greater than and equal to 20");

console.log(number1 < number2, "less than");
console.log(number2 < number4, "less than 20");
console.log(number2 < number4, "less than 20");
console.log(number2 <= number4, "less than and equal to 20");

console.log(number1 != number2, "not equal to");

console.log(number1 == number3, "equal to same 10");
console.log(number1 === number3, "equal to and equal type");
console.log(number1 !== number3, "not equal to and equal type");

console.log(name1 == number1, "name == number");

// Expression
console.log(number1 == number3 && number2 == number4, "true and true"); // true && true = true
console.log(number1 == number3 && number2 > number4, "true and false"); // true && false = false
console.log(name1 == name2 && name1 == name1, "false and true"); // false && true = false
console.log(name1 == name2 && number1 >= number4, "false and false"); // false && false = false

console.log(number1 == number3 || number2 == number4, "true or true"); // true || true = true
console.log(number1 == number3 || number2 > number4, "true or false"); // true || false = true
console.log(name1 == name2 || name1 == name1, "false or true"); // false || true = true
console.log(name1 == name2 || number1 >= number4, "false or false"); // false || false = false
