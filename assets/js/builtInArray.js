// Array

let students = ["Sarah", "Thoriq"];

console.log(students, "Before");

students.pop(); // remove the last of element

console.log(students, "After Pop");

students.push("Miftah"); // add at the last of element

console.log(students, "After Push");

students.shift(); // remove the beginning of element

console.log(students, "After Shift");

students.unshift("Auzan"); // add at the beginning of element

console.log(students, "After Unshift");

let numbers = [8, 9, 4, 2, 3, 4, 13, 10, 29];

let fruits = new Array("Apple", "Banana", "Grape"); // ["Apple", "Banana", "Grape"]

console.log(fruits);

let multiDimensionArray = [
  [1, 2, [4, 3, [23, 2], 3, 4]],
  [2, 5, 6],
  [33, 5, 3]
];

console.log(multiDimensionArray[0][2]);
console.log(multiDimensionArray[0][2][2][0]);

// Splice

let cars = ["Toyota", "Honda", "Suzuki", "Lamborghini"];

console.log(cars, "Before Splice");

let resultSplice = cars.splice(2, 2, "Mazda", "Volkwagen");

console.log(cars, "After Splice");
console.log(resultSplice, "Result Splice");

// Slice

let animals = ["Ant", "Monkey", "Bull", "Spider", "Eagle"];

console.log(animals, "Before Slice");

let resultSlice = animals.slice(2, 3); // start, end not include end element

console.log(animals, "After Slice");
console.log(resultSlice, "Result Slice");

// Concat

let newStudents = ["Jumadi", "Enggar", "Diva", "Fonny"];

console.log(students, "Before Concat");

let resultConcat = students.concat(newStudents);

console.log(resultConcat, "After Concat");

// Sorting

let secondLargestNumber = numbers.sort((a, b) => b - a); // large to small

console.log(secondLargestNumber[1]);
console.log(numbers.sort((a, b) => a - b)); // small to large

// Reverse

console.log(animals.reverse(), "Reverse Animal");

// Split

let actors = "the Rock Johnny Deep Ryan Reynolds";

console.log(actors.split(" ")); // by whhitespace

// Join

console.log(animals.join(";"));

// loop with array

for (const number of numbers) {
  console.log(number, " For - Of");
}

for (const key in numbers) {
  console.log(numbers[key], "For - In");
}

for (let index = 0; index < numbers.length; index++) {
  if (index <= 3) {
    console.log(numbers[index], "For - Loops");
  }
}

let forEach = numbers.forEach(item => {
  return item * 10;
});

let forMap = numbers.map(element => {
  return element * 10;
});

console.log(forEach, "For - Each");
console.log(forMap, "For - Map");

// Searching Element of Array

console.log(numbers.indexOf(2), "Index Of");
console.log(numbers.lastIndexOf(4), "Last Index Of");
console.log(numbers.includes(2), "Includes");

const personals = [
  { id: 1, name: "Miftah" },
  { id: 2, name: "Sarah" },
  { id: 3, name: "Auzan" },
  { id: 4, name: "Thoriq" },
  { id: 5, name: "Bagus" },
  { id: 6, name: "Thoriq" },
  { id: 7, name: "Miftah" },
  { id: 8, name: "Azil" }
];

let searchAnimal = animals.find(element => element === "Ant");
let findPersonal = personals.find(element => element.id === 5);
let findPersonalIndex = personals.findIndex(element => element.id === 5);

console.log(searchAnimal, "Search Animal");
console.log(findPersonal, "Find Personal");
console.log(findPersonalIndex, "Find Personal Index");

let filterAnimal = animals.filter(element => {
  if (element.includes("e")) {
    return element;
  }
});

let filterPersonal = personals.filter(element => {
  if (element.name.includes("a")) {
    return element;
  }
});

console.log(filterAnimal, "Filter Animal");
console.log(filterPersonal, "Filter Personal");

// reduce

let initialValues = 20;

let resultReduce = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, initialValues);

console.log(resultReduce, "Result Reduce");

let groupByName = personals.reduce((allNames, name) => {
  if (name.name in allNames) {
    allNames[name.name]++;
  } else {
    allNames[name.name] = 1;
  }

  return allNames;
}, {});

console.log(groupByName);
