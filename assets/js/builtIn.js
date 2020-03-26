// String

let name = "Mif5t5ahz";

console.log(name.length); // length

// Access a char
console.log(name[10], "index"); // using index
console.log(name.charAt(10), "charAt"); // using charAt

if (name.charAt(7) == "") {
  console.log("Nama Anda kurang dari 8 karakter");
} else {
  console.log("Silahkan daftar");
}

// String Immutable cannot change to other value
name[0] = "N";
let newName = "N" + name.slice(1);

console.log(newName);

// Changing Character Case

console.log(name.toUpperCase()); // Char to Uppercase
console.log(name.toLowerCase()); // Char to Lowercase

// Searching char/text

console.log(name.indexOf("5")); // indexOf
console.log(name.lastIndexOf("5")); // lastIndexOf

let text =
  "Hello world ello, saya adalah seorang tech mentor, saya suka bermain game";

console.log(text.indexOf("ssss")); // indexOf
console.log(text.lastIndexOf("ello")); // lastIndexOf

if (name.toLowerCase().includes("m")) {
  console.log("Silahkan ke step berikutnya");
} else {
  console.log("Nama anda harus memiliki huruf m");
}

console.log(name.includes("5", 6)); // includes
console.log(name.startsWith("l")); // starts with
console.log(name.endsWith("z")); // ends with

// split

let splitName = name.split("5");
let splitText = text.split(" ");

console.log(splitName);
console.log(splitText);

// Math

// Round
let mathRound = function(number) {
  console.log(Math.floor(number).toFixed(2), "Floor");
  console.log(Math.ceil(number).toFixed(2), "Ceil");
  console.log(Math.round(number).toFixed(2), "Round");
  console.log(Math.trunc(number).toFixed(2), "Trunc");
};

console.log(mathRound(4.2));
console.log(mathRound(7.5));
console.log(mathRound(3.5634));

// parse

let mathParse = function(number) {
  console.log(parseInt(number), "parseInt");
  console.log(parseFloat(number), "parseFloat");
};

console.log(mathParse("100.389"));
console.log(mathParse(78.32229));
console.log(mathParse("17.5em"));

// Random Number

let mathRandom = function() {
  return Math.floor(Math.random() * 100);
};

console.log(mathRandom());

// Power/Pangkat

let mathPower = function(number, power) {
  return Math.pow(number, power);
};

console.log(mathPower(2, 10));
console.log(mathPower(3, 2));

// Maximum Number

let minMaxNumber = function(array) {
  console.log(Math.max(...array), "largest number");
  console.log(Math.min(...array), "smallest number");
};

console.log(minMaxNumber([8, 3, 12, 4, 6, 2, 1]));
console.log(minMaxNumber([100, 23, 523, 2388, 423]));

let luasLingkaran = function(number) {
  let p = Math.PI;
  let r = number;

  return p * Math.pow(r, 2);
};

console.log(Math.PI, "PI sebuah lingkaran");
console.log(luasLingkaran(10));
