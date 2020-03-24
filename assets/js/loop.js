// while

let i = 1;
let result = "";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myName = "miftah";

console.log(myName.length, "My Name");
console.log(numbers.length, "length of number array");

if (i > 0) {
  while (i < numbers.length) { // 1 < 9, 2 < 9, 3 < 9 ... 9 < 9
    result += "@";

    console.log(result, "while");

    i++;
  }
}

// do-while

let j = 0;

do {
  j++;
  console.log(j, "do-while"); // 1, 2, 3, 4, 5, 6, 7 ... 10, 11
} while (j <= numbers.length);

// for-loop

let loopNumber = 10;

for (let m = 1; m <= numbers.length; m++) {
  //   console.log(m, "   index");
  let loop = "";
  for (let n = 0; n < 10; n++) {
    // console.log(n, "       nested-index");
    loop += "@";
  }
  console.log(loop, "loop");
}
