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
