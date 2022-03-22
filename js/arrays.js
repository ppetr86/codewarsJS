let array = [3, 0, 15, -7, 8];
console.log(array[0]); //Will print the first value: 3
console.log(array[1]); //Will print the second value: 0
console.log(array[array.length-1]); //Will print the last value: 8
for(let i = 0; i < array.length; i++) {
  console.log(array[i]); //Will print each value one by one
}

let array3 = []; //Create empty array
let array2 = new Array(); //Also create empty array - it is not common to use but we can met with this type of entry
array3.push(15); // [15]
array3.push(-6); // [15, -6]
array3.unshift(1); // [1, 15, -6]
let x = array3.pop(); // [1, 15]
let y = array3.shift(); // [15]
array3[0] = x; // [-6]
array3[1] = y; // [-6, 1]

/*let numbers = [];
let cycles = window.prompt('Kolik cisel zadate?');
for(let i = 0; i < cycles; i++){
  numbers.unshift(window.prompt('Zadejte cislo'));
}
console.log(numbers);*/

let items = [3, 0, 15, -7, 8];
//with use "for" loop
for(let i = 0; i < items.length; i++){
  console.log(items[i]);
}
//with use "foreach" loop
items.forEach(item => {
  console.log(item);
});

const circles = ["Limbo", "Lust", "Gluttony", "Greed", "Anger", "Heresy", "Violence", "Fraud", "Treachery"];
for(let i = 0; i < circles.length; i++){
  console.log('Circle ' + (i+1) + ' ' + circles[i]);
}
console.log(); // new line

let i = 0;
circles.forEach(circle => {
  i += 1;
  console.log('Circle ' + i + ' ' + circle);
});
console.log(); // new line

circles.forEach((circle, index) => {
  console.log('Circle ' + (index + 1) + ' ' + circle);
});

//The definition of the function which be performed for each item
function showInfo(circle, index) {
  console.log('Circle ' + (index + 1) + ' ' + circle);
}

//Call definition with reference to the previously defined function
circles.forEach(showInfo);




//[].map() [].filter() [].find() [].sort()

let defaultArray = [1, 2, 4, 8, -1, -2, -4, -8];

let doubleValues = defaultArray.map(item => item * 2);
console.log(doubleValues); //[2, 4, 8, 16, -2, -4, -8, -16]

let positiveNumbers = defaultArray.filter(item => item >= 0)
console.log(positiveNumbers); //[1, 2, 4, 8]

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
defaultArray.sort(compareNumeric);
console.log(defaultArray); //[-8, -4, -2, -1, 1, 2, 4, 8]

defaultArray2 = [1, 2, 4, 8, -1, -2, -4];
console.log(defaultArray2);

defaultArray2.sort((a, b) => a - b);
console.log(defaultArray2); //[-4, -2, -1, 1, 2, 4, 8]

//Napište algoritmus, který z pole vybere pouze číselné hodnoty. Každou číselnou hodnotu vynásobí 5. Vrátí nové pole s výsledky. Vstup bude následující pole:
array = [0, "ahoj", 5, 20, null, true, "svět", 185, -15];


console.log("pop/shift")
console.log(["Arthur", "Ford", "Trillian"].pop()); // vrati posledni element
console.log(["Arthur", "Ford", "Trillian"].unshift("BANG")); //prida element na posledni misto
console.log(["Arthur", "Ford", "Trillian"].shift()); // vrati prvni element

console.log("---numbers00")
let numbers00 = [];
for (let i = 5; i <= 9; i++) {
  numbers00.unshift(i);
}
console.log(numbers00)
console.log("---")


let pushed = [];
let ordered = [];
for (let i = 5; i <= 9; i++) {
  pushed.unshift(i); //prida na posledni misto
  ordered.push(i)
}

console.log(pushed);
console.log(ordered);
console.log(pushed.reverse())

console.log(["Arthur", "Trillian"].join("+"))
let combined = ["Arthur", "Trillian"].concat(["Ford", "Zaphod"]); // to join two arrays - concat
console.log(combined);

console.log(["Ford", "Trillian", "Arthur", "Zaphod"].slice(2,-1));

[1, 2, 3].forEach((nr, index) => {
  console.log(nr);
  console.log(index);
});

console.log([1, 2, 3].map((nr, index) => nr * index));

let names = ["Arthur", "Ford", "Trillian"];
let shortNames = names.filter(name => name.length < 7);
console.log(shortNames.length);

let hasShortNames = names.filter(name => name.length > 9).length === 0;
let hasShortNamesAgain = names.every(name => name.length <= 9);
let hasShortNamesAgain2 = names.every(name => name.length <= 9);
console.log(hasShortNames === hasShortNamesAgain);
console.log(hasShortNames === hasShortNamesAgain2);

console.log([1, 2, 3, 11, 12, "2A"].sort());

console.log([1, 3, 11, 42, 12, 2].sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}));

console.log([1, 3, 11, 42, 12, 2].sort((a, b) => a - b));

let people = [
  {name: "Arthur", age: 30},
  {name: "Ford", age: 42},
  {name: "Trillian", age: 27},
  {name: "Zaphod", age: -59}
];
people.sort((a, b) => a.age - b.age);
console.log(people.map(person => person.age));

let earthlings = ["Arthur", "Trillian"];
let aliens = ["Ford", "Zaphod"];
console.log(earthlings.concat(aliens))
