let name = "Arthur";
let homePlanet = undefined;
let ownedSpaceships = 0;

if (name && homePlanet) {
  console.log(42);
}

let age = 30;
let planet = name === "Ford" ? "Betelgeuse VII"
  : name === "Trillian" || name === "Arthur" ? "Earth"
    : age < 0 ? "Magrathea"
      : "Vogsphere";

console.log(planet)

//forEach
// fori/in prochazi vlastnostmi objektu
// for/of prochazi hodnotami iterovatelnych objektu. Umoznuje smycku pres datove struktury jako pole, string, mapa...

const cars = ["BMW", "Volvo", "Mini"];
let x;

for (x of cars) {
  console.log(x);
}

//Za klíčovým slovem break (a také continue) lze také zapsat pojmenování cyklu, který se má ukončit. To je vhodné v případě, že jsou cykly vnořené - bez použití pojmenování
let counter = 0;
cyklus: while(counter < 3) {
  let nextCounter = 0;
  while(nextCounter < 3) {
    if (nextCounter === 2) {
      break cyklus;
    }
    console.log("hello");
    nextCounter++;
  }
  counter++;
}
