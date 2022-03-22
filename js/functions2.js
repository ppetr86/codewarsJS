let getInfo = (name) => (planet) => (answer) => `${name} from ${planet} knows the answer is ${answer}.`;
let info = getInfo("Arthur")("Earth")(42);
console.log(info);


//Funkce getAnswer v tomto příkladu pracuje pouze se svou lokální proměnnou answer definovanou jako parametr funkce,
// nikoliv s proměnnou v nadřazeném scope. Pokud je použita nějaká proměnná, JavaScript se ji snaží najít nejprve v
// aktuálním scope, pokud nenajde, zkusí nadřazený a tak dále. Pokud tedy nějaký scope obsahuje proměnnou se stejným
// názvem jako proměnná v některém nadřazeném scope, je tato nadřazená proměnná zastíněná (shadowed) a ve vnitřním
// scope se k ní nedá nijak dostat. Je proto vhodné proměnné nepojmenovávat stejně v různých scopes, a to nejen z
// důvodu možného zastínění, ale i kvůli přehlednosti kódu - i v kódu této otázky není na první pohled vidět,
// že obsahuje dvě různé proměnné.
let answer;
let getAnswer = (answer) => {
  answer = 42;
};
getAnswer("Ultimate question");
console.log(answer);

//Díky funkcím vyššího řádu a uzávěře lze vytvořit scope, který je dostupný prostřednictvím funkce a
// nijak jinak. V tomto programu je možné proměnnou answer inkrementovat (prostřednictvím vrácené funkce),
// avšak není možné ji změnit jiným způsobem, protože neexistuje jiný způsob, jak na tuto proměnnou dosáhnout,
// než skrz uzávěru. Pozor na to, že každé zavolání funkce createAnswerer vytvoří novou nezávislou uzávěru.
/*let createAnswerer = () => {
  let answer = 40;
  return () => {
    answer++;
    return answer;
  };
};

let incrementAndGetAnswer = createAnswerer();

console.log(incrementAndGetAnswer());
console.log(incrementAndGetAnswer());
console.log("----")
let answer3 = () => {
  console.log(42);
  console.log(42);
};

answer3;

let answer4;
let getAnswer4 = () => {
  answer4 = 42;
};
getAnswer4();
console.log(answer4);

console.group();
console.log("Hello again, this time inside a group!");
let friday = "FRIDAY";
console.log("Hello %s!", friday);
console.groupEnd();
console.log("and we are back.");

console.assert("");
console.assert("true");
console.time();
let number = 1;
for (let i = 0; i < 1000000; i++) {
  number += i%2===0 ? 1 : 2;
}
console.timeEnd()

console.debug()
console.info()
console.error() // vypise stack trace
console.warn() // vypis stack trace

//odlozit vykonani nejakeho kodu pomoci setTimeout()
setTimeout(() => {
  console.log("I'll be printed to console after 2 second.");
}, 2000);
console.log("I'm printed to console immediately.");

setTimeout(() => {
  console.log("I'm first. Timeout");
}, 0);
console.log("I'm second.");*/

//opakovane odlozit vykonani kodu pomoci setInterval(), opakovane volani po casovem intervalu
/*let answerNr = 0;
setInterval(() => {
  answerNr++;
  console.log(`Answer is now ${answerNr}.`);
}, 1000);*/

/*let answerNr2 = 0;
let countId = setInterval(() => {
  answerNr2++;
  console.log(`Answer is now ${answerNr2}.`);
  if (answerNr2 === 3) {
    clearInterval(countId);
  }
}, 1000);

//Hodnota bude vypsána po 100ms a po 200ms. V čase 250ms je pak opakované odložení funkce zrušeno.
let intervalId = setInterval(() => console.log("Arthur"), 100);
setTimeout(() => clearInterval(intervalId), 250);
console.log("-------")*/

//setInterval(() => console.log("Earth"), 1000, 3);

setTimeout(() => console.log("Earth"), 1000);
setTimeout(() => console.log("Earth"), 2000);
setTimeout(() => console.log("Earth"), 3000);

let counter = 0;
let postponeLogging = () => {
  setTimeout(() => {
    console.log("Earth postponeLogging");
    counter++;
    if (counter < 3) {
      postponeLogging();
    }
  }, 1000);
};
postponeLogging();

let counter2 = 0;
let intervalId = setInterval(() => {
  console.log("Earth setInterval");
  counter2++;
  if (counter2 === 3) {
    clearInterval(intervalId);
  }
}, 1000);


setInterval(() => console.log("Earthhhh"), 1000, 3);
Math.log10(42);

Math.sqrt(36)

