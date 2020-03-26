// without parameter
function greeting() {
  console.log("Hello");
}

greeting();

// with parameter

function greetingName(name) {
  console.log(`Hello ${name}`);
}

greetingName("Sarah");

// without return

function addition(number1, number2) {
  let result = number1 + number2;

  console.log(result);
}

// with return

function additionReturn(number1, number2) {
  return number1 + number2;
}

console.log(addition(5, 2), "without return");

let result = addition(7, 6) + 10; // NaN (Not a Number)
let hasil = additionReturn(10, 9) + 2;

console.log(result, "result");
console.log(hasil, "hasil");

// example 1

function clothTypes(baju, warna) {
  if (baju == "GAUN" && warna == "MERAH") {
    return `Saya Suka Pakai ${baju} berwarna ${warna}`;
  } else if (baju == "KEMEJA" && warna == "KUNING") {
    return `Saya suka pakai ${baju} berwarna ${warna}`;
  } else {
    return `Saya suka memakai Kebaya`;
  }
}

console.log(clothTypes("MERAH", "GAUN"));
console.log(clothTypes("KEMEJA", "KUNING"));
console.log(clothTypes("KEMEJA", "BIRU"));

// example 2

function countArrayLength(array) {
  return array.length;
}

console.log(countArrayLength([10, 3, 58, 2, 4, 5]));

// example 3

function showArrayList(array) {
  for (let index = 0; index < array.length; index++) {
    console.log(`indeks ke-${index} nilainya ${array[index]}`);
  }
}

console.log(showArrayList([6, 2, 4, 25, 7]));

// example 4

function oddAndEven(array) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
      console.log(`index ke-${index} adalah genap`);
    } else {
      console.log(`index ke-${index} adalah ganjil`);
    }
  }
}

console.log(oddAndEven([4, 1, 4, 2, 3, 5, 7]));

// with variable

let subtract = function(blabla, balala) {
  return blabla - balala;
};

console.log(subtract(10, 7));

// use arrow function

let division = (number1, number2) => {
  return number1 / number2;
};

console.log(division(100, 10));

// callback function

function question(answer, callback) {
  let myAnswer = "Saya suka bermain " + answer;
  console.log(callback);

  callback(myAnswer);
}

function answer(myAnswer) {
  console.log(myAnswer);
}

question("Mobile Legend", answer);
