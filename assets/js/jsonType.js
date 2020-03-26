const json = {
  name: "Miftah",
  age: 20,
  hobbies: ["Traveling", "Gaming"]
};

const typeJson = JSON.stringify(json);
const parseJson = JSON.parse(typeJson);

console.log(json, "Before Stringify");
console.log(typeJson, "After Stringify");
console.log(parseJson, "After Parse");
