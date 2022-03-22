//console.log(++42);
// x && y || i-- se vaze na (x && y) || i--
// operator &&  ma vyssi prioritu nez ||

// konjunkce AND &&
//disjunkce OR ||
//negace NOT !
//exkluzivni disjunkce XOR !==

// !(!p && !q) se rovna p || q

let p = true; // false
let q = true; // false

let p1 = true; // true
let q1 = false; // true

let p2 = false; //false
let q2 = true; //true

let p3 = false; //true
let q3 = false; //false
console.log(p && q && !p || !q);
console.log(p && !q || !p && q);

let p4 = true;
let q4 = !!p4;
console.log(q4);

//konjunkce (&&) vrací hodnotu prvního operandu, pokud je „falsy“, jinak druhého operandu.
//disjunkce (||) vrací hodnotu prvního operandu, pokud je „truthy“, jinak druhého operandu.
//negace (!) vrací hodnotu false, pokud je operand „truthy“, jinak vrací hodnotu true.
//„Falsy“ hodnoty jsou 0, 0n, "", null, undefined, false a NaN.
//„Truthy“ hodnoty jsou pak všechny ostatní

let answer = 42;
console.log(!answer);
let name = "Arthur";
console.log(answer || name);
console.log(!(!answer && !name));

//+=, -=, *=, /=, %=,  &&=, **=, ||=
//=== striktni porovnani rovnosti, nerovnost !==

// operator nerovnosti a rovnosti == a !=. Pokud jsou oba operandy stejneho datoveho typu, funguje stejne jako ekvivalence.
// Pokud ruzneho typu, dochazi k prevodum na spolecny datovy typ. Doporucuje se nepouzivat tyto operatory

let str = "42";
str++;
console.log(str)

console.log(42 === "42");
console.log(42 !== "42");
console.log(NaN === NaN)
let und;
console.log(und === undefined)

let input1 = -42;
let out1 = +input1;
console.log(out1)
console.log(42)
console.log(4 + "2")
console.log("4" + 2)

