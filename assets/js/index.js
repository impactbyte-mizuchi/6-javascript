// global scope

console.log("External Javascript");

let name = "Miftah Faris";

console.log("Hello nama saya " + name);

let age = 17;
const salary = 10000;

console.log(salary);

let numberGlobal = 19;

// local scope
{
  var angka = 20;
  let numberLocal = 10;

  console.log(numberLocal, "numberLocal");
  console.log(angka, "angka");
}

// conditional scope

if (angka > 10) {
  numberGlobal = numberGlobal + 100;
  //   number = angka + 20; // 20 + 20

  console.log(numberGlobal);
}

numberGlobal = numberGlobal + 1000;
console.log(numberGlobal);

let NAME =
  "miftah miftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftahmiftah";
let firstName = "Miftah";
let numberExample = 3;
let booleanData = false;

let nullData = null;

console.log(nullData);

let dataArray = [10, "Miftah Faris", "Jakarta", { hobby: "Gaming" }]; // array
let dataObject = {
  age: 10,
  name: "Miftah Faris",
  address: ["Jakarta", "Bandung"]
}; // object

// access an array
console.log(dataArray[0], "dataArray ke-0");
console.log(dataArray[1], "dataArray ke-1");
console.log(dataArray[2], "dataArray ke-2");
console.log(dataArray[3], "dataArray ke-3");

// manipulate data in array
console.log(dataArray[0] + 525, "manipulate dataArray ke-0");
console.log(dataArray[3].hobby + " dan Traveling"); // Gaming dan Traveling

// access an object
console.log(dataObject["age"], "dataObject key:age"); // dataObject.age atau dataObject["age"]
console.log(dataObject.name, "dataObject key:name");
console.log(dataObject.address[0], "dataObject key:address"); // Jakarta
