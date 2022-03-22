console.log("text"[2]);
console.log("text".length);

if ("Arthur asked for a tea.".includes("Arthur")) {
  console.log(42);
}

if ("Arthur asked for a tea.".startsWith("Arthur")) {
  console.log(42);
}

//Metoda slice slouží k získání části řetězce či jinými slovy k odříznutí části řetězce.
// Přijímá dva parametry a chová se různě podle toho, zda jsou parametry kladné nebo záporné.
// První parametr je začátek ořezu, druhý parametr je konec ořezu, v nezáporné podobě je to počet znaků zleva,
// v záporné podobě se počítají znaky k ořezu zprava. Druhý parametr je nepovinný, pokud není specifikován,
// ořízne se pole pouze zleva.
console.log("Was Ford in space?".slice(4,8));
console.log("Was Ford in space?".slice(-14,-10));
console.log("Was Ford in space?".slice(4,-10));

console.log("Arthur, Ford, Trillian".split(", ").length);

console.log("lowercase".toLocaleUpperCase())
console.log("lowercase".toUpperCase())

console.log("stringify")
//JSON.stringify();
//JSON.parse();

console.log(JSON.stringify({
  question: undefined,
  answer: 42,
  planet: "Magrathea"
}))

console.log(JSON.parse(`{
  "question": null,
  "answer": 42,
  "planet": "Magrathea"
}`));

//REGEX
//[abc] Určitý znak, v tomto případě a, b nebo c.
// [^abc] Jakýkoliv znak kromě a, b nebo c.
// [a-z] Jakýkoliv znak od a do z. Pouze malá písmena.
// [^a-z] Jakýkoliv znak kromě malých písmen a až z.
// [a-zA-Z] Jakýkoliv malý i velký znak od a, resp. A do z, resp. Z.
// . Jakýkoliv znak.
// \s Jakýkoliv bílý znak.
// \S Jakýkoliv nebílý znak.
// \d Jakékoliv číslo.
// \D Jakýkoliv znak kromě čísla.
// \w Jakékoliv písmeno.
// \W Jakýkoliv znak kromě písmena.
// (...) Závorky obalují určitou množinu.
// (a|b) Znak a nebo znak b.
// a? Maximálně jeden znak a (jeden nebo žádný).
// a* Libovolný počet znaků a (takže také ani jeden).
// a+ Alespoň jeden znak a (takže jeden nebo více).
// a{3} 3 znaky a.
// a{3,} 3 nebo více znaků a.
// a{3,6} 3 až 6 znaků a.
// ^ Začátek textu.
// $ Konec textu.

console.log("REGEX MATCHING")
let myRegex = new RegExp("[a-z]+");
console.log("123".match(myRegex));
console.log("a".match(myRegex));
console.log("ab".match(myRegex));

//2019-12-04T07:07:35+01:00
let isoDate = "2019-12-04T07:07:35+01:00";
let isoDateMatcher = new RegExp("(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2})+(\\d{2}):(\\d{2})")
console.log(isoDate.match(isoDateMatcher))

//Napište regulární výraz na validaci generického id, které může obsahovat
// pouze čísla
// a písmena a-f,
// má maximálně 8 znaků a
// navíc na začátku může obsahovat otazník
// (např. ?a582fd10 nebo 0ba99cc1)

let idmatcher = new RegExp("[(^?){1}(a-f0-9){7}]");

// PSC matcher 15500
let pscMatcher = new RegExp("[\d{3}( {0,1})?\\d{2}]")
console.log("15500".match(pscMatcher));
console.log("155 00".match(pscMatcher));

console.log("Arthur came, Arthur left.".replace("Arthur", "Ford"));
console.log("Arthur came, Arthur left.".replace(/Arthur/, "Ford"));

//ford came ford left
console.log("Arthur came, Arthur left.".replace(/Arthur/g, "Ford"));
console.log("Arthur came, Arthur left.".replace(/[A-Z]{6}/gi, "Ford"));

if (/Arthur/.test("Arthur asked for a tea.")) {
  console.log(42);
}
if (/ARTHUR/i.test("Arthur asked for a tea.")) {
  console.log(42);
}

/*if ("Arthur asked for a tea.".test(/Arthur/)) {
  console.log(42);
}*/

//Metoda match slouží k vyhledávání v řetězci podle regulárního výrazu.
// Návratovou hodnotou je pole, které obsahuje všechny podřetězce, které splňují zadaný regulární výraz.
// Pokud není žádná shoda nalezena, je návratovou hodnotou null. Pokud regulární výraz nemá příznak g,
// pak je hledán pouze první výskyt a návratovou hodnotou je tak jednoprvkové pole. Kód v zadání má
// návratovou hodnotu ["Fo", "rd"] - jednotlivé podřetězce se nepřekrývají.
console.log("Ford".match(/\w\w/g));

console.log("hello"[0]);
