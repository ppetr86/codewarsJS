/*
let counter = 0;
let intervalId = setInterval(() => {
  console.log("Earth");
  counter++;
  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 1000);
*/

/*let counter2 = 0;
let postponeLogging = () => {
  setTimeout(() => {
    console.log("Earth");
    counter2++;
    if (counter2 < 3) {
      postponeLogging();
    }
  }, 1000);
};
postponeLogging();

console.log(57-15)

let answer = function(result = 42) {
  console.log(result);
};
answer();*/

/*let getPlanet = function(person) {
  if (person.planet === "Earth") {
    return undefined;
  }else {
    return person.planet;
  }
};
let arthur = {name: "Arthur", planet: "Earth"};
let planet = getPlanet(arthur);
console.log(planet);*/

let person1 = {"name": "Arthur", "planet": "Earth"};
let person2 = {name: "Arthur", planet: "Earth"};
console.log(person1)
console.log(person2)
