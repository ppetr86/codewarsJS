let people = {
  "Arthur": "Dent",
  "Ford": "Prefect",
  "Trillian": "Astra",
  "Zaphod": "Beeblebrox"
};
Object.values(people).forEach((surname) => {
  console.log(surname);
});

Object.keys(people).forEach((name) => {
  console.log(name);
});

Object.entries(people).forEach(([firstName, surname]) => {
  console.log(`${firstName} ${surname}`);
});

console.log("----")
console.log(Object.values(people));
console.log(Object.keys(people));
console.log(Object.entries(people))
console.log("----")

let entries = Object.entries(people);
//console.log(Object.fromEntries(entries))

let person = {
  "name": "Arthur",
  "planet": "Earth"
};
let copy = {...person};
copy.name = "Trillian";
console.log(person.name);

let peopleArr = ["Arthur", "Trillian", "Petr"];
let copy2 = [...peopleArr];

let greetTwoPeople = (firstPerson, secondPerson) => {
  console.log(`Hello ${firstPerson} and ${secondPerson}!`);
};
greetTwoPeople(...peopleArr);
greetTwoPeople(people[0],people[1]);

let program = {
  "question": "???",
  "answer": 42
};
let secondProgram2 = {...program}; // Protože je druhý program upravován, je třeba vytvořit kopii, aby nebyl první program ovlivněn.
// Pro zkopírování klíčů a hodnot z objektu do nového objektu se může použít operátor spread.
secondProgram2.answer = 54;
console.log(program.answer);

//Protože je druhý program upravován, je třeba vytvořit kopii, aby nebyl první program ovlivněn.
// Pro zkopírování klíčů a hodnot z objektu do nového objektu se může použít operátor spread.
let secondProgram = program;
secondProgram.answer = 54;
console.log(program.answer);

let firstPerson = {
  "name": "Arthur",
  "planet": "Earth"
};
let lastPerson = {
  "name": "Trillian",
  "starship": "Heart of Gold"
};
let combinedPerson = {
  ...firstPerson,
  "name": "Zaphod",
  ...lastPerson
};
console.log(combinedPerson.name);
console.log(combinedPerson);

let earthlings = ["Arthur", "Trillian"];
let aliens = ["Ford"];
console.log([...earthlings, "Zaphod", ...aliens])

//Jak je potřeba seřadit jednotlivé části programu, aby výsledný objekt trillian obsahoval
// klíče a hodnoty "name": "Trillian", "planet": "Earth" a "spaceship": "Heart of Gold"?
//Spread operátor se používá nejen ke kopírování objektů, lze ho použít i pro skládání objektů.
// Případný duplicitní klíč bude mít takovou hodnotu, jaká byla specifikovaná jako poslední (ať už přímo, nebo rozbalením z jiného objektu pomocí spread operátoru).
let arthur = {
  "name": "Arthur",
  "planet": "Earth"
};
let trillian = {  "planet": "Magrathea",  ...arthur,  "name": "Trillian",  "spaceship": "Heart of Gold"};
