let answers = [42];
console.log(answers === [42]);

console.log(42 === "42");

let obj = {name: "Arthur"};
let otherObj = obj;
console.log(obj === otherObj);

let otherObj2 = {name: "Arthur"};
console.log(obj === otherObj2);

console.log(42 == "42");
console.log(42 != "42");
console.log(41 != "42");

console.log("true == [1]: " + (true == [1]));
console.log("[4, 2] == \"4,2\": " + ([4, 2] == "4,2"));
console.log("[42] == 42: " + ([42] == 42));
console.log("false == [[[]]]:" + (false == [[[]]]));

console.log("abc" > "abc")

console.log('firstName' < 'lastname'); // true
console.log('firstName' < 'Firstname'); // false
console.log('!firstName' < 'lastname'); // true
console.log('!firstName' < 'Firstname'); // true
console.log('!firstName' < '!Firstname'); // false
console.log('!firstName' < '_!Firstname'); // true
console.log('@!firstName' < '_!Firstname'); // true
console.log('@!firstName' < '2_!Firstname'); // fals

let input = -42;
let output = +input;
console.log(output);
console.log(42);
console.log(4 + -2);

console.log("4" + 2);
console.log(4 + "2");

let nr1 = 30;
let nr2 = 12;
console.log("Answer is " + nr1 + nr2 + ".");

let nr3 = 30;
let nr4 = 12;
console.log(`Answer is ${nr3 + nr4}.`);

