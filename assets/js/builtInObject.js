// Function in Object

const person = {
  name: "Miftah Faris",
  "day of birth": 1994,
  greeting: function() {
    console.log(`Hello ${person.name}`);
  },
  age: function(year) {
    console.log(`My Age is ${year - person["day of birth"]}`);
  }
};

let changeToJSON = JSON.stringify(person);
console.log(changeToJSON, "JSON");

let changeToObject = JSON.parse(changeToJSON);

person.greeting();
person.age(2020);

let fruit = "orange";

if (fruit === "") {
  fruit = "apple";
} else {
  fruit += "2020";
}

let fruitObject = {
  [fruit + "2021"]: 6
};

console.log(fruitObject);

function myData(name, address) {
  return {
    firstName: name,
    address
  };
}

console.log(myData("Miftah", "Jakarta"));

let grape = {
  name: "Grape",
  amount: "1kg"
};

Object.assign(fruitObject, grape); // merging

let cloneFruitObject = Object.assign({}, grape); // cloning

console.log(fruitObject, "new fruit object");
console.log(cloneFruitObject, "Clone");

console.log(Object.keys(grape), "show all key in object");

// cek properti yang sudah ada
if (grape.hasOwnProperty("type")) {
  console.log("type already defined");
} else {
  grape.type = "merah";
  console.log(grape, "add new property type");
}

console.log(Object.entries(grape), "merge on array type");
