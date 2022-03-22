let person = {"name": "Arthur", "planet": "Earth"};
let person = {name: "Arthur", planet: "Earth"};
let name = person["name"];
let name2 = person[name];

console.log(name + " name2 " + name2)

let people = {
  Earth: {name: "Arthur", age: 30},
  "Betelgeuse VII": {name: "Ford", age: 42}
};
console.log(people["Earth"].name);

let fruits = new Array('Apple', 'Banana');
let numbers = [1, 42];
let names = ["Arthur", "Trillian", "Ford", "Zaphod"];
let mix = ["Arthur", 42, {dog: "woof", cat: "meow"}, null, true, ["A","B"]];
let empty = [];

let emptyMap = new Map();
let surnamesMap = new Map([["Arthur", "Dent"], ["Trillian", "Astra"]]);
console.log(surnamesMap);

let map = new Map();
console.log("-----------")
map.set("1", "str1");   // Key as classic text
map.set(1, "num1");     // Key as number
map.set(true, "bool1"); // Key as boolean value

//In the classic object would be value 1 convert to the text "1". The map stores the type so that:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"

console.log(map.size); // 3

console.log("-----------")
console.log("mapa")
let john = {name: "John", surname: "Doe"};
//For example if we want store count of visits for each user
let visitsCountMap = new Map();
//The object with name "John" will be the key
visitsCountMap.set(john, 123);
console.log("keys")
console.log(visitsCountMap.keys())
console.log("keys konec")
console.log(visitsCountMap.get(john)); // 123
console.log("-----------")

console.log("values")
let numberMap = new Map();
numberMap.set("first", 1);
numberMap.set("second",2);
numberMap.set("third", 3);
console.log(numberMap.values());
console.log("values konec")
let values = [numberMap.values()];
values.reverse();
console.log("values reverse")
console.log(values)

let emptySet = new Set();
let namesSet = new Set(["Arthur", "Trillian"]);

let set = new Set();
let john2 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
//For example if we want to know unique vists on web
set.add(john2);
set.add(pete);
set.add(mary);
set.add(john2);
set.add(mary);

//The "set" has only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John, Pete, Mary
}

let arr = ["Adam", "Bára", "Adam", "Karel", "Matěj", "Jakub", "Jakub", "JAKUB"];
let mySet = new Set(arr);
console.log(arr.length);
console.log(mySet.size);

console.log("-----------")
