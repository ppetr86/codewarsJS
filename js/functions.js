let answer1 = () => {
  console.log(42);
};
console.log("------")


let answer2 = function () {
  console.log(42);
};
console.log("------")

function answer3() {
  console.log(42);
};

console.log("------answer4")
let answer4 = () => {
  console.log(42);
  console.log(42);
};

answer4();
answer4();
console.log("------people")

let people = [
  {name: "Arthur", planet: "Earth"},
  {name: "Ford", planet: "Betelgeuse VII"}
];

console.log(`I'm ${people[0].name} and I was born on ${people[0].planet}.`);
console.log(`I'm ${people[1].name} and I was born on ${people[1].planet}.`);

let probability = 0.042;
let sizeOfGuideInMeters = 0.042;

let probabilityInPercents = probability * 100;
let sizeOfGuideInCentimeters = sizeOfGuideInMeters * 100;

console.log("------function")
let answer = function (result = 42) {
  console.log(result);
};
answer();
console.log("------function")

let greet = function (name = "everyone", state) {
  console.log(`Hello ${name}, I'm ${state}!`);
}
greet("fine"); //Hello fine, I'm undefined!
//I při použití výchozích hodnot se hodnoty do parametrů nastavují zleva, parametry s výchozími hodnotami se
// nepřeskakují. Až když už není pro nějaký parametr k dispozici žádná hodnota, může se použít hodnota výchozí.
// V zadaném programu se tedy do parametru name přiřadí "fine" a pro parametr state už žádná vstupní hodnota
// nezbývá, bude tedy undefined.

let answer8 = function(first, ...params) {
  console.log(first);
  for (let param of params) {
    console.log(param);
  }
};
answer8(42);
answer8("Earth", "Mostly harmless.");
answer8("Arthur", "Trillian", "Ford", "Zaphod", "Marvin");

console.log("------function")
let getAnswer9 = function([, answer9]) {
  console.log(answer9);
};
getAnswer9([9, 42, 15, 28]);

console.log("------function")
let logAnswer = function() {
  console.log(42);
  return;
};
let answer10 = logAnswer();
console.log(answer10);

let getUndefined = function() {
  // 3 moznosti aby to vypsalo "undefined"
  return undefined;
  // nic nenapsat
  return;
};
console.log(getUndefined());

// Arrow function s implicitní návratovou hodnotou je zvláštní varianta arrow function, jejíž tělo se skládá pouze z
// jednoho výrazu, který je zároveň i návratovou hodnotou této funkce i bez použití klíčového slova return.
// Taková arrow function nemá tělo ohraničené složenými závorkami. Její zápis je maximálně zjednodušený,
// takže je ideální pro krátké a výstižné funkce.
//let getCubeVolume = (edge) => edge ** 3;
//let planet = {name: "Earth", star: "Sun"};
//let getPlanetName = (planet) => planet.name;
// I v této variantě je možné používat všechny varianty zápisu parametrů bez omezení, např. object destructuring
// umožňuje zapsat velmi krátké funkce, které čtou parametry nějakého objektu:
console.log("------getAnswer12")

let getAnswer12 = () => 42;
console.log(getAnswer12());
console.log("------person13")

let person13 = {name: "Arthur", alive: true};
let getName13 = ({name}) => name;
console.log(getName13(person13));

let planet14 = {name: "Earth", star: "Sun"};
let getName14 = ({name}) => name;
console.log(getName14(planet14));
//
answer = () => {
  console.log(42);
  console.log(42);
};

answer;

logAnswer = function() {
  console.log(42);
  return;
};
answer = logAnswer();
console.log(answer);
console.log("------answer15")

let answer15;
let getAnswer15 = (answer15) => {
  answer15 = 42;
};
getAnswer15("Ultimate question");
console.log(answer15);

//V těle funkce lze definovat všechny datové typy a funkce není výjimkou. Funkci lze z funkce dokonce vrátit a vytvořit si tak generátor funkcí.
let createPlanetGetter = () => {
  return (person) => person.planet;
};

let logReturnValue = (fn, param) => {
  console.log(fn(param));
};
///
//Funkce vyššího řádu (higher-order functions) jsou takové funkce, které přijímají parametry typu funkce
// a/nebo vrací hodnotu typu funkce. Je třeba si vždy dávat pozor, zda je funkce volaná (kulaté závorky ())
// nebo není (a je pouze předaná dále). V jedodušších případech, jako je tento, je možné si jednotlivé funkce
// představovat ve stavu po jejich zavolání. V našem příkladu bude v proměnné getPlanet uložena funkce (person)
// => person.planet a v těle funkce logReturnValue se bude volat console.log(getPlanet(person));.
let person = {name: "Arthur", planet: "Earth"};
let getPlanet = createPlanetGetter();
logReturnValue(getPlanet, person);

//closure
console.log("-------getAnswer16");
let getAnswer16;

if (40 + 2 === 42) {
  let answer = 42;
  getAnswer16 = () => answer;
}

console.log(getAnswer16());
console.log("-------createInfoGetter");

let createInfoGetter = (planet2) => {
  return (name) => {
    console.log(`${name} from ${planet2}`);
  };
};

let getInfo = createInfoGetter("Earth");
getInfo("Arthur");

console.log("-------createInfoGetter2");

let createInfoGetter2 = () => {
  return (name) => {
    console.log(`${name} from ${planet3}`);
  };
};

let getInfo2 = createInfoGetter2();
if (40 + 2 === 42) {
  let planet = "Earth";
  getInfo2("Arthur");
}

//
let createAnswerer = () => {
  let answer = 40;
  return () => {
    answer++;
    return answer;
  };
};

let incrementAndGetAnswer = createAnswerer();

console.log(incrementAndGetAnswer());
console.log(incrementAndGetAnswer());


